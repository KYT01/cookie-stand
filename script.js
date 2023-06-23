"use strict";

console.log("hello");

const newStoreForm = document.getElementById("new-store-form");


const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", 
"4pm", "5pm", "6pm", "7pm"];


const allStores = [];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function Location(storeName, minCust, maxCust, avgCookiesPerHour){
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.custPerHour = [];
    this.cookiesPerHour = [];
    this.totalCookies = 0;
    this.calculateCookiesPerHour();
    this.render();
    allStores.push(this);

}

Location.prototype.calculateCustPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randomNum(this.minCust, this.maxCust));
    }
};

Location.prototype.calculateCookiesPerHour = function () {
    this.calculateCustPerHour(); 
    for (let i = 0; i < hours.length; i++) {
        const cookies = Math.ceil(this.custPerHour[i] * this.avgCookiesPerHour);
        this.cookiesPerHour.push(cookies);
        this.totalCookies += cookies;
    }
};


Location.prototype.render = function() {
    const container = document.getElementById("container");
    const table = document.getElementById("table");



    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = this.storeName;
    tr.appendChild(th);

    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement("td");
        td.textContent = this.cookiesPerHour[i];
        tr.appendChild(td);
    }

    const total = document.createElement("th");
    total.textContent = this.totalCookies;
    tr.appendChild(total);
    

    table.appendChild(tr);
    container.appendChild(table);
};


const seattle = new Location("Seattle", "23", "65", "6.3")
const tokyo = new Location("Tokyo", "3", "24", "1.2")
const dubai = new Location("Dubai", "11", "38", "3.7")
const paris = new Location("Paris", "20", "38", "2.3")
const lima = new Location("Lima", "2", "16", "4.6")


console.log(seattle)
console.log(tokyo)
console.log(dubai)
console.log(paris)
console.log(lima)



function hourlyTotals() {
    const table = document.getElementById("table");

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = "Hourly Totals";
    tr.appendChild(th);

    for (let i = 0; i < hours.length; i++) {
        const th = document.createElement("th");
        let hoursAdded = 0;
        
        for (let j = 0; j < allStores.length; j++) {
            const hourAmount = allStores[j].cookiesPerHour[i];
            hoursAdded += hourAmount;
            
        }
        th.textContent = hoursAdded;
        tr.appendChild(th);
    }

    let totalTotals = 0;
    for (let i = 0; i < allStores.length; i++) {
        totalTotals += allStores[i].totalCookies;
    }

    const totalsCell = document.createElement("th");
    totalsCell.textContent = totalTotals;
    tr.appendChild(totalsCell);

    table.appendChild(tr);
}
hourlyTotals();


newStoreForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(event);

    const storeNameInput = event.target.nameInput.value;
    const minCustInput = event.target.minCustInput.value;
    const maxCustInput = event.target.maxCustInput.value;
    const avgCookiesInput = event.target.avgCookiesInput.value;

    const store = new Location(storeNameInput, minCustInput, maxCustInput, avgCookiesInput);

    newStoreForm.reset();
}); 