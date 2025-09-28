export default function HangmanDrawing({ errors }) {
  return (
    <div className="relative w-40 h-56 mx-auto mb-6">

      <div className="absolute bottom-0 w-32 h-2 bg-gray-700"></div>
      <div className="absolute bottom-0 left-14 w-2 h-56 bg-gray-700"></div>
      <div className="absolute top-0 left-14 w-20 h-2 bg-gray-700"></div>
      <div className="absolute top-0 left-32 w-2 h-10 bg-gray-700"></div>

      {errors > 0 && (
        <div className="absolute top-10 left-28 w-12 h-12 rounded-full border-4 border-gray-800"></div>
      )}
      {errors > 1 && (
        <div className="absolute top-22 left-[122px] w-2 h-16 bg-gray-800"></div>
      )}
      {errors > 2 && (
        <div className="absolute top-[104px] left-[98px] w-10 h-2 bg-gray-800 rotate-[-30deg]"></div>
      )}
      {errors > 3 && (
        <div className="absolute top-[104px] left-[130px] w-10 h-2 bg-gray-800 rotate-[30deg]"></div>
      )}
      {errors > 4 && (
        <div className="absolute top-[160px] left-[100px] w-10 h-2 bg-gray-800 rotate-[30deg]"></div>
      )}
      {errors > 5 && (
        <div className="absolute top-[160px] left-[130px] w-10 h-2 bg-gray-800 rotate-[-30deg]"></div>
      )}
    </div>
  );
}
