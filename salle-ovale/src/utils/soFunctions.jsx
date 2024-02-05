// va calculer le nombre de pages requises pour les résultats 20/page
export function calculatePages(queryResults) {
  return Math.round(queryResults.length / 20);
}

export function displayCurrentResults(currPage) {
  const resultsAmount = 20;
  const start = 0;
  return state.results.slice(
    currPage - 1 * resultsAmount,
    resultsAmount * currPage - 1
  );
}
