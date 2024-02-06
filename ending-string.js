// 문제: 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

/**
 * 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
 */

// 나의 풀이

/*
ex. solution('AbCdEFG', 'dE')
1. 역순으로 찾는 lastIndexOf 메서드 활용하여 인덱스를 3, 7로 우선 찾는다.
2. slice 할 때, 두번째자리에 3 + pat의 글자길이(2) 를 더하면 5앞에서 끊게 되니까, 딱 맞다.
*/

function solution(myString, pat) {
  const stringIndex = myString.lastIndexOf(pat);

  return myString.slice(0, stringIndex + pat.length);
}

console.log(solution('AbCdEFG', 'dE')); //AbCdE
console.log(solution('AAAAaaaa', 'a')); //AAAAaaaa
