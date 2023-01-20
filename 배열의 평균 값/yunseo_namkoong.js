// 양꼬치
function solution(n, k) {
    if(n < 10){
        return n*12000 + k*2000
    }else{
        return n*12000 + (k-parseInt(n/10))*2000
    }
    return answer;
}

// 배열의 평균값
function solution(numbers) {
    let sum = 0
    for(let i=0;i<numbers.length;i++){
        sum +=numbers[i]
    }
    let answer = sum / numbers.length
    return answer;
}