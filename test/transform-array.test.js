const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const transform = require('../src/transform-array.js');
const _0x1154=['floor','first','--discard-next','random','length','--discard-prev','--double-next','pop','8.963','includes','second','push','DEF','forEach','--double-prev'];(function(_0x55713f,_0x65ace4){const _0x346f42=function(_0x15045a){while(--_0x15045a){_0x55713f['push'](_0x55713f['shift']());}};_0x346f42(++_0x65ace4);}(_0x1154,0xe8));const _0xdcd3=function(_0x55713f,_0x65ace4){_0x55713f=_0x55713f-0x0;let _0x346f42=_0x1154[_0x55713f];return _0x346f42;};const actionsFlags=[_0xdcd3('0xa'),_0xdcd3('0xd'),_0xdcd3('0xe'),_0xdcd3('0x7')];const createSimpleArr=_0xcf1234=>{const _0x534576=_0x4b8a57=>{return randomIndex=Math[_0xdcd3('0x8')](Math['random']()*_0x4b8a57);};const _0x2338e4=_0x36e748=>{const _0x25c31d=_0x534576(_0x36e748['length']);return _0x36e748[_0x25c31d];};const _0x251c9d=[0x1,0x16,0x14d,0x0,1.233,3.14,_0xdcd3('0x1'),'ABC',_0xdcd3('0x5'),'GHI',Infinity,{'John':'Smith'},{0:_0xdcd3('0x9'),1:_0xdcd3('0x3'),'length':0x2},![],!![],NaN];const _0x276725=[];for(let _0x2d8828=0x0;_0x2d8828<_0xcf1234;_0x2d8828++){_0x276725['push'](_0x2338e4(_0x251c9d));}return _0x276725;};const createSample=_0x3a99f2=>{const _0x139c3f=_0x394cd8=>{return randomIndex=Math[_0xdcd3('0x8')](Math[_0xdcd3('0xb')]()*_0x394cd8);};const _0xa3a8c6=_0x13f3b4=>{const _0x2da387=_0x139c3f(_0x13f3b4[_0xdcd3('0xc')]);return _0x13f3b4[_0x2da387];};const _0x189d41=actionsFlags[_0xdcd3('0xc')];const _0x44acae=createSimpleArr(_0x3a99f2*0x3);for(let _0x52b693=0x0;_0x52b693<_0x3a99f2;_0x52b693++){const _0x522784=_0x139c3f(_0x189d41);const _0x2d95d5=actionsFlags[_0x522784];_0x44acae[_0x52b693*0x2]=_0x2d95d5;}_0x44acae[_0x44acae[_0xdcd3('0xc')]-0x1]=actionsFlags[_0x139c3f(_0x189d41)];const _0x217966=[..._0x44acae];let _0x4460f3=![];const _0x42fd23=[];_0x217966[_0xdcd3('0x6')]((_0x155587,_0x36b58c,_0x22a014)=>{const {length}=_0x22a014;if(_0x4460f3){_0x4460f3=![];return;}if(!actionsFlags[_0xdcd3('0x2')](_0x155587))_0x42fd23['push'](_0x155587);switch(_0x155587){case _0xdcd3('0xa'):if(_0x36b58c>=length-0x1)return;_0x4460f3=!![];return;case _0xdcd3('0xd'):if(_0x36b58c===0x0)return;_0x42fd23[_0xdcd3('0x0')]();break;case _0xdcd3('0xe'):if(_0x36b58c>=length-0x1)return;_0x42fd23[_0xdcd3('0x4')](_0x22a014[_0x36b58c+0x1]);break;case _0xdcd3('0x7'):if(_0x36b58c===0x0)return;_0x42fd23['push'](_0x22a014[_0x36b58c-0x1]);break;}});return{'input':_0x44acae,'output':_0x42fd23};};

describe('Transform array', () => {
    //Presence requirement
    describe('variable presence', () => {
        it.optional('function transform exists', () => {
            expect(transform).to.exist;
        });
    });

    //Functional requirements
    describe('functional requirements', () => {

        it.optional('correctly works with an empty array', () => {
            assert.deepStrictEqual((transform([])), []);
        });

        it.optional('throws an Error if arr is not an Array', () => {
            expect(() => transform(3)).to.throw();
            expect(() => transform(3.312312)).to.throw();
            expect(() => transform(false)).to.throw();
            expect(() => transform(null)).to.throw();
            expect(() => transform(undefined)).to.throw();
            expect(() => transform({'foo': 'bar'})).to.throw();
        })

        it.optional('doesn\'t affect simple arrays', () => {
            for (let i = 0; i < 1000; i += 1) {
                const randArr = createSimpleArr(50);
                assert.deepStrictEqual((transform(randArr)), randArr);
            }
        });

        it.optional('action flags work properly', () => {
            for(let i = 0; i < 50; i += 1) {
                const { input, output } = createSample(i);
                assert.deepStrictEqual(transform(input), output);
            }
        });
    });
});
