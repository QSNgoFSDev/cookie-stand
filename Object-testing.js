function Location(location, minCus, maxCus, avgSale) {

    this.location = location;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgSale = avgSale;
    this.saleData = [];

    //    Store the min/max hourly customers, and the average cookies per customer, in object properties.


    // Use a method of that object to generate a random number of customers per hour. Objects/Math/random

    this.randomFunction = function () {

        console.log(this.minCus)
        let randomMath = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        return randomMath;


    };

    // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

    this.simulatedCookies = function () {
        // working from 6am to 19pm
        for (let i = 6; i <= 19; i++) {
            let salePerHours = Math.floor(this.randomFunction() * this.avgSale);

            this.saleData.push(salePerHours);

        }
    }
    // Store the results for each location in a separate array… perhaps as a property of the object representing that location.

    // Calculating the sum of these hourly totals; your output for each location should look like this:

    this.sumCookies = function () {
        let total = 0;
        for (let j = 0; j < this.saleData.length; j++) {
            total += this.saleData[j];
        }
        return total;

    }


    // Display the values of each array as unordered lists in the browser
    this.displayFunction = function () {

        let locationHtml = document.createElement('h2');
        // <h2>this.location</h2>
        locationHtml.innerHTML = this.location;
        document.body.appendChild(locationHtml);



        let saleAccordingly = document.createElement('ul');
        saleAccordingly.innerHTML = 'Sale in 18 hours of work Accordingly';
        document.body.appendChild(saleAccordingly);
        console.log(saleAccordingly)



        for (let i = 6; i <= 19; i++) {
            let perHoursSaleHtml = document.createElement('ul');
            let hours = i
            let amHours = 'am'
            if (i > 12){
                hours -= 12;
                amHours = 'pm'
            }
            perHoursSaleHtml.innerHTML = hours + ' ' + amHours + ' ' + this.saleData[i - 6];
            console.log(perHoursSaleHtml)
            saleAccordingly.appendChild(perHoursSaleHtml)
            



        }
        
        let totalSale = document.createElement('ul');
        totalSale.innerHTML = 'total '+':' + this.sumCookies();
        saleAccordingly.appendChild(totalSale);
    }



    
    }

// function methodCall(locationMethod){
//     this.locationMethod.randomFunction()= randomFunction()
//     this.locationMethod.simulatedCookies()=simulatedCookies()
//     this.locationMethod.displayFunction() = displayFunction()

// }



const seatlle = new Location('Seatlle', 23, 65, 6.3)



    seatlle.randomFunction()
    seatlle.simulatedCookies()
    seatlle.displayFunction()

const tokyo = new Location('Tokyo', 3, 24, 1.2)

tokyo.randomFunction()
tokyo.simulatedCookies()
tokyo.displayFunction()

// const tokyocall = new locationMethod(tokyo)
const dubai = new Location('Dubai',11,38,3.7)

dubai.randomFunction()
dubai.simulatedCookies()
dubai.displayFunction()

const Paris = new Location('Paris', 20,38,2.3)

Paris.randomFunction()
Paris.simulatedCookies()
Paris.displayFunction()

const Lima  = new Location ('Lima',2,16,4.6)

Lima.randomFunction()
Lima.simulatedCookies()
Lima.displayFunction()
