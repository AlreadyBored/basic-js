const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const createDreamTeam = require('../src/dream-team.js');

describe('Dream team', () => {
  // Presence requirement

  describe('variable presence', () => {
    it.optional('function createDreamTeam exists', () => {
      expect(createDreamTeam).to.exist;
      expect(createDreamTeam).to.be.instanceOf(Function);  
    });
  });

  //Specific requirements

  describe('base requirements', () => {
    it.optional('should return sequence from pre-sorted array', () => {
      assert.equal(createDreamTeam([
        'Amelia',
        'Grace',
        'Lily',
        'Ruby',
      ]), 'AGLR');
    });

    it.optional('should return sorted sequence', () => {
      assert.equal(createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']), 'AABDEEGKPP' );
      assert.equal(createDreamTeam(['Eric', 'Donald', 'Justin', 'Katherine', 'Ethan', 'Charles', 'Frances', 'Kimberly', 'Noah', 'Paul']), 'CDEEFJKKNP' );
      assert.equal(createDreamTeam(['Ann', 'Nancy', 'Nicholas', 'Alexander', 'Charles', 'Johnny', 'Philip', 'Jeffrey', 'Kenneth', 'Raymond']), 'AACJJKNNPR' );
      assert.equal(createDreamTeam(['Ann', 'Christian', 'Douglas', 'Justin', 'Eugene', 'Kayla', 'Anthony', 'Brian', 'Adam', 'Benjamin']), 'AAABBCDEJK' );
      assert.equal(createDreamTeam(['Alan', 'Gregory', 'Peter', 'Nicole', 'George', 'Helen', 'Denise', 'Amy', 'Danielle', 'Heather']), 'AADDGGHHNP' );
      assert.equal(createDreamTeam(['Joan', 'Gregory', 'Abigail', 'Brittany', 'Nicole', 'Sophia', 'Joyce', 'Juan', 'Julie', 'Joan']), 'ABGJJJJJNS' );
      assert.equal(createDreamTeam(['Alice', 'Joe', 'Janet', 'Pamela', 'Jacob', 'Larry', 'Diana', 'Gerald', 'Douglas', 'Keith']), 'ADDGJJJKLP' );
      assert.equal(createDreamTeam(['Karen', 'Andrea', 'Brandon', 'Lawrence', 'Megan', 'Alexis', 'Ann', 'Kathryn', 'Sharon', 'Jonathan']), 'AAABJKKLMS' );
      assert.equal(createDreamTeam(['Kayla', 'Bryan', 'Sharon', 'Anna', 'Bruce', 'Bobby', 'Lauren', 'Kathleen', 'Joshua', 'Andrew']), 'AABBBJKKLS' );
      assert.equal(createDreamTeam(['Carolyn', 'Olivia', 'Gary', 'Ethan', 'Dorothy', 'Kelly', 'Sean', 'Jose', 'Christopher', 'Judy']), 'CCDEGJJKOS' );
      assert.equal(createDreamTeam(['Dylan', 'Keith', 'Madison', 'Ralph', 'Olivia', 'Raymond', 'Megan', 'Frank', 'Daniel', 'Carol']), 'CDDFKMMORR' );
      assert.equal(createDreamTeam(['Gregory', 'Kayla', 'Kevin', 'Benjamin', 'Randy', 'Sandra', 'Alan', 'Patrick', 'Angela', 'Katherine']), 'AABGKKKPRS' );
      assert.equal(createDreamTeam(['Evelyn', 'Wayne', 'Ryan', 'Abigail', 'Theresa', 'Jack', 'Austin', 'Willie', 'Judith', 'Stephen']), 'AAEJJRSTWW' );
      assert.equal(createDreamTeam(['Teresa', 'Austin', 'Betty', 'Evelyn', 'Samantha', 'Noah', 'Christina', 'Christian', 'Anthony', 'Jose']), 'AABCCEJNST' );
      assert.equal(createDreamTeam(['Ann', 'Sean', 'Kathleen', 'Harold', 'Beverly', 'Anna', 'Lawrence', 'Diane', 'Jesse', 'Amber']), 'AAABDHJKLS' );
      assert.equal(createDreamTeam(['Austin', 'Jordan', 'Olivia', 'Joyce', 'Eugene', 'Noah', 'Zachary', 'Emily', 'Megan', 'Nathan']), 'AEEJJMNNOZ' );
      assert.equal(createDreamTeam(['Diane', 'Denise', 'Olivia', 'Nancy', 'Ashley', 'Bruce', 'Maria', 'Megan', 'Gerald', 'Megan']), 'ABDDGMMMNO' );
      assert.equal(createDreamTeam(['Pamela', 'Ryan', 'Stephen', 'Anthony', 'Beverly', 'Evelyn', 'Amanda', 'Jesse', 'Ruth', 'Joshua']), 'AABEJJPRRS' );
      assert.equal(createDreamTeam(['Christian', 'Sophia', 'Sandra', 'Jerry', 'Gregory', 'Jonathan', 'Joshua', 'Theresa', 'Rebecca', 'Rose']), 'CGJJJRRSST' );
      assert.equal(createDreamTeam(['Lori', 'Jack', 'Nathan', 'Kathryn', 'Sharon', 'Joan', 'Stephanie', 'Donna', 'Christina', 'Donald']), 'CDDJJKLNSS' );
      assert.equal(createDreamTeam(['Diana', 'Philip', 'Joe', 'Nicole', 'Nicholas', 'Aaron', 'Jane', 'Eric', 'Andrew', 'Jose']), 'AADEJJJNNP' );
      assert.equal(createDreamTeam(['Kayla', 'Keith', 'Dennis', 'Carolyn', 'Diane', 'Timothy', 'Sandra', 'Laura', 'Bryan', 'Heather']), 'BCDDHKKLST' );
      assert.equal(createDreamTeam(['Diana', 'Frances', 'Emma', 'Christopher', 'Kathleen', 'Lori', 'Brittany', 'Cynthia', 'Dorothy', 'Grace']), 'BCCDDEFGKL' );
      assert.equal(createDreamTeam(['Grace', 'Sharon', 'Ethan', 'Jonathan', 'Emily', 'Nicholas', 'Victoria', 'Lawrence', 'Beverly', 'Victoria']), 'BEEGJLNSVV' );
      assert.equal(createDreamTeam(['Bobby', 'Kevin', 'Teresa', 'Betty', 'Lori', 'Joyce', 'Scott', 'Johnny', 'Cheryl', 'Ronald']), 'BBCJJKLRST' );
      assert.equal(createDreamTeam(['Patrick', 'Gerald', 'Sophia', 'Nicholas', 'Jesse', 'Zachary', 'Nicole', 'Aaron', 'George', 'Nathan']), 'AGGJNNNPSZ' );
      assert.equal(createDreamTeam(['Russell', 'Willie', 'Sophia', 'Gabriel', 'Jane', 'Gabriel', 'Samuel', 'Jesse', 'Timothy', 'Eugene']), 'EGGJJRSSTW' );
      assert.equal(createDreamTeam(['Henry', 'Peter', 'Amber', 'Jordan', 'Lauren', 'Andrew', 'Emma', 'Gregory', 'Kayla', 'Deborah']), 'AADEGHJKLP' );
      assert.equal(createDreamTeam(['Dennis', 'Kimberly', 'Bryan', 'Kyle', 'Gregory', 'Ruth', 'Christina', 'Vincent', 'Noah', 'Cheryl']), 'BCCDGKKNRV' );
      assert.equal(createDreamTeam(['Ryan', 'Keith', 'Deborah', 'Jerry', 'Gerald', 'Janet', 'Jacqueline', 'Philip', 'Heather', 'Harold']), 'DGHHJJJKPR' );
      assert.equal(createDreamTeam(['Christina', 'Austin', 'Alice', 'Beverly', 'Margaret', 'Jordan', 'Janet', 'Gregory', 'Betty', 'Cynthia']), 'AABBCCGJJM' );
      assert.equal(createDreamTeam(['Madison', 'Walter', 'Nancy', 'Gloria', 'Kevin', 'Gabriel', 'Helen', 'Juan', 'Sandra', 'Brenda']), 'BGGHJKMNSW' );
      assert.equal(createDreamTeam(['Peter', 'Heather', 'Philip', 'Hannah', 'Amy', 'Mark', 'Karen', 'Betty', 'Karen', 'Christina']), 'ABCHHKKMPP' );
      assert.equal(createDreamTeam(['Natalie', 'Jordan', 'Jordan', 'Christine', 'Ashley', 'Shirley', 'Gary', 'Cynthia', 'Juan', 'Theresa']), 'ACCGJJJNST' );
      assert.equal(createDreamTeam(['Kathleen', 'Bruce', 'Nancy', 'Evelyn', 'Carl', 'Judy', 'Natalie', 'Keith', 'Jack', 'Grace']), 'BCEGJJKKNN' );
      assert.equal(createDreamTeam(['Sandra', 'Stephen', 'Angela', 'Frances', 'Amber', 'Diana', 'Ronald', 'Louis', 'Judy', 'Jack']), 'AADFJJLRSS' );
      assert.equal(createDreamTeam(['Andrea', 'Carol', 'Katherine', 'Evelyn', 'Donald', 'Stephanie', 'Sharon', 'Aaron', 'Jose', 'Evelyn']), 'AACDEEJKSS' );
      assert.equal(createDreamTeam(['Marilyn', 'Adam', 'Charles', 'Lisa', 'Bryan', 'Aaron', 'Marie', 'Christine', 'Nicole', 'Catherine']), 'AABCCCLMMN' );
      assert.equal(createDreamTeam(['Theresa', 'Jeffrey', 'Justin', 'Brenda', 'Sharon', 'Teresa', 'Janet', 'Jack', 'Gerald', 'Amber']), 'ABGJJJJSTT' );
      assert.equal(createDreamTeam(['Rachel', 'Samantha', 'Alan', 'Carol', 'Jeremy', 'Bruce', 'Carol', 'Steven', 'Christopher', 'Jacqueline']), 'ABCCCJJRSS' );
      assert.equal(createDreamTeam(['Lawrence', 'Noah', 'Paul', 'Megan', 'Carol', 'Kathryn', 'Ralph', 'Eugene', 'Timothy', 'Janet']), 'CEJKLMNPRT' );
      assert.equal(createDreamTeam(['Patrick', 'Gabriel', 'Amber', 'Jacqueline', 'Katherine', 'Kelly', 'Christian', 'Evelyn', 'Billy', 'Lauren']), 'ABCEGJKKLP' );
      assert.equal(createDreamTeam(['Olivia', 'Stephen', 'Tyler', 'Nicole', 'Jordan', 'Ruth', 'Lisa', 'Kathleen', 'Jordan', 'Angela']), 'AJJKLNORST' );
      assert.equal(createDreamTeam(['Peter', 'Brian', 'Ashley', 'Patrick', 'Austin', 'Lisa', 'Margaret', 'Austin', 'Nancy', 'Eric']), 'AAABELMNPP' );
      assert.equal(createDreamTeam(['Jeffrey', 'Mark', 'Nicholas', 'Hannah', 'Lauren', 'Evelyn', 'Mark', 'Adam', 'Catherine', 'Samuel']), 'ACEHJLMMNS' );
      assert.equal(createDreamTeam(['Frances', 'Karen', 'Laura', 'Jonathan', 'Andrew', 'Debra', 'Philip', 'Jonathan', 'Peter', 'Donna']), 'ADDFJJKLPP' );
      assert.equal(createDreamTeam(['Scott', 'Mark', 'Lawrence', 'Theresa', 'Logan', 'Ronald', 'Sara', 'Jeremy', 'Alexander', 'Ryan']), 'AJLLMRRSST' );
      assert.equal(createDreamTeam(['Carol', 'Ethan', 'Katherine', 'Amanda', 'Olivia', 'Marilyn', 'Jean', 'Madison', 'Karen', 'Cynthia']), 'ACCEJKKMMO' );
      assert.equal(createDreamTeam(['Nathan', 'Sophia', 'Cheryl', 'Nathan', 'Austin', 'Dorothy', 'Jesse', 'Marilyn', 'Gary', 'Carl']), 'ACCDGJMNNS' );
      assert.equal(createDreamTeam(['Carolyn', 'Gabriel', 'Henry', 'Madison', 'Heather', 'Lori', 'Cheryl', 'Benjamin', 'Jean', 'Cynthia']), 'BCCCGHHJLM' );
      assert.equal(createDreamTeam(['Angela', 'Denise', 'Kayla', 'Eugene', 'Tyler', 'Jeffrey', 'Kathryn', 'Stephen', 'Ethan', 'Jeremy']), 'ADEEJJKKST' );
      assert.equal(createDreamTeam(['Edward', 'Carl', 'Joyce', 'Cheryl', 'Gary', 'Henry', 'Philip', 'Christina', 'Edward', 'Nicholas']), 'CCCEEGHJNP' );
      assert.equal(createDreamTeam(['Emma', 'Danielle', 'Albert', 'Justin', 'Edward', 'Douglas', 'Alexander', 'Alan', 'Terry', 'Mark']), 'AAADDEEJMT' );
      assert.equal(createDreamTeam(['Austin', 'Eric', 'Catherine', 'Theresa', 'Kathleen', 'Nicole', 'Alexis', 'Nathan', 'Jacob', 'Johnny']), 'AACEJJKNNT' );
      assert.equal(createDreamTeam(['Bruce', 'Mark', 'Marilyn', 'Kyle', 'Carolyn', 'Marie', 'Kenneth', 'Lawrence', 'Matthew', 'Christine']), 'BCCKKLMMMM' );
      assert.equal(createDreamTeam(['Emma', 'Christian', 'Alan', 'Beverly', 'Nathan', 'Peter', 'Catherine', 'Brenda', 'Andrea', 'Logan']), 'AABBCCELNP' );
      assert.equal(createDreamTeam(['Raymond', 'Bruce', 'Emily', 'Jacob', 'Nancy', 'Lori', 'Kathryn', 'Vincent', 'Raymond', 'Janet']), 'BEJJKLNRRV' );
      assert.equal(createDreamTeam(['Kayla', 'Karen', 'Dylan', 'Debra', 'Kayla', 'Janet', 'Lauren', 'Louis', 'Hannah', 'Nathan']), 'DDHJKKKLLN' );
      assert.equal(createDreamTeam(['Carolyn', 'Logan', 'Mark', 'Maria', 'Bryan', 'Laura', 'Danielle', 'Michelle', 'Eric', 'Debra']), 'BCDDELLMMM' );
      assert.equal(createDreamTeam(['Nicole', 'George', 'Charles', 'Megan', 'Andrea', 'Judy', 'Peter', 'Matthew', 'Helen', 'Christina']), 'ACCGHJMMNP' );
      assert.equal(createDreamTeam(['Sandra', 'Shirley', 'Katherine', 'Kyle', 'Katherine', 'Sean', 'Jonathan', 'Alice', 'Adam', 'Kyle']), 'AAJKKKKSSS' );
      assert.equal(createDreamTeam(['Dylan', 'Arthur', 'Laura', 'Betty', 'Anthony', 'Stephanie', 'Alan', 'Marie', 'Samantha', 'Adam']), 'AAAABDLMSS' );
      assert.equal(createDreamTeam(['Danielle', 'Albert', 'Jesse', 'Grace', 'Vincent', 'Margaret', 'Alan', 'Jose', 'Emily', 'Heather']), 'AADEGHJJMV' );
      assert.equal(createDreamTeam(['Ann', 'Louis', 'Kevin', 'Jeffrey', 'Jerry', 'Gary', 'Louis', 'Andrew', 'Janice', 'Austin']), 'AAAGJJJKLL' );
      assert.equal(createDreamTeam(['Frank', 'Carolyn', 'Stephen', 'Shirley', 'Carl', 'Anthony', 'Madison', 'Anna', 'Roger', 'Jerry']), 'AACCFJMRSS' );
      assert.equal(createDreamTeam(['Christopher', 'Zachary', 'Frank', 'Michelle', 'Cynthia', 'Nathan', 'Deborah', 'Hannah', 'Jane', 'Gary']), 'CCDFGHJMNZ' );
      assert.equal(createDreamTeam(['Kelly', 'Austin', 'Frances', 'Frances', 'Christian', 'Douglas', 'Andrew', 'Andrew', 'Diana', 'Raymond']), 'AAACDDFFKR' );
      assert.equal(createDreamTeam(['Cynthia', 'Sharon', 'Jesse', 'Eric', 'Abigail', 'Judy', 'Jonathan', 'Joe', 'Cynthia', 'Ann']), 'AACCEJJJJS' );
      assert.equal(createDreamTeam(['Theresa', 'Cynthia', 'Kayla', 'Evelyn', 'Aaron', 'Joshua', 'Kyle', 'Dylan', 'Betty', 'Ann']), 'AABCDEJKKT' );
      assert.equal(createDreamTeam(['Deborah', 'Ruth', 'Betty', 'Stephanie', 'Anna', 'Judy', 'Jeremy', 'Abigail', 'Ronald', 'Christine']), 'AABCDJJRRS' );
      assert.equal(createDreamTeam(['George', 'Brian', 'Christine', 'Charles', 'Bruce', 'Philip', 'Johnny', 'Steven', 'Brandon', 'Mark']), 'BBBCCGJMPS' );
      assert.equal(createDreamTeam(['Kathleen', 'Zachary', 'Ryan', 'Martha', 'Marilyn', 'Laura', 'Bruce', 'Olivia', 'Donald', 'Deborah']), 'BDDKLMMORZ' );
      assert.equal(createDreamTeam(['Julia', 'Marie', 'Lawrence', 'Melissa', 'Mark', 'Teresa', 'Alice', 'Scott', 'Edward', 'Gregory']), 'AEGJLMMMST' );
      assert.equal(createDreamTeam(['Johnny', 'Margaret', 'Sharon', 'Julie', 'Gloria', 'Danielle', 'Cheryl', 'Betty', 'Joe', 'Stephen']), 'BCDGJJJMSS' );
      assert.equal(createDreamTeam(['Ruth', 'Johnny', 'Noah', 'Nicholas', 'Jesse', 'Hannah', 'Shirley', 'Bobby', 'Roy', 'Raymond']), 'BHJJNNRRRS' );
      assert.equal(createDreamTeam(['Mark', 'Catherine', 'Alan', 'Aaron', 'Betty', 'Kathryn', 'Jesse', 'Christine', 'Danielle', 'Evelyn']), 'AABCCDEJKM' );
      assert.equal(createDreamTeam(['Patrick', 'Daniel', 'Bryan', 'Rebecca', 'Debra', 'Angela', 'Juan', 'Kelly', 'Olivia', 'Diana']), 'ABDDDJKOPR' );
      assert.equal(createDreamTeam(['Raymond', 'Kevin', 'Roy', 'Paul', 'Laura', 'Samuel', 'Jack', 'Sara', 'Julia', 'Janice']), 'JJJKLPRRSS' );
      assert.equal(createDreamTeam(['Willie', 'Debra', 'Daniel', 'Vincent', 'Carolyn', 'Jason', 'Brenda', 'Joe', 'Brandon', 'Lawrence']), 'BBCDDJJLVW' );
      assert.equal(createDreamTeam(['Philip', 'Tyler', 'Jacob', 'Samantha', 'Beverly', 'Doris', 'Jordan', 'Melissa', 'Brittany', 'Nicole']), 'BBDJJMNPST' );
      assert.equal(createDreamTeam(['Karen', 'Theresa', 'Marie', 'Jacob', 'Douglas', 'Evelyn', 'Sharon', 'George', 'Madison', 'Kayla']), 'DEGJKKMMST' );
      assert.equal(createDreamTeam(['Jose', 'Daniel', 'Emma', 'Nancy', 'Janice', 'Martha', 'Jane', 'Betty', 'Nicholas', 'Kyle']), 'BDEJJJKMNN' );
      assert.equal(createDreamTeam(['Vincent', 'Karen', 'Bruce', 'Nancy', 'Christina', 'Edward', 'Amber', 'Debra', 'George', 'Lori']), 'ABCDEGKLNV' );
      assert.equal(createDreamTeam(['Ethan', 'Donna', 'Vincent', 'Timothy', 'Edward', 'Eric', 'Hannah', 'Henry', 'Lori', 'Joyce']), 'DEEEHHJLTV' );
      assert.equal(createDreamTeam(['Kathleen', 'Julie', 'Noah', 'Dylan', 'Sandra', 'Heather', 'Diana', 'Melissa', 'Aaron', 'Terry']), 'ADDHJKMNST' );
      assert.equal(createDreamTeam(['Paul', 'Roger', 'Marilyn', 'Victoria', 'Amber', 'Vincent', 'Sandra', 'Benjamin', 'Sean', 'Kyle']), 'ABKMPRSSVV' );
      assert.equal(createDreamTeam(['Helen', 'Deborah', 'Bradley', 'Sandra', 'Michelle', 'Shirley', 'Theresa', 'Brenda', 'Lisa', 'Anna']), 'ABBDHLMSST' );
      assert.equal(createDreamTeam(['Donald', 'Bruce', 'Edward', 'Kimberly', 'Randy', 'Rebecca', 'Alice', 'Katherine', 'Alan', 'Samantha']), 'AABDEKKRRS' );
      assert.equal(createDreamTeam(['Frank', 'Jonathan', 'Ethan', 'Helen', 'Jordan', 'Ashley', 'Bradley', 'Jane', 'Gregory', 'Pamela']), 'ABEFGHJJJP' );
      assert.equal(createDreamTeam(['Lauren', 'Sean', 'Laura', 'Nancy', 'Roy', 'Samuel', 'Hannah', 'Sandra', 'Shirley', 'Eugene']), 'EHLLNRSSSS' );
      assert.equal(createDreamTeam(['Abigail', 'Vincent', 'Jacob', 'Sean', 'Brian', 'Donna', 'Bryan', 'Stephen', 'Ruth', 'Gabriel']), 'ABBDGJRSSV' );
      assert.equal(createDreamTeam(['Catherine', 'Walter', 'Rachel', 'Brandon', 'Lori', 'Kimberly', 'Keith', 'Brandon', 'Johnny', 'Anna']), 'ABBCJKKLRW' );
      assert.equal(createDreamTeam(['Laura', 'Stephanie', 'Lisa', 'Steven', 'Rebecca', 'Dorothy', 'Peter', 'Matthew', 'Logan', 'Frank']), 'DFLLLMPRSS' );
      assert.equal(createDreamTeam(['Brenda', 'Terry', 'Karen', 'Deborah', 'Samantha', 'Roy', 'Helen', 'Victoria', 'Adam', 'Michelle']), 'ABDHKMRSTV' );
      assert.equal(createDreamTeam(['Martha', 'Melissa', 'Terry', 'Pamela', 'Lawrence', 'Russell', 'Stephen', 'Heather', 'Walter', 'Amy']), 'AHLMMPRSTW' );
      assert.equal(createDreamTeam(['Kayla', 'Brian', 'Logan', 'Sharon', 'Ruth', 'Jean', 'Joyce', 'Sara', 'Diana', 'Edward']), 'BDEJJKLRSS' );
      assert.equal(createDreamTeam(['Keith', 'Donna', 'Lawrence', 'Sophia', 'Jack', 'Kyle', 'Andrew', 'Natalie', 'Deborah', 'Noah']), 'ADDJKKLNNS' );
      assert.equal(createDreamTeam(['Sophia', 'Margaret', 'Maria', 'Wayne', 'Julie', 'Samantha', 'Deborah', 'Diana', 'Bruce', 'Jacob']), 'BDDJJMMSSW' );
      assert.equal(createDreamTeam(['Kevin', 'Timothy', 'Jeffrey', 'Albert', 'Laura', 'Karen', 'Steven', 'Diana', 'Sandra', 'Emma']), 'ADEJKKLSST' );
    });

    it.optional('empty team shouldn\'t lead to error', function () {
      let res = null;
        try {
          createDreamTeam([]);
        } catch(err) {
          if (err._validationProp === 'NA') {
            this.skip();
          } else {
            res = 'FAIL';
          }
        } 
        assert.equal(res, null);
    });
  });

  describe('functional requirements ', () => {   
    it.optional('should handle whitespaces', () => {
      assert.equal(createDreamTeam([
        '   William Alston ',
        ' Paul Benacerraf',
        '  Ross Cameron',
        '       Gilles Deleuze',
        '  Arda Denkel ',
        '  Michael Devitt',
        '  Kit Fine',
        ' Nelson Goodman',
        'David Kolb',
        '   Saul Kripke',
        '  Trenton Merricks',
        '  Jay Rosenberg',
      ]), 'ADGJKMNPRSTW');
    });
    it.optional('should handle lowercase', () => {
      assert.equal(createDreamTeam([
        'amelia',
        'ruby',
        'lily',
        'grace',
        'millie',
        'daisy',
        'freya',
        'erin',
        'megan',
        'jasmine',
        'brooke',
      ]), 'ABDEFGJLMMR');
    });
    it.optional('should return false on wrong type', () => {
      assert.equal(createDreamTeam(3), false);
      assert.equal(createDreamTeam(3.312312), false);
      assert.equal(createDreamTeam(false), false);
      assert.equal(createDreamTeam(null), false);
      assert.equal(createDreamTeam(undefined), false);
      assert.equal(createDreamTeam({'foo': 'bar'}), false);
    });
    it.optional('should ignore non-string values', () => {
      assert.equal(createDreamTeam([
        'Amelia',
        null,
        undefined,
        'Ruby',
        'Lily',
        11,
        'Grace',
        22,
        'Millie',
        'Daisy',
        true,
        'Freya',
        false,
        'Erin',
        new Set([1,2,3,4,5]),
        'Megan',
        {
          'John': 'Smith'
        },
        'Jasmine',
        1,
        2,
        3,
        4,
        5,
        'Brooke',
      ]), 'ABDEFGJLMMR');
    });
    it.optional('should handle non-standard cases', () => {
      assert.equal(createDreamTeam([
        ['David Abram'],
        ['Robin Attfield'],
        'Thomas Berry',
        ['Paul R.Ehrlich'],
        'donna Haraway',
        ' BrIaN_gOodWiN  ',
        {
          0: 'Serenella Iovino'
        },
        'Erazim Kohak',
        '  val_plumwood',
      ]), 'BDETV');
    });
  });
});
