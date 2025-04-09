// JSX file that holds a function which returns a div
function Restaurant(props) {
  return (
    // Added a props parameter to gather info passed from parent - RC.jsx
    <div className="restaurant">
      <h2>{props.restaurant.name}</h2>
      <img src={props.restaurant.image} alt={props.name} />
      <ul>
        <li>Address: {props.restaurant.address}</li>
        <li>Phone Number: {props.restaurant.phone}</li>
        <li>Cuisine: {props.restaurant.cuisine}</li>
        <li>Rating: {props.restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;