// 나의 풀이
// function solution(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     const cells = [];
//     for (let j = 0; j < n; j++) {
//       cells.push(0);
//       console.log(cells)
//       if (i === j) {
//         cells.splice(j, 1, 1);
//       }
//     }
//     arr.push(cells);
//   }
//   return arr;
// }

// 남들 풀이
function solution(n) {
  // Array.from(원하는 배열, 원하는 배열의 모든 요소에 대해 호출할 함수)
  const answer = Array.from(Array(n), () => Array(n).fill(0)); // 2차원 배열 만들기

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1; // 1로 재할당
  }

  return answer;
}
console.log(solution(3));
//console.log(solution(6));
//console.log(solution(1));
