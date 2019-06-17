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
            expect(enhancer.repair({ durability: 899 })).toEqual({error: "Check ranges"})
            expect(enhancer.repair({ durability: 20 }).durability).toBe(100)
            expect(enhancer.repair({ durability: -20 })).toEqual({error: "Check ranges"})
        })
    })
    
    describe('succeed()', () => {
        it('increases enhanment by 1 to a max of 20', () => {
            expect(enhancer.succeed({enhancement: 10}).enhancement).toBe(11)
            expect(enhancer.succeed({enhancement: 20}).enhancement).toBe(20)
            expect(enhancer.succeed({enhancement: -3})).toEqual({error: 'Check ranges'})
        })
    })

    describe('fail()', () => {
        it('decreases the durability by 5', () => {
            expect(enhancer.fail({durability: 10, enhancement: 10 }).durability).toBe(5);
        })
        it('decreases the durability by 10', () => {
            expect(enhancer.fail({durability: 10, enhancement: 15 }).durability).toBe(0)
            expect(enhancer.fail({durability: 15, enhancement: 16 }).durability).toBe(5)
        })
        it('decreases the durability by 10 and enhancement by 1', () => {
            expect(enhancer.fail({durability: 15, enhancement: 18 }).durability).toBe(5)
            expect(enhancer.fail({durability: 15, enhancement: 18 }).enhancement).toBe(17)
            expect(enhancer.fail({durability: 19, enhancement: 19 })).toEqual({durability: 9, enhancement: 18})
        })
    })
})