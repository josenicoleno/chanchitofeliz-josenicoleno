import React from "react";

const PageNotFound = ()=>{
    function Volver () {
        window.history.back()
    }
    return (
    <div>
        <h1>Página no encontrada!</h1>
        <button onClick={Volver}>Volver</button>
    </div>)
}
export default PageNotFound;