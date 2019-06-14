/*
Kevin Couture
Jun. 10th, 2019
201 Lab 6
Salmon cookie lab, app.js
*/

'use strict'; // Because you told me to.

// Object constructor

// Object attributes
//   name:
//   avgCookies:
//   custPerHour: []
//   cookiesPerHour: []
//   minCustHr:
//   maxCustHr:
//   totalCust:
//   totalCookies:

function Store(name, avgCookies, custPerHour, minCust, maxCust) {
  this.name = name;
  this.avgCookies = avgCookies;
  this.custPerHour = custPerHour;
  this.cookiesPerHour = genCookiesPerHour(custPerHour, avgCookies);
  this.minCustHr = minCust;
  this.maxCustHr = maxCust;
  this.totalCust = sumArr(custPerHour);
  this.totalCookies = sumArr(this.cookiesPerHour);
}

//
// Functions
//

// Generate cookies per hour
function genCookiesPerHour(inArry, avgCookies){
  var totalCookiesRet = [];
  for(var i = 0; i < inArry.length; i++) {
    totalCookiesRet[i] = Math.ceil(inArry[i]*avgCookies);
  }
  return totalCookiesRet;
}

// Generate customers per hour
function genCustPerHour(min, max) {
  var retArry = [];
  var valueArray = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
  // Generate customers per hour, max is ensured to be included.
  for(var i = 0; i < 7; i++) {
    retArry.push(Math.ceil(max*valueArray[i]));
  }
  // Ensures that the min customers per hour is hit.
  retArry.push(parseInt(min));
  // Finish genereatin customers.
  for(var j = 8; j < 15; j++) {
    retArry.push(Math.ceil(max*valueArray[j]));
  }
  return retArry;
}

// Sum Array
function sumArr(inArr) {
  var total = 0;
  for(var i = 0; i < inArr.length; i++) {
    total += inArr[i];
  }
  return total;
}

/*
@func createTable
@param eleArr: an array containing store objects.
       sel: selector 0 = customers per hour, 1 = cookies per hour
@ret void
@desc: This function takes in an array of store objects and creates
  a table on the html page dispaying either customers per hour
  or cookies per hour. Uses tableTimeHeaderHelper and tableTotalsFooterHelper
*/
function createTable(eleArr, sel) {
  var strBuild = '';
  var i, j ,k;
  // Table headding
  if(sel === 0) {
    strBuild += '<h4>Storefront Customers per Hour</h4>';
  }
  else if(sel === 1) {
    strBuild += '<h4>Storefront Cookies per Hour</h4>';
  }
  // Build time header
  strBuild += tableTimeHeaderHelper();
  // Build table info
  switch(sel) {
  case 0: // customers per hour
    for(i = 0; i < eleArr.length; i++) {
      strBuild += '<tr><td>' + eleArr[i].name + '</td>';
      for(j = 0; j < eleArr[i].custPerHour.length; j++) {
        strBuild += '<td>' + eleArr[i].custPerHour[j] + '</td>';
      }
      strBuild += '<td>' + eleArr[i].totalCust + '</td></tr>';
    }
    break;
  case 1: // cookies per hour
    for(i = 0; i < eleArr.length; i++) {
      strBuild += '<tr><td>' + eleArr[i].name + '</td>';
      for(k = 0; k < eleArr[i].cookiesPerHour.length; k++) {
        strBuild += '<td>' + eleArr[i].cookiesPerHour[k] + '</td>';
      }
      strBuild += '<td>' + eleArr[i].totalCookies + '</td></tr>';
    }
    break;

  default: // Does nothing on invalid selects.
    break;
  }
  strBuild += tableTotalsFooterHelper(eleArr, sel);
  strBuild += '</table>';
  return strBuild;
}

/*
@func tableTimeHeaderHelper
@para Void
@ret strBuild: string containing the html info to build
@desc Creates a table headding from 6AM to 8PM including
 a totals spot that the end.
*/
function tableTimeHeaderHelper() {
  var strBuild = '';
  var timeKeeper = 6;
  // Build headder
  strBuild += '<table><tr><th>Storefront</th>';
  // Create time header
  for(var i = 0; i < 15; i++) {
    if(timeKeeper > 12) {
      strBuild += '<th>' + (timeKeeper-12) + ' PM</th>';
    }
    else if(timeKeeper < 12){
      strBuild += '<th>' + timeKeeper + ' AM</th>';
    }
    else {
      strBuild += '<th>' + timeKeeper + ' PM</th>';
    }
    timeKeeper++;
  }
  strBuild += '<th>Location Total</th></tr>';
  return strBuild;
}

