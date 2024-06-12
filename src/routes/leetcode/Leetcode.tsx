import Challenge from "../../components/Challenge";
import { Seperator } from "../../components/Seperator";
import FizzBuzz from "./challenges/FizzBuzz";
import TwoSum from "./challenges/TwoSum";

export function Leetcode() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Leetcode Challenges</h1>
      <Challenge
        title="Fizz Buzz"
        description={[
          "Given a list of numbers from 1 to n",
          "If a number is divisible by 3 should be replaced with Fizz",
          "If a number is divisible by 5 should be replaced with Buzz",
          "If a number is divisible by 3 and by 5 should be replaced with FizzBuzz",
          "If divisible by neither, return nothing",
        ]}
      >
        <FizzBuzz numbers={[1, 2, 3, 6, 15, 18, 25, 30]} />
      </Challenge>
      <Seperator />
      <Challenge
        title="Two Sum"
        description={[
          "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target",
          "You may assume that each input would have exactly one solution, and you may not use the same element twice",
          "You can return the answer in any order",
        ]}
      >
        <TwoSum numbers={[1, 7, 10, 18, 21]} target={25} />
      </Challenge>
    </>
  );
}
