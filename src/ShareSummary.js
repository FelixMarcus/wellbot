const shareTeamSummary = (account, insights) => {
  insights.form.setPublishingSummary(true);

  var messageToSend = insights.hasResponses() ? 
    teamSummaryReadyMessage(account.name, insights.team.name, insights.form.getSummaryUrl(), insights) : 
    noResponsesMessage(account.name, insights.team.name);
  
  var subject = teamSummaryEmailSubject(account.name, insights.team.name, new Date().toLocaleDateString());
  
  sendEmailsToGroup(
    insights.team.eclt, 
    subject, 
    messageToSend
  );
}

const shareAccountSummary = (account, accountInsights) => {
  const subject = accountSummaryEmailSubject(account.name, new Date().toLocaleDateString());
  const message = accountSummaryReadyMessage(account.name, accountInsights);
  sendEmailsToGroup(account.clt, subject, message)
}
