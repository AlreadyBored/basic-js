/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const DISCARD_NEXT = "--discard-next";
  const DISCARD_PREV = "--discard-prev";
  const DOUBLE_NEXT = "--double-next";
  const DOUBLE_PREV = "--double-prev";

  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    const current = result[i];

    if (current === DISCARD_PREV) {
      result[i - 1] = null;
      result[i] = null;

      continue;
    }

    if (current === DOUBLE_PREV) {
      result[i] = result[i - 1];

      continue;
    }

    if (current === DOUBLE_NEXT) {
      result[i] = result[i + 1];

      continue;
    }

    if (current === DISCARD_NEXT) {
      result[i] = null;
      result[i + 1] = null;

      continue;
    }
  }

  return result.filter(Boolean);
}

module.exports = {
  transform,
};
