// 자바스크립트에서 함수는 일반적인 정의 뿐만 아니라, 일급객체, 타입이기도 하다.
// 일급객체란? 변수에 할당할 수 있고, 함수의 인자로 전달할 수 있고, 함수에서 반환할 수 있는 객체를 의미한다.

const f = () => {};
console.log(typeof f); // function

// 일반적인 함수 정의
function fn1(param1, param2) {
  // 함수실행코드
  return result;
}

// 화살표 함수를 통한 할당
const fn2 = (param1, param2) => {
  // 함수실행코드
  return result;
};

// 함수 호출: 함수호출 시, 매개변수가 있는 경우 인수를 함께 전달할 수 있음
function add(a, b) {
  const result = a + b;
  return result;
};

console.log(add(1, 2)); // 3

// 익명 함수: 이름이 없는 함수
// function (a, b) {
//   return a - b;
// };

(c, d) => {
  return c - d;
};
