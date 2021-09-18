const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const APPROXIMATION_LN = 0.693;

function check_activity(value) {
  if (typeof value !== 'string') return false

  let activity = parseFloat(value)
  if (isNaN(activity) || 
      activity > MODERN_ACTIVITY || 
      activity <= 0) 
      return false    

  return activity
}

module.exports = function dateSample(sampleActivity) {
  if (!check_activity(sampleActivity)) return false

  var activities = Math.log(MODERN_ACTIVITY / +sampleActivity)
  var reaction_rate = APPROXIMATION_LN / HALF_LIFE_PERIOD
  return Math.ceil(activities / reaction_rate)
};

