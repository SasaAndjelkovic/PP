
(function () {
    function Person (name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function() {
            return this.name + ' ' + this.surname;
        }
    }

    function Seat (number, category) {
        this.number = number;
        this.category = category;
        this.getData = function() {
            return this.number + ', ' + this.category.toUpperCase();
        }
    }
   
    function Passenger (person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData();
        }
    }

    function Flight (relation, date, listOfPassengers) {
        this.relation = relation;
        this.date = new Date(date);     
        this.listOfPassengers = [];
        this.addPassenger = function(passenger) {
            this.listOfPassengers.push(passenger);
        }
        this.getData = function () {
            var year = this.date.getFullYear ();
            var month = this.date.getMonth () + 1;
            var day = this.date.getDate ();
            var result = '\t' + day + '.' + month + '.' + year + ', ' + this.relation + '\n';
            this.listOfPassengers.forEach (function(passanger) {
                result += '\t\t' + this.passenger.getData() + '\n'
            })
            return result;
        }
    }

    function Airport (name, listOfFlight) {
        this.name = 'Nikola Tesla';
        this.listOfFlight = [];
        this.addFlight = function (flight) {
            this.listOfFlight.push(flight);
        }
        this.getPassengersNumber = function () {
            var count = 0;
            this.listOfFlight.forEach(function(flight) {
                count += flight.listOfPassengers.length;
            })
            return count;
        }
        this.getData = function () {
            var result = 'Airport:' + this.name + ', total passenger: ' + this.getPassengersNumber();
            this.listOfFlight.forEach(function(flight) {
                result += flight.getData();
            })
        }
    }

    //testing

    var nikolaTesla = new Airport ();
    
    var belgradeParis = new Flight ('Belgrade - Paris', 'Oct 25 2017');
    var barselonaBelgrade = new Flight ('Barcelona - Belgrade', 'Nov 11 2017');

    var marija = new Person('Marija', 'Andjelkovic');
    var seat1 = new Seat (67, 'e');
    var passenger1 = new Passenger (marija, seat1);
    
    var cersei = new Person ('Cersei', 'Lannister');
    var seat2 = new Seat (1, 'b');
    var passenger2 = new Passenger (cersei, seat2);

    var daenerys = new Person ('Daenerys', 'Targaryen');
    var seat3 = new Seat (14, 'e');
    var passenger3 = new Passenger (daenerys, seat3);

    var sofija = new Person('Sofija', 'Dolgorukov');
    var seat4 = new Seat ();
    var passenger4 = new Passenger (sofija, seat4);
   
    belgradeParis.addPassenger(passenger1);
    belgradeParis.addPassenger(passenger2);
    barselonaBelgrade.addPassenger(passenger3);
    barselonaBelgrade.addPassenger(passenger4);

    nikolaTesla.addFlight(belgradeParis);
    nikolaTesla.addFlight(barselonaBelgrade);

   

    //console.log (marija);  // => Person { name: 'Marija', surname: 'Andjelkovic' }
    //console.log (passenger1); // => Passenger {
                                   //person: Person { name: 'Marija', surname: 'Andjelkovic' },
                                   //seat: Seat { number: 67, category: 'e' }
                                   //}
    // console.log (passenger1.seat.category); // => e
    // console.log (seat1.category); // => e
    //console.log (belgradeParis); // => Flight {
                                         //relation: 'Belgrade - Paris',
                                         //date: 2017-10-24T22:00:00.000Z,
                                         //listOfPassengers: []
                                         //}
    //console.log (marija.getData()); // => Marija Andjelkovic

    //console.log(belgradeParis.listOfPassengers[0].person.name);  // =>Marija
  
    //console.log(belgradeParis.getData());

    //console.log (nikolaTesla.getPassengersNumber());

    //console.log (belgradeParis.listOfPassengers);

}) ()



