/**
 * Plural forms for russian words
 * @param  {Integer} count quantity for word
 * @param  {Array} words Array of words. Example: ['room', 'rooms', 'rooms'], ['guest', 'guests', 'guests']
 * @return {String} Count + plural form for word
 */

export const pluralize = (count, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return (
    `${count} ${ words[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
    ]}`
  );
};
