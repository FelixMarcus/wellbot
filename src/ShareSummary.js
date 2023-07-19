const shareSquadSummary = (tribe, insights) => {
  insights.form.setPublishingSummary(true);

  var messageToSend = insights.hasResponses() ? 
    squadSummaryReadyMessage(tribe.name, insights.squad.name, insights.form.getSummaryUrl(), insights) : 
    noResponsesMessage(tribe.name, insights.squad.name);
  
  var subject = squadSummaryEmailSubject(tribe.name, insights.squad.name, new Date().toLocaleDateString());
  
  sendEmailsToGroup(
    insights.squad.leads, 
    subject, 
    messageToSend
  );
}

const shareTribeSummary = (tribe, tribeInsights) => {
  const subject = tribeSummaryEmailSubject(tribe.name, new Date().toLocaleDateString());
  const message = tribeSummaryReadyMessage(tribe.name, tribeInsights);
  sendEmailsToGroup(tribe.trio, subject, message)
}
