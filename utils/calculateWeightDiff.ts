export default function calculateWeightDiff(number1: number, number2: number) {
  const diff = (number1 / number2) * 100;
  return (100 - diff).toFixed(2);
}
