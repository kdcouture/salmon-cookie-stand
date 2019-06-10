/*
Kevin Couture
Jun. 10th, 2019
201 Lab 6
Salmon cookie lab, app.js
*/

'use strict';

// Objects
var brickStore = {
  // Attributes
  name: 'Salmon Cookie Storefront',
  avgCookies: Math.floor((Math.random()+1)*20),
  custPerHour: [],
  cookiesPerHour: [],
  minCustHr: 0,
  maxCustHr: 0,
  totalCust: 0,
  totalCookies: 0,
  // Methods
  genCustPerHour: function() {
    var retArry = [];
    for(var i = 0; i < 15; i++) {
      retArry.push(Math.floor(Math.random()*200));
    }
    // console.log(retArry);
    this.custPerHour = retArry;
  },
  calcCookiesPerHour: function() {
    this.cookiesPerHour = genCookiesPerHour(this.custPerHour, this.avgCookies);
  },
  findMin: function() {
    var min = 999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] < min)
        min = this.custPerHour[i];
    }
    this.minCustHr = min;
  },
  findMax: function() {
    var max = -999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] > max)
        max = this.custPerHour[i];
    }
    this.maxCustHr = max;
  },
  calcTotalCust: function() {
    var totalCusts = 0;
    for(var i = 0; i < this.custPerHour.length; i++)
      totalCusts += this.custPerHour[i];
    this.totalCust = totalCusts;
  },
  calcTotalCookies: function() {
    this.totalCookies = this.totalCust*this.avgCookies;
  },
};
// Call methods to fill in data.
brickStore.genCustPerHour();
brickStore.calcCookiesPerHour();
brickStore.findMax();
brickStore.findMin();
brickStore.calcTotalCust();
brickStore.calcTotalCookies();

var truckStore = {
  name: 'Salmon Cookie Truck',
  avgCookies: Math.floor((Math.random()+1)*20),
  custPerHour: [],
  cookiesPerHour: [],
  minCustHr: 0,
  maxCustHr: 0,
  totalCust: 0,
  totalCookies: 0,
  // Methods
  genCustPerHour: function() {
    var retArry = [];
    for(var i = 0; i < 15; i++) {
      retArry.push(Math.floor(Math.random()*100));
    }
    // console.log(retArry);
    this.custPerHour = retArry;
  },
  calcCookiesPerHour: function() {
    this.cookiesPerHour = genCookiesPerHour(this.custPerHour, this.avgCookies);
  },
  findMin: function() {
    var min = 999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] < min)
        min = this.custPerHour[i];
    }
    this.minCustHr = min;
  },
  findMax: function() {
    var max = -999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] > max)
        max = this.custPerHour[i];
    }
    this.maxCustHr = max;
  },
  calcTotalCust: function() {
    var totalCusts = 0;
    for(var i = 0; i < this.custPerHour.length; i++)
      totalCusts += this.custPerHour[i];
    this.totalCust = totalCusts;
  },
  calcTotalCookies: function() {
    this.totalCookies = this.totalCust*this.avgCookies;
  },
};
// Call methods to fill object
truckStore.genCustPerHour();
truckStore.calcCookiesPerHour();
truckStore.findMax();
truckStore.findMin();
truckStore.calcTotalCust();
truckStore.calcTotalCookies();

