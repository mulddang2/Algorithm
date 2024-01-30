/**
 * 문제: 가까운 1 찾기
 * 
 * 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
    단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
 */

// 나의 풀이
// NOTE: 어제 다른풀이에서 본, findIndex 메서드를 활용해봄/

// function solution(arr, idx) {
//   return arr.findIndex((v, i) => i >= idx && v === 1)
// }

// 다른 사람의 풀이
// NOTE: indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환합니다.
// arr.indexOf(내가 찾고픈 애, 시작 인덱스)

const solution = (arr, idx) => arr.indexOf(1, idx);

console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
