/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const at = '@'

  const indexAt = email.lastIndexOf(at)

  return email.substring(indexAt + 1)
}

module.exports = {
  getEmailDomain
};