var streetStore = {
  name: 'Salmon Cookie Street Stop',
  avgCookies: Math.floor((Math.random()+1)*20),
  custPerHour: [],
  cookiesPerHour: [],
  minCustHr: 0,
  maxCustHr: 0,
  totalCust: 0,
  totalCookies: 0,
  // Methods
  genCustPerHour: function() {
    var retArry = [];
    for(var i = 0; i < 15; i++) {
      retArry.push(Math.floor(Math.random()*70));
    }
    // console.log(retArry);
    this.custPerHour = retArry;
  },
  calcCookiesPerHour: function() {
    this.cookiesPerHour = genCookiesPerHour(this.custPerHour, this.avgCookies);
  },
  findMin: function() {
    var min = 999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] < min)
        min = this.custPerHour[i];
    }
    this.minCustHr = min;
  },
  findMax: function() {
    var max = -999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] > max)
        max = this.custPerHour[i];
    }
    this.maxCustHr = max;
  },
  calcTotalCust: function() {
    var totalCusts = 0;
    for(var i = 0; i < this.custPerHour.length; i++)
      totalCusts += this.custPerHour[i];
    this.totalCust = totalCusts;
  },
  calcTotalCookies: function() {
    this.totalCookies = this.totalCust*this.avgCookies;
  },
};
// Call methods to fill out data
streetStore.genCustPerHour();
streetStore.calcCookiesPerHour();
streetStore.findMax();
streetStore.findMin();
streetStore.calcTotalCust();
streetStore.calcTotalCookies();

var streetStore2 = {
  name: 'Salmon Cookie Street Stop #2',
  avgCookies: Math.floor((Math.random()+1)*20),
  custPerHour: [],
  cookiesPerHour: [],
  minCustHr: 0,
  maxCustHr: 0,
  totalCust: 0,
  totalCookies: 0,
  // Methods
  genCustPerHour: function() {
    var retArry = [];
    for(var i = 0; i < 15; i++) {
      retArry.push(Math.floor(Math.random()*70));
    }
    // console.log(retArry);
    this.custPerHour = retArry;
  },
  calcCookiesPerHour: function() {
    this.cookiesPerHour = genCookiesPerHour(this.custPerHour, this.avgCookies);
  },
  findMin: function() {
    var min = 999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] < min)
        min = this.custPerHour[i];
    }
    this.minCustHr = min;
  },
  findMax: function() {
    var max = -999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] > max)
        max = this.custPerHour[i];
    }
    this.maxCustHr = max;
  },
  calcTotalCust: function() {
    var totalCusts = 0;
    for(var i = 0; i < this.custPerHour.length; i++)
      totalCusts += this.custPerHour[i];
    this.totalCust = totalCusts;
  },
  calcTotalCookies: function() {
    this.totalCookies = this.totalCust*this.avgCookies;
  },
};
// Call methods to fill out data
streetStore2.genCustPerHour();
streetStore2.calcCookiesPerHour();
streetStore2.findMax();
streetStore2.findMin();
streetStore2.calcTotalCust();
streetStore2.calcTotalCookies();

var streetStore3 = {
  name: 'Salmon Cookie Street Stop #3',
  avgCookies: Math.floor((Math.random()+1)*20),
  custPerHour: [],
  cookiesPerHour: [],
  minCustHr: 0,
  maxCustHr: 0,
  totalCust: 0,
  totalCookies: 0,
  // Methods
  genCustPerHour: function() {
    var retArry = [];
    for(var i = 0; i < 15; i++) {
      retArry.push(Math.floor(Math.random()*70));
    }
    // console.log(retArry);
    this.custPerHour = retArry;
  },
  calcCookiesPerHour: function() {
    this.cookiesPerHour = genCookiesPerHour(this.custPerHour, this.avgCookies);
  },
  findMin: function() {
    var min = 999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] < min)
        min = this.custPerHour[i];
    }
    this.minCustHr = min;
  },
  findMax: function() {
    var max = -999;
    for(var i = 0; i < this.custPerHour.length; i++) {
      if(this.custPerHour[i] > max)
        max = this.custPerHour[i];
    }
    this.maxCustHr = max;
  },
  calcTotalCust: function() {
    var totalCusts = 0;
    for(var i = 0; i < this.custPerHour.length; i++)
      totalCusts += this.custPerHour[i];
    this.totalCust = totalCusts;
  },
  calcTotalCookies: function() {
    this.totalCookies = this.totalCust*this.avgCookies;
  },
};
// Call methods to fill out data
streetStore3.genCustPerHour();
streetStore3.calcCookiesPerHour();
streetStore3.findMax();
streetStore3.findMin();
streetStore3.calcTotalCust();
streetStore3.calcTotalCookies();

