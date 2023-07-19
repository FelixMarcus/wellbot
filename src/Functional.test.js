/* TEST FUNCTIONS */
const testSurveyAccountMorale = () => {
  surveyAccountMorale(TEST_ACCOUNT);
}

const testSendReminder = () => {
  sendReminder(TEST_ACCOUNT);
}

const testCloseSurveyForm = () => {
  closeAccountSurveyForms(TEST_ACCOUNT);
}

const testFullSurveyFlow = () => {
  clearAllAccountForms(TEST_ACCOUNT);
  surveyAccountMorale(TEST_ACCOUNT);
  sendReminder(TEST_ACCOUNT);
  closeAccountSurveyForms(TEST_ACCOUNT);
}

const testSpreadTheLoveAround = () => {
  spreadTheLoveAround(TEST_ACCOUNT);
}