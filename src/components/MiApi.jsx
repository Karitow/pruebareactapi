import { useEffect } from "react";
import "./MiApi.css";

const MiApi = ({ info, setInfo, busqueda }) => {
    //obteniendo datos de la api
    const url = "https://rickandmortyapi.com/api/character";
    //cargando los datos de la api cuando se renderiza por primera vez se efecuta dentro del useEffect
    const apiData = async () => {
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error ("Hay un error en la api");
            }
        //me carga la informacion desde a uno
            const data = await resp.json();
            console.log("respuesta del .JSON", data);
            //ordena los datos por orden alfaqbetico
            //const ordenar = data.sort((a,b) => 
            //a.name.localeCompare(b.name)
            setInfo(data.results);
            console.log("respuesta de la api", data.results);
            } catch(error){
                console.log({message: error}); 
            }
    };

useEffect(() => {
    apiData();
}, []);

//const filtrar = info.filter((characters) =>
  //   characters.name.toLowerCase().includes(busqueda.toLowerCase()) ||
    // characters.status.toLowerCase().includes(busqueda.toLowerCase()) ||
     //characters.specie.toLowerCase().includes(busqueda.toLowerCase()) 
 //);

return (
    <>
    <div className="container">
        <div className="row mt-5 mb-5 justify-content-center">
            {info.map((e) => (
                <div key={e.id} className="col-mt-4">
                    <div className="card">
                    <img src={e.image} 
                    className="card-img-top" 
                    alt={e.name} 
                    />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{e.name}</strong></h5>
                        <p className="card-text"><strong>Estado y Especie</strong></p>
                        {e.status} - {e.species}
                    </div>
                </div>
            </div>
            ))}
        </div>
       </div>
    </>
 );
};

export default MiApi;