// Functions
function genCookiesPerHour(inArry, avgCookies){
  var totalCookiesRet = [];
  for(var i = 0; i < inArry.length; i++) {
    totalCookiesRet[i] = inArry[i]*avgCookies;
  }
  return totalCookiesRet;
}

// This function will generate a hourly list from 6 AM to 8 PM
// filling in the data with the given array. (Arrays excpeted 15 elements.)
// Builds an html list.
function populateList(infoArry) {
  var strRet = '<ul>';
  var timeKeeper = 6;
  for(var i = 0; i < infoArry.length; i++) {
    strRet += '<li>';
    if(timeKeeper > 12) {
      strRet += (timeKeeper-12) + ' PM : ' + infoArry[i];
    }
    else {
      strRet += timeKeeper + ' AM : ' + infoArry[i];
    }
    strRet +='</li>';
    timeKeeper++;
  }
  strRet +='</ul>';
  return strRet;
}

// Build min max
function buildMinMax(salObj) {
  var retStr = salObj.name + '\n<ul>';
  retStr += '<li>Min Customers per Hour: ' + salObj.minCustHr + '</li>';
  retStr += '<li>Max Customers per Hour: ' + salObj.maxCustHr + '</li>';
  retStr += '<li>Total Customers : ' + salObj.totalCust + '</li>';
  retStr += '<li>Avg Cookies Sold : ' + salObj.avgCookies + '</li>';
  retStr += '<li>Total Cookies Sold : ' + salObj.totalCookies + '</li>';


  return retStr;
}

// Build hourly list on html
document.getElementById('store1').innerHTML = brickStore.name + ' \nCustomers per Hour';
document.getElementById('store1').innerHTML += populateList(brickStore.custPerHour);
document.getElementById('store2').innerHTML = truckStore.name + ' \nCustomers per Hour';
document.getElementById('store2').innerHTML += populateList(truckStore.custPerHour);
document.getElementById('store3').innerHTML = streetStore.name + ' \nCustomers per Hour';
document.getElementById('store3').innerHTML += populateList(streetStore.custPerHour);
document.getElementById('store4').innerHTML = streetStore2.name + ' \nCustomers per Hour';
document.getElementById('store4').innerHTML += populateList(streetStore2.custPerHour);
document.getElementById('store5').innerHTML = streetStore3.name + ' \nCustomers per Hour';
document.getElementById('store5').innerHTML += populateList(streetStore3.custPerHour);

// Build hourly list on html
document.getElementById('store1C').innerHTML = brickStore.name + ' \nCookies per Hour';
document.getElementById('store1C').innerHTML += populateList(brickStore.cookiesPerHour);
document.getElementById('store2C').innerHTML = truckStore.name + ' \nCookies per Hour';
document.getElementById('store2C').innerHTML += populateList(truckStore.cookiesPerHour);
document.getElementById('store3C').innerHTML = streetStore.name + ' \nCookies per Hour';
document.getElementById('store3C').innerHTML += populateList(streetStore.cookiesPerHour);
document.getElementById('store4C').innerHTML = streetStore2.name + ' \nCookies per Hour';
document.getElementById('store4C').innerHTML += populateList(streetStore2.cookiesPerHour);
document.getElementById('store5C').innerHTML = streetStore3.name + ' \nCookies per Hour';
document.getElementById('store5C').innerHTML += populateList(streetStore3.cookiesPerHour);

// Build min max table on html
document.getElementById('store1MM').innerHTML = buildMinMax(brickStore);
document.getElementById('store2MM').innerHTML = buildMinMax(truckStore);
document.getElementById('store3MM').innerHTML = buildMinMax(streetStore);
document.getElementById('store4MM').innerHTML = buildMinMax(streetStore2);
document.getElementById('store5MM').innerHTML = buildMinMax(streetStore3);
