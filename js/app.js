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


    function clcnumofcooie (){
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
             randomCookies=randomcookies(getRandomIntInclusive(23,65),6.3);
             numoFcooiesPerHourr.push(randomCookies);
             console.log(numoFcooiesPerHourr);
}}
//clcnumofcooie();
//console.log(numoFcooiesPerHourr);

function Location(maxHourlyCustomers,minHourlyCustomers,averageCookiesPerCustomer){
this.maxHourlyCustomers=maxHourlyCustomers;
this.minHourlyCustomers=minHourlyCustomers;
this.averageCookiesPerCustomer=averageCookiesPerCustomer;
this.numoFcooiesPerHour=[];


}



var Seattle=new Location(65,23,6.3);


function mainfun(min,max,avg,arr){
    var randomCookies;
    for (let index = 0; index < times.length; index++) {
           randomCookies = Math.floor(randomcookies(getRandomIntInclusive(min,max),avg));
           arr.push(randomCookies);      
       }

    }

    mainfun(Seattle.minHourlyCustomers,Seattle.maxHourlyCustomers,Seattle.averageCookiesPerCustomer,Seattle.numoFcooiesPerHour);

var divsix=document.getElementById("divsix");
    var divfour = document.getElementById("divfour");
    var divfive = document.getElementById("divfive");
    var divThree = document.getElementById("divthree");
    var divtow = document.getElementById("divtwo");  
  var divOne = document.getElementById("divone");
    var myTable = document.createElement("table");
    divOne.appendChild(myTable);


    var myTr=document.createElement("tr")
        myTable.appendChild(myTr);
    
        for (let index = 0; index < times.length; index++) {
        var myTh = document.createElement("th");
        myTh.textContent = times[index];
        myTr.appendChild(myTh);}


var tableTow=document.createElement("table");
divtwo.appendChild(tableTow);

        var secTr=document.createElement("tr")
        tableTow.appendChild(secTr);
    for(let index=0; index<=times.length; index ++){
            if(index==0){

                var secTh=document.createElement("th");
                secTh.textContent="Seattle"
                secTr.appendChild(secTh);
                                
            }
            else if(index==times.length){ 
                var sum = Seattle.numoFcooiesPerHour.reduce(function (a, b) {
        return a + b;
}, 0);

var secTh=document.createElement("th");
secTh.textContent=sum;
secTr.appendChild(secTh);
}
else {

var secTh=document.createElement("th");
secTh.textContent=Seattle.numoFcooiesPerHour[index];
secTr.appendChild(secTh);
}}
    

var Tokyo=new Location(3,24,1.2);

mainfun(Tokyo.minHourlyCustomers,Tokyo.maxHourlyCustomers,Tokyo.averageCookiesPerCustomer,Tokyo.numoFcooiesPerHour);
var myTableThree = document.createElement("table");
    divThree.appendChild(myTableThree);
var thiTr=document.createElement("tr");
myTableThree.appendChild(thiTr);
    /*var myTrth=document.createElement("tr")
        myTableThree.appendChild(myTr);
    
        for (let index = 0; index < times.length; index++) {
        var myTh = document.createElement("th");
        myTh.textContent = times[index];
        myTr.appendChild(myTh);}

        var secTr=document.createElement("tr")
        myTableThree.appendChild(secTr);*/
    for(let index=0; index<=times.length; index ++){
            if(index==0){

                var secfour=document.createElement("th");
                secfour.textContent="Tokyo"
                thiTr.appendChild(secfour);
                                
            }
            else if(index==times.length){ 
                var sum = Tokyo.numoFcooiesPerHour.reduce(function (a, b) {
        return a + b;
}, 0);

var secfour=document.createElement("th");
secfour.textContent=sum;
thiTr.appendChild(secfour);
}
else {

var secfour=document.createElement("th");
secfour.textContent=Tokyo.numoFcooiesPerHour[index];
thiTr.appendChild(secfour);
console.log(index);
}}


var Dubai=new Location(11,38,3.7);
mainfun(Dubai.minHourlyCustomers,Dubai.maxHourlyCustomers,Dubai.averageCookiesPerCustomer,Dubai.numoFcooiesPerHour);

var myTablefour = document.createElement("table");
    divfour.appendChild(myTablefour);
var fourTr=document.createElement("tr");
myTablefour.appendChild(fourTr);
    
    for(let index=0; index<=times.length; index ++){
            if(index==0){

                var thfour=document.createElement("th");
                thfour.textContent="Dubai"
                fourTr.appendChild(thfour);
                                
            }
            else if(index==times.length){ 
                var sum =Dubai.numoFcooiesPerHour.reduce(function (a, b) {
        return a + b;
}, 0);

var thfour=document.createElement("th");
thfour.textContent=sum;
thiTr.appendChild(thfour);
}
else {

var thfour=document.createElement("th");
thfour.textContent=Dubai.numoFcooiesPerHour[index];
fourTr.appendChild(thfour);

}}

