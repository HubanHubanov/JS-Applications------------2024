
import { getAllMotorcycles } from "../data/events.js";
import { html, render } from "../lib.js";

const catalogTemplate = (motorcycles) => html`
   <h2>Available Motorcycles</h2>
        <section id="dashboard">
    ${motorcycles.map(motorcycleTemplate    )} 
        </section>
         <!-- Display an h2 if there are no posts -->
         <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
`

const motorcycleTemplate = (motorcycle) => html`
 <div class="motorcycle">
            <img src=${motorcycle.imageUrl} alt="example1" />
            <h3 class="model">${motorcycle.model}</h3>
            <p class="year">${motorcycle.year}</p>
            <p class="mileage">${motorcycle.mileage}</p>
            <p class="contact">${motorcycle.contact}</p>
            <a class="details-btn" href="/catalog/${motorcycle._id}">More Info</a>
          </div>
`


export async function showCatalog(ctx) {
    const motorcycles = await getAllMotorcycles()
  render(catalogTemplate(motorcycles));
}



