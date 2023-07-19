const worstImpact = GRID_COLUMNS[0]
const badImpact = GRID_COLUMNS[1]
const goodImpact = GRID_COLUMNS[3]
const bestImpact = GRID_COLUMNS[4]

const getScoreResponseStatistics = (form, scaleQuestionItemNumber) => {
  var scaleQuestionItem = form.getItems()[scaleQuestionItemNumber];
  var formResponses = form.getResponses();

  var allScores = formResponses
    .map(response => +response.getResponseForItem(scaleQuestionItem).getResponse());

  return {
    totalScore: allScores.reduce((previous, current) => previous + current, 0),
    numberOfResponses: formResponses.length,
  }
}

const matchResponsesToRowTitle = individualGridResponses => individualGridResponses.map((gridResponse, index) => [GRID_ROWS[index], gridResponse])

const extractAllFormResponsesFromImpactGrid = (form) => {
  var gridItem = form.getItems()[2];
  var formResponses = form.getResponses();

  // Array of arrays - For each individual's form submission there is an array -> each array contains the selections of the grid as a string, with the value of the heading of the column that was selected for each row (in order)
  var allGridResponses = formResponses
    .map(formResponse => formResponse.getResponseForItem(gridItem).getResponse());

  // Matching each result's index to it's actual grid row value and turning everyone's responses for all rows into one big list
  return allGridResponses.flatMap(matchResponsesToRowTitle);
}

const matchResponses = (responses, match1, match2) => {
  var matchedRows = responses
    .filter(response => response[1] === match1 || response[1] === match2)
    .map(response => response[0]);

  return uniqueValuesOfArray(matchedRows);
}

const goodTeamImpactItems = form => {
  var allImpactResponses = extractAllFormResponsesFromImpactGrid(form);
  return matchResponses(allImpactResponses, goodImpact, bestImpact);
}

const badTeamImpactItems = form => {
  var allImpactResponses = extractAllFormResponsesFromImpactGrid(form);
  return matchResponses(allImpactResponses, badImpact, worstImpact);
}

const buildTeamInsights = form => {
  const generalScoreStats = getScoreResponseStatistics(form, 0);
  const workScoreStats = getScoreResponseStatistics(form, 1);

  const goodImpacts = goodTeamImpactItems(form);
  const badImpacts = badTeamImpactItems(form);

  return {
    form,
    generalScoreStats: () => generalScoreStats,
    workScoreStats: () => workScoreStats,
    averageGeneralScore: () => averageScore(generalScoreStats),
    averageWorkScore: () => averageScore(workScoreStats),
    goodImpacts: () => goodImpacts,
    badImpacts: () => badImpacts,
    hasResponses: () => (form.getResponses().length > 0),
  }
}
