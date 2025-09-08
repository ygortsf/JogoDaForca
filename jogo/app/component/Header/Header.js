
export function Header(){
    return(
     <div  className="bg-green-500 flex mx-4 my-3  sticky top-0   items-center  justify-center">
      <header className="flex items-center gap-6">
        <h1 className="text-3xl font-bold text-black" >Jogo da Forca</h1>
        <a href="#Sobre" className="md:p-4"><img id="forca"
        src="forcasvg.jpg"
        alt="jpg"
        width={80}
        height={80}
        />
        </a>
      </header>
      
    </div>
    );
}