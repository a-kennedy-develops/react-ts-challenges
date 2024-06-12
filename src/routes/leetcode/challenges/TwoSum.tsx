type TwoSumProps = {
  numbers: number[];
  target: number;
};

const TwoSum = ({ numbers, target }: TwoSumProps) => {
  const findSum = (numbers: number[]) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j];
        }
      }
    }

    return ["N/A"];
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">Numbers passed in: {numbers.join(", ")}</p>
      <p className="mb-4">Find sum: {findSum(numbers).join(", ")}</p>
    </div>
  );
};

export default TwoSum;
