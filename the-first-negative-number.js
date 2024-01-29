// 문제: 첫 번째로 나오는 음수

// 나의 풀이
// 개선 하고싶은 점: 음수가 나올 경우 스탑 해도 되는데, 끝까지 돈다
// function solution(num_list) {
//   for (let i = 0; i < num_list.length; i++) {
//     if (num_list[i] < 0) {
//       return num_list.indexOf(num_list[i]);
//     }
//   }

//   return -1;
// }

// 다른 사람의 풀이
// NOTE: findIndex 메서드를 사용할 경우, 주어진 조건을 만족할 때까지 돌고 참인 값이 나오면 해당 요소의 인덱스를 반환하고 반복을 중단하기 때문에, 나의 풀이보다 메서드 사용이 효율적일 것 이다.............


const solution = num_list => console.log(num_list.findIndex(v => v < 0))

console.log(solution([12, 4, 15, 46, 38, -2, 15]))
//console.log(solution([13, 22, 53, 24, 15, 6]))
