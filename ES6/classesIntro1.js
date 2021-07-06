class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.job = '';
    }

    print () {
        console.log(`${this.name} | ${this.age}`)
    }

    // setJob(newJob) {
    //     if (typeof newJob !== 'string') {
    //         throw new Error ('Job title has to be string type')
    //     }
    //     this.job = newJob;
    // }

    // getJob() {
    //     return this.job;
    // }
}


let person1 = new Person ('Pera', 22);

person1.job = 'Glavni kuvar';  //stari nacin kako se dodaje vrednost propretiju//

console.log(person1);  //=> Person { name: 'Pera', age: 22, job: '' }
                       //=> Person { name: 'Pera', age: 22, job: 'Glavni kuvar' }
person1.print();

class Expedition extends Person {
    constructor (name, age, gear) {
        super (name, age) 
        this.gear = gear;
    }
    print () {
        super.print ();
        console.log (`Bring your ${this.gear.join(' and your ')}`)
    }
}

const trip = new Expedition ('Pera', 22, ['sunglesses', 'camera']);

trip.print();


