export function solvePartOne(input: string[]): number {
  const { leftList, rightList } = processInput(input);

  if (leftList.length !== rightList.length)
    throw new Error(
      "Length of both lists aren't equal, can't compare distances.",
    );

  leftList.sort();
  rightList.sort();

  const distances: number[] = [];
  leftList.forEach((leftItem, index) => {
    const distance = Math.abs(leftItem - rightList[index]);
    distances.push(distance);
  });

  return distances.reduce((acc, item) => acc + item, 0);
}

function processInput(inputArray: string[]): {
  leftList: number[];
  rightList: number[];
} {
  // Declare the lists
  const leftList: number[] = [];
  const rightList: number[] = [];

  // Process the array
  inputArray.forEach((item) => {
    // Split each string into numbers using regex to handle spaces
    const [left, right] = item.split(/\s+/).map(Number);

    // Add the numbers to the respective lists
    if (!isNaN(left) && !isNaN(right)) {
      leftList.push(left);
      rightList.push(right);
    }
  });

  return { leftList, rightList };
}
