/** 문제: 길이에 따른 연산
 * 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
 */

// 내코드
// function solution(num_list) {
//   const result = num_list.reduce((a, c) => {
//     if (num_list.length >= 11) {
//       return a + c;
//     } else return a * c;
//   });
//   return result;
// }

// 다른 사람 풀이
// NOTE: reduce를 사용한 점은 비슷하지만, if-else 말고 삼항연산자 쓰셨다.
const solution = (num_list) =>
  num_list.reduce((a, v) => (n.length > 10 ? a + v : a * v));
  
console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution([2, 3, 4, 5])); // 120
