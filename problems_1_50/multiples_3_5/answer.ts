function findModValues(a: number, b: number, size: number): number[]{
  const answers: number[] = [];
  for(let i = 0; i < size; ++i) {
    if( i % a === 0 || i % b === 0){
      answers.push(i);
    }
  }
  return answers;
}

const a: number = 3;
const b: number = 5
const size: number = 1_000;
const values: number[] = findModValues(a, b, size);
const answer: number = values
  .reduce( (a: number, b: number) => a + b, 0 );
console.log(`Sum of multiples of ${a} and ${b} less than ${size} is ${answer}`);
