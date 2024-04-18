import React, { useState } from "react";

function Buscador({ onSearch }) {
const [busqueda, setBusqueda ] = useState("");
    const handleChange = (e) => {
        setBusqueda(e.target.value);
    };
    const handleSearch = () => {
        onSearch(busqueda);
    };
    
    return (
        <>
        <input
        type="text"
        placeholder="Busca tu personaje"
        className="form-control-lg mb-3 text-cener font-weight-bold"
        value={busqueda}
        onChange={handleChange}
        />{""}
        {""}
        <button className="btn btn-info btn-lg btn-block mb-4 mt-3 font-weight-bold"
        onClick={handleSearch}>
        {""} Buscar{""}
        </button>
        </>
    );
}


export default Buscador;