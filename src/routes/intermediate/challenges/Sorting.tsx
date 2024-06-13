import { useEffect, useState, useCallback } from "react";

type SortingProps = {
  strings: string[];
  numbers: number[];
  dates: Date[];
};

type SortingType = "ascending" | "descending";

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const Sorting = ({ strings, numbers, dates }: SortingProps) => {
  const [sortedStrings, setSortedStrings] = useState<string[]>([]);
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [sortedDates, setSortedDates] = useState<Date[]>([]);
  const [sortingMethod, setSortingMethod] = useState<SortingType>("ascending");

  const sortAscending = useCallback(() => {
    const sortedStrings = [...strings].sort();
    setSortedStrings(sortedStrings);

    const sortedNumbers = [...numbers].sort();
    setSortedNumbers(sortedNumbers);

    const sortedDates = [...dates].sort();
    setSortedDates(sortedDates);
  }, [strings, numbers, dates]);

  const sortDescending = useCallback(() => {
    const sortedStrings = [...strings].sort((a, b) => b.localeCompare(a));
    setSortedStrings(sortedStrings);

    const sortedNumbers = [...numbers].sort((a, b) => b - a);
    setSortedNumbers(sortedNumbers);

    const sortedDates = [...dates].sort((a, b) => b.getTime() - a.getTime());
    setSortedDates(sortedDates);
  }, [strings, numbers, dates]);

  useEffect(() => {
    if (sortingMethod === "ascending") {
      sortAscending();
    } else {
      sortDescending();
    }
  }, [sortAscending, sortDescending, sortingMethod]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row mb-6">
        <button
          onClick={() => setSortingMethod("ascending")}
          className="flex p-2 bg-slate-400 mr-10"
        >
          Asending
        </button>
        <button
          onClick={() => setSortingMethod("descending")}
          className="flex p-2 bg-slate-400"
        >
          Desending
        </button>
      </div>
      <p className="mb-4">Strings passed in: {strings.join(", ")}</p>
      <p className="mb-6">Strings sorted: {sortedStrings.join(", ")}</p>
      <p className="mb-4">Numbers passed in: {numbers.join(", ")}</p>
      <p className="mb-6">Numbers sorted: {sortedNumbers.join(", ")}</p>
      <p className="mb-4">
        Dates passed in:{" "}
        {dates
          .map((date) => {
            return formatDate(date);
          })
          .join(", ")}
      </p>
      <p className="mb-4">
        Dates sorted:{" "}
        {sortedDates
          .map((date) => {
            return formatDate(date);
          })
          .join(", ")}
      </p>
    </div>
  );
};

export default Sorting;
