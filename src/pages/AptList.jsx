import axios from "axios";
import { useState, useEffect } from "react";
import AptDetails from "../components/AptDetails";

// 7.1 Importamos useNavigate
import { useNavigate } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader";

function AptList() {
  // 7.2 Creamos el objeto de redireccion
  const navigate = useNavigate();

  // 1. Crear el estado donde estara la data externa -> una vez que tengamos el spinner podemos quitar el null
  const [pisosList, setPisosList] = useState();

  // Creamos un estado para saber cuando tenemos que mostrar los loading
  const [isLoading, setIsLoading] = useState(true);

  // 2. la funcion que hace la llamada externa
  const getData = async () => {
    // ...
    // 5. hacemos la llamada con axios y ponemos la data en el estado
    // ...
    try {
      const response = await axios.get(
        "https://ironbnb-m3.herokuapp.com/apartments"
      );
      //* La respuesta de axios siempre viene dentro de .data
      console.log(response);
      console.log(response.data);
      // 6. actualizamos la informacion
      setPisosList(response.data);
      // Pasamos el spinner a false
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      // 7.3 redirigir al usuario a /error -> useNavigate
      navigate("/error");
    }
  };

  // 3. useEffect para ejecutar getData cuando el component se monta []
  useEffect(() => {
    // 3.1 invocar el getData
    getData();
  }, []);

  // 4. Clausula de guardia para mostrar un loading mientras recibimos la data
  if (isLoading === true) {
    return (
      <div className="spiner">
        <ClipLoader color="black" />
      </div>
    );
  }

  return (
    <div>
    <button>Refrescar</button>
      <h3>Apartment List</h3>

      {pisosList.map((eachPiso) => {
        return <AptDetails key={eachPiso._id} piso={eachPiso} />;
      })}
    </div>
  );
}

export default AptList;
