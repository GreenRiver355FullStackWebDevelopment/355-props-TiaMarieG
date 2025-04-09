// JS file that holds a function which returns a div.

// Importing Restaurant.js to RC.js
import Restaurant from "./Restaurant.jsx";

// Importing data from data.js
import { restaurants } from "../data/data.js";

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {
        // Calling .map on the array to create a shallow copy
        // Rendering the info using Restaurant import which returns the component
        restaurants.map ((restaurant) => (
          <Restaurant 
          restaurant={restaurant}
          key={restaurant.id}
          />
        ))
      }
    </div>
  ); 
}

export default RestaurantsContainer;