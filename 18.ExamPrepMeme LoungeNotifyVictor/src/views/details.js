import { deleteMeme, getMememtById } from "../data/events.js";
import { html, render, page } from "../lib.js";
import {  getUserData } from "../util.js";

const detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
            <h1>Meme Title: ${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>
                 ${isOwner ? html`
                 <a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>
                 ` : null}
                    
                    
                </div>
            </div>
        </section>
`;

export async function showDetails(ctx) {
   
    const id = ctx.params.id;
    const meme = await getMememtById(id);
    const user = getUserData();
    const hasUser = !!user
   const isOwner = hasUser && user._id == meme._ownerId
  
   
  render(detailsTemplate(meme, isOwner, onDelete))

  async function onDelete(e) {
    e.preventDefault()
    const choise = confirm("Are you sure?")
    if(choise) {
      await deleteMeme(id)  
     page.redirect("/catalog")

    }
  }
}

  