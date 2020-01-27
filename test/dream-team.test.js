const createDreamTeam = require('../src/dream-team.js');

// Presence requirement

describe ('variable presence', () => {
    it('function createDreamTeam exists', () => {
        expect(createDreamTeam).toBeDefined();
    });
});

//Specific requirements

describe('level 0', () => {
  it('should return sequence from pre-sorted array', () => {
    expect(createDreamTeam([
      'Amelia',
      'Grace',
      'Lily',
      'Ruby',
  ])).toStrictEqual('AGLR');
  });
  it('should return sorted sequence', () => {
    expect(createDreamTeam([
      'Amelia',
      'Ruby',
      'Lily',
      'Grace',
      'Millie',
      'Daisy',
      'Freya',
      'Erin',
      'Megan',
      'Jasmine',
      'Brooke',
    ])).toStrictEqual('ABDEFGJLMMR');
  });
  

  it('empty team shouldn\'t lead to error', () => {
    expect(() => createDreamTeam([])).not.toThrow();
  });
});
describe('functional requirements ', () => {   
    it('should handle whitespaces', () => {
      expect(createDreamTeam([
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
      ])).toStrictEqual('ADGJKMNPRSTW');
     });
     it('should handle lowercase', () => {
      expect(createDreamTeam([
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
      ])).toStrictEqual('ABDEFGJLMMR');
     });
     it('should return false on wrong type', () => {
      expect(createDreamTeam(3)).toStrictEqual(false);
      expect(createDreamTeam(3.312312)).toStrictEqual(false);
      expect(createDreamTeam(false)).toStrictEqual(false);
      expect(createDreamTeam(null)).toStrictEqual(false);
      expect(createDreamTeam(undefined)).toStrictEqual(false);
      expect(createDreamTeam({'foo': 'bar'})).toStrictEqual(false);
    });
     it('should ignore non-string values', () => {
      expect(createDreamTeam([
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
      ])).toStrictEqual('ABDEFGJLMMR');
    });
    it('should handle non-standard cases', () => {
      expect(createDreamTeam([
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
      ])).toStrictEqual('BDETV');
    })
});
