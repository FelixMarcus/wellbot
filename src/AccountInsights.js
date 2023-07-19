const anySquadHasResponses = (squadInsights) => {
  return Object.values(squadInsights)
    .some(insight => insight.hasResponses());
} 

const allSquadsHaveResponses = (squadInsights) => {
  return Object.values(squadInsights)
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

const buildTribeInsights = (squadInsights) => {
  const squadInsightResults = Object.values(squadInsights)

  var generalScoreTribeStats = squadInsightResults
    .map(entry => entry.generalScoreStats())
    .reduce(...statsAccumulator);

  var workScoreTribeStats = squadInsightResults
    .map(entry => entry.workScoreStats())
    .reduce(...statsAccumulator);

  const goodImpactsOnTribe = squadInsightResults.flatMap(entry => entry.goodImpacts());

  const badImpactsOnTribe = squadInsightResults.flatMap(entry => entry.badImpacts());

  return {
    generalScoreStats: () => generalScoreTribeStats,
    workScoreStats: () => workScoreTribeStats,
    averageGeneralScore: () => averageScore(generalScoreTribeStats),
    averageWorkScore: () => averageScore(workScoreTribeStats),
    goodImpacts: () => uniqueValuesOfArray(goodImpactsOnTribe),
    badImpacts: () => uniqueValuesOfArray(badImpactsOnTribe),
    anySquadHasResponses: () => anySquadHasResponses(squadInsights),
    allSquadsHaveResponses: () => allSquadsHaveResponses(squadInsights),
  }
}