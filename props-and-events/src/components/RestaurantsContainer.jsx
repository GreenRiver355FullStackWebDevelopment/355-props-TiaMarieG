// JS file that holds a function which returns a div.

// Importing Restaurant.js to RC.js
import Restaurant from "./Restaurant.jsx";

// Importing data from data.js
import { restaurants } from "../data/data.js";

function RestaurantsContainer() {
  return (
    // This part really confused me. I had to look at the solution to figure it out
    // Still don't fully understand it.
    <div className="restaurantContainer"> 
      {restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  ); 
}

export default RestaurantsContainer;