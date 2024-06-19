function solution(intStrs, k, s, l) {
  return intStrs.reduce((bucket, intStr) => {
      const v = Number(intStr.slice(s, s + l))
      if (v > k) bucket.push(v)
      return bucket
  }, [])
}

console.log(solution(["0123456789","9876543210","9999999999999"], 50000, 5, 5))
