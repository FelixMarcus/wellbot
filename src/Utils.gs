const mapArrayToObject = (array, getKey, getValue) => array
    .map(it => [getKey(it), getValue(it)])
    .reduce((previous, current) => {
      return {
        ...previous,
        [current[0]]: current[1],
      }
    },
    {}
  );

const uniqueValuesOfArray = (array) => [...new Set(array)];
const averageScore = (combinedStats) => combinedStats.totalScore / combinedStats.numberOfResponses;

const pickANumberFromZeroTo = (maxInput) => {
  const min = Math.ceil(0);
  const max = Math.floor(maxInput);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}