const Pet = require('../src/Pets')

describe('Pet', () => {
    it('has a name', () => {
        const bisco = new Pet(
            "Bisco",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Full",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Fit",
            "Alive"
        )

        expect(bisco.age).toBe('14 days old')

    })

    it('is hungry', () => {
        const bisco = new Pet(
            "Bisco",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Full",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Fit",
            "Alive"
        )

        expect(bisco.ifHungry).toBe('Starving')

    })

    it('is fit', () => {
        const bisco = new Pet(
            "Bisco",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Full",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Fit",
            "Alive"
        )
        expect(bisco.ifFit).toBe('Moderately fit')
    })

    it('is alive', () => {
        const bisco = new Pet(
            "Bisco",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Full",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Fit",
            "Alive"
        )

        expect(bisco.ifAlive).toBe('Dead')

    })

})

describe('Pet function', () => {
    it('talks to pet', () => {
        const bisco = new Pet(
            "Bisco",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Full",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Fit",
            "Alive"
        )
        expect(bisco.talkToPet()).toBe('Your pet is dead sorry for your lose')
    })

    it('feeds pet', () => {
        const bisco = new Pet(
            "Bisco",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Full",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Fit",
            "Alive"
        )
        expect(bisco.feedPet()).toBe('Sorry your pet is dead you can no longer feed it')
    })

    it('walks pet', () => {
        const bisco = new Pet(
            "Bisco",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Full",
            "Wed Jan 2 2023 17:47:08 GMT+0300",
            "Fit",
            "Alive"
        )
        expect(bisco.walkPet()).toBe('Sorry your pet is dead you can no longer walk it')
    })

})