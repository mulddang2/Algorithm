// 문제: 무작위로 K개의 수 뽑기
// 1. 중복을 제거해야한다 --> set 사용하면 좋다.
// 2. k 숫자보다 작을 때, 맨뒤부터 k 갯수 인덱스까지 -1로 채운다.  ()
// 3. k 숫자랑 똑같거나 클 때, k수만큼 골라낸다. (slice 활용)
function Solution(arr, k) {
  const set = new Set(arr);
  // NOTE: 이렇게 하면, 사이즈와 중복 제거한 것들이 나온다.

  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}
console.log(Solution([0, 1, 1, 2, 2, 3], 3));
console.log(Solution([0, 1, 1, 1, 1], 4));
