import "next/link";

export function Header(){
    return(
     <div className="bg-green-500 flex w-screen h-screen items-center m-2 justify-center">
      <header className="flex items-center gap-6">
        <h1 className="text-3xl font-bold text-black">Jogo da Forca</h1>
        <a href="#Sobre" className="md:p-4"><img 
        src="forcasvg.jpg"
        alt="jpg"
        width={60}
        height={60}
        />
        </a>
      </header>
      
    </div>
    );
}