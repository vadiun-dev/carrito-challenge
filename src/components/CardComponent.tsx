import { JsxEmit } from "typescript";
import { Producto } from "../interfaces/Productos";

interface CardComponentProps {
    producto:Producto
}

export const CardComponent = ({producto} : CardComponentProps)=>{
    const { id,nombre, descripcion,precio, imagen } = producto;
    const bag = []
    
    const addToCart = () =>{
        localStorage.setItem("bag", JSON.stringify([id]));
    }

    return(
        <div className="prod-list__card">
        <div className="prod-list__card__top">
          <div className="prod-list__card__top__price">
            {precio>1? precio + " Gemas": precio + " Gema"} 
          </div>

        </div>
        <img src={imagen} alt={nombre} className="prod-list__card__img">

        </img>
        <div className="prod-list__card__text">
          <h2 className="prod-list__card__text__title">
            {nombre}
          </h2>
          <p className="prod-list__card__text__description">
            {descripcion}
          </p>
        </div>
        <div className="prod-list__card__button">
          <button className="prod-list__card__button__agregar" onClick={addToCart}>
            Agregar
          </button>
        </div>
      </div>
    );
}