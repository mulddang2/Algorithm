let vari = [1, 2];
let vari2 = vari;

vari[0] = 3;
console.log(vari)
console.log(vari2) // vari[0]을 바꿨는데, vari2[0]도 변한다. 같은 메모리주소를 가리키기 때문

// 요소 추가: 단순히 값을 대입하는 것만으로도 오브젝트에 요소가 추가됨
const obj = {name: 'Suzy'};
obj.age = 15;
console.log(obj.age) // 15

// 요소 삭제: delete를 사용하면 오브젝트 내, 요소 삭제 가능
delete obj.age;
console.log(obj.age) // undefined

// 배열선언
const arr = [1, 2, 3];
console.log(arr[0]) // 1
console.log(arr[1]) // 2

// 배열 길이 구하기
console.log(arr.length) // 3

// 요소 추가: push()
arr.push(4);
console.log(arr) // [ 1, 2, 3, 4 ]

// 요소 삭제: pop()
arr.pop();
console.log(arr) // [ 1, 2, 3 ]