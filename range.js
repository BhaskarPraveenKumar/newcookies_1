function range(start, end){
    for(let i = start; i < end; i++){
        console.log(i);
    }

}
range(10,500);

norwich.randomnumber = function(){
    const upper = 100;
    const lower = 10;
    const delta = upper - lower; 
    return Math.floor(Math.random() * delta) + lower;