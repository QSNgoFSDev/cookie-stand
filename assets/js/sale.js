


// lab 07 - table section

function Location(location, minCus, maxCus, avgSale) {

    this.location = location;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgSale = avgSale;
    this.saleData = [];

    this.randomCustomer = function () {

        let randomMath = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        return randomMath;
    };

    this.simulatedCookies = function () {
        // working from 6am to 19pm
        for (let i = 6; i <= 19; i++) {
            let salePerHours = Math.floor(this.randomCustomer() * this.avgSale);

            this.saleData.push(salePerHours);
        }
    }
    this.sumCookies = function () {
        let total = 0;
        for (let j = 0; j < this.saleData.length; j++) {
            total += this.saleData[j];
        }
        return total;
    }

    this.callFunction = function () {
        this.randomCustomer();
        this.simulatedCookies();
    }
}


let seatlle = new Location('Seattle', 23, 65, 6.3);
seatlle.callFunction();
let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.callFunction();
let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.callFunction();
let paris = new Location('Paris', 20, 38, 2.3);
paris.callFunction();
let lima = new Location('Lima', 2, 16, 4.6);
lima.callFunction();


citiesArray = [seatlle, tokyo, dubai, paris, lima]

function CreateTables(citiesData) {
    // loop through cities array.
    // access to array salesData to extract location as tr, and sales data at [j] as td
    let tableGeneral = document.createElement('table');
    tableGeneral.innerHTML = 'General Sales';
    document.body.appendChild(tableGeneral);

    let blankTr = document.createElement('tr');
    blankTr.innerHTML = '&nbsp;';
    tableGeneral.appendChild(blankTr);

    // convert am to pm
    for (let i = 6; i <= 19; i++) {

        let hours = i;
        let amHours = 'AM';

        if (i > 12) {

            hours -= 12;
            amHours = 'PM';
        }

        let headingHours = document.createElement('td');
        headingHours.innerHTML = hours + ' ' + amHours;
        blankTr.appendChild(headingHours);
    }

    let dailyTotalTable = document.createElement('td')
    dailyTotalTable.innerHTML = 'Daily Total Sales'
    blankTr.appendChild(dailyTotalTable)

    this.createTableLocationData = function () {

        for (let i = 0; i < citiesData.length; i++) {

            let dataAccessed = document.createElement('tr');
            dataAccessed.innerHTML = citiesData[i].location;
            tableGeneral.appendChild(dataAccessed);

            for (j = 0; j < citiesData[i].saleData.length; j++) {

                let saleDataAccsessed = document.createElement('td')
                saleDataAccsessed.innerHTML = citiesData[i].saleData[j];
                dataAccessed.appendChild(saleDataAccsessed);
            }

            let totalSale = document.createElement('td')
            totalSale.innerHTML = citiesData[i].sumCookies();
            dataAccessed.appendChild(totalSale);
        }

        // Write sum total Across in the very end so that it can be scaleable with different cities added.

        let totalAcross = 0;

        for (let i = 0; i < citiesData.length; i++) {

            totalAcross += citiesData[i].sumCookies();
        }

        let sumRegionSale = document.createElement('tr');
        sumRegionSale.innerHTML = 'Sum Across region Sale';
        document.body.appendChild(sumRegionSale);

        let sumAcrosstd = document.createElement('td')
        sumAcrosstd.innerHTML = ':' + totalAcross;
        sumRegionSale.appendChild(sumAcrosstd);

    }
}

// lab 09b: Form - event listener
const form = document.getElementById('cookiesStandForm');
form.addEventListener('submit', handleFormSubmit)
// create function for handleFormSubmit

function handleFormSubmit(event) {

    event.preventDefault();

    let locationId = document.getElementById('locationInput');
    let location = locationId.value

    let minCusInputId = document.getElementById('minCusInput');
    let minCusInput = Number(minCusInputId.value)

    let maxCusInputId = document.getElementById('maxCusInput');
    let maxCusInput = Number(maxCusInputId.value)

    let avgSaleInputId = document.getElementById('avgSaleInput');
    let avgSaleInput = Number(avgSaleInputId.value);

    let newLocation = new Location(location, minCusInput, maxCusInput, avgSaleInput);

    // call function to trigger local function.
    newLocation.callFunction();
    citiesArray.push(newLocation)
    let table = new CreateTables(citiesArray);
    table.createTableLocationData();


}














