const SCALE_LOWER_BOUND_LABEL = "Really Bad";
const SCALE_UPPER_BOUND_LABEL = "Really Good";

const dateString = (daysFromNow = 0) => {
  var date = new Date();
  date.setDate(new Date().getDate() + daysFromNow);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

const GRID_ROWS = ['Day to Day Squad Interactions', 'Tribe Stuff', 'Customer Engagement', 'Company Wide Activities', 'Personal Stuff', 'Something else'];
const GRID_COLUMNS = ['Makes me feel terrible', 'Draining my resources', 'Could go either way', 'I look forward to this', 'This is what I live for!',  'No Opinion'];

const createNewMoraleForm = (tribe, squad) => {
  var form = FormApp.create(`Squad Health: ${tribe.name} ${squad.name} - ${dateString()}`)
    .setAcceptingResponses(false)
    .setDescription(DESCRIPTION)
    .setLimitOneResponsePerUser(true)
    .setCollectEmail(false)
    .setRequireLogin(true);

  form.addScaleItem()
    .setTitle("How happy are you feeling generally?")
    .setLabels(SCALE_LOWER_BOUND_LABEL, SCALE_UPPER_BOUND_LABEL)
    .setRequired(true);

  form.addScaleItem()
    .setTitle("How are you feeling about the direction of the project and the work that we've been doing?")
    .setLabels(SCALE_LOWER_BOUND_LABEL, SCALE_UPPER_BOUND_LABEL)
    .setRequired(true);

  form.addGridItem()
    .setTitle("How are the following contributing to how you're feeling? ")
    .setRequired(true)
    .setRows(GRID_ROWS)
    .setColumns(GRID_COLUMNS);

  form.addTextItem()
    .setTitle("What in particular from the previous question is affecting you strongly, and how?")

  form.addParagraphTextItem()
    .setTitle('What can we do to make things better for you and the squad? Is there anything that you think that we should hear?');

  form.addTextItem()
    .setTitle("Are there any people or activities that you would like to call out for us to celebrate?")

  form.setConfirmationMessage(SUBMISSION_CONFIRMATION);

  connectToSpreadsheet(form, tribe.destinationId, `${squad.name} - ${dateString()}`)

  form.setAcceptingResponses(true);

  Logger.log('Published URL: ' + form.getPublishedUrl());
  Logger.log('Editor URL: ' + form.getEditUrl());

  return form;
}