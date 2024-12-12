// src/utils/inputReader.ts
import * as fs from "fs/promises";
import * as path from "path";

const getDayFolder = (day: number): string => {
  return `day-${day.toString().padStart(2, "0")}`;
};

/**
 * Reads input file for a specific day
 * @param day - The day number (e.g., 1, 2, 3)
 * @param inputType - Type of input (default is 'input')
 * @returns Promise<string[]> - Lines of the input file
 */
export async function readDayInput(
  day: number,
  inputType: "input" | "test" = "input",
): Promise<string[]> {
  const dayFolder = getDayFolder(day);
  const inputPath = path.join(__dirname, dayFolder, `${inputType}.txt`);

  try {
    const fileContent = await fs.readFile(inputPath, "utf-8");
    return fileContent.trim().split("\n");
  } catch (error) {
    console.error(`Error reading input file for day ${day}:`, error);
    return [];
  }
}

/**
 * Dynamic solution loader
 * @param day - The day number
 * @returns Promise<{ solvePartOne: Function, solvePartTwo: Function }>
 */
export async function loadDaySolution(
  day: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Record<string, (input: any) => any>> {
  try {
    const dayFolder = getDayFolder(day);
    const solutionPath = path.join(__dirname, dayFolder, "solution");

    // Dynamic import of the solution module
    const solution = await import(solutionPath);

    return {
      solvePartOne: solution.solvePartOne,
      solvePartTwo: solution.solvePartTwo,
    };
  } catch (error) {
    console.error(`Error loading solution for day ${day}:`, error);
    throw error;
  }
}
