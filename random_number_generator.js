function random_number(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);   
}

console.log(random_number(20,50));