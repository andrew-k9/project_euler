package main

import (
  "fmt"
)

// Returns an array of values of multiple a or b
func sliceMaker(size int, a int, b int) []int {
  var answer []int
  for i := 1; i < size; i++ {
    if i % a == 0 || i % b == 0 {
      answer = append(answer, i)
    }
  }
  return answer
}

// adds the values in an array
func sumList( array []int) int {
  sum := 0
  for _, value := range array {
    sum += value
  }
  return sum
}

func main() {
  size := 1_000
  mod_3_5 := sliceMaker(size, 3, 5)
  ans := sumList(mod_3_5)
  fmt.Printf("Answer for sum of multiples of 3 and five less thant %d is %d",
    size, ans  )
}