var Paris =new Location(38,20,2.3);
mainfun(Paris.minHourlyCustomers,Paris.maxHourlyCustomers,Paris.averageCookiesPerCustomer,Paris.numoFcooiesPerHour);
var myTablefive= document.createElement("table");
    divfive.appendChild(myTablefive);
var fiveTr=document.createElement("tr");
myTablefive.appendChild(fiveTr);
      
for(let index=0; index<=times.length; index ++){
    if(index==0){

        var thfive=document.createElement("th");
        thfive.textContent="Paris"
        fiveTr.appendChild(thfive);
                        
    }
    else if(index==times.length){ 
        var sum =Paris.numoFcooiesPerHour.reduce(function (a, b) {
return a + b;
}, 0);

var thfive=document.createElement("th");
thfive.textContent=sum;
fiveTr.appendChild(thfive);
}
else {

var thfive=document.createElement("th");
thfive.textContent=Paris.numoFcooiesPerHour[index];
fiveTr.appendChild(thfive);

}}



var Lima =new Location(16,2,4.6);
mainfun(Lima.minHourlyCustomers,Lima.maxHourlyCustomers,Lima.averageCookiesPerCustomer,Lima.numoFcooiesPerHour);
var myTablesix= document.createElement("table");
    divsix.appendChild(myTablesix);
var sixTr=document.createElement("tr");
myTablesix.appendChild(sixTr);
      
for(let index=0; index<=times.length; index ++){
    if(index==0){

        var thsix=document.createElement("th");
        thsix.textContent="Lima"
        sixTr.appendChild(thsix);
                        
    }
    else if(index==times.length){ 
        var sum =Lima.numoFcooiesPerHour.reduce(function (a, b) {
return a + b;
}, 0);

var thsix=document.createElement("th");
thsix.textContent=sum;
sixTr.appendChild(thsix);
}
else {

var thsix=document.createElement("th");
thsix.textContent=Lima.numoFcooiesPerHour[index];
sixTr.appendChild(thsix);

}}






/*  var LocationName=["Seattle","Tokyo","Dubai","Paris","Lima","Totals"];
    

    for (let index = 0; index < LocationName.length; index++) {
        var tr2=document.createElement("tr");
        myTable.appendChild(tr2);
        var tdLocationName=document.createElement("td"); 
    tdLocationName.textContent=LocationName[index];
    tr2.appendChild(tdLocationName);  
        
    } */
   



/*




var Seattle = new Location(65,23,6.3);

console.log(Seattle);


function mainfun(min,max,avg) {

    var randomCookies;
 for (let index = 0; index < times.length; index++) {
        randomCookies = Math.floor(randomcookies(getRandomIntInclusive(min,max),avg));
        numoFcooiesPerHour.push(randomCookies);
   
   
    }
console.log(numoFcooiesPerHourr);
    
    
    var divOne = document.getElementById("divone");



    for (let index = 0; index < times.length; index++) {
        var myLis = document.createElement("ul");
        divOne.appendChild(myLis);
        var myli = document.createElement("li");
        myli.textContent = times[index] + " : " + //numoFcooiesPerHour[index];
        myLis.appendChild(myli);
    }
 //   var sum = Seattle.numoFcooiesPerHour.reduce(function (a, b) {
   //     return a + b;
    //}, 0);


    var myLis = document.createElement("ul");
    divOne.appendChild(myLis);
    var myli = document.createElement("li");
    //myli.textContent = "Total: " + sum;
    myLis.appendChild(myli);



}
/*var Seattle = {
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    averageCookiesPerCustomer: 6.3,
    numoFcooiesPerHour: [],
    clcnumofcooie: function () {
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies = Math.floor(randomcookies(getRandomIntInclusive(Seattle.minHourlyCustomers, Seattle.maxHourlyCustomers), Seattle.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
        }
        var divOne = document.getElementById("divone");



        for (let index = 0; index < times.length; index++) {
            var myLis = document.createElement("ul");
            divOne.appendChild(myLis);
            var myli = document.createElement("li");
            myli.textContent = times[index] + " : " + Seattle.numoFcooiesPerHour[index];
            myLis.appendChild(myli);
        }
        var sum = Seattle.numoFcooiesPerHour.reduce(function (a, b) {
            return a + b;
        }, 0);


        var myLis = document.createElement("ul");
        divOne.appendChild(myLis);
        var myli = document.createElement("li");
        myli.textContent = "Total: " + sum;
        myLis.appendChild(myli);



    }
}

/*  numoFcooiesPerHour :[],
  clcnumofcooie : function(){
      var randomCookies;
/*        for (let index = 0; index < times.length; index++) {
           randomCookies  = randomcookies(getRandomIntInclusive(23,65),6.3);
           this.numoFcooiesPerHour.push(randomCookies);
           console.log(this.numberOfCustomersPerHour);

          
      }

  }*/

