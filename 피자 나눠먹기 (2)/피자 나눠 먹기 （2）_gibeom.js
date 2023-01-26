function solution(n) {
    
    let pizzaP = 6;
    while( pizzaP % n  !== 0){
        pizzaP += 6
    }
    return  pizzaP / 6

}