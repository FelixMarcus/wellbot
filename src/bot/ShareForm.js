const shareForm = (tribe, squad, form) => {
  var publishedUrl = form.getPublishedUrl();
  var subject = newFormEmailSubject(tribe.name, squad.name, new Date().toLocaleDateString());

  sendEmailsToTribe(squad.members, subject, createEmailMessage(publishedUrl))

  sendGChatMessage(squad.channel, chatMessage(publishedUrl));
}
