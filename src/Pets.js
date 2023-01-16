class Pet {
    constructor(
        name,
        dateOfBirth,
        timeLastFed,
        hungerStatus,
        timeLastWalked,
        fitness,
        lifeStatus,
    ) {

        this.name = name
        this.dateOfBirth = dateOfBirth
        this.timeLastFed = timeLastFed
        this.hungerStatus = hungerStatus
        this.timeLastWalked = timeLastWalked
        this.fitness = fitness
        this.lifeStatus = lifeStatus
            // "Wed Dec 4 2022 17:47:08 GMT+0300"


    }

    // getters

    get age() {
        return this.calculateAge()
    }
    get ifHungry() {
        return this.checkHungerStatus()
    }
    get ifFit() {
        return this.checkFitness()
    }
    get ifAlive() {
        return this.checkLifeStatus()
    }

    // methods
    calculateAge() {
        let dateToday = new Date();
        let birthDay = new Date(this.dateOfBirth)
        let elapsedTime = dateToday.getTime() - birthDay.getTime()
        let daysSinceBirth = Math.floor(elapsedTime / (1000 * 3600 * 24))
        return `${daysSinceBirth} days old`
    }

    checkHungerStatus() {

        let dateAndTimeNow = new Date()
        let timeHungry = dateAndTimeNow - new Date(this.timeLastFed)
        let hoursHungry = Math.floor(timeHungry / (1000 * 3600))

        if (hoursHungry > 10) {
            return "Starving"
        }
        if (hoursHungry < 10 && hoursHungry >= 6) {
            return "Very Hungry"
        }
        if (hoursHungry < 6) {
            return "Full"
        }
    }

    checkFitness() {

        let dateNow = new Date();
        let dateBorn = new Date(this.dateOfBirth)
        let elapsedTime = dateNow - dateBorn
        let daysSinceBirth = Math.floor(elapsedTime / (1000 * 3600 * 24))

        let timeSinceLastWalk = dateNow - new Date(this.timeLastWalked)
        let daysSinceLastWalk = Math.floor(timeSinceLastWalk / (1000 * 3600 * 24))

        if (daysSinceBirth >= 20 && daysSinceLastWalk >= 3) {
            return `Obese`
        }
        if (daysSinceBirth >= 15 && daysSinceLastWalk >= 3) {
            return "Slightly unfit"
        }
        if (daysSinceBirth >= 9 && daysSinceLastWalk >= 5) {
            return "Moderately fit"
        }
        if (daysSinceBirth < 9) {
            return "Fit"
        }
    }

    checkLifeStatus() {

        let dateNow = new Date();
        let dateBorn = new Date(this.dateOfBirth)
        let elapsedTime = dateNow - dateBorn
        let daysSinceBirth = Math.floor(elapsedTime / (1000 * 3600 * 24))

        let timeHungry = dateNow - new Date(this.timeLastFed)
        let hoursHungry = Math.floor(timeHungry / (1000 * 3600))

        if (daysSinceBirth >= 30) {
            return "Dead"
        }
        if (this.fitness == "Obese" && this.hungerStatus == "Starving") {
            return "Dead"
        }
        if ((this.fitness == "Fit" || this.fitness == "Slightly unfit" || this.fitness == "Moderately fit") && (this.hungerStatus == "Full" || this.hungerStatus == "Very Hungry") && hoursHungry < 48) {
            return "Alive"
        }
        if (hoursHungry > 48) {
            return "Dead"
        }


    }

    talkToPet() {

        if (this.ifAlive === "Alive") {
            if (this.hungerStatus == "Very hungry") {
                return `I am hungry please feed me`
            }
            if (!(this.fitness) == "Fit") {
                return `I am feeling unfit please walk me`
            }
        } else {
            return `Your pet is dead sorry for your lose`
        }

    }

    feedPet = function() {
        if (this.ifAlive === 'Alive') {
            this.timeLastFed = new Date()
            return this.timeLastFed
        } else {
            return `Sorry your pet is dead you can no longer feed it`
        }
    }

    walkPet = function() {
        if (this.ifAlive === "Alive") {
            this.timeLastWalked = new Date()
            return this.timeLastWalked
        } else {
            return `Sorry your pet is dead you can no longer walk it`
        }
    }


}

module.exports = Pet

const bisco = new Pet(
    "Bisco",
    "Wed Jan 2 2023 17:47:08 GMT+0300",
    "Wed Jan 2 2023 17:47:08 GMT+0300",
    "Full",
    "Wed Jan 2 2023 17:47:08 GMT+0300",
    "Fit",
    "Alive"
)
console.log(bisco)
console.log(bisco.age)
console.log(bisco.ifHungry)
console.log(bisco.ifFit)
console.log(bisco.ifAlive)