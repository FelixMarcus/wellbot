const anyTeamHasResponses = (teamInsights) => {
  return Object.values(teamInsights)
    .some(insight => insight.hasResponses());
} 

const allTeamsHaveResponses = (teamInsights) => {
  return Object.values(teamInsights)
    .every(insight => insight.hasResponses());
} 

const statsAccumulator = [(previous, current) => {
      return {
        totalScore: (previous.totalScore + current.totalScore),
        numberOfResponses: (previous.numberOfResponses + current.numberOfResponses),
      }}, 
      {
        totalScore: 0,
        numberOfResponses: 0,
      }
    ]

const buildAccountInsights = (teamInsights) => {
  const teamInsightResults = Object.values(teamInsights)

  var generalScoreAccountStats = teamInsightResults
    .map(entry => entry.generalScoreStats())
    .reduce(...statsAccumulator);

  var workScoreAccountStats = teamInsightResults
    .map(entry => entry.workScoreStats())
    .reduce(...statsAccumulator);

  const goodImpactsOnAccount = teamInsightResults.flatMap(entry => entry.goodImpacts());

  const badImpactsOnAccount = teamInsightResults.flatMap(entry => entry.badImpacts());

  return {
    generalScoreStats: () => generalScoreAccountStats,
    workScoreStats: () => workScoreAccountStats,
    averageGeneralScore: () => averageScore(generalScoreAccountStats),
    averageWorkScore: () => averageScore(workScoreAccountStats),
    goodImpacts: () => uniqueValuesOfArray(goodImpactsOnAccount),
    badImpacts: () => uniqueValuesOfArray(badImpactsOnAccount),
    anyTeamHasResponses: () => anyTeamHasResponses(teamInsights),
    allTeamsHaveResponses: () => allTeamsHaveResponses(teamInsights),
  }
}