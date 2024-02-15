// 문제: 조건에 맞게 수열 변환하기 3
/**
 * 나의 풀이:
 * 1. 결과를 담을 빈 배열 생성
 * 2. 홀짝 판별
 * 3. 반복문 돌려서 새로운 값 만들어 넣기
 */

// function solution(arr, k) {
//   const result = [];

//   if (k % 2 === 0) {
//     arr.forEach((v) => {
//       result.push(v + k);
//     });
//   } else {
//     arr.forEach((v) => {
//       result.push(v * k);
//     });
//   }
//   return result;
// }

/**
 * 남들 풀이:
 * 1. 새로운 배열로 만들 때, map 사용하면 편하다.
 * 2. 굳이 ===1, === 0 안적어도 된다. 0이면 어차피 false 1이면 어차피 true 니까
 *
 *
 */

const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));

console.log(solution([1, 2, 3, 100, 99, 98], 3));
console.log(solution([1, 2, 3, 100, 99, 98], 2));
