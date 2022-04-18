/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */
class Traveler {
    constructor(name, food, isHealty) {
        this.name = name;
        this.food = 1;
        this.isHealty = true;
}   

    eat() {
    if (this.food <= 0) {
        this.isHealty = false;
    } else {
        this.food = this.food - 1;
    }
    };

    hunt() {
    this.food += 2
}
};

class Wagon {
    constructor (capacity) {

    }


    totalFood() {
    let total = 0;
    this.passagers.forEach((traveler) => {
    total = total + traveler.food;
    });
    return total;
};

    AvailableSeatCount() {
    if (!this.passagers) {
        return this.capacity;
    }
    else {
        return this.capacity - this.passagers.length;
    }
}

    join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
    this.passagers.push(traveler);
    }
};

    shouldQuarantine = function () {
    for (let i = 0; i < this.passagers.length; i++) {
        if (this.passagers[i].isHealty == false) {
            return true;
        }
    }
    return false;
};
}
// Create your Classes here.
class Doctor extends Traveler {
    constructor(name) {
        super(name);
    }

    heal(traveller) {
        traveller.isHealthy = true;
    }
    }

class Hunter extends Traveler {
    constructor(name) {
        super(name);
        this.food = 2;
    }
    hunt() {
        this.food += 5;
    }
    eat() {
        if (this.food > 1) this.food -= 2;
        else {
            this.food = 0;
            this.isHealthy = false;
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food < numOfFoodUnits);
        else {
            traveler.food += numOfFoodUnits;
            this.food -= numOfFoodUnits;
        }
    }
    }

/* 
Leave the following code unmodified
*/

export { Doctor, Hunter, Traveler, Wagon };