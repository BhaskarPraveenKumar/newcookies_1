console.log('hello html')

// create a object- student
let norwich = {}
let london = {}
let manchester = {}
let leeds = {}
let colchester = {}

const locations = [norwich, london, manchester, leeds, colchester]


console.log(locations);

norwich.mincust = 10;
norwich.maxcust = 10;
norwich.avgcust = (norwich.mincust + norwich.maxcust )/2;

london.mincust = 20;
london.maxcust = 200;
london.avgcust = (london.mincust + london.maxcust )/2;


manchester.mincust = 30;
manchester.maxcust = 300;
manchester.avgcust = (manchester.mincust + manchester.maxcust )/2;


leeds.mincust = 40;
leeds.maxcust = 400;
leeds.avgcust = (leeds.mincust + leeds.maxcust )/2;

colchester.mincust = 50.5;
colchester.maxcust = 500;
colchester.avgcust = (colchester.mincust + colchester.maxcust )/2;

//function details(min, max, avg = (min + max) / 2) ;
//details.min = min;
//details.max = max;

norwich.randomnumber = function(){
    return Math.floor((Math.random()) * 100)
}

console.log(norwich.randomnumber());

london.randomnumber = function(){
    return Math.floor((Math.random()) * 100)
}
console.log(london.randomnumber());

manchester.randomnumber = function(){
    return Math.floor((Math.random()) * 100)
}

console.log(manchester.randomnumber());

leeds.randomnumber = function(){
    return Math.floor((Math.random()) * 100)
}

console.log(leeds.randomnumber());

colchester.randomnumber = function(){
    return Math.floor((Math.random()) * 100);
}


console.log(colchester.randomnumber());

norwich.randomnumber = function(){
    const upper = 100;
    const lower = 10;
    const delta = upper - lower; 
    return Math.floor(Math.random() * delta) + lower;
}

norwich.cookiessold = function(){
    const customers = this.randomnumber();
    const avgcookies = this.avgcust;
    return customers * avgcookies;
}
console.log('cookies sold :' + norwich.cookiessold()); 