'use strict';
function randomcookies(a, b) {


    var randomc = a * b
    return randomc;
}


var times = ["location",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "Total",];
function getRandomIntInclusive(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var locationAr = [];
function Location(locationName, maxHourlyCustomers, minHourlyCustomers, averageCookiesPerCustomer) {
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.minHourlyCustomers = minHourlyCustomers;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
    this.numoFcooiesPerHour = [];
    this.locationName = locationName;
    locationAr.push(this)

}


Location.prototype.clcnumofcooie = function () {
    var randomCookies;
    for (let index = 0; index < times.length; index++) {
        randomCookies = randomcookies(getRandomIntInclusive(this.minHourlyCustomers, this.maxHourlyCustomers), this.averageCookiesPerCustomer);
        this.numoFcooiesPerHour.push(Math.floor(randomCookies));

    }
}

var sumarr = [];

var myTable = document.createElement("table");
divone.appendChild(myTable);
var myTrTime = document.createElement("tr")
myTable.appendChild(myTrTime);

for (let index = 0; index < times.length; index++) {
    var myThTime = document.createElement("th");
    myThTime.textContent = times[index];
    myTrTime.appendChild(myThTime);
}
Location.prototype.CreateTabl = function () {

    var firistTr = document.createElement("tr");
    myTable.appendChild(firistTr);

    for (let index = 0; index < times.length; index++) {
        if (index == 0) {

            var firisttd = document.createElement("td");
            firisttd.textContent = this.locationName;
            firistTr.appendChild(firisttd);

        }
        else if (index == times.length - 1) {
            var sum = this.numoFcooiesPerHour.reduce(function (a, b) {
                return a + b;
            }, 0);
            sumarr.push(sum);
            var firisttd = document.createElement("td");
            firisttd.textContent = sum;
            firistTr.appendChild(firisttd);
        }
        else {

            var firisttd = document.createElement("td");
            firisttd.textContent = this.numoFcooiesPerHour[index];
            firistTr.appendChild(firisttd);


        }
    }
}




var Lima = new Location("Lima ", 16, 2, 4.6);
var Paris = new Location("Paris", 38, 20, 2.3);
var Seattle = new Location("Seattle", 65, 23, 6.3);
var Dubai = new Location("Dubai", 11, 38, 3.7);
var Tokyo = new Location("Tokyo", 3, 24, 1.2);
console.log(Lima);
console.log(Paris);
console.log(Dubai);
console.log(Tokyo);
Lima.clcnumofcooie();
Paris.clcnumofcooie();
Seattle.clcnumofcooie();
Dubai.clcnumofcooie();
Tokyo.clcnumofcooie();
Paris.CreateTabl();
Lima.CreateTabl();
Seattle.CreateTabl();
Dubai.CreateTabl();
Tokyo.CreateTabl();


var totalTrr = document.createElement("tr");
divone.appendChild(totalTrr);
for (let index = 0; index < times.length; index++) {

    if (index == 0) {
        var totalth = document.createElement("td");
        totalth.textContent = "Total"
        totalth.setAttribute("id","th5");
            ; totalTrr.appendChild(totalth);


    }


    else if (index == times.length - 1) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < sumarr.length; index++) {

                var sum6 = sumarr[0] + sumarr[1] + sumarr[2] + sumarr[3] + sumarr[4];
            }


        }
        var totalth = document.createElement("td");
        totalth.textContent = sum6;
        totalth.setAttribute("id","th5");
        totalTrr.appendChild(totalth);
    }

    else {

        var sum = 0;
        for (let i = 0; i < locationAr.length; i++) {

            sum += locationAr[i].numoFcooiesPerHour[index];
        }
        var totalth = document.createElement("td");
        totalth.setAttribute("id","th5");
        totalth.textContent = sum;
        totalTrr.appendChild(totalth);


    }
}
