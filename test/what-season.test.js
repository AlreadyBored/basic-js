const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const getSeason = require('../src/what-season.js');

describe('What season', () => {
    // Presence requirement

    describe('variable presence', () => {
        it.optional('function getSeason exists', () => {
            expect(getSeason).to.exist;
            expect(getSeason).to.be.instanceOf(Function);
        });
    });

    //Specific requirements

    describe('base requirements', () => {
        it.optional('returns proper value', () => {   
            const [ 
                winter, 
                spring, 
                summer, 
                autumn,
            ] = [
                new Date(2019, 11, 22, 23, 45, 11, 500),
                new Date(2018, 4, 17, 11, 27, 4, 321),
                new Date(2017, 6, 11, 23, 45, 11, 500),
                new Date(1994, 8, 26, 3, 0, 11, 500),
            ];
            assert.equal(getSeason(winter), 'winter');
            assert.equal(getSeason(spring), 'spring');
            assert.equal(getSeason(summer), 'summer');
            expect(getSeason(autumn)).to.match(/autumn|fall/);
        });

        it.optional('returns proper value if date is before 1970', () => {
            const [ 
                winter, 
                spring, 
                summer, 
                autumn,
            ] = [
                new Date(1900, 0, 22, 23, 45, 11, 500),
                new Date(1354, 4, 17, 11, 27, 4, 321),
                new Date(1, 6, 13, 23, 45, 11, 500),
                new Date(22, 8, 22, 3, 0, 11, 500),
            ];
            assert.equal(getSeason(winter), 'winter');
            assert.equal(getSeason(spring), 'spring');
            assert.equal(getSeason(summer), 'summer');
            expect(getSeason(autumn)).to.match(/autumn|fall/);
        });

        it.optional('returns proper value (month index)', () => {
            const [ 
                winter, 
                spring, 
                summer, 
                autumn,
            ] = [
                new Date(2025, 1, 22, 23, 45, 11, 500),
                new Date(2134, 2, 17, 11, 27, 4, 321),
                new Date(2012, 5, 13, 23, 45, 11, 500),
                new Date(2019, 8, 22, 3, 0, 11, 500),
            ];
            assert.equal(getSeason(winter), 'winter');
            assert.equal(getSeason(spring), 'spring');
            assert.equal(getSeason(summer), 'summer');
            expect(getSeason(autumn)).to.match(/autumn|fall/);
        });

        it.optional('corretly handles argument absence', function() {
            let res = null;
            try {
                getSeason();
            } catch(err) {
              if (err._validationProp === 'NA') {
                this.skip();
              } else {
                res = 'FAIL';
              }
            }
            assert.equal(res, null);
            assert.equal(getSeason(), 'Unable to determine the time of year!');
        });

        it.optional('some pack of tests', () => {
            assert.equal(getSeason(new Date(2150, 7, 21, 18, 36, 41, 841)), 'summer');
            expect(getSeason(new Date(83, 9, 25, 16, 20, 23, 544))).to.match(/autumn|fall/);
            expect(getSeason(new Date(81, 10, 13, 12, 50, 13, 493))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(481, 1, 5, 21, 58, 37, 272)), 'winter');
            expect(getSeason(new Date(369, 9, 26, 4, 38, 0, 377))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(866, 2, 10, 12, 53, 10, 825)), 'spring');
            assert.equal(getSeason(new Date(2455, 5, 24, 5, 17, 19, 809)), 'summer');
            assert.equal(getSeason(new Date(1726, 7, 22, 23, 9, 55, 515)), 'summer');
            assert.equal(getSeason(new Date(655, 0, 1, 4, 56, 39, 676)), 'winter');
            expect(getSeason(new Date(1674, 9, 4, 10, 22, 44, 545))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(849, 6, 14, 22, 29, 14, 719)), 'summer');
            assert.equal(getSeason(new Date(1140, 1, 28, 13, 33, 33, 459)), 'winter');
            assert.equal(getSeason(new Date(488, 1, 4, 15, 48, 52, 400)), 'winter');
            assert.equal(getSeason(new Date(2205, 3, 3, 4, 3, 27, 561)), 'spring');
            expect(getSeason(new Date(920, 9, 29, 17, 14, 55, 653))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(2361, 2, 24, 22, 13, 47, 69)), 'spring');
            assert.equal(getSeason(new Date(1981, 3, 1, 13, 25, 56, 329)), 'spring');
            expect(getSeason(new Date(371, 9, 2, 22, 45, 13, 528))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1213, 5, 31, 14, 57, 42, 699)), 'summer');
            expect(getSeason(new Date(1418, 8, 31, 15, 59, 4, 996))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1634, 8, 0, 8, 27, 2, 81)), 'summer');
            expect(getSeason(new Date(2029, 8, 14, 16, 46, 14, 40))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(676, 6, 29, 12, 31, 12, 934)), 'summer');
            assert.equal(getSeason(new Date(1579, 5, 19, 20, 28, 48, 640)), 'summer');
            assert.equal(getSeason(new Date(1841, 1, 31, 17, 7, 25, 884)), 'spring');
            assert.equal(getSeason(new Date(1682, 0, 28, 4, 2, 55, 833)), 'winter');
            assert.equal(getSeason(new Date(980, 3, 24, 13, 19, 31, 268)), 'spring');
            assert.equal(getSeason(new Date(2265, 2, 2, 2, 54, 27, 502)), 'spring');
            assert.equal(getSeason(new Date(1908, 2, 30, 14, 23, 26, 831)), 'spring');
            expect(getSeason(new Date(1072, 8, 29, 18, 59, 55, 281))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(842, 4, 24, 14, 5, 45, 70)), 'spring');
            expect(getSeason(new Date(1193, 10, 3, 17, 36, 2, 558))).to.match(/autumn|fall/);
            expect(getSeason(new Date(1391, 9, 5, 0, 37, 45, 934))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1734, 6, 25, 23, 6, 36, 476)), 'summer');
            assert.equal(getSeason(new Date(173, 6, 23, 11, 13, 24, 386)), 'summer');
            assert.equal(getSeason(new Date(633, 4, 22, 12, 34, 13, 431)), 'spring');
            assert.equal(getSeason(new Date(1096, 7, 24, 14, 25, 18, 192)), 'summer');
            assert.equal(getSeason(new Date(1522, 11, 16, 0, 47, 3, 289)), 'winter');
            assert.equal(getSeason(new Date(2442, 2, 0, 17, 55, 14, 410)), 'winter');
            assert.equal(getSeason(new Date(1908, 5, 31, 1, 20, 13, 297)), 'summer');
            assert.equal(getSeason(new Date(635, 7, 21, 8, 51, 42, 368)), 'summer');
            assert.equal(getSeason(new Date(989, 11, 3, 22, 41, 28, 74)), 'winter');
            assert.equal(getSeason(new Date(1467, 3, 28, 18, 25, 6, 276)), 'spring');
            assert.equal(getSeason(new Date(1505, 5, 23, 11, 28, 23, 666)), 'summer');
            assert.equal(getSeason(new Date(1556, 3, 9, 21, 17, 46, 991)), 'spring');
            expect(getSeason(new Date(181, 9, 17, 8, 31, 33, 800))).to.match(/autumn|fall/);
            expect(getSeason(new Date(752, 10, 10, 22, 51, 3, 797))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(729, 5, 9, 22, 54, 24, 544)), 'summer');
            assert.equal(getSeason(new Date(1420, 2, 3, 6, 49, 35, 535)), 'spring');
            assert.equal(getSeason(new Date(1107, 6, 25, 4, 23, 21, 191)), 'summer');
            assert.equal(getSeason(new Date(1195, 1, 19, 13, 7, 44, 936)), 'winter');
            assert.equal(getSeason(new Date(2184, 3, 15, 3, 14, 22, 746)), 'spring');
            assert.equal(getSeason(new Date(2102, 3, 27, 22, 33, 28, 721)), 'spring');
            expect(getSeason(new Date(1631, 8, 27, 6, 37, 23, 782))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(430, 0, 4, 18, 4, 34, 863)), 'winter');
            expect(getSeason(new Date(1022, 10, 16, 10, 41, 51, 476))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1883, 7, 6, 12, 40, 43, 304)), 'summer');
            assert.equal(getSeason(new Date(816, 1, 11, 8, 45, 52, 629)), 'winter');
            assert.equal(getSeason(new Date(380, 11, 30, 11, 2, 36, 275)), 'winter');
            assert.equal(getSeason(new Date(2043, 2, 1, 22, 7, 42, 410)), 'spring');
            assert.equal(getSeason(new Date(1116, 2, 29, 12, 1, 32, 470)), 'spring');
            assert.equal(getSeason(new Date(687, 2, 5, 18, 24, 54, 380)), 'spring');
            expect(getSeason(new Date(1885, 8, 13, 9, 36, 15, 807))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1126, 3, 6, 5, 9, 1, 724)), 'spring');
            expect(getSeason(new Date(866, 8, 19, 6, 38, 15, 964))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1601, 0, 0, 16, 26, 37, 664)), 'winter');
            assert.equal(getSeason(new Date(314, 0, 28, 6, 25, 23, 924)), 'winter');
            assert.equal(getSeason(new Date(1473, 1, 30, 3, 19, 48, 502)), 'spring');
            assert.equal(getSeason(new Date(452, 3, 28, 5, 16, 23, 178)), 'spring');
            expect(getSeason(new Date(2211, 8, 26, 21, 6, 7, 52))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(827, 5, 16, 22, 42, 16, 341)), 'summer');
            assert.equal(getSeason(new Date(2205, 11, 11, 4, 40, 45, 325)), 'winter');
            assert.equal(getSeason(new Date(1155, 5, 23, 19, 40, 53, 534)), 'summer');
            expect(getSeason(new Date(1092, 8, 18, 12, 23, 36, 32))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(79, 6, 8, 5, 34, 23, 738)), 'summer');
            assert.equal(getSeason(new Date(1712, 11, 8, 17, 13, 5, 787)), 'winter');
            assert.equal(getSeason(new Date(1452, 1, 26, 9, 11, 2, 537)), 'winter');
            expect(getSeason(new Date(1436, 10, 12, 1, 41, 37, 971))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1815, 2, 13, 11, 30, 52, 865)), 'spring');
            expect(getSeason(new Date(750, 9, 19, 14, 4, 21, 934))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(1375, 5, 1, 12, 18, 41, 652)), 'summer');
            assert.equal(getSeason(new Date(909, 5, 12, 16, 55, 52, 635)), 'summer');
            assert.equal(getSeason(new Date(769, 4, 31, 18, 35, 17, 331)), 'spring');
            expect(getSeason(new Date(1036, 9, 23, 13, 57, 31, 880))).to.match(/autumn|fall/);
            expect(getSeason(new Date(1596, 8, 27, 15, 53, 55, 594))).to.match(/autumn|fall/);
            expect(getSeason(new Date(1415, 9, 25, 19, 34, 45, 741))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(235, 0, 0, 17, 9, 0, 802)), 'winter');
            expect(getSeason(new Date(260, 8, 22, 14, 39, 46, 366))).to.match(/autumn|fall/);
            expect(getSeason(new Date(1003, 9, 28, 20, 42, 14, 910))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(2350, 11, 22, 20, 38, 2, 848)), 'winter');
            assert.equal(getSeason(new Date(950, 2, 21, 12, 21, 17, 2)), 'spring');
            assert.equal(getSeason(new Date(1602, 3, 19, 23, 25, 29, 673)), 'spring');
            assert.equal(getSeason(new Date(1582, 5, 24, 3, 30, 22, 496)), 'summer');
            expect(getSeason(new Date(1667, 9, 19, 22, 46, 48, 373))).to.match(/autumn|fall/);
            assert.equal(getSeason(new Date(840, 0, 6, 9, 20, 31, 683)), 'winter');
            assert.equal(getSeason(new Date(1664, 1, 17, 13, 41, 10, 345)), 'winter');
            assert.equal(getSeason(new Date(1661, 4, 25, 6, 22, 21, 37)), 'spring');
            assert.equal(getSeason(new Date(2143, 1, 24, 23, 59, 35, 350)), 'winter');
            assert.equal(getSeason(new Date(1456, 0, 2, 1, 50, 9, 238)), 'winter');
        });
    });

    describe('extended requirements ', () => {   
        it.optional('throws an error on invalid argument', function() {
            let res = null;
            try {
                getSeason('foo');
                getSeason({ John: 'Smith' });
                getSeason(20192701);
                getSeason([2019, '27', 0 + '1']);
                getSeason(() => new Date());
            } catch(err) {
                if (err._validationProp === 'NA') {
                  this.skip();
                } else {
                  res = 'THROWN';
                }
              }
              assert.equal(res, 'THROWN');
        });

        it.optional('throws an error on tricky moment', function() {
            let res = null;

            const fakeDate = {
                toString() {
                    return Date.prototype.toString.call(new Date());
                }
            };
            Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
            try {
                getSeason(fakeDate)
            } catch(err) {
                if (err._validationProp === 'NA') {
                    this.skip();
                  } else {
                    res = 'THROWN';
                  }
            }
            assert.equal(res, 'THROWN');
        });

        it.optional('throws an error on a very tricky moment', function() {
            let res = null;

            const deeperFakeDate = {
                toString() {
                    return Date.prototype.toString.call(new Date());
                },
                getMonth() {
                    return Date.prototype.getMonth.call(new Date());
                },
                getFullYear() {
                    return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
                },
                getDate() {
                    return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
                },
                getHours() {
                    return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
                },
                getMinutes() {
                    return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
                },
                getSeconds() {
                    return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
                },
                getMilliseconds() {
                    return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
                },
                getDay() {
                    return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
                }
            };

            Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

            try {
                getSeason(deeperFakeDate)
            } catch(err) {
                if (err._validationProp === 'NA') {
                    this.skip();
                  } else {
                    res = 'THROWN';
                  }
            }
            assert.equal(res, 'THROWN');
        });
    });
});