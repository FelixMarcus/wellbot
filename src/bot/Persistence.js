const CURRENT_SURVEY_FORM_ID = "CurrentSurveyFormId"

const squadFormId = (tribe, squad) => squad.name? 
    `${CURRENT_SURVEY_FORM_ID}[${tribe.id}-${squad.id}]` : 
    CURRENT_SURVEY_FORM_ID;

const saveCurrentForm = (form) => {
  PropertiesService.getScriptProperties().setProperty(CURRENT_SURVEY_FORM_ID, form.getId());
}

const saveCurrentSquadForm = (tribe, squad, form) => {
  const squadId = squadFormId(tribe, squad);
  PropertiesService.getScriptProperties().setProperty(squadId, form.getId());
}

const hasFormCurrentlyOpen = (tribe, squad) => {
  const squadId = squadFormId(tribe, squad);
  var currentSurveyFormId = PropertiesService.getScriptProperties().getProperty(squadId);
  return currentSurveyFormId? true: false
}

const getCurrentForm = (tribe, squad) => {
  const squadId = squadFormId(tribe, squad);
  var foundFormId = PropertiesService.getScriptProperties().getProperty(squadId);

  Logger.log(`Retrieving form stored for ${squadId}`)

  if(!foundFormId) throw new Error(`No value set for current form in Properties/${squadId}`)

  var currentForm = FormApp.openById(foundFormId);
  
  if(!currentForm) throw new Error(`Unable to find current survey form [ID=${foundFormId}]`)

  Logger.log(`INFO: Found Current Form [ID=${foundFormId}, Accepting Responses: ${currentForm.isAcceptingResponses()}]`)
  return currentForm;
}

const clearCurrentForm = (tribe, squad) => {
  PropertiesService.getScriptProperties().deleteProperty(squadFormId(tribe, squad));
}

const clearAllTribeForms = (tribe) => {
  for(squad of tribe.squads){
    clearCurrentForm(tribe, squad)
  }
}