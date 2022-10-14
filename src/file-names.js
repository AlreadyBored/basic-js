/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return [];

  const outputFileNames = new Array(names.length);

  outputFileNames[0] = names[0];

  for (let i = 1; i < names.length; i++) {
    const checkedFileName = names[i];

    if (!outputFileNames.includes(checkedFileName)) {
      outputFileNames[i] = checkedFileName;

      continue;
    }

    let supposedFileName = checkedFileName;
    let countSames = 0;

    for (let j = 0; j < i; j++) {
      if (outputFileNames[j] === supposedFileName) {
        countSames++;

        supposedFileName = `${checkedFileName}(${countSames})`;
      }
    }

    outputFileNames[i] = supposedFileName;
  }

  return outputFileNames;
}

module.exports = {
  renameFiles,
};
