import { deleteFruit, getFruitById } from "../data/events.js";
import { html, render, page } from "../lib.js"
import { getUserData } from "../util.js";


const detailsTemplate = (fruitData, isOwner, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${fruitData.imageUrl} />
            <p id="details-title">${fruitData.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${fruitData.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${fruitData.nutrition}</p>
              </div>
              ${isOwner ? html`
              <div id="action-buttons">
            <a href="/edit/${fruitData._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
          </div>
              ` : null}
          
            </div>
        </div>
      </section>

`;

export async function showDetails(ctx) {
    const id = ctx.params.id
    const fruitData = await getFruitById(id)
    const user = getUserData();
    const isUser = !!user;
    const isOwner = user && user._id == fruitData._ownerId;
    render(detailsTemplate(fruitData, isOwner, onDelete))

   async function onDelete() {
      await deleteFruit(id);
      page.redirect("/dashboard")
    }
}