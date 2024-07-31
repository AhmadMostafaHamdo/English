  const CardOffer = ({ title, image, oldPrice, newPrice, content }) => {
  return (
    <div className="card">
      <div className="card-right">
        <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-left">
        <p className="card-content">{content}</p>
      <div className="card-prices">
        <span className="price">Price : </span>
        <span className="old-price">{oldPrice}</span>
        <span className="new-price">{newPrice}</span>
      </div>
      </div>
      
    </div>
  );
};

export default CardOffer
