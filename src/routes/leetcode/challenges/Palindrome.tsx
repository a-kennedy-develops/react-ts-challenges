type PalindromeProps = {
  word: string;
};

const Palindrome = ({ word }: PalindromeProps) => {
  const isPalindrome = (value: string) => {
    const valueReversed = value.toLowerCase().split(" ").reverse().join();
    return valueReversed === value.toLowerCase();
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">Word passed in: {word}</p>
      <p className="mb-4">
        Is palindrome: {isPalindrome(word) ? "True" : "False"}
      </p>
    </div>
  );
};

export default Palindrome;
