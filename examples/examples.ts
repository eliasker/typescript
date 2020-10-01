// npm run ts-node -- examples.ts
const typedMultiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);

}
// Epäsopiva parametri
// typedMultiplicator('asdf', 4, 'Multiplied numbers 2 and 4, the result is: ')


// Luodaan 'tyyppi', joka voi olla yksi neljästä määritellystä merkkijonosta
type Operation = 'multiply' | 'divide' | 'add' | 'subtract';
type Result = number | string
const calculator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    default:
      throw new Error('Wrong operation');
  }
}

try {
  console.log(calculator(2, 0, 'divide'));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}



