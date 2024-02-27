// 커피 심부름
// 1) 나의 풀이
// function solution(order) {
//   // 1. americano 글자가 포함하면, 4500원을 추가
//   // 2. latte 글자가 포함되면, 5000원을 추가
//   // 3. anything 글자가 포함되면, 4500원을 추가

//   let cost = 0;

//   for (let i = 0; i < order.length; i++) {
//     if (order[i].includes('americano') || order[i].includes('anything')) {
//       cost += 4500;
//     } else if (order[i].includes('latte')) {
//       cost += 5000;
//     }
//   }
//   return cost;
// }

// reduce 안에 조건문을 넣어서 계산할 수 있다.
// 2) 남들 풀이
const solution = (order) =>
  order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0);

console.log(
  solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything'])
);
console.log(solution(['americanoice', 'americano', 'iceamericano']));
