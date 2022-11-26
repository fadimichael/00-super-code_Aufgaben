const ProductCard = (props) => {
  return (
    <article className="card">
      <img src={props.img} alt="" />
      <h3>{props.product}</h3>
      <p>{props.preis}</p>
      <p>{props.beschreibung}</p>
      <button>BUY NOW</button>
    </article>
  );
};
export default ProductCard;
