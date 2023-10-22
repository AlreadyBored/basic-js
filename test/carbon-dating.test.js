const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { dateSample } = require('../src/carbon-dating.js');

describe('Carbon dating', () => {
  // Presence requirement
  describe('function presence', () => {
    test('function dateSample exists', () => {
      assert.strictEqual(typeof dateSample, 'function');
    });
  });

  // Functional requirements
  describe('base requirements', () => {
    test('should return false on wrong type', () => {
      assert.strictEqual(dateSample(3), false);
      assert.strictEqual(dateSample(3.312312), false);
      assert.strictEqual(dateSample(false), false);
      assert.strictEqual(dateSample(null), false);
      assert.strictEqual(dateSample(undefined), false);
      assert.strictEqual(dateSample([3]), false);
      assert.strictEqual(dateSample(['3']), false);
      assert.strictEqual(dateSample({ 3.14: '3dec' }), false);
    });

    test('should return false if no argument', () => {
      assert.strictEqual(dateSample(), false);
    });

    test('should validate parameter', () => {
      assert.strictEqual(dateSample('ACTIVITY OVER 9000'), false);
      assert.strictEqual(dateSample('one'), false);
      assert.strictEqual(dateSample(''), false);
      assert.strictEqual(dateSample(' '), false);
      assert.strictEqual(dateSample(' \n\t\r'), false);
    });
  });

  describe('functional requirements ', () => {
    describe('passes simpliest check and determines correct tests', () => {
      let isLogCalculated = false;
      try {
        isLogCalculated = dateSample('1') === 22387;
      } catch (e) {}

      if (isLogCalculated) {
        test('basic examples', () => {
          assert.strictEqual(dateSample('3'), 13305);
          assert.strictEqual(dateSample('1'), 22387);
          assert.strictEqual(dateSample('9'), 4223);
          assert.strictEqual(dateSample('11'), 2564);
        });

        test('should handle floating-point numbers', () => {
          assert.strictEqual(dateSample('3.142'), 12923);
          assert.strictEqual(dateSample('1.1'), 21599);
          assert.strictEqual(dateSample('9.8888'), 3445);
          assert.strictEqual(dateSample('9.59383373526808'), 3695);
          assert.strictEqual(dateSample('9.122605776326203'), 4111);
          assert.strictEqual(dateSample('8.738732722522064'), 4467);
          assert.strictEqual(dateSample('1.6196187736736514'), 18401);
          assert.strictEqual(dateSample('1.2790192613422384'), 20353);
          assert.strictEqual(dateSample('2.888875299486392'), 13617);
          assert.strictEqual(dateSample('10.98064159551825'), 2579);
          assert.strictEqual(dateSample('5.777957759163509'), 7887);
          assert.strictEqual(dateSample('6.621137546046827'), 6761);
          assert.strictEqual(dateSample('2.3428430852333437'), 15349);
          assert.strictEqual(dateSample('7.724878580528199'), 5486);
          assert.strictEqual(dateSample('13.120235263248446'), 1107);
          assert.strictEqual(dateSample('8.324373471546389'), 4868);
          assert.strictEqual(dateSample('1.7062450205046806'), 17970);
          assert.strictEqual(dateSample('1.6311084198720187'), 18342);
          assert.strictEqual(dateSample('5.594044275261709'), 8154);
          assert.strictEqual(dateSample('14.108797507106168'), 507);
          assert.strictEqual(dateSample('14.146539705560468'), 485);
          assert.strictEqual(dateSample('13.33347987044412'), 974);
          assert.strictEqual(dateSample('4.765932877283877'), 9479);
          assert.strictEqual(dateSample('8.51944141558894'), 4677);
          assert.strictEqual(dateSample('13.819309017181155'), 678);
          assert.strictEqual(dateSample('11.950183315442594'), 1880);
          assert.strictEqual(dateSample('12.694626753019994'), 1380);
          assert.strictEqual(dateSample('6.3761953094543955'), 7072);
          assert.strictEqual(dateSample('12.852141151476653'), 1278);
          assert.strictEqual(dateSample('13.071039628340847'), 1138);
          assert.strictEqual(dateSample('6.493986520194598'), 6921);
          assert.strictEqual(dateSample('6.321328150621245'), 7144);
          assert.strictEqual(dateSample('14.79870028971672'), 112);
          assert.strictEqual(dateSample('13.250266175530076'), 1026);
          assert.strictEqual(dateSample('6.944901487088341'), 6366);
          assert.strictEqual(dateSample('14.397174904284904'), 340);
          assert.strictEqual(dateSample('4.350361469537699'), 10233);
          assert.strictEqual(dateSample('14.649855450638785'), 196);
          assert.strictEqual(dateSample('10.480192633840995'), 2965);
          assert.strictEqual(dateSample('7.574553306075307'), 5649);
          assert.strictEqual(dateSample('4.196977266712704'), 10530);
          assert.strictEqual(dateSample('5.48287476036236'), 8320);
          assert.strictEqual(dateSample('2.2141874881551713'), 15816);
          assert.strictEqual(dateSample('14.562893448904727'), 245);
          assert.strictEqual(dateSample('14.67235077668104'), 183);
          assert.strictEqual(dateSample('13.286561059407228'), 1003);
          assert.strictEqual(dateSample('10.151088522661208'), 3228);
          assert.strictEqual(dateSample('1.4679868631708581'), 19213);
          assert.strictEqual(dateSample('9.132918506822495'), 4102);
          assert.strictEqual(dateSample('10.537246317166375'), 2920);
          assert.strictEqual(dateSample('8.463376256343299'), 4732);
          assert.strictEqual(dateSample('12.853448858927361'), 1277);
          assert.strictEqual(dateSample('9.236099344252306'), 4009);
          assert.strictEqual(dateSample('12.113017234434977'), 1768);
          assert.strictEqual(dateSample('7.0346778442616085'), 6260);
          assert.strictEqual(dateSample('6.461538179672999'), 6963);
          assert.strictEqual(dateSample('5.726699236202798'), 7961);
          assert.strictEqual(dateSample('6.399077744469016'), 7043);
          assert.strictEqual(dateSample('8.910632728691352'), 4306);
          assert.strictEqual(dateSample('12.395711646870861'), 1577);
          assert.strictEqual(dateSample('2.627831588550764'), 14400);
          assert.strictEqual(dateSample('13.142621168637024'), 1093);
          assert.strictEqual(dateSample('9.351818919371734'), 3906);
          assert.strictEqual(dateSample('4.825870296787675'), 9375);
          assert.strictEqual(dateSample('1.3098215892199763'), 20156);
          assert.strictEqual(dateSample('8.75663581378592'), 4450);
          assert.strictEqual(dateSample('4.209610674222847'), 10505);
          assert.strictEqual(dateSample('1.2765589684191272'), 20369);
          assert.strictEqual(dateSample('5.7578457344628955'), 7916);
          assert.strictEqual(dateSample('5.235717978655887'), 8702);
          assert.strictEqual(dateSample('7.274903980560317'), 5982);
          assert.strictEqual(dateSample('14.58820616255119'), 231);
          assert.strictEqual(dateSample('12.524538378535606'), 1491);
          assert.strictEqual(dateSample('1.2078020863539156'), 20826);
          assert.strictEqual(dateSample('14.40378832713592'), 336);
          assert.strictEqual(dateSample('3.3957038035064295'), 12281);
          assert.strictEqual(dateSample('8.027346033974952'), 5169);
          assert.strictEqual(dateSample('9.100586351039066'), 4131);
          assert.strictEqual(dateSample('12.325349094365222'), 1624);
          assert.strictEqual(dateSample('9.426088638589919'), 3841);
          assert.strictEqual(dateSample('11.526074668808832'), 2178);
          assert.strictEqual(dateSample('13.154878524299226'), 1086);
          assert.strictEqual(dateSample('10.26771664914319'), 3134);
          assert.strictEqual(dateSample('3.2809840641143047'), 12565);
          assert.strictEqual(dateSample('1.5785238224683922'), 18613);
          assert.strictEqual(dateSample('12.787884876823437'), 1319);
          assert.strictEqual(dateSample('9.133070472061402'), 4102);
          assert.strictEqual(dateSample('1.1977519436068427'), 20895);
          assert.strictEqual(dateSample('5.748497796807982'), 7929);
          assert.strictEqual(dateSample('8.45786238798846'), 4737);
          assert.strictEqual(dateSample('9.835188024820345'), 3490);
          assert.strictEqual(dateSample('11.507915591529642'), 2191);
          assert.strictEqual(dateSample('9.847248139766663'), 3480);
          assert.strictEqual(dateSample('12.996494080154942'), 1186);
          assert.strictEqual(dateSample('7.763901479948043'), 5445);
          assert.strictEqual(dateSample('10.82564557289928'), 2697);
          assert.strictEqual(dateSample('12.10115029373225'), 1776);
          assert.strictEqual(dateSample('14.215290008732916'), 445);
          assert.strictEqual(dateSample('11.489246279071903'), 2205);
          assert.strictEqual(dateSample('2.412658071378013'), 15106);
          assert.strictEqual(dateSample('13.075499143313442'), 1136);
          assert.strictEqual(dateSample('6.555955979600091'), 6843);
        });
      } else {
        test('basic examples', () => {
          assert.strictEqual(dateSample('3'), 13308);
          assert.strictEqual(dateSample('1'), 22392);
          assert.strictEqual(dateSample('9'), 4224);
          assert.strictEqual(dateSample('11'), 2565);
        });

        test('should handle floating-point numbers', () => {
          assert.strictEqual(dateSample('3.142'), 12926);
          assert.strictEqual(dateSample('1.1'), 21604);
          assert.strictEqual(dateSample('9.8888'), 3446);
          assert.strictEqual(dateSample('9.59383373526808'), 3696);
          assert.strictEqual(dateSample('9.122605776326203'), 4112);
          assert.strictEqual(dateSample('8.738732722522064'), 4468);
          assert.strictEqual(dateSample('1.6196187736736514'), 18405);
          assert.strictEqual(dateSample('1.2790192613422384'), 20357);
          assert.strictEqual(dateSample('2.888875299486392'), 13620);
          assert.strictEqual(dateSample('10.98064159551825'), 2580);
          assert.strictEqual(dateSample('5.777957759163509'), 7889);
          assert.strictEqual(dateSample('6.621137546046827'), 6762);
          assert.strictEqual(dateSample('2.3428430852333437'), 15352);
          assert.strictEqual(dateSample('7.724878580528199'), 5487);
          assert.strictEqual(dateSample('13.120235263248446'), 1108);
          assert.strictEqual(dateSample('8.324373471546389'), 4869);
          assert.strictEqual(dateSample('1.7062450205046806'), 17974);
          assert.strictEqual(dateSample('1.6311084198720187'), 18346);
          assert.strictEqual(dateSample('5.594044275261709'), 8156);
          assert.strictEqual(dateSample('14.108797507106168'), 507);
          assert.strictEqual(dateSample('14.146539705560468'), 485);
          assert.strictEqual(dateSample('13.33347987044412'), 974);
          assert.strictEqual(dateSample('4.765932877283877'), 9481);
          assert.strictEqual(dateSample('8.51944141558894'), 4678);
          assert.strictEqual(dateSample('13.819309017181155'), 678);
          assert.strictEqual(dateSample('11.950183315442594'), 1880);
          assert.strictEqual(dateSample('12.694626753019994'), 1380);
          assert.strictEqual(dateSample('6.3761953094543955'), 7074);
          assert.strictEqual(dateSample('12.852141151476653'), 1278);
          assert.strictEqual(dateSample('13.071039628340847'), 1139);
          assert.strictEqual(dateSample('6.493986520194598'), 6923);
          assert.strictEqual(dateSample('6.321328150621245'), 7145);
          assert.strictEqual(dateSample('14.79870028971672'), 112);
          assert.strictEqual(dateSample('13.250266175530076'), 1026);
          assert.strictEqual(dateSample('6.944901487088341'), 6368);
          assert.strictEqual(dateSample('14.397174904284904'), 340);
          assert.strictEqual(dateSample('4.350361469537699'), 10235);
          assert.strictEqual(dateSample('14.649855450638785'), 196);
          assert.strictEqual(dateSample('10.480192633840995'), 2965);
          assert.strictEqual(dateSample('7.574553306075307'), 5650);
          assert.strictEqual(dateSample('4.196977266712704'), 10532);
          assert.strictEqual(dateSample('5.48287476036236'), 8322);
          assert.strictEqual(dateSample('2.2141874881551713'), 15819);
          assert.strictEqual(dateSample('14.562893448904727'), 245);
          assert.strictEqual(dateSample('14.67235077668104'), 183);
          assert.strictEqual(dateSample('13.286561059407228'), 1003);
          assert.strictEqual(dateSample('10.151088522661208'), 3229);
          assert.strictEqual(dateSample('1.4679868631708581'), 19218);
          assert.strictEqual(dateSample('9.132918506822495'), 4103);
          assert.strictEqual(dateSample('10.537246317166375'), 2920);
          assert.strictEqual(dateSample('8.463376256343299'), 4733);
          assert.strictEqual(dateSample('12.853448858927361'), 1277);
          assert.strictEqual(dateSample('9.236099344252306'), 4010);
          assert.strictEqual(dateSample('12.113017234434977'), 1768);
          assert.strictEqual(dateSample('7.0346778442616085'), 6261);
          assert.strictEqual(dateSample('6.461538179672999'), 6964);
          assert.strictEqual(dateSample('5.726699236202798'), 7962);
          assert.strictEqual(dateSample('6.399077744469016'), 7044);
          assert.strictEqual(dateSample('8.910632728691352'), 4307);
          assert.strictEqual(dateSample('12.395711646870861'), 1577);
          assert.strictEqual(dateSample('2.627831588550764'), 14403);
          assert.strictEqual(dateSample('13.142621168637024'), 1093);
          assert.strictEqual(dateSample('9.351818919371734'), 3907);
          assert.strictEqual(dateSample('4.825870296787675'), 9377);
          assert.strictEqual(dateSample('1.3098215892199763'), 20160);
          assert.strictEqual(dateSample('8.75663581378592'), 4451);
          assert.strictEqual(dateSample('4.209610674222847'), 10507);
          assert.strictEqual(dateSample('1.2765589684191272'), 20373);
          assert.strictEqual(dateSample('5.7578457344628955'), 7917);
          assert.strictEqual(dateSample('5.235717978655887'), 8703);
          assert.strictEqual(dateSample('7.274903980560317'), 5984);
          assert.strictEqual(dateSample('14.58820616255119'), 231);
          assert.strictEqual(dateSample('12.524538378535606'), 1492);
          assert.strictEqual(dateSample('1.2078020863539156'), 20831);
          assert.strictEqual(dateSample('14.40378832713592'), 336);
          assert.strictEqual(dateSample('3.3957038035064295'), 12284);
          assert.strictEqual(dateSample('8.027346033974952'), 5170);
          assert.strictEqual(dateSample('9.100586351039066'), 4132);
          assert.strictEqual(dateSample('12.325349094365222'), 1624);
          assert.strictEqual(dateSample('9.426088638589919'), 3842);
          assert.strictEqual(dateSample('11.526074668808832'), 2179);
          assert.strictEqual(dateSample('13.154878524299226'), 1086);
          assert.strictEqual(dateSample('10.26771664914319'), 3135);
          assert.strictEqual(dateSample('3.2809840641143047'), 12568);
          assert.strictEqual(dateSample('1.5785238224683922'), 18617);
          assert.strictEqual(dateSample('12.787884876823437'), 1320);
          assert.strictEqual(dateSample('9.133070472061402'), 4103);
          assert.strictEqual(dateSample('1.1977519436068427'), 20900);
          assert.strictEqual(dateSample('5.748497796807982'), 7931);
          assert.strictEqual(dateSample('8.45786238798846'), 4738);
          assert.strictEqual(dateSample('9.835188024820345'), 3490);
          assert.strictEqual(dateSample('11.507915591529642'), 2192);
          assert.strictEqual(dateSample('9.847248139766663'), 3480);
          assert.strictEqual(dateSample('12.996494080154942'), 1186);
          assert.strictEqual(dateSample('7.763901479948043'), 5446);
          assert.strictEqual(dateSample('10.82564557289928'), 2697);
          assert.strictEqual(dateSample('12.10115029373225'), 1776);
          assert.strictEqual(dateSample('14.215290008732916'), 445);
          assert.strictEqual(dateSample('11.489246279071903'), 2205);
          assert.strictEqual(dateSample('2.412658071378013'), 15110);
          assert.strictEqual(dateSample('13.075499143313442'), 1136);
          assert.strictEqual(dateSample('6.555955979600091'), 6844);
        });
      }
    });

    test('should handle inadequate values', () => {
      assert.strictEqual(dateSample('9000'), false);
      assert.strictEqual(dateSample('15.1'), false);
      assert.strictEqual(dateSample('0'), false);
      assert.strictEqual(dateSample('-5'), false);
      assert.strictEqual(dateSample('-55.8'), false);
    });
  });
});
