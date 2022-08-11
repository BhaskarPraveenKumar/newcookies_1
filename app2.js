console.log('hello html')

// create a object- countries
let India = {};
let UK    = {};
let USA   = {};
let Can   = {};
let Aus   = {};

// To check the type of the object
console.log(typeof(UK));

// To list the properties of the object
console.log(India);
console.log(India);
console.log(India);
console.log(India);
console.log(India);



// create an empty array - countries and add the objects

const countries = [India, UK,USA, Can,Aus]
console.log(countries)

// create a method for anyone of your location object. 

India.randomnumber = function(){
    const upper = 100;
    const lower = 10;
    const delta = upper - lower; 
    return Math.floor(Math.random() * delta) + lower;
}
UK.randomnumber = function(){
    const upper = 100;
    const lower = 10;
    const delta = upper - lower; 
    return Math.floor(MAth.random() * delta) + lower;
}

USA.randomnumber = function(){
    const upper = 100;
    const lower = 10;
    const delta = upper - lower; 
    return Math.floor(MAth.random() * delta) + lower;

}

Can.randomnumber = function(){
    const upper = 100;
    const lower = 10;
    const delta = upper - lower; 
    return Math.floor(MAth.random() * delta) + lower;
}

Aus.randomnumber = function(){
    const upper = 100;
    const lower = 10;
    const delta = upper - lower; 
    return Math.floor(MAth.random() * delta) + lower;
}

// generate random numbers for customers visited

India.cust_visited = function(){
    this.randomnumber();
}

UK.cust_visited = function(){
    this.randomnumber();
}

USA.cust_visited = function(){
    this.randomnumber();
}

Can.cust_visited = function(){
    this.randomnumber();
}

Aus.cust_visited = function(){
    this.randomnumber();
}
console.log(India.cust_visited)

