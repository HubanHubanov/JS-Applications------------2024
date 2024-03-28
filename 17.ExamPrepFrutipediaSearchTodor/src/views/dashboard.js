import {getAllFruits, } from "../data/events.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (allFruits) => html`
<h2>Fruits</h2>
        <section id="dashboard">
      ${allFruits.length ? allFruits.map(fruitTemplate) : html` <h2>No fruit info yet.</h2>`}
          
        </section>
        
        
         `;

         const fruitTemplate = (fruit) => html`
            <div class="fruit">
            <img src=${fruit.imageUrl} alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href="/dashboard/${fruit._id}">More Info</a>
          </div>
         `;

export  async function showDashboard(ctx) {
    const allFruits = await getAllFruits()
   
    render(dashboardTemplate(allFruits))
    
}