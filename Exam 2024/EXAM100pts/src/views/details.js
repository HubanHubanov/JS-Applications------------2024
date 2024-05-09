import {   deleteItem, getItemById } from "../data/events.js";
import { html, render, page } from "../lib.js";
import {  getUserData } from "../util.js";

const detailsTemplate = (item, isOwner, onDelete) => html`
 <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src=${item.imageUrl} alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">${item.price}</p>
                <p class="details-availability">
                ${item.availability}
                </p>
                <p class="type">${item.type}</p>
                <p id="item-description">
                  ${item.description}
                </p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
              </div>
              ` : null}
             
            </div>
          </div>
        </section>

`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    const user = getUserData();
    const hasUser = !!user
   const isOwner = hasUser && user._id == item._ownerId
  
   
  render(detailsTemplate(item, isOwner, onDelete))

  async function onDelete() {
    const choise = confirm("Are you sure?")
    if(choise) {
      await deleteItem(id)  
     page.redirect("/catalog")

    }
  }
}

  