function User(props) {
  return (
    <div className="user">
      <img src={props.avatar} alt={props.name} />
      <h2>{props.name}</h2>
      <p>City: {props.details.city}</p>
      <p>Company: {props.details.company}</p>
      <p>Position: {props.details.position}</p>
    </div>
  );
}

export default User;
