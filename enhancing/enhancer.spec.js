const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(enhancer.repair({ durability: 899 }).durability).toBe(100)
        })
    })
})