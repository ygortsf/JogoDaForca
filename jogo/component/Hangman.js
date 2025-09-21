"use client";
import { useState, useEffect } from "react";
import Word from "./Word";
import Keyboard from "./Keyboard";
import HangmanDrawing from "./HangmanDrawing";
import words from "@/lib/words";

const MAX_ERRORS = 10;

export default function Hangman() {
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toUpperCase());
  }, []);

  const handleGuess = (letter) => {
    if (gameOver || guessed.includes(letter)) return;

    setGuessed([...guessed, letter]);

    if (!word.includes(letter)) {
      const newErrors = errors + 1;
      setErrors(newErrors);
      if (newErrors >= MAX_ERRORS) setGameOver(true);
    } else {
      const allGuessed = word.split("").every((l) => guessed.includes(l) || l === letter);
      if (allGuessed) setGameOver(true);
    }
  };

  const restart = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toUpperCase());
    setGuessed([]);
    setErrors(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center">
      <HangmanDrawing errors={errors} />

      <div className="text-lg font-semibold mb-4 text-gray-700">
        Erros: <span className="text-red-600">{errors}</span> / {MAX_ERRORS}
      </div>

      <Word word={word} guessed={guessed} />

      <div className="mt-6">
        <Keyboard guessed={guessed} onGuess={handleGuess} disabled={gameOver} />
      </div>

      {gameOver && (
        <div className="mt-6 text-center">
          <p
            className={`text-xl font-bold ${
              errors >= MAX_ERRORS ? "text-red-600" : "text-green-600"
            }`}
          >
            {errors >= MAX_ERRORS ? "💀 Você perdeu!" : "🎉 Você venceu!"}
          </p>
          <p className="mt-2 text-gray-800">
            A palavra era: <span className="font-mono font-bold">{word}</span>
          </p>
          <button
            onClick={restart}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}
