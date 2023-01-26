function solution(n) {
  //최소공배수 최대공약수 문제, 유클리드 공식 이용
  const gcd = (a, b) => {
    return a % b == 0 ? b : gcd(b, a % b);
  }; //a,b의 최대공약수 // 'a,b의 최대공은 b와 a%b의 최대공이다.'
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  }; //a,b의 최소공배수 // 'a * b = 최대공 * 최소공'

  //피자 조각 수인 6과 n명의 최소공배수가 필요한 조각의 수
  //그걸 6조각으로 나눗셈하면 피자 판의 수
  return lcm(6, n) / 6;
}
