import { useState, useEffect } from "react";
import "./MiApi.css";
const MiApi = ({ info, setInfo }) => {
    const url = "https://rickandmortyapi.com/api/character";

    const apiData = async () => {
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error ("Hay un error en la api");
            }
        //me carga la informacion desde a uno
            const data = await resp.json();
            console.log("respuesta del .JSON", data);
            setInfo(data.results);
            console.log("respuesta de la api", data.results);
            } catch(error){
                console.log({message: error}); 
            }
    };
useEffect(() => {
    apiData();
}, []);

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