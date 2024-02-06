// 문제: 문자열 묶기
/**
 * 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
 */

// 나의 풀이
/**
 * 1. 방 30개를 만든다.
 * 2. 카운트를 세서 인덱스마다 집어넣는다.
 */
function solution(strArr) {
  let arr = [];

  for (let i = 0; i < 30; i++) {
    arr.push(0);
  }

  strArr.forEach((v) => {
    arr[v.length - 1] += 1;
  });

  return Math.max(...arr);
}

// 다른 사람 풀이: 비슷하지만, Array와 fill을 활용하면, 굳이 for문으로 방을 안만들어도 된다.

// function solution(strArr) {
//   const counter = Array(31).fill(0)
//   for (const str of strArr){
//       counter[str.length]++
//   }
//   return Math.max(...counter)
// }
