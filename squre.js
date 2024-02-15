function solution(arr) {
  const ROWS = arr.length; // 2
  const COLS = arr[0].length; // 4
  const DIFF = Math.abs(ROWS - COLS); // 2

  if (ROWS > COLS) {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < DIFF; j++) {
        arr[i].push(0);
      }
    }
  } else if (ROWS < COLS) {
    for (let i = 0; i < DIFF; i++) {
      // NOTE:Array() 로 cols 갯수만큼의 빈 슬롯 배열 만듬. 그리고 fill로 0채운다.
      const row = Array(COLS).fill(0);
      arr.push(row);
    }
  }

  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
);
