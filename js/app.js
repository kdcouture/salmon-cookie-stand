/*
Kevin Couture
Jun. 10th, 2019
201 Lab 6
Salmon cookie lab, app.js
*/

'use strict';

// Object constructor

//   name:
//   avgCookies:
//   custPerHour: []
//   cookiesPerHour: []
//   minCustHr:
//   maxCustHr:
//   totalCust:
//   totalCookies:

function Store(name, avgCookies, custPerHour) {
  this.name = name;
  this.avgCookies = avgCookies;
  this.custPerHour = custPerHour;
  this.cookiesPerHour = genCookiesPerHour(custPerHour, avgCookies);
  this.minCustHr = findMin(custPerHour);
  this.maxCustHr = findMax(custPerHour);
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
    totalCookiesRet[i] = inArry[i]*avgCookies;
  }
  return totalCookiesRet;
}

// Generate customers per hour
function genCustPerHour() {
  var retArry = [];
  for(var i = 0; i < 15; i++) {
    retArry.push(Math.floor(Math.random()*100));
  }
  return retArry;
}

// Find Min
function findMin(inArr) {
  var min = 999;
  for(var i = 0; i < inArr.length; i++) {
    if(inArr[i] <= min)
      min = inArr[i];
  }
  return min;
}

// Find Max
function findMax(inArr) {
  var max = -999;
  for(var i = 0; i < inArr.length; i++) {
    if(inArr[i] >= max)
      max = inArr[i];
  }
  return max;
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
  console.log(eleArr[0]);
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
  var buildStr = document.getElementById('MinMaxBlock').innerHTML;
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
  var retStr = '<div class=\'storeInfoBlock\'>' + salObj.name + '\n<ul>';
  retStr += '<li>Min Customers per Hour: ' + salObj.minCustHr + '</li>';
  retStr += '<li>Max Customers per Hour: ' + salObj.maxCustHr + '</li>';
  retStr += '<li>Total Customers : ' + salObj.totalCust + '</li>';
  retStr += '<li>Avg Cookies Sold : ' + salObj.avgCookies + '</li>';
  retStr += '<li>Total Cookies Sold : ' + salObj.totalCookies + '</li></div>';
  return retStr;
}

// Test code to create dummy stores.
var testArr = [];
var storeTest;
var tempNameStr = '';
for(var i = 0; i < 5; i++) {
  tempNameStr = 'Store # ' + i;
  storeTest = new Store(tempNameStr,i+1,genCustPerHour());
  testArr.push(storeTest);
}

//
//  Write to the HTML page
//
document.getElementById('cookiesPerHourTable').innerHTML = createTable(testArr, 1);
document.getElementById('customersPerHourTable').innerHTML = createTable(testArr, 0);
document.getElementById('MinMaxBlock').innerHTML = buildMinMaxHTML(testArr);
