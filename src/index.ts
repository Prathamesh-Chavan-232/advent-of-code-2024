// src/index.ts
import * as readline from "readline";
import { readDayInput, loadDaySolution } from "./utils";

async function main(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const promptDay = (): void => {
    rl.question('Enter day number (or "exit" to quit): ', async (input) => {
      if (input.toLowerCase() === "exit") {
        rl.close();
        return;
      }

      const day = parseInt(input, 10);

      if (isNaN(day)) {
        console.log("Invalid day number. Please enter a valid number.");
        promptDay();
        return;
      }

      try {
        // Read input
        const input = await readDayInput(day);
        console.log("--- Problem Input ---");
        console.log(input);

        // Load solution dynamically
        const { solvePartOne, solvePartTwo } = await loadDaySolution(day);

        // Solve and display results
        console.log(`--- Day ${day} Solutions ---`);
        console.log("Part One Result:", solvePartOne(input));
        console.log("Part Two Result:", solvePartTwo(input));
      } catch (error) {
        console.error("Error running solution:", error);
      }

      // Prompt for next day
      promptDay();
    });
  };

  // Start the prompt
  promptDay();
}

// Run the main function
main();
