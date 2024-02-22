function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // NOTE: 같을 때 조건도 썼는데, 어차피 같으면 for문 다시 돌기때문에 필요가 없어 지움
      if (arr[i][j] !== arr[j][i]) return 0;
    }
  }
  return 1;
}

console.log(
  solution([
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999],
  ])
);
console.log(
  solution([
    [19, 498, 258, 587],
    [63, 93, 7, 754],
    [258, 7, 1000, 723],
    [587, 754, 723, 81],
  ])
);
