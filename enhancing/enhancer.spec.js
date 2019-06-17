const enhancer = require('./enhancer.js');
// test away!
// item = {
//     name: "whatever",
//     durability: 0-100,
//     enhancement: 0-20
// }


describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(enhancer.repair({ durability: 899 })).toEqual({error: "check yourself"})
            expect(enhancer.repair({ durability: 20 }).durability).toBe(100)
            expect(enhancer.repair({ durability: -20 })).toEqual({error: "check yourself"})
        })
    })
    
    describe('success()', () => {
        it('increases enhanment by 1 to a max of 20', () => {
            expect(enhancer.succeed({enhancement: 10}).enhancement).toBe(11)
            expect(enhancer.succeed({enhancement: 20}).enhancement).toBe(20)
            expect(enhancer.succeed({enhancement: -10}).enhancement).toBe(-9)
        })
    })
})