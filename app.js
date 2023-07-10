Seatle = {

    // Store the min/max hourly customers, and the average cookies per customer, in object properties.
    location: 'Seatle',
    MinCus : 23,
    MaxCus : 65,
    avgSale : 6.3,
    dataPerHSale: [],

    // Use a method of that object to generate a random number of customers per hour. Objects/Math/random

    randomCus : function () {
        return Math.floor(Math.random()*(this.MaxCus-this.MinCus)+this.MinCus);
    },

    // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

    simulatedCookie : function()
    {
        // from 6 am to 19 pm
        for (let i = 6; i<=19; i++) 
        {
            cookiesHoursly = this.randomCus() * this.avgSale

            cookiesHoursly=Math.ceil(cookiesHoursly)
            this.dataPerHSale.push(cookiesHoursly)
        } 

    },

    // Store the results for each location in a separate array… perhaps as a property of the object representing that location.

    // Display the values of each array as unordered lists in the browser.

    totalSaleHours: function () {
        let total = 0;
        
    
        for (let j = 0; j < this.dataPerHSale.length; j++) {
            
            
            
            // console.log(total)
            
            total += this.dataPerHSale[j];
            

        };

        return total;
    },
    




    displayToHtml : function() {
        let locationBy =document.createElement('h2');
        document.body.appendChild(locationBy);
        locationBy.textContent = this.location;

    
        let hourList = document.createElement('ul');
        document.body.appendChild(hourList);
        

        for (let i = 6; i<=19;i++) {
            let detailsHours = document.createElement('li');
            // detailsHours.textContent = i+' ' + this.dataPerHSale[i-6];
            let hours = i
            let amForhours = 'am';

            // convert am to pm
            
            if (i > 12) {
                hours  -=12;
                amForhours  = 'pm';
            }
            detailsHours.textContent = hours + ': ' + amForhours + ': ' + this.dataPerHSale[i-6];
            hourList.appendChild(detailsHours);



        


            // detailsHours.textContent = this.dataPerHSale.indexOf(this.dataPerHSale[i]  hourList.appendChild(detailsHours)


            


        }

        let totalSaleHtml = document.createElement('ul');
        hourList.appendChild(totalSaleHtml);
        // console.log(Seatle.totalSaleHours());
        // console.log(this.totalSaleHours())
        totalSaleHtml.innerHTML ='Total '+ (this.totalSaleHours());


        
    
    },


    // display to Html






}

Seatle.simulatedCookie();
console.log(Seatle.dataPerHSale)
console.log(Seatle.totalSaleHours())
Seatle.displayToHtml();

Seatle = {

    // Store the min/max hourly customers, and the average cookies per customer, in object properties.
    location: 'Seatle',
    MinCus : 23,
    MaxCus : 65,
    avgSale : 6.3,
    dataPerHSale: [],

    // Use a method of that object to generate a random number of customers per hour. Objects/Math/random

    randomCus : function () {
        return Math.floor(Math.random()*(this.MaxCus-this.MinCus)+this.MinCus);
    },

    // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

    simulatedCookie : function()
    {
        // from 6 am to 19 pm
        for (let i = 6; i<=19; i++) 
        {
            cookiesHoursly = this.randomCus() * this.avgSale

            cookiesHoursly=Math.ceil(cookiesHoursly)
            this.dataPerHSale.push(cookiesHoursly)
        } 

    },

    // Store the results for each location in a separate array… perhaps as a property of the object representing that location.

    // Display the values of each array as unordered lists in the browser.

    totalSaleHours: function () {
        let total = 0;
        
    
        for (let j = 0; j < this.dataPerHSale.length; j++) {
            
            
            
            // console.log(total)
            
            total += this.dataPerHSale[j];
            

        };

        return total;
    },
    




    displayToHtml : function() {
        let locationBy =document.createElement('h2');
        document.body.appendChild(locationBy);
        locationBy.textContent = this.location;

    
        let hourList = document.createElement('ul');
        document.body.appendChild(hourList);
        

        for (let i = 6; i<=19;i++) {
            let detailsHours = document.createElement('ul');
            // detailsHours.textContent = i+' ' + this.dataPerHSale[i-6];
            let hours = i
            let amForhours = 'am';

            // convert am to pm
            
            if (i > 12) {
                hours  -=12;
                amForhours  = 'pm';
            }
            detailsHours.textContent = hours + ': ' + amForhours + ': ' + this.dataPerHSale[i-6];
            hourList.appendChild(detailsHours);



        


            // detailsHours.textContent = this.dataPerHSale.indexOf(this.dataPerHSale[i]  hourList.appendChild(detailsHours)


            


        }

        let totalSaleHtml = document.createElement('ul');
        hourList.appendChild(totalSaleHtml);
        // console.log(Seatle.totalSaleHours());
        // console.log(this.totalSaleHours())
        totalSaleHtml.innerHTML ='Total '+ (this.totalSaleHours());


        
    
    },


    // display to Html






}