/*
Seattle.clcnumofcooie();

var Tokyo = {
    maxHourlyCustomers: 24,
    minHourlyCustomers: 3,
    averageCookiesPerCustomer: 1.2,

    numoFcooiesPerHour: [],
    clcnumofcooie: function () {
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies = Math.floor(randomcookies(getRandomIntInclusive(Tokyo.minHourlyCustomers, Tokyo.maxHourlyCustomers), Tokyo.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
        }
        var divtwo = document.getElementById("divtwo");



        for (let index = 0; index < times.length; index++) {
            var myLis = document.createElement("ul");
            divtwo.appendChild(myLis);
            var myli = document.createElement("li");
            myli.textContent = times[index] + " : " + Tokyo.numoFcooiesPerHour[index];
            myLis.appendChild(myli);
        }
        var sum = Tokyo.numoFcooiesPerHour.reduce(function (a, b) {
            return a + b;
        }, 0);


        var myLis = document.createElement("ul");
        divtwo.appendChild(myLis);
        var myli = document.createElement("li");
        myli.textContent = "Total: " + sum;
        myLis.appendChild(myli);


    }
}
Tokyo.clcnumofcooie();
var Dubai= {
    maxHourlyCustomers: 38,
    minHourlyCustomers: 11,
    averageCookiesPerCustomer: 3.7,
    numoFcooiesPerHour: [],
    clcnumofcooie: function () {
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies = Math.floor(randomcookies(getRandomIntInclusive(Dubai.minHourlyCustomers, Dubai.maxHourlyCustomers), Dubai.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
        }
        var divthree = document.getElementById("divthree");



        for (let index = 0; index < times.length; index++) {
            var myLis = document.createElement("ul");
            divthree.appendChild(myLis);
            var myli = document.createElement("li");
            myli.textContent = times[index] + " : " + Dubai.numoFcooiesPerHour[index];
            myLis.appendChild(myli);
        }
        var sum = Dubai.numoFcooiesPerHour.reduce(function (a, b) {
            return a + b;
        }, 0);


        var myLis = document.createElement("ul");
        divthree.appendChild(myLis);
        var myli = document.createElement("li");
        myli.textContent = "Total: " + sum;
        myLis.appendChild(myli);


    }

}

Dubai.clcnumofcooie();
var Paris(38,20,2.3) = {
    maxHourlyCustomers: 38,
    minHourlyCustomers: 20,
    averageCookiesPerCustomer: 2.3,
    numoFcooiesPerHour: [],
    clcnumofcooie: function () {
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies = Math.floor(randomcookies(getRandomIntInclusive(Paris.minHourlyCustomers, Paris.maxHourlyCustomers), Paris.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
        }
        var divfour = document.getElementById("divfour");



        for (let index = 0; index < times.length; index++) {
            var myLis = document.createElement("ul");
            divfour.appendChild(myLis);
            var myli = document.createElement("li");
            myli.textContent = times[index] + " : " + Paris.numoFcooiesPerHour[index];
            myLis.appendChild(myli);
        }
        var sum = Paris.numoFcooiesPerHour.reduce(function (a, b) {
            return a + b;
        }, 0);


        var myLis = document.createElement("ul");
        divfour.appendChild(myLis);
        var myli = document.createElement("li");
        myli.textContent = "Total: " + sum;
        myLis.appendChild(myli);


    }
}
Paris.clcnumofcooie();
var Lima(16,2,4.6) = {
    maxHourlyCustomers: 16,
    minHourlyCustomers: 2,
    averageCookiesPerCustomer: 4.6,
    numoFcooiesPerHour: [],
    clcnumofcooie: function () {
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies = Math.floor(randomcookies(getRandomIntInclusive(Lima.minHourlyCustomers, Lima.maxHourlyCustomers), Lima.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
        }
        var divfive = document.getElementById("divfive");



        for (let index = 0; index < times.length; index++) {
            var myLis = document.createElement("ul");
            divfive.appendChild(myLis);
            var myli = document.createElement("li");
            myli.textContent = times[index] + " : " + Lima.numoFcooiesPerHour[index];
            myLis.appendChild(myli);
        }
        var sum = Lima.numoFcooiesPerHour.reduce(function (a, b) {
            return a + b;
        }, 0);


        var myLis = document.createElement("ul");
        divfive.appendChild(myLis);
        var myli = document.createElement("li");
        myli.textContent = "Total: " + sum;
        myLis.appendChild(myli);


    }

}/*
Lima.clcnumofcooie();
// var numCookie=[
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),
//     getRandomIntInclusive(min, max),

// ];
/*
/*var divOne=document.getElementById("divone");
for (let index = 0; index < times.length; index++) {
var myLis=document.createElement("ul");
divOne.appendChild(myLis);
var myli=document.createElement("li");
myli.textContent= times[index] + "10"
myLis.appendChild(myli);
    }*/