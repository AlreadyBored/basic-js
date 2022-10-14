/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {string} n
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nGroups = n.split("-");

  if (nGroups.length < 6) return false;

  for (const group of nGroups) {
    if (group.length !== 2) return false;

    for (const letter of group) {
      if (
        ["A", "B", "C", "D", "E", "F"].includes(letter) ||
        (+letter >= 0 && +letter <= 9)
      )
        continue;

      return false;
    }
  }

  return true;
}

module.exports = {
  isMAC48Address,
};
