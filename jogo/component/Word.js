export default function Word({ word, guessed }) {
  return (
    <div className="flex gap-3 text-2xl font-mono tracking-wider">
      {word.split("").map((letter, i) => (
        <span
          key={i}
          className={`border-b-2 w-8 text-center font-bold 
            ${guessed.includes(letter) 
              ? "text-gray-900 border-gray-700"   // letras adivinhadas: bem escuras
              : "text-gray-400 border-gray-400"}  // ainda não adivinhadas: mais apagadas
          `}
        >
          {guessed.includes(letter) ? letter : ""}
        </span>
      ))}
    </div>
  );
}
