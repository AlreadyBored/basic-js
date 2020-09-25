

const createDreamTeam = (members) => {
  if (!Array.isArray(members)) {
    return false;
  };
  let res = '';
  for (const member of members) {
    if (typeof member === "string" && member !== " ") {
      res += member.toString().trim().slice(0, 1).toUpperCase();
    }
  }  
  return [...res].sort().join('');
};

module.exports = createDreamTeam;