/*
@func tableTotalsFooterHelper
@param eleArr: an array of objects, sel: the selector
@ret strBuild: the string containing html to display
@desc This helper function creates and computes the totals
  for either total customers each hour or cookies each hour
  depending on sel
*/
function tableTotalsFooterHelper(eleArr, sel) {
  var strBuild = '<tr><td>Column Totals</td>';
  var hrTotal, i, k, total;
  if(sel === 0) {
    for(i = 0; i < 15; i++) {
      hrTotal = 0;
      for(k = 0; k < eleArr.length; k++) {
        hrTotal += eleArr[k].custPerHour[i];
      }
      strBuild += '<td>' + hrTotal + '</td>';
    }
    // Total of totals
    total = 0;
    for(i = 0; i < eleArr.length; i++) {
      total += eleArr[i].totalCust;
    }
    strBuild += '<td>' + total + '</td></tr>';
  }

  else if(sel === 1) {
    for(i = 0; i < 15; i++) {
      hrTotal = 0;
      for(k = 0; k < eleArr.length; k++) {
        hrTotal += eleArr[k].cookiesPerHour[i];
      }
      strBuild += '<td>' + hrTotal + '</td>';
    }
    // Total of totals
    total = 0;
    for(i = 0; i < eleArr.length; i++) {
      total += eleArr[i].totalCookies;
    }
    strBuild += '<td>' + total + '</td></tr>';
  }

  return strBuild;
}

// Build min max table on html
function buildMinMaxHTML(eleArr) {
  var buildStr = '<h2>Storefront Min/Maxes</h2>';
  for(var i = 0; i < eleArr.length; i++) {
    buildStr += buildMinMax(eleArr[i]);
  }
  return buildStr;
}

// Build min max
/*
This function takes a salmon store object and builds a total list block.
*/
function buildMinMax(salObj) {
  var retStr = '<div id=\'MinMaxBlock\' class=\'storeInfoBlock\'>' + salObj.name + '\n<ul>';
  retStr += '<li>Min Customers per Hour: ' + salObj.minCustHr + '</li>';
  retStr += '<li>Max Customers per Hour: ' + salObj.maxCustHr + '</li>';
  retStr += '<li>Total Customers : ' + salObj.totalCust + '</li>';
  retStr += '<li>Avg Cookies Sold : ' + salObj.avgCookies + '</li>';
  retStr += '<li>Total Cookies Sold : ' + salObj.totalCookies + '</li></div>';
  return retStr;
}

// Form Functions

// Event Listener
var form = document.getElementById('newStoreField');

var handleFormSubmit = function(formSubmitEvent) {
  formSubmitEvent.preventDefault();
  console.log('Form Submitted!');
  var numArray = [0,0,0];
  // Plays a small animation to show table has read the values.
  var fieldVals = document.getElementById('newStoreField');
  // fieldVals.classList.add('shakeEffect');
  var fName = fieldVals[1].value;
  while(fName === '') {
    fName = prompt('There must be a store name.');
  }
  for(var h = 0; h < 3; h++) {
    numArray[h] = parseInt(fieldVals[2+h].value);
    while(isNaN(numArray[h]) || numArray[h] <= 0){
      numArray[h] = prompt('Please enter a valid number! (0 is invalid)');
    }
  }
  var tempStore = new Store(fName, numArray[0], genCustPerHour(numArray[1],numArray[2]), numArray[1], numArray[2]);
  console.log(tempStore);
  testArr.push(tempStore);
  // Clear form
  fieldVals[1].value = '';
  fieldVals[2].value = '';
  fieldVals[3].value = '';
  fieldVals[4].value = '';
  // Re-build tables
  drawHTML_SalesTables();
};

form.addEventListener('submit', handleFormSubmit);


// Removes the animation to table.
var fieldVals = document.getElementById('newStoreField');
fieldVals.addEventListener('animationend', event, function(){
  if(fieldVals.className === 'shakeEffect')
    fieldVals.classList.remove('shakeEffect');
  else
    fieldVals.classList.add('shakeEffect');
});

//
//  Write to the HTML page
//
function drawHTML_SalesTables() {
  document.getElementById('cookiesPerHourTable').innerHTML = createTable(testArr, 1);
  document.getElementById('customersPerHourTable').innerHTML = createTable(testArr, 0);
  document.getElementById('MinMaxBlock').innerHTML = buildMinMaxHTML(testArr);
}

// Test code to create dummy stores.
var store1 = new Store('1st and Pike', 6.3, genCustPerHour(23,65),23,65);
var store2 = new Store('SeaTac Airport',1.2, genCustPerHour(3,24),3,24);
var store3 = new Store('Seattle Center', 3.7, genCustPerHour(11,38),11,38);
var store4 = new Store('Capitol Hill', 2.3, genCustPerHour(20,38),20,38);
var store5 = new Store('Alki', 4.6, genCustPerHour(2,16),2,16);
var testArr = [store1,store2,store3,store4,store5];
// var storeTest;
// var tempNameStr = '';
// for(var i = 0; i < 5; i++) {
//   tempNameStr = 'Store # ' + i;
//   storeTest = new Store(tempNameStr,Math.ceil(Math.random()*9),genCustPerHour(10, 50), 10, 50);
//   testArr.push(storeTest);
// }
drawHTML_SalesTables();
