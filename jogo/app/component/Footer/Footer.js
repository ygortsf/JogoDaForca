const person={
    name: "Ygor de Tárcio",
    theme:{
        backgroundColor : 'rgba(227, 126, 75, 1)',
        color: 'red'

    }
}


export function Pessoa(){
    return(
        <div style={person.theme } className="flex flex colum justify-center items-center  mx-50">
            <h1> {person.name}</h1>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqs1uVf-3BZqjASe6y58QFPK7vU2-MfIghQ&s"
            alt= "carros"
            width={80}
            height={80}
            />
        </div>
    );
}