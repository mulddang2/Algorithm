// 문제: 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 나의풀이
// function solution(start_num, end_num) {
//   const result = []
//   for(let i = start_num; i >= end_num; i--) {
//       result.push(i)
//   }
//   return result;
// }

// !!!!!!! 다른사람의 풀이: Array 생성자로 배열 생성 후 배열 내장 메소드를 체이닝해서 사용하는 방법
/**function solution(start_num, end_num) {
    // 1. n개의 방을 만든다
    // 2. 시작번호로 방을 채운다
    // 3. 시작번호 부터 끝까지 인덱스 값 만큼 빼면 하나씩 줄어드는 결과가 나온다
    return Array(start_num - end_num + 1).fill(start_num).map((v, i) => v - i)
}
*/

const solution = (start, end) =>
// Array(start - end + 1): 8개의 빈 공간인 배열이 나온다
  Array(start - end + 1)
  // .fill: 시작번호(10)으로 모든 공간을 채움 
    .fill(start)
    //[10, 10, 10, 10, 10, 10, 10, 10].map((v, i) => v - i) : 인덱스를 돌면서 하나씩 빼니까 결과는 동일
    .map((v, i) => v - i);

console.log(solution(10, 3));
