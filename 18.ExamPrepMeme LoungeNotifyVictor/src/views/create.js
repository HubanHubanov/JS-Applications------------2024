import { createMeme } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler,  } from "../util.js";
import { notify } from "./notify.js";

const createTemplate = (onCreate) => html`
<section id="create-meme">
            <form id="create-form" @submit=${onCreate}>
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`

export function showCreate(ctx) {
  render(createTemplate(createSubmitHandler(onCreate)));
}

async function onCreate({title, description, imageUrl}, form) {
    if(!title || !imageUrl || !description) {
        return notify("Fill all fields")
    }

   await createMeme(title, description, imageUrl);
    
    page.redirect("/catalog")
}
