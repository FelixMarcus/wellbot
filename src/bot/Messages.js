//////////////////////////////////////////////////
//Feedback
//////////////////////////////////////////////////

FEEDBACK_REQUEST = `WellBot is still a prototype under active development! If you have any feedback, comments or suggestions for improvements of the notifications or the morale survey form itself, please get in touch with Felix Millne`

//////////////////////////////////////////////////
//New Form
//////////////////////////////////////////////////

const DESCRIPTION = `This is a weekly form sent out to check in with the squad and see what's on our minds

Thank you for taking the time to fill in the form this week - it's an important part of us ensuring we're doing everything we can to support everyone in the squad!

Your answers are anonymous and we do not collect your identity - the squad leads will review all answers in aggregate once the form closes each week

If you feel like you need individual support, then please do not be afraid to reach out to anyone on the squad leads, any Squad Leads on the tribe, to the People Team, or to anyone that you trust to help you`

const SUBMISSION_CONFIRMATION = `Thanks for sharing how you're doing! The results will be reviewed once the form closes on Thursday ${dateString(3)}.

For now, you're all done! Take a deep breath, relax, and enjoy this picture of a kitten:

https://placekitten.com/800/1200

Go on, you've earned it






[${FEEDBACK_REQUEST}]`

//////////////////////////////////////////////////
//Initial Sharing
//////////////////////////////////////////////////

const newFormEmailSubject = (tribeName, squadName, dateString) => `This Week's Squad Morale Survey for ${tribeName} ${squadName} - ${dateString}`

const createEmailMessage = (publishedUrl) => (name) =>
    `Hey there ${name}! It's time for the weekly squad morale health check - please let us know how you're doing by taking just a few minutes to fill in the (anonymous) form here:

${publishedUrl}

Thanks in advance, and let your Trio know if you have any issues.

Have a great day!


Your Friendly WellBot 

[${FEEDBACK_REQUEST}]`

const chatMessage = (publishedUrl) =>
    `Hi Squad! It's time for your weekly squad morale health check - please let us know how you're doing by taking just a few minutes to fill in the (anonymous) form here:

${publishedUrl}`


//////////////////////////////////////////////////
// Reminder
//////////////////////////////////////////////////

const chatReminderMessage = (publishedUrl) =>
    `Hi Squad! Don't forget to fill in the weekly squad morale check before it closes tomorrow - please let us know how you're doing by taking just a few minutes to fill in the (anonymous) form here:

${publishedUrl}`


//////////////////////////////////////////////////
// Summary
//////////////////////////////////////////////////

const squadSummaryEmailSubject = (tribeName, squadName, dateString) => `This Week's Squad Morale Summary for ${tribeName} ${squadName} - ${dateString}`
const tribeSummaryEmailSubject = (tribeName, dateString) => `This Week's Tribe Morale Summary for ${tribeName} - ${dateString}`

const squadSummaryReadyMessage = (tribeName, squadName, summaryUrl, squadInsights) => (name) =>
    `Hey there, ${name}! The weekly morale survey for the ${tribeName} ${squadName} squad is now closed and the results are ready for the squad leads to review

${"General Happiness".padEnd(35, ' ')}${squadInsights.averageGeneralScore().toFixed(2)}/5
${"Confidence In Direction".padEnd(34, ' ')}${squadInsights.averageWorkScore().toFixed(2)}/5

Positives:  ${squadInsights.goodImpacts().join(", ")}
Negatives: ${squadInsights.badImpacts().join(", ")}

${summaryUrl}


Your Friendly WellBot 

[${FEEDBACK_REQUEST}]`

const tribeSummarySquadTableTemplate = insights =>
    `Squad: ${insights.squad.name}

${"General Happiness".padEnd(35, ' ')}${insights.averageGeneralScore().toFixed(2)}/5
${"Confidence In Direction".padEnd(34, ' ')}${insights.averageWorkScore().toFixed(2)}/5

Positives:  ${insights.goodImpacts().join(", ")}
Negatives: ${insights.badImpacts().join(", ")}

${insights.form.getSummaryUrl()}

---------------------------------------------------------------------------------`

const tribeSummarySquadTable = insights => insights.squads
    .filter(insight => insight.hasResponses())
    .map(tribeSummarySquadTableTemplate);

const noResponsesTemplate = noResponseRows =>
    `The following squads did not get any responses to the survey:
${noResponseRows.join('/n')}

Please check in on the squad, and then please double check WellBot's configuration...
`

const tribeSummarySquadsWithNoResponses = squadInsights => {
    const noResponseRows = squadInsights
        .filter(insights => !insights.hasResponses())
        .map(insights => `- ${insights.squad.name}`)
    return noResponsesTemplate(noResponseRows);
}

const tribeSummarySquadInsights = insights =>
    `---------------------------------------------------------------------------------
Tribe Summary

${"General Happiness".padEnd(35, ' ')}${insights.tribe.averageGeneralScore().toFixed(2)}/5
${"Confidence In Direction".padEnd(34, ' ')}${insights.tribe.averageWorkScore().toFixed(2)}/5

Positives:  ${insights.tribe.goodImpacts().join(", ")}
Negatives: ${insights.tribe.badImpacts().join(", ")}

---------------------------------------------------------------------------------
${tribeSummarySquadTable(insights).join("\n")}

${!insights.tribe.allSquadsHaveResponses() ? tribeSummarySquadsWithNoResponses(insights.squads) : ""}`

const tribeSummaryNoSquadResponses = () => `No responses have been recorded for any squads! 

Please check in and see if everyone is okay, and then please double check WellBot's configuration...
`

const tribeSummaryReadyMessage = (tribeName, insights) => name =>
    `Hey there, ${name}! The weekly morale surveys for the ${tribeName} tribe are now closed and the results are ready for the Trio to review:

${insights.tribe.anySquadHasResponses() ? tribeSummarySquadInsights(insights) : tribeSummaryNoSquadResponses()}

Your Friendly WellBot 

[${FEEDBACK_REQUEST}]`

const noResponsesMessage = (tribeName, squadName) => name =>
    `Hey there ${name}! The weekly morale survey for the ${tribeName} ${squadName} squad is now closed, but there are no responses!

Please check in with the squad and make sure that everything is okay...


Your Friendly WellBot 

[${FEEDBACK_REQUEST}]`