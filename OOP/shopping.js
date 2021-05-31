/*In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written
in the file follows strict mode.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls. 
Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

Create constructor functions with properties representing the following “things”:*/

'use strict';

/*Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), 
expiration date*/
(function () {
    function Product (name, price, expirationDate, productId) {
        if (!name || !price || !expirationDate) {
            throw new Error ('Fields name, price and expiration date are required ')
        }
        this.productId = Math.floor(100000 * Math.random() + 10000);
        this.name = name;
        //this.priceString = price.toFixed(2)
        //this.priceNumber = parseFloat(this.priceString);
        this.price = price;
        this.expirationDate = expirationDate;
        /*Add getInfo method to Product. It should return a formatted string containing product code 
        (the first and last letter of the name together with the product id), name and price.
        "Banana" -> BA32784, Banana, 129.31*/
        this.getInfo = function () {
            return this.name[0]+ this.name[this.name.length-1].toUpperCase() + this.productId + ', ' + this.name + ', ' + price.toFixed(2);
        }
    }

    /*ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)*/
    function ShoppingBag (listOfProduct) {
        this.listOfProduct = [];
        //Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. 
        //You can add a product to the list only if it has a valid expiration date.
        this.addProduct = function (param) {
            if (!param || !(param instanceof Product)) {
                throw new Error ('Invalid Product data');
            }
            this.listOfProduct.push(param);
            //console.log(param.price);  stampa samo cene proizvoda  
        }
        //Add a method to ShoppingBag that calculates the average product price of products in your product 
        //list and prints out this value with the precision of three decimals. 
        this.averageProductPrice = function () {
            var sum = 0;
            this.listOfProduct.forEach (function(param) {
                sum += param.price;
            })
            return (sum/(this.listOfProduct.length)).toFixed(3);
        }
        //Add getMostExpensive method that finds the most expensive product and prints out its info.
        this.getMostExpensive = function () {  
            var priceList = this.listOfProduct.map(function(a) {
            return a.price;
            });
            var maxPrice = priceList.reduce(function(a, b) {
            return Math.max(a, b);
            });
            var indexMax = priceList.indexOf(maxPrice);
            return this.listOfProduct[indexMax].name.toUpperCase();
            }
        //Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list.
        this.calculateTotalPrice = function () {
            var sum = 0;
            this.listOfProduct.forEach (function(param) {
                sum += param.price;
            })
            return sum;    //cudno je da ne moze da se pozove vec postojeca izracunata suma
        }
    }

    //Create a constructor function with properties representing the following:
    //PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date	
    function PaymentCard (accountBalance, activeStatus, validUntilDate) {
        this.accountBalance = accountBalance.toFixed(2);
        this.activeStatus = activeStatus; 
        this.validUntilDate = validUntilDate;
    }

    // Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. 
    // Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. 
    // If there is not enough money, print out the amount that is missing to complete the purchase.
    function checkoutAndBuy (shoppingBag, paymentCard) {
        var pac = parseFloat(paymentCard.accountBalance);
        var sbctp = shoppingBag.calculateTotalPrice();  // !!!Obrati paznju!!!
        var missingAmount = sbctp - pac;
        return ( pac >= sbctp ) ? 'purchase is successful' : 'missing ' + missingAmount + ' to complete the purchase';
    }

    //testing
    var supa = new Product ('Banana', 100.5, 'datum');
    //console.log (supa.price);
    var meso = new Product ('Jagnje', 350, 'datum2');
    var hleb = new Product ('Heljdin', 55, 'datum3');
    //console.log (supa);
    //console.log (supa.getInfo());
    var firstBag = new ShoppingBag ();     // vazno je da se kreira, pa makar i prazna
    firstBag.addProduct (supa);
    firstBag.addProduct (meso);
    firstBag.addProduct (hleb);
    //console.log (firstBag);
    // console.log(firstBag.averageProductPrice());
    // console.log(firstBag.getMostExpensive()); //sve metode zoves samo preko formiranog objekta. U ovom slucaju to je firstBag.getMOst...
    // console.log(firstBag.calculateTotalPrice());

    var mariaCard = new PaymentCard (100, 'active', 'date');
    //console.log (mariaCard);

    console.log (checkoutAndBuy (firstBag, mariaCard));

}) ()



