import { isInterfaceDeclaration } from "typescript";
import { CardComponent } from "./CardComponent";
import { Producto } from "../interfaces/Productos"
interface ListadoProductosComponentProps
{
  productos:Producto[]
}

export const ListadoProductosComponent = ({productos}:ListadoProductosComponentProps) => {

  return (
    <div className="prod-list">
      {
        productos.map(e => <CardComponent key={e.id} producto={e} />)
      }
    </div>
  );
};

