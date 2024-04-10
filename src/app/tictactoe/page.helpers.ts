import { WINNING_COMBINATIONS } from "./constants";
import { Turn, Symbol } from "./types";

export function computeActivePlay(gameTurns: Turn[]): Symbol {
  let newPlay: Symbol = "x";

  if (gameTurns[0]) {
    const { player } = gameTurns[0] as Turn;
    newPlay = player === "x" ? "o" : "x";
  }

  return newPlay;
}

export function updateGameTurns(
  oldState: Turn[],
  rowIndex: number,
  cellIndex: number
) {
  const player = computeActivePlay(oldState);

  const newState = [
    {
      square: { rowIndex, cellIndex },
      player,
    } as Turn,
    ...oldState,
  ];

  return newState;
}

export function isWinner(gameTurns: Turn[], board: string[][]): boolean {
  if (gameTurns.length < 5) {
    return false;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination.map(
      ({ row, column }) => board[row][column]
    );

    if (first !== "" && first === second && second === third) {
      return true;
    }
  }

  return false;
}

export function isDraw(gameTurns: Turn[], hasWinner: boolean) {
  return gameTurns.length === 9 && !hasWinner;
}

export function getWinner(gameTurns: Turn[]) {
  return gameTurns[0];
}

export function handleGameState(initState: string[][], turns: Turn[]) {
  const newState = [...initState.map((innerArray) => [...innerArray])];
  for (const turn of turns) {
    const { square, player } = turn;
    const { rowIndex, cellIndex } = square;
    newState[rowIndex][cellIndex] = player;
  }
  return newState;
}