// 문제:
// 나의 풀이:
// i를 포함하고 pat.length 잘라야하는데, 그게 어려웠다.
// function solution(myString, pat) {
//   let count = 0;
//   for (let i = 0; i <= myString.length; i++) {
//     // console.log(pat)

//     if (myString.slice(i, i + pat.length) === pat) {
//       count++;
//     }
//   }
//   return count;
// }

// 다른 사람 풀이: 나의 경우, 첫번째 케이스에서 5번, 두번째 케이스에서 4번 도는데 비해, 남들은 4번, 3번만에 끝낼 수 있다. 그렇기 때문에 myString.length - pat.length 만큼만 돌아도 된다.
function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    console.log(pat)

    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }
  return count;
}

console.log(solution('banana', 'ana'));
console.log(solution('aaaa', 'aa'));
