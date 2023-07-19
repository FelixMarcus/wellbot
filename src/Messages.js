//////////////////////////////////////////////////
//Feedback
//////////////////////////////////////////////////

FEEDBACK_REQUEST = `WellbeingBot is still a prototype under active development! If you have any feedback, comments or suggestions for improvements of the notifications or the morale survery form itself, please get in touch with Felix Millne <fmillne@thoughtworks.com>`

//////////////////////////////////////////////////
//New Form
//////////////////////////////////////////////////

const DESCRIPTION = `This is a weekly form sent out to check in with the team and see what's on our minds

Thank you for taking the time to fill in the form this week - it's an important part of us ensuring we're doing everything we can to support everyone in the team!

Your answers are anonymous and we do not collect your identity - the eCLT will review all answers in aggregate once the form closes each week

If you feel like you need indvidual support, then please do not be afraid to reach out to anyone on the eCLT, any Team Leads on the account, to the TW People team, or to anyone that you trust to help you`

const SUBMISSION_CONFIRMATION = `Thanks for sharing how you're doing! The results will be reviewed once the form closes on Thursday ${dateString(3)}.

For now, you're all done! Take a deep breath, relax, and enjoy this picture of a kitten:

https://placekitten.com/800/1200

Go on, you've earned it






[${FEEDBACK_REQUEST}]`

//////////////////////////////////////////////////
//Initial Sharing
//////////////////////////////////////////////////

const newFormEmailSubject = (accountName, teamName, dateString) => `This Week's Team Morale Survey for ${accountName} ${teamName} - ${dateString}`

const createEmailMessage = (publishedUrl) => (name) => 
`Hey there ${name}! It's time for the weekly team morale health check - please let us know how you're doing by taking just a few minutes to fill in the (anonymous) form here:

${publishedUrl}

Thanks in advance, and let your CLT know if you have any issues.

Have a great day!


Your Friendly Thoughtworks WellbeingBot 

(Brought to you by The Thoughtworks UK Wellbeing & Inclusion Champions)

[${FEEDBACK_REQUEST}]`

const chatMessage = (publishedUrl) => 
`Hi Team! It's time for your weekly team morale health check - please let us know how you're doing by taking just a few minutes to fill in the (anonymous) form here:

${publishedUrl}`


//////////////////////////////////////////////////
// Reminder
//////////////////////////////////////////////////

const chatReminderMessage = (publishedUrl) => 
`Hi Team! Don't forget to fill in the weekly team morale check before it closes tomorrow - please let us know how you're doing by taking just a few minutes to fill in the (anonymous) form here:

${publishedUrl}`


//////////////////////////////////////////////////
// Summary
//////////////////////////////////////////////////

const teamSummaryEmailSubject = (accountName, teamName, dateString) => `This Week's Team Morale Summary for ${accountName} ${teamName} - ${dateString}`
const accountSummaryEmailSubject = (accountName, dateString) => `This Week's Account Morale Summary for ${accountName} - ${dateString}`

const teamSummaryReadyMessage = (accountName, teamName, summaryUrl, teamInsights) => (name) => 
`Hey there, ${name}! The weekly morale survey for the ${accountName} ${teamName} team is now closed and the results are ready for the eCLT to review

${"General Happiness".padEnd(35, ' ')}${teamInsights.averageGeneralScore().toFixed(2)}/5
${"Confidence In Direction".padEnd(34, ' ')}${teamInsights.averageWorkScore().toFixed(2)}/5

Positives:  ${teamInsights.goodImpacts().join(", ")}
Negatives: ${teamInsights.badImpacts().join(", ")}

${summaryUrl}


Your Friendly Thoughtworks WellbeingBot 

(Brought to you by The Thoughtworks UK Wellbeing & Inclusion Champions)

[${FEEDBACK_REQUEST}]`

const accountSummaryTeamTableTemplate = insights => 
`Team: ${insights.team.name}

${"General Happiness".padEnd(35, ' ')}${insights.averageGeneralScore().toFixed(2)}/5
${"Confidence In Direction".padEnd(34, ' ')}${insights.averageWorkScore().toFixed(2)}/5

Positives:  ${insights.goodImpacts().join(", ")}
Negatives: ${insights.badImpacts().join(", ")}

${insights.form.getSummaryUrl()}

---------------------------------------------------------------------------------`

const accountSummaryTeamTable = insights => insights.teams
  .filter(insight => insight.hasResponses())
  .map(accountSummaryTeamTableTemplate);

const noResponsesTemplate = noResponseRows => 
`The following teams did not get any responses to the survey:
${noResponseRows.join('/n')}

Please check in on the team, and then please double check WellbeingBot's configuration...
`

const accountSummaryTeamsWithNoResponses = teamInsights => {
  const noResponseRows = teamInsights
    .filter(insights => !insights.hasResponses())
    .map(insights => `- ${insights.team.name}`)
  return noResponsesTemplate(noResponseRows); 
}

const accountSummaryTeamInsights = insights =>
`---------------------------------------------------------------------------------
Account Summary

${"General Happiness".padEnd(35, ' ')}${insights.account.averageGeneralScore().toFixed(2)}/5
${"Confidence In Direction".padEnd(34, ' ')}${insights.account.averageWorkScore().toFixed(2)}/5

Positives:  ${insights.account.goodImpacts().join(", ")}
Negatives: ${insights.account.badImpacts().join(", ")}

---------------------------------------------------------------------------------
${accountSummaryTeamTable(insights)}

${!insights.account.allTeamsHaveResponses() ? accountSummaryTeamsWithNoResponses(insights.teams) : ""}`

const accountSummaryNoTeamResponses = () => `No responses have been recorded for any teams! 

Please check in and see if everyone is okay, and then please double check WellbeingBot's configuration...
`

const accountSummaryReadyMessage = (accountName, insights) => name => 
`Hey there, ${name}! The weekly morale surveys for the ${accountName} account are now closed and the results are ready for the CLT to review:

${insights.account.anyTeamHasResponses() ? accountSummaryTeamInsights(insights) : accountSummaryNoTeamResponses()}

Your Friendly Thoughtworks WellbeingBot 

(Brought to you by The Thoughtworks UK Wellbeing & Inclusion Champions)

[${FEEDBACK_REQUEST}]`

const noResponsesMessage = (accountName, teamName) => name => 
`Hey there ${name}! The weekly morale survey for the ${accountName} ${teamName} team is now closed, but there are no responses!

Please check in with the team and make sure that everything is okay...


Your Friendly Thoughtworks WellbeingBot 

(Brought to you by The Thoughtworks UK Wellbeing & Inclusion Champions)

[${FEEDBACK_REQUEST}]`