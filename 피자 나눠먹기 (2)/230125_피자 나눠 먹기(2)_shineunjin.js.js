function solution (n) {
     let pizza = 6;
     while(pizza % n !== 0) {
         pizza +=6 // 6과의 최소공배수 만들어주기
     } 
     return pizza/6;
}
