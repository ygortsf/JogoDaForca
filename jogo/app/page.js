import Link from "next/link";


export default function Home() {


  return (
    <div>
      <div className="bg-red-900 ">
        <h1 className=" text-4xl justify-center font-bold text-gray-900">ola</h1>
      </div>
      
      <Link href="menu">
        <button className="my-50 text-red-500 bg-gray-900 p-4">
          Play
        </button>
      </Link>

    </div>

  );
}
