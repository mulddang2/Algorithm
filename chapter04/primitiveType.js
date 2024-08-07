// 1. 자연수, 정수, 실수, 무한, NaN 모두 Number 타입!
console.log(typeof 10);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof NaN);

// 2. 숫자 타입 변수 선언
let a = 13;
let b = 4;

// 3. 연산자
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(-a); // 부호바꿈

// 4. 빌트인 함수
console.log(Math.abs(-a)); // 절대값, 13
console.log(Math.ceil(a / b)); // 올림, 3.25 -> 4
console.log('a / b: ' + Math.floor(a / b)); // 내림, 3
console.log('-a / b: ' + Math.floor(-a / b)); // 내림, -4
console.log(Math.round(a / b)); // 반올림, 3
console.log(Math.trunc(-a / b)); // 버림, -3.25 -> -3
console.log(Math.pow(a, b)); // a의 b승, 13의 4승 -> 28561

// 5. 숫자 타입 비교 연산
console.log(a == b); // 같은 값인지 비교, false
console.log(a !== b); // 같지 않은 값인지 비교, true
console.log(a > b); // 왼쪽 값이 더 큰지 비교, true
console.log(a < b); // 왼쪽 값이 더 작은지 비교, false
console.log(a >= b); // 왼쪽 값이 더 크거나 같은지 비교, true
console.log(a <= b); // 왼쪽 값이 더 작거나 같은 지 비교, false

// 6. 숫자 타입 비트 연산
console.log(a & b);
console.log(a | b);
console.log(a ^ b); // XOR: 두 비트가 서로 다르면 1, 같으면 0을 반환
console.log(~a); // NOT: js에서 숫자는 모두 32비트 정수로 처리, 13을 32비트로 표현하고 반전(11111111 11111111 11111111 11110010) --> 그리고 2의 보수에서 음수계산하는 법으로 계산
console.log(a << 2); // 왼쪽 시프트: 지정된 비트수만큼 왼쪽으로 비트이동, 오른쪽에 0 추가
console.log(a >> 1); // 오른쪽 시프트: 지정된 비트수만큼 오른쪽으로 이동하고 왼쪽에 부호비트 추가

// 7. 숫자 타입 논리 연산
console.log(a && b); // 첫번째 값이 Truth값이면 두번재 피연산자가 반환됨.
console.log(a || b); // 첫번째가 참인경우 첫번째 피연산자가 반환됨
console.log(!a); // 논리연산 NOT

// 8. 숫자 타입 예외: 잘못 연산하는 경우 Infinity 혹은 NaN이 출력될 수 있다
console.log(a / 0); // Infinity
console.log(a % 0); // NaN
console.log(a / 'string'); // NaN
console.log(a % 'string'); // NaN
console.log(a / null); // Infinity
console.log(a % null); // NaN
console.log(a / undefined); // NaN
console.log(a % undefined); // NaN

// 9. epsilon: js가 부동소수점 데이터를 이진법으로 표현하기 때문에 표현과정에서 오차가 발생함
console.log(Number.EPSILON);
let c = 0.1 + 0.1 + 0.1;
let d = 0.3;
console.log(c - d);
if (Math.abs(c - d) < Number.EPSILON) {
  console.log('c와 d는 같은 값입니다.');
} else {
  console.log('c와 d는 다른 값입니다.');
}

// 10. 문자열 타입 빌트인 메서드
const e = ' Hello, World! ';
console.log(e.length);
console.log(e.split(','));
console.log(e.startsWith('Hl'));
console.log(e.endsWith('d!'));
console.log(e.includes('llo, W'));
console.log(e.indexOf('World')); // 특정 문자열의 시작위치 확인
console.log(e.lastIndexOf('o')); // 뒤에서 부터 역순 탐색
console.log(e.replace('World', 'JavaScript'));
console.log(e.toUpperCase());
console.log(e.toLowerCase());
console.log(e.trim());
console.log(e.concat('!!!!!!'));

// 11. 그 외 타입
console.log(typeof true); // boolean
console.log(typeof 2147383648n); // bigint
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol('symbol')); // symbol

// bigint 타입: bigint타입은 숫자 뒤에 n을 붙이거나 BigInt()로 감싸면 만들 수 있다
//console.log(1000000000000000000 - 123456)
console.log(1000000000000000000n - 123456n);
console.log(1000000000000000000n - BigInt(123456));

// undefined & null 타입
// undefined 타입은 변수에 최기화가 되지 않았을 때, 적용되는 타입
// null은 개발자가 의도적으로 비어있다는 것을 표현하기위해 넣는 값이자 타입이다.
