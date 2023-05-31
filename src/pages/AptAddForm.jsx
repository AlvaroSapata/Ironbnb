import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function AptAddForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [pricePerDay, setPricePerDay] = useState(0);

  const [isLoading,setIsLoading] = useState(false)

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImgChange = (e) => setImg(e.target.value);
  const handlePriceChange = (e) => setPricePerDay(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Cambiamos a loading mientras se procesa la info
    setIsLoading(true) 

    // ... Contactar al servidor y añadir un nuevo piso
    try {
      const response = await axios.post(
        "https://ironbnb-m3.herokuapp.com/apartments",
        {
          // Se pasa el body como segundo argumento
          title: title,
          img: img,
          pricePerDay: pricePerDay,
        }
      );

        // Una vez creado el piso redireccionamos a la lista de pisos /pisos/list
        navigate("/pisos/list")

    } catch (error) {
      navigate("/error");
    }

      // 4. Clausula de guardia para mostrar un loading mientras recibimos la data
  if (isLoading === true) {
    return (
      <div className="spiner">
        <ClipLoader color="black" />
      </div>
    );
  }
  };

  return (
    <div className="AddApartmentPage">
      <h3>Agrega un nuevo piso!</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />

        <br />

        <label htmlFor="img">Image</label>
        <input type="text" name="img" onChange={handleImgChange} value={img} />

        <br />

        <label htmlFor="pricePerDay">Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={handlePriceChange}
          value={pricePerDay}
        />

        <br />

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AptAddForm;
