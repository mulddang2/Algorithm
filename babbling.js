// 문제: 옹알이 (1)
/**머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 *
 */

// 나의 풀이
// NOTE: 프로그래머스에서 테스트케이스가 반타작이다. 다시 고쳐야해
// function solution(babbling) {
//   const word = ['aya', 'ye', 'woo', 'ma'];

//   let answer = 0;
//   babbling.map((str) => {
//     for (const w of word) {
//       if (str.includes(w)) {
//         str = str.replace(w, '*');
//       }
//     }

//     if (str.startsWith('*') && str.endsWith('*')) {
//       console.log(str);
//       answer++;
//     }
//   });

//   return answer;
// }

// 남들 풀이
function solution(babbling) {
  const word = ['aya', 'ye', 'woo', 'ma'];

  return babbling
    .map((str) => {
      for (const w of word) {
        if (str.includes(w)) {
          str = str.replace(w, ' ');
        }
      }
      return str;
    })
    // NOTE: .trim메서드 앞에 !느낌표 붙이면, 공백만 있는 경우 true가 된다,,,, 그래서 공백만 있는 애의 길이를 반환하니까,, 답이 된다,,
    .filter((str) => !str.trim()).length;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
