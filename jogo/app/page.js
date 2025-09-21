import Hangman from "@/component/Hangman";

export default function Home() {
  return (
    <main className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        🎯 Jogo da Forca
      </h1>
      <Hangman />
    </main>
  );
}
