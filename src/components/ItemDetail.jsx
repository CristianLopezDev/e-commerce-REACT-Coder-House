export const ItemDetail = ( {item} ) => {
    return (
    <>
      <h1>{ item.title }</h1>
      <img className="img-detail" src={item.pictureUrl}></img>
      <div></div>
    </>
    );
};

