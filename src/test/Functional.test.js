/* TEST FUNCTIONS */
const testSurveyTribeMorale = () => {
  surveyTribeMorale(TEST_ACCOUNT);
}

const testSendReminder = () => {
  sendReminder(TEST_ACCOUNT);
}

const testCloseSurveyForm = () => {
  closeTribeSurveyForms(TEST_ACCOUNT);
}

const testFullSurveyFlow = () => {
  clearAllTribeForms(TEST_ACCOUNT);
  surveyTribeMorale(TEST_ACCOUNT);
  sendReminder(TEST_ACCOUNT);
  closeTribeSurveyForms(TEST_ACCOUNT);
}

const testSpreadTheLoveAround = () => {
  spreadTheLoveAround(TEST_ACCOUNT);
}