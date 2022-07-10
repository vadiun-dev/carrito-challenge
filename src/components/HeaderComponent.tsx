export const HeaderComponent = () => {
  let gemas = 3;

  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" />
        <span> ${gemas > 1? gemas + " Gemas": gemas + " Gema"}</span>
      </div>
      <button className="text-white hover:underline">Ver Carrito (xxx)</button>
    </div>
  );
};
