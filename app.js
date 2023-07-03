// let locationInput = function(location,saleData){
//     this.location = location;
//     this.saleData=saleData
// }
// contructor function to create location input inluding location and Sale



// create object Seatle using locationInput constructor
// let Seatle = new.locationInput('Seatle',saleSeatleData)

// has it specific location = seatle, and Sale of seatle. => the need of create consutrctor function for saleData


// constructor function for saleData has time & cookies
// let saleData = function (time, cookies) {
//     this.time = time
//     this.cookies = cookies
// }

// time = array 
// cookies = math.random loop thorough time[i].


// // 
// saleSeatleData= new.saleData(time,cookies)


// let randomDataHours = function (cookiesSale, time)

// let time =[6,7,8,9,10,11,12,13,14,15,16,18,19]

// let randomsale = []

// let randomMath = function (time, randomsale){

//     function (min,max)={

//     } 


// let Seatle = {
//     location: 'Sealte',
//     time : [6,7,8,9,10,11,12,13,14,15,16,17,18,19],
//     sale : [16,20,36,48,56,77,93,144,119,84,61,23,42,57],

//     // function in Objecliteral syntax like this:
//     sumSeatle : function(sale){

//         let sum =0;
//         for( let i = 0; i<sale.length;i++) {
//            sum+= sale[i] ;
//         }
//     },

// mistake made by not reading the requirement carefully.


/* 
1.0 Store the min/max hourly customers, and the average cookies per customer, in object properties.
*/

// solution: create simple object "Seatle" first

let Seatle = {

    location: 'Seatle',
    minHourlyCos: 23,
    maxHourlyCos: 65,
    avgCookies: 6.3,
    dataPerHours: [],
    /*
Use a method of that object to generate a random number of customers per hour. Objects/Math/random


*/

// method random to generate random sales

    random: function () {
        return Math.floor(math.random() * (this.maxHourlyCos - this.minHourlyCos) + this.minHourlyCos);
    },

    // calculate cookies/ hours 
    // writing a loop from 6 to 19 . 
    // 

    cookiesPerHours: function () {
        for (Let i= 6; i<= 19; i++) 
        {
            let cookies = (this.cookiesPerHours() * this.avgCookies);
            this.dataPerHours.push(cookies)
        }

    },

    // render to display under unordered list

    display: function () {
        // create header
        let locationHtml = document.createElement('h2');
        // put name of object to locationHtml
        locationHtml.textContent = this.location;
        // append function result to body of given HTML
        document.body.appendChild(locationHtml);

        // create undordered list
        let listHour = document.createElement('ul');
        // using loop to generate hours sell
        for (Let i = 6; i <= 19; i++)
        {
            let listHoursHtml = document.createElement('li');
            listHoursHtml.textContent = this.cookiesPerHours;
            
            listHour.appendChild(this.listHoursHtml)
        } 

        

    

    
        

        
    }






}













