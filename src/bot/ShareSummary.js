const shareSquadSummary = (tribe, insights) => {
  insights.form.setPublishingSummary(true);

  var messageToSend = insights.hasResponses() ? 
    squadSummaryReadyMessage(tribe.name, insights.squad.name, insights.form.getSummaryUrl(), insights) : 
    noResponsesMessage(tribe.name, insights.squad.name);
  
  var subject = squadSummaryEmailSubject(tribe.name, insights.squad.name, new Date().toLocaleDateString());
  
  sendEmailsToTribe(
    insights.squad.leads, 
    subject, 
    messageToSend
  );
}

const shareTribeSummary = (tribe, tribeInsights) => {
  const subject = tribeSummaryEmailSubject(tribe.name, new Date().toLocaleDateString());
  const message = tribeSummaryReadyMessage(tribe.name, tribeInsights);
  sendEmailsToTribe(tribe.trio, subject, message)
}
