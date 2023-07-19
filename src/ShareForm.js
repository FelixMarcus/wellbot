const shareForm = (account, team, form) => {
  var publishedUrl = form.getPublishedUrl();
  var subject = newFormEmailSubject(account.name, team.name, new Date().toLocaleDateString());

  sendEmailsToGroup(team.members, subject, createEmailMessage(publishedUrl))

  sendGChatMessage(team.channel, chatMessage(publishedUrl));
}
