/** 문제: N번째 원소까지
 * 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 */

// 나의 풀이
// NOTE: 어디서부터 어디까지 담으라해서 slice 가 떠올랐고, 마침 첫번째 원소 부터 n번째 인덱스 포함 안하게 하면 되니까 slice 가 찰떡,, 남들풀이도 비슷해서 다른사람 풀이 생략;
function solution(num_list, n) {
  return num_list.slice(0, n)
}

console.log(solution([2, 1, 6], 1)) // [2]
console.log(solution([5, 2, 1, 7, 5], 3)) // [5, 2, 1]