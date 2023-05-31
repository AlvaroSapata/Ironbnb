function AptDetails(props) {
  return (
    <div>
      <h3>{props.piso.title}</h3>
      <img src={props.piso.img} alt="piso" width={300} />
      <p>Price: {props.piso.pricePerDay} $/day</p>
      <p>Published: {new Date(props.piso.createdAt).toDateString()}</p>
    </div>
  );
}

export default AptDetails;
