type FizzBuzzProps = {
  numbers: number[];
};

const FizzBuzz = ({ numbers }: FizzBuzzProps) => {
  const fizzBuzzedNumbers = numbers
    .filter((number) => number % 3 === 0 || number % 5 === 0)
    .map((number) => {
      if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
      } else if (number % 3 === 0) {
        return "Fizz";
      } else if (number % 5 === 0) {
        return "Buzz";
      }
    });
  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">Numbers passed in: {numbers.join(", ")}</p>
      <p className="mb-4">
        FizzBuzzed Numbers: {fizzBuzzedNumbers.join(", ")}
      </p>
    </div>
  );
};

export default FizzBuzz;
