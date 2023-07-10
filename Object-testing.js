


// lab 07 - table section

function Location(location, minCus, maxCus, avgSale) {

    this.location = location;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgSale = avgSale;
    this.saleData = [];

    //    Store the min/max hourly customers, and the average cookies per customer, in object properties.


    // Use a method of that object to generate a random number of customers per hour. Objects/Math/random

    this.randomFunction = function () {

        // console.log(this.minCus)
        let randomMath = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        return randomMath;


    };

    // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

    this.simulatedCookies = function () {
        // working from 6am to 19pm
        for (let i = 6; i <= 19; i++) {
            let salePerHours = Math.floor(this.randomFunction() * this.avgSale);

            this.saleData.push(salePerHours);
            // console.log(this.saleData)

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
        // console.log(saleAccordingly)



        for (let i = 6; i <= 19; i++) {
            let perHoursSaleHtml = document.createElement('ul');
            let hours = i
            let amHours = 'am'
            if (i > 12) {
                hours -= 12;
                amHours = 'pm'
            }
            perHoursSaleHtml.innerHTML = hours + ' ' + amHours + ' ' + this.saleData[i - 6];
            // console.log(perHoursSaleHtml)
            saleAccordingly.appendChild(perHoursSaleHtml)




        }

        let totalSale = document.createElement('ul');
        totalSale.innerHTML = 'total ' + ':' + this.sumCookies();
        saleAccordingly.appendChild(totalSale);
    }

    this.renderTable = function () {
        let salesTable = document.createElement('table');
        let tableHeader = document.createElement('th')
        document.body.appendChild(salesTable)
        salesTable.appendChild(tableHeader)

        let saleSummary = 'Sale Summary Report'
        tableHeader.innerHTML = saleSummary
        let blanktr = document.createElement('tr')
        salesTable.appendChild(blanktr)
        // create hours table row
        blanktr.innerHTML = '&nbsp;'



        for (i = 6; i <= 19; i++) {

            let hoursTable = i
            let amHoursTable = 'am'
            if (i > 12) {
                hoursTable -= 12;
                amHoursTable = 'pm'
            }
            let hoursdatatr = document.createElement('td')
            hoursdatatr.innerHTML = hoursTable + amHoursTable
            blanktr.appendChild(hoursdatatr)








        }

        let dailyTotaltd = document.createElement('td')
        dailyTotaltd.innerHTML = ('Daily Total')
        blanktr.appendChild(dailyTotaltd)


        let locationTableName = document.createElement('tr')
        salesTable.appendChild(locationTableName)
        locationTableName.innerHTML = this.location
        // create corresponding data to hours

        for (i = 0; i < this.saleData.length; i++) {
            let hourslyDataTable = document.createElement('td');
            // console.log(this.saleData)
            // console.log(hourslyDataTable)
            // console.log(this.saleData[i])
            // console.log(i)
            // console.log(this.saleData.length)
            hourslyDataTable.innerHTML = this.saleData[i];
            // console.log(hourslyDataTable)


            locationTableName.appendChild(hourslyDataTable)




        }

        let dailyDataEl = document.createElement('td')
        dailyDataEl.innerHTML = this.sumCookies()
        locationTableName.appendChild(dailyDataEl)
        // console.log(this.sumCookies())







    }

    // gọi phương thức "callFunction" => thực hiện call 4 function ở dưới theo giá trị location truyền vào.

    this.callFunction = function () {
        this.randomFunction()
        this.simulatedCookies()
        // this.displayFunction()
        this.renderTable()

    }


}




















let seatlle = new Location('Seatlle', 23, 65, 6.3)
seatlle.callFunction()



// seatlle.randomFunction()
// seatlle.simulatedCookies()
// seatlle.displayFunction()
// seatlle.renderTable()

let tokyo = new Location('Tokyo', 3, 24, 1.2)

// tokyo.randomFunction()
// tokyo.simulatedCookies()
// tokyo.displayFunction()

tokyo.callFunction()
// const tokyocall = new locationMethod(tokyo)
let dubai = new Location('Dubai', 11, 38, 3.7)

// dubai.randomFunction()
// dubai.simulatedCookies()
// dubai.displayFunction()
dubai.callFunction()
let Paris = new Location('Paris', 20, 38, 2.3)

// Paris.randomFunction()
// Paris.simulatedCookies()
// Paris.displayFunction()
Paris.callFunction()
let Lima = new Location('Lima', 2, 16, 4.6)

// Lima.randomFunction()
// Lima.simulatedCookies()
// Lima.displayFunction()
Lima.callFunction()
// tr => td




// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

/*
Proposed solution
created another constructor function [General Table]. take all data of separate locations. to generate for such template as Lab07.

createElement = 'tr'
element.innerhtml = locations
tr appendChild table

create td = saleData of that location. 
write loop at [i]
tdelement.innerhtml = location.saledData[i]
trelement.appendChild(tdelement)


*/
citiesArray = [seatlle, tokyo, dubai, Paris, Lima]


let tableGeneral = document.createElement('table')
tableGeneral.innerHTML = 'General Sales'
document.body.appendChild(tableGeneral)
let blanktr = document.createElement('tr')
blanktr.innerHTML = '&nbsp;'
tableGeneral.appendChild(blanktr)




for (let i = 6; i <= 19; i++) {
    let hours = i;
    let amHours = 'AM';
    if (i > 12) {
        hours -= 12;
        amHours = 'PM';
    }
    let headingHours = document.createElement('td');
    headingHours.innerHTML = hours + ' ' + amHours;
    blanktr.appendChild(headingHours)
}
let dailyTotalTable = document.createElement('td')
dailyTotalTable.innerHTML = 'Daily Total Sales'
blanktr.appendChild(dailyTotalTable)




function GeneralTables(cities) {
    // loop through cities array.
    // access to array salesData to extract location as tr, and sales data at j as td

    this.createTableLocationData = function () {


        for (let i = 0; i < cities.length; i++) {
            let dataAccessed = document.createElement('tr');
            dataAccessed.innerHTML = cities[i].location;
            tableGeneral.appendChild(dataAccessed);
            for (j = 0; j < cities[i].saleData.length; j++) {
                let saleDataAccsessed = document.createElement('td')
                saleDataAccsessed.innerHTML = cities[i].saleData[j];
                dataAccessed.appendChild(saleDataAccsessed)

                // let totalSale = document.createElement(td)



            }

            let totalSale = document.createElement('td')
            totalSale.innerHTML = cities[i].sumCookies();
            dataAccessed.appendChild(totalSale);





        }

        // this.callTableFunction = function () {
        //     this.createTableLocationData();

        // }
    }
}






let table = new GeneralTables(citiesArray);
table.createTableLocationData();