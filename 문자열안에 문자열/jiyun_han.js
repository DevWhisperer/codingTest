function solution(str1, str2) {
    let s = str1.split(str2);
    console.log(s);

    if (s.length > 1) {
        return 1;
    } else {
        return 2;
    }
}

solution("ab6CDE443fgh22iJKlmn1o", "6CD");
solution("ppprrrogrammers", "pppp");
