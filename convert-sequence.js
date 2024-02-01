/** 문제: 조건에 맞게 수열 변환하기 1
 * 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
 */

// 나의 풀이: 사실,, map을 사용해서 하고 싶었다..
// function solution(arr) {
//   let answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 50 && arr[i] % 2 === 0) {
//       answer.push(arr[i] / 2);
//     } else if (arr[i] < 50 && arr[i] % 2 === 1) {
//       answer.push(arr[i] * 2);
//     } else answer.push(arr[i]);
//   }
//   return answer;
// }

// 다른 사람의 풀이
/**
 *  num % 2 === 0 이랑 num % 2 === 1 이렇게 할 수도 있지만,
 * 나머지가 0 일때는 어차피 num % 2 가 0을 리턴하고 그걸 truthy로 만들면 된다.
 * num % 2 === 1 은 truth로 평가될 수 있으니까, 두번째 if 로직을 타게 될 것,,
 * 그대로 인 것은, 그냥 num 리턴하기
 */
function solution(arr) {
  return arr.map((num) => {
    if (num >= 50 && !(num % 2)) return num / 2;
    if (num < 50 && num % 2) return num * 2;
    return num;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98])); // [ 2, 2, 6, 50, 99, 49 ]
