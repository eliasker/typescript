// Luodaan 'tyyppi', joka voi olla yksi neljästä määritellystä merkkijonosta
export type Operation = 'multiply' | 'divide' | 'add' | 'subtract';
type Result = number | string;

export const calculator = (a: number, b: number, op: Operation): Result => {
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
};

try {
  console.log(calculator(2, 0, 'divide'));
} catch (e) {
  if (e instanceof Error) {
    console.log('Something went wrong, error message: ', e.message);
  } else {
    throw e;
  }
}
