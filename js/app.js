'use strict';
function randomcookies(a,b){


    var randomc=a*b
    return randomc;
}
var times=[
    "6am:",
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
    
];
function getRandomIntInclusive(min,max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

/*var numoFcooiesPerHour =[];
    function clcnumofcooie (){
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
             randomCookies=randomcookies(getRandomIntInclusive(23,65),6.3);
             this.numoFcooiesPerHour.push(randomCookies);
             console.log(numoFcooiesPerHour);
}
clcnumofcooie();
console.log(numoFcooiesPerHour);*/
var Seattle={
    maxHourlyCustomers:65,
    minHourlyCustomers:23,
    averageCookiesPerCustomer:6.3,
     numoFcooiesPerHour :[],
    clcnumofcooie:function (){
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
             randomCookies=Math.floor(randomcookies(getRandomIntInclusive(Seattle.minHourlyCustomers,Seattle.maxHourlyCustomers),Seattle.averageCookiesPerCustomer));
             this.numoFcooiesPerHour.push(randomCookies);
             }
             var divOne=document.getElementById("divone");


             
             for (let index = 0; index < times.length; index++) {
             var myLis=document.createElement("ul");
             divOne.appendChild(myLis);
             var myli=document.createElement("li");
             myli.textContent= times[index] + " : " + Seattle.numoFcooiesPerHour[index];
             myLis.appendChild(myli);
             }
             var sum = Seattle.numoFcooiesPerHour.reduce(function(a, b){
                return a + b;
            }, 0);
            

                var myLis=document.createElement("ul");
                divOne.appendChild(myLis);
                var myli=document.createElement("li");
                myli.textContent= "Total: " +sum;
                myLis.appendChild(myli);
            


        }}
        
  /*  numoFcooiesPerHour :[],
    clcnumofcooie : function(){
        var randomCookies;
/*        for (let index = 0; index < times.length; index++) {
             randomCookies  = randomcookies(getRandomIntInclusive(23,65),6.3);
             this.numoFcooiesPerHour.push(randomCookies);
             console.log(this.numberOfCustomersPerHour);

            
        }

    }*/


Seattle.clcnumofcooie();

var Tokyo={
    maxHourlyCustomers:24,
    minHourlyCustomers:3,
    averageCookiesPerCustomer:1.2,
    
    numoFcooiesPerHour :[],
    clcnumofcooie:function (){
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies=Math.floor(randomcookies(getRandomIntInclusive(Tokyo.minHourlyCustomers,Tokyo.maxHourlyCustomers),Tokyo.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
             }
             var divtwo=document.getElementById("divtwo");


             
             for (let index = 0; index < times.length; index++) {
             var myLis=document.createElement("ul");
             divtwo.appendChild(myLis);
             var myli=document.createElement("li");
             myli.textContent= times[index] + " : " + Tokyo.numoFcooiesPerHour[index];
             myLis.appendChild(myli);
             }
             var sum = Tokyo.numoFcooiesPerHour.reduce(function(a, b){
                return a + b;
            }, 0);
            

                var myLis=document.createElement("ul");
                divtwo.appendChild(myLis);
                var myli=document.createElement("li");
                myli.textContent= "Total: " +sum;
                myLis.appendChild(myli);
    

}
}
Tokyo.clcnumofcooie();
var Dubai={
    maxHourlyCustomers:38,
    minHourlyCustomers:11,
    averageCookiesPerCustomer:3.7,
    numoFcooiesPerHour :[],
    clcnumofcooie:function (){
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies=Math.floor(randomcookies(getRandomIntInclusive(Dubai.minHourlyCustomers,Dubai.maxHourlyCustomers),Dubai.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
             }
             var divthree=document.getElementById("divthree");


             
             for (let index = 0; index < times.length; index++) {
             var myLis=document.createElement("ul");
             divthree.appendChild(myLis);
             var myli=document.createElement("li");
             myli.textContent= times[index] + " : " + Dubai.numoFcooiesPerHour[index];
             myLis.appendChild(myli);
             }
             var sum = Dubai.numoFcooiesPerHour.reduce(function(a, b){
                return a + b;
            }, 0);
            

                var myLis=document.createElement("ul");
                divthree.appendChild(myLis);
                var myli=document.createElement("li");
                myli.textContent= "Total: " +sum;
                myLis.appendChild(myli);
    

}

}

Dubai.clcnumofcooie();
var Paris={
    maxHourlyCustomers:38,
    minHourlyCustomers:20,
    averageCookiesPerCustomer:2.3,
    numoFcooiesPerHour :[],
    clcnumofcooie:function (){
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies=Math.floor(randomcookies(getRandomIntInclusive(Paris.minHourlyCustomers,Paris.maxHourlyCustomers),Paris.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
             }
             var divfour=document.getElementById("divfour");


             
             for (let index = 0; index < times.length; index++) {
             var myLis=document.createElement("ul");
             divfour.appendChild(myLis);
             var myli=document.createElement("li");
             myli.textContent= times[index] + " : " + Paris.numoFcooiesPerHour[index];
             myLis.appendChild(myli);
             }
             var sum = Paris.numoFcooiesPerHour.reduce(function(a, b){
                return a + b;
            }, 0);
            

                var myLis=document.createElement("ul");
                divfour.appendChild(myLis);
                var myli=document.createElement("li");
                myli.textContent= "Total: " +sum;
                myLis.appendChild(myli);
    

}}
Paris.clcnumofcooie();
var Lima={
    maxHourlyCustomers:16,
    minHourlyCustomers:2,
    averageCookiesPerCustomer:4.6,
    numoFcooiesPerHour :[],
    clcnumofcooie:function (){
        var randomCookies;
        for (let index = 0; index < times.length; index++) {
            randomCookies=Math.floor(randomcookies(getRandomIntInclusive(Lima.minHourlyCustomers,Lima.maxHourlyCustomers),Lima.averageCookiesPerCustomer));
            this.numoFcooiesPerHour.push(randomCookies);
             }
             var divfive=document.getElementById("divfive");


             
             for (let index = 0; index < times.length; index++) {
             var myLis=document.createElement("ul");
             divfive.appendChild(myLis);
             var myli=document.createElement("li");
             myli.textContent= times[index] + " : " + Lima.numoFcooiesPerHour[index];
             myLis.appendChild(myli);
             }
             var sum = Lima.numoFcooiesPerHour.reduce(function(a, b){
                return a + b;
            }, 0);
            

                var myLis=document.createElement("ul");
                divfive.appendChild(myLis);
                var myli=document.createElement("li");
                myli.textContent= "Total: " +sum;
                myLis.appendChild(myli);
    

}

}
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

/*var divOne=document.getElementById("divone");
for (let index = 0; index < times.length; index++) {
var myLis=document.createElement("ul");
divOne.appendChild(myLis);
var myli=document.createElement("li");
myli.textContent= times[index] + "10"
myLis.appendChild(myli);
*/