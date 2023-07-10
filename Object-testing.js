function Location(location, minCus, maxCus, avgSale) {

    this.location = location;
    this.MinCus = minCus;
    this.maxCus = maxCus;
    this.avgSale = avgSale;
    this.saleData =[];

    //    Store the min/max hourly customers, and the average cookies per customer, in object properties.


    // Use a method of that object to generate a random number of customers per hour. Objects/Math/random

    this.randomFunction = function () {
        let randomMath = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        return randomMath;
    
    };

    // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

    this.simulatedCookies = function () {
        // working from 6am to 19pm
        for(let i = 6; i<= 19; i++){
        let salePerHours = this.randomFunction()*this.avgSale;

        this.saleData.push(salePerHours);

        }
    }
    // Store the results for each location in a separate array… perhaps as a property of the object representing that location.

    // Calculating the sum of these hourly totals; your output for each location should look like this:

    this.sumCookies = function () {
        let total = 0;
        for (let j = 0; j < this.saleData.length;j++ ){
            total += this.saleData[j];
        }
        return total;
    
    }


    // Display the values of each array as unordered lists in the browser
    this.displayFunction = function () {

        let locationHtml = document.createElement('h2');
        locationHtml.innerHTML= this.location;
        document.body.appendChild(locationHtml);

        let saleAccordingly = document.createElement('li');
            saleAccordingly.innerHTML= 'Sale in 18 hours of work Accordingly';
            document.body.appendChild(saleAccordingly);

        let perHoursSaleHtml = document.createElement('ul');
            for (let i = 0; i< this.saleData.length;i++){
                let perHoursSaleHtml = document.createElement('ul');
                perHoursSaleHtml.innerHTML = this.saleData[i];

            }
            saleAccordingly.appendChild(perHoursSaleHtml);
        
        let totalSale = document.createElement('ul');
            totalSale.innerHTML = this.sumCookies();
            saleAccordingly.appendChild(totalSale);
        
        





    }


}
