const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ guessed, onGuess, disabled }) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessed.includes(letter) || disabled}
          className={`px-3 py-2 rounded-lg text-sm font-bold transition 
            ${guessed.includes(letter) ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}
          `}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
