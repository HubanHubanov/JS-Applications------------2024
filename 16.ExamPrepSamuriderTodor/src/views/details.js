import {  deleteMotorcycle, getMotorcycletById } from "../data/events.js";
import { html, render, page } from "../lib.js";
import {  getUserData } from "../util.js";

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} />
            <p id="details-title">${data.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">${data.year}</p>
                <p class="mileage">${data.mileage}</p>
                <p class="contact">${data.contact}</p>
                   <p id = "motorcycle-description">${data.about}</p>
              </div>
               ${isOwner ? html`<div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
          </div>` : null}
          
            </div>
        </div>
      </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const motorcycleData = await getMotorcycletById(id);
    const user = getUserData(); 
    const hasUser = !!user
   const isOwner = hasUser && user._id == motorcycleData._ownerId

  render(detailsTemplate(motorcycleData, isOwner, onDelete))

  async function onDelete() {
    const choise = confirm("Are you sure?")
    if(choise) {
      await deleteMotorcycle(id)  
     page.redirect("/catalog")

    }
  }
}

  