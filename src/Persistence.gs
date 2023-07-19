const CURRENT_SURVEY_FORM_ID = "CurrentSurveyFormId"

const teamFormId = (account, team) => team.name? 
    `${CURRENT_SURVEY_FORM_ID}[${account.id}-${team.id}]` : 
    CURRENT_SURVEY_FORM_ID;

const saveCurrentForm = (form) => {
  PropertiesService.getScriptProperties().setProperty(CURRENT_SURVEY_FORM_ID, form.getId());
}

const saveCurrentTeamForm = (account, team, form) => {
  const teamId = teamFormId(account, team);
  PropertiesService.getScriptProperties().setProperty(teamId, form.getId());
}

const hasFormCurrentlyOpen = (account, team) => {
  const teamId = teamFormId(account, team);
  var currentSurveyFormId = PropertiesService.getScriptProperties().getProperty(teamId);
  return currentSurveyFormId? true: false
}

const getCurrentForm = (account, team) => {
  const teamId = teamFormId(account, team);
  var foundFormId = PropertiesService.getScriptProperties().getProperty(teamId);

  Logger.log(`Retrieving form stored for ${teamId}`)

  if(!foundFormId) throw new Error(`No value set for current form in Properties/${teamId}`)

  var currentForm = FormApp.openById(foundFormId);
  
  if(!currentForm) throw new Error(`Unable to find current survey form [ID=${foundFormId}]`)

  Logger.log(`INFO: Found Current Form [ID=${foundFormId}, Accepting Responses: ${currentForm.isAcceptingResponses()}]`)
  return currentForm;
}

const clearCurrentForm = (account, team) => {
  PropertiesService.getScriptProperties().deleteProperty(teamFormId(account, team));
}

const clearAllAccountForms = (account) => {
  for(team of account.teams){
    clearCurrentForm(account, team)
  }
}