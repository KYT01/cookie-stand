"use strict"

const container = document.getElementById("container");


const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", 
"4pm", "5pm", "6pm", "7pm"];


const seattle = {
    storeName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookiesPerHour: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    calcCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(randomNum(this.minCust, this.maxCust));
        }
        console.log(this.customersPerHour)
    },

    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        const cookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerHour);
        this.cookiesPerHour.push(cookies);
        this.totalCookies += cookies;
        }
        console.log(this.cookiesPerHour)
    },


    render: function () {
        this.calcCustomersPerHour();
        this.calcCookiesPerHour();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < hours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
          ul.appendChild(li);
        }

        const total = document.createElement("li");
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);

},
    
};

const Tokyo = {
    storeName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookiesPerHour: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    calcCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(randomNum(this.minCust, this.maxCust));
        }
        console.log(this.customersPerHour)
    },

    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        const cookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerHour);
        this.cookiesPerHour.push(cookies);
        this.totalCookies += cookies;
        }
        console.log(this.cookiesPerHour)
    },


    render: function () {
        this.calcCustomersPerHour();
        this.calcCookiesPerHour();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < hours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
          ul.appendChild(li);
        }

        const total = document.createElement("li");
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);

},
    
};

const Dubai = {
    storeName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookiesPerHour: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    calcCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(randomNum(this.minCust, this.maxCust));
        }
        console.log(this.customersPerHour)
    },

    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        const cookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerHour);
        this.cookiesPerHour.push(cookies);
        this.totalCookies += cookies;
        }
        console.log(this.cookiesPerHour)
    },


    render: function () {
        this.calcCustomersPerHour();
        this.calcCookiesPerHour();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < hours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
          ul.appendChild(li);
        }

        const total = document.createElement("li");
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);

},
    
};

const Paris = {
    storeName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookiesPerHour: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    calcCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(randomNum(this.minCust, this.maxCust));
        }
        console.log(this.customersPerHour)
    },

    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        const cookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerHour);
        this.cookiesPerHour.push(cookies);
        this.totalCookies += cookies;
        }
        console.log(this.cookiesPerHour)
    },


    render: function () {
        this.calcCustomersPerHour();
        this.calcCookiesPerHour();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < hours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
          ul.appendChild(li);
        }

        const total = document.createElement("li");
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);

},
    
};

const Lima = {
    storeName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookiesPerHour: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    calcCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(randomNum(this.minCust, this.maxCust));
        }
        console.log(this.customersPerHour)
    },

    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
        const cookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerHour);
        this.cookiesPerHour.push(cookies);
        this.totalCookies += cookies;
        }
        console.log(this.cookiesPerHour)
    },


    render: function () {
        this.calcCustomersPerHour();
        this.calcCookiesPerHour();
        
        const article = document.createElement("article");
        container.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);
    
        const ul = document.createElement("ul");
        article.appendChild(ul);
    
        for (let i = 0; i < hours.length; i++) {
          const li = document.createElement("li");
          li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
          ul.appendChild(li);
        }

        const total = document.createElement("li");
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);

},
    
};

seattle.render();
Tokyo.render();
Dubai.render();
seattle.render();
seattle.render();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}