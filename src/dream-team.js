module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.filter(x => typeof x === 'string')
                .map(x => {
                    for (i in x) {
                      if (x[i] !== " ") return x[i].toUpperCase();
                    }
                    return false;
                })
                .sort()
                .join('')
};
