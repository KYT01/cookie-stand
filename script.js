"use strict";

console.log("hello");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", 
"4pm", "5pm", "6pm", "7pm"];

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
}

Location.prototype.calculateCustPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randomNum(this.minCust, this.maxCust));
    }
};

Location.prototype.calculateCookiesPerHour = function () {
    this.calculateCustPerHour()
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