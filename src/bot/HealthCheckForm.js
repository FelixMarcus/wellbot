const helpText = (good, bad) => {
  return `
Awesome looks like: "${good}"

Rubbish looks like: "${bad}"

Are we closer to awesome (green), rubbish (red) or is it just Meh (amber)?
`
}

const createNewHealthCheckForm = (account, team) => {
  var form = FormApp.create(`TW Team Health: ${account.name} ${team.name} - ${dateString()}`)
    .setAcceptingResponses(false)
    .setDescription(DESCRIPTION)
    .setLimitOneResponsePerUser(true)
    .setCollectEmail(false)
    .setRequireLogin(true);

  const rag = ['red', 'amber', 'green'];

  for(healthCheckItem of allHealthCheckItems) {
    form.addListItem()
    .setTitle(healthCheckItem.title)
    .setHelpText(helpText(healthCheckItem.good, healthCheckItem.bad))
    .setChoiceValues(rag)
    .setRequired(true);
  }
  

  form.addParagraphTextItem()
    .setTitle('What can we do to make things better for you and the team? Is there anything that you think that we should hear?');

  form.addTextItem()
    .setTitle("Are there any people or activities that you would like to call out for us to celebrate?")

  form.setConfirmationMessage(SUBMISSION_CONFIRMATION);

  //connectToSpreadsheet(form, account.destinationId, `${team.name} - ${dateString()}`)

  form.setAcceptingResponses(true);

  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());

  return form;
}