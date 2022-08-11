


/* function for assigning the properties */
function values(name,min, max, avg){
    this.name    = name;
    this.mincust = min;
    this.maxcust = max;
    this.avgcust = avg;
    this.randomnumber = function(){
        const low = 10;
        const high = 20;
        const delta = high - low;
        return Math.floor(Math.random()* delta) + low;
    }
    this.custvisited = function(){
        return this.randomnumber();
    }
    this.cookiesSold = function(){
        return this.avgcust * this.custvisited;
    }

}
// create a object- countries
let India = new values('India', 10,100,55);
let UK    = new values('UK',20,200,110);
let USA   = new values('USA',30,300,155);
let Can   = new values('Can',40,400,220);
let Aus   = new values('Aus',50,500,275);

/* calling the functions */
console.log(India);
console.log(UK);
console.log(USA);
console.log(Can);
console.log(Aus);

const countries = [India, UK, USA, Can, Aus]
console.log(countries);z

for (let i = 0; i < countries.length; i++){
    /* console.log(countries[i].name);*/
    for (let j = 8; j < 16; j++){
        console.log(`Customers visited at ${j} am are ${countries[i].custvisited()}`);
    }
}





