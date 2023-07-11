const productStyle = {
  list: "flex flex-wrap w-full justify-start gap-4",
  card: "flex flex-col items-center w-60 pb-7 pt-3 px-3 bg-stone-700 rounded-md",
  info: "flex flex-col gap-3 px-5 pt-2",
  price:
    "flex px-3 py-1 self-end bg-green-500 rounded-xl text-white text-xs font-semibold",
  name: "self-start font-bold",
  description: "text-sm text-gray-400",
  button:
    "w-full px-3 py-1 rounded-xl bg-purple-700 text-white text-sm hover:brightness-200 transition-all",
};
export const ProductoCard = ({ product }: { product: Product }) => {
  return (
    <div className={productStyle.card}>
      <div className={productStyle.price}>
        {product.precio} {product.precio > 1 ? "Gemas" : "Gema"}
      </div>
      <img src={product.imagen} width={80} height={80}></img>
      <div className={productStyle.info}>
        <h5 className={productStyle.name}>{product.nombre}</h5>
        <span className={productStyle.description}>{product.descripcion}</span>
        <button className={productStyle.button}>Agregar</button>
      </div>
    </div>
  );
};
