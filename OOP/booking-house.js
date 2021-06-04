/*Bookmaker’s

In your IDE of choice, create a new JavaScript file named booking-house.js 
and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function that will hold main execution of all program calls. 
Make sure that functions that you write in this function are pure functions.

Create constructor functions with properties representing the following:*/

'use strict';

(function () {

	//Create continents as constants (objects that can not change). 
	//So, when passing a continent as a parameter, you should pass Continent.ASIA.
	var continents = {
		ASIA : "AS",
		EUROPE : "EU",
		AFRICA : "AF",
		SOUTH_AMERICA : "SA",
		NORTH_AMERICA : "NA",
		AUSTRALIA : "AU"
	};

	//●	Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
	function Country (name, odds, continent) {
		/*if (!name || !odds || !continent) {
			throw new Error ('Fields name, odds are required')
		};*/
		var continent = continent;
		/*if (/*continent !=='EU'|| continent !== 'AS' || continent !=='AF' || 
			continent !=='SA' || continent !=='NA' || continent !=='AU'*/
			/*!['EU', 'AS', 'AF', 'SA', 'NA', 'AU'].includes(continent)) {
			throw new Error ('Required fields are: EU, AS, AF, SA, NA, AU')
		}; */
		this.name = name;
		this.odds = odds; 
		this.continent = continent;
	}

	//●	Person - name, surname, date of birth
	function Person (name, surname, dateOfBirth) {
		/*if (!name || !surname || !!dateOfBirth) {
			throw new Error ('Fields name, surname and date of birth are reqiured')
		};*/
		this.name = name;
		this.surname = surname;
		this.dateOfBirth = dateOfBirth;
		//Add a method to Person that returns a formatted string containing the name,  
        //surname and date of birth of the person (date of birth in dd.mm.yy format).
		this.getData = function () {
			return this.name + ' ' + this.surname + ' ' + this.dateOfBirth;
		}
	}

	//●	Player - person, bet amount, country (instance of Country)
	function Player (person, betAmount, country) {
		/*if (!person || !betAmount || !country) {
			throw new Error ('Fields person, bet amount and country are reqiured')
		}
		if (!(country instanceof Country)) {
			throw new Error ('Invalid country data')
		}*/
		this.person = person;
		this.betAmount = betAmount;
		this.country = country;
		//Add a method to Player that returns a formatted string containing a country, 
	    //expected win amount (odds * bet amount) and person data.
        //SR, 1050.00 eur, Pera Peric, 29 years
		this.getData = function () {
			console.log (this.country.odds);
			this.winAmount = this.country.odds * this.betAmount         //tako se poziva vrednost iz drugog konstruktora
			return this.country + ', ' + this.winAmount + ', ' + this.person;
		}
	}

	//●	Address - country, city, postal code, street and number
	function Address (country, city, postalCode, street, number) {
		if (!country || !city || !postalCode || !street || !number) {
			throw new Error ('Fields country, city, postal code, street, number are reqiured')
		}
		this.country = country;
		this.city = city;
		this.postalCode = postalCode;
		this.street = street;
		this.number = number;
		//Add a method to Address that returns a formatted string like the following one:
	    //Nemanjina 4, 11000 Beograd, SR
		this.getData = function () {
			return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country;
		}
	}

	//●	BettingPlace - address and list of players (initially empty)
	function BettingPlace (address, listOfPlayers) {
		if (!address) {
			throw new Error ('Field address is reqiured')
		}
		this.address = address;
		this.listOfPlayers = [];
		//Add a method to BettingPlace that returns a formatted string containing a street (without a number),
		//postal code and city, and sum of all bet amounts of that place.
		//Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

		this.getData = function () {
			this.allBets.forEach (function(betAmount) {
                result += this.betAmount;
			})
		return this.street + ', ' + this.postalCode + ' ' + this.city + ', sum of all bets: ', result;
	    }
		//Add a method to BettingPlace that adds a player to the players list of a betting place. 
		this.addPlayer = function (player) {
            if (!player || !(player instanceof Player)) {
                throw new Error ('Invalid player data');
            }
            this.listOfPlayers.push(player);
		}
	}

	//●	BettingHouse - competition, list of betting places (initially empty) and number of players
	function BettingHouse (competition, listOfBettingPlaces, numberOfPlayers) {
		if (!competition) {
			throw new Error ('Fields competition and number of players are reqiured')
		}
		this.competition = competition;
		this.listOfBettingPlaces = [];
		this.numberOfPlayers = numberOfPlayers;
	}

	//Inside your immediately-invoking function, add a function that returns a created Player.
	function createPlayer (nameP, surname, dateOfBirth, nameC, odds, continent, betAmount, country) {
        var person = new Person(nameP, surname, dateOfBirth);  //dve promeniljive pod name... posle toga nameP i nameC
        //var betAmount = this.betAmount;
		var country = new Country(nameC, odds, continent);
        return new Player (person, betAmount, dateOfBirth);
    }

	//Inside your immediately-invoking function, add a function that creates a BettingPlace.
	function createBettingPlace (country, city, postalCode, street, number) {
		var address = new Address (country, city, postalCode, street, number);
		return new BettingPlace (address);
	}



	//testing

	var srbija = new Country ('Srbija', 34, 'EU');
	console.log (srbija);

	//Create an instance of the BettingHouse that receives the name of competition.

	var austaliaOpen = new BettingHouse ('Australia Open');

	//Create four players with random data. 
	
	var player1 = createPlayer ('Aleksa Nenadovic', 1.000, 'SR');
	var player2 = createPlayer ('Branislav Nusic', 2.000, 'SR' );
	var player3 = createPlayer ('Vladimir Cvetkovic', 500, 'BG');
	var player4 = createPlayer ('Goran Ivanisevic', 200, 'HR');
	
	//Create two betting places. 
	/*
	var bettingPlace1 = createBettingPlace ('Dimitrija Tucovica', listOfPlayers);
	var bettingPlace2 = createBettingPlace ('Djordje Stanojevic', listOfPlayers);
	*/
	//Add created players as you wish to Betting places.

	/*bettingPlace1.addPlayer(player3);
	bettingPlace1.addPlayer(player4);

	bettingPlace2.addPlayer(player1);
	bettingPlace2.addPlayer(player2);*/


    //Add betting places to the betting house.

	// meridianBet.addBetPlace(belgradeBet);
	// meridianBet.addBetPlace(lisabonBet);



}) ()


/*

Display all betting house data in the following manner:


Football World Cup Winner, 2 betting places, 4 bets
	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		SR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		GR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
There are 3 bets on Serbia*/


