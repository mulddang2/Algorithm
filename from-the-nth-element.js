/** 문제: n 번째 원소부터
 * 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.
 * 
 */

// 나의 풀이
/**
 * 어디서 부터 어디까지 하면, slice 메서드 쓰면 편하다.
 * slice 는 2개 파라미터 중, 한개만 쓸 경우, 인덱스 기준으로 첫번째 파라미터부터 마지막 까지 얕은 복사해서 반환한다.
 * 근데 n은 인덱스가 아니라 length 기준으로 세니까 1을 빼주면 끝!
 * 
 * 다른 풀이도 다 똑같애서 남들 풀이는 생략,, 
 */
function solution(num_list, n) {
  return num_list.slice(n-1)
}

console.log(solution([2, 1, 6], 3)) // [ 6 ]
console.log(solution([5, 2, 1, 7, 5], 2)) // [ 2, 1, 7, 5 ]