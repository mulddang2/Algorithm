// 구조분해할당: 배열이나 객체에서 요소를 분해하는 기능
// 1. 배열을 구조분해할당
const arr = ['cappuccino', 'americano', 'milk'];

const [, menu2] = arr;
console.log(menu2); // americano

// 2. 객체를 구조분해할당
const obj = {
  name: '3CE SKIN FIT COVER LIQUID CONCEALER',
  color: 'white',
  manual:
    '칙칙한 피부톤을 환하게 커버하고 얼굴의 볼퓸을 원하는 부위에 하이라이터로 사용이 가능한 화이트 리퀴드 컨실러',
};
const { name: productName, manual } = obj; // obj의 name이 productName에 구조 분해 할당 된다
console.log(productName);

// 3. 값 교환하기
let a = 5;
let b = 6;
let temp;

// 교환로직
temp = a;
a = b;
b = temp;

// 구조분해할당을 이용하면 temp 변수 없이 swap 가능
let a2 = 5;
let b2 = 6;
[a2, b2] = [b2, a2];
console.log(a2); // 6

// 4. 비구조화 할당: 함수에 '객체'를 인수로 전달함 => 필요한 것만 꺼낼 수 있다
const todaySpecialPrice = ({ makeUp, base, Nail }) => {
  return {
    todayPick: `${makeUp}, ${base}`,
    Nail,
  };
};

const oliveYoung = todaySpecialPrice({
  makeUp: 'shockingLip',
  base: 'naming cushion',
  Nail: 'Lement nail',
  health: 'proteeone protein shake',
});

console.log(oliveYoung); // { todayPick: 'shockingLip, naming cushion', Nail: 'Lement nail' } => 전달은 다 하지만, 사용한 것만 출력한다.

// 5. 스프레드 연산자: 배열이나 객체 여러개를 하나로 합쳐야 할 대
// 5-1) 배열 병합
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const numbers = [...evenNumbers, ...oddNumbers];
console.log(numbers); // [2, 4, 6, 8, 10, 1, 3, 5, 7,  9]

// 5-2) 객체 병합
const plant = {
  name: '해바라기',
  floriography: '일편단심',
  origin: '중앙 아메리카',
  characteristic:
    '사실 해바라기는 수십개의 작은꽃들이 모여 있는 꽃이랍니다. 그래서 해바라기 중앙에 씨가 빽빽하게 모여 있는 것이고요. 이 해바라기 씨앗은 다양한 용도로 사용이 되고 있죠.',
};

const RelatedPeople = {
  name: '튤립',
  job: '화가',
};

const merge = { ...plant, ...RelatedPeople };
console.log(merge); // 키가 같은 객체를 병합하면, 나중에 사용한 스프레드 연산자로 덮어써짐.. 따라서 name이 튤립이 되렸기 때문에 주의하기!

// 6. 배열 내 같은 요소 제거하기 (중복제거문제)
const names = ['Lee', 'Kim', 'Park', 'Jo', 'Lee', 'Park'];
const uniqueNames = [...new Set(names)];
console.log(uniqueNames); // [ 'Lee', 'Kim', 'Park', 'Jo' ]

// 7. &&와 ||연산자로 조건문 대체하기
const makeCompony = (showAddress) => {
  return {
    name: '빈센트반곰흐',
    ...(showAddress || { address: '제주' }),
    // && 넣으면 showAddress가 true면 address가 합쳐짐
    // || 넣으면 showAddress가 false일때 address가 합쳐짐
  };
};

console.log(makeCompony(1));
console.log(makeCompony(0));
