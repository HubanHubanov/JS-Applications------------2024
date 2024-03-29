import { getGameById,  updateGame } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler,  } from "../util.js";

const editTemplate = (gameData, onEdit) => html`
<section id="edit-page" class="auth">
            <form id="edit" @submit=${onEdit}>
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title: </label>
                    <input type="text" id="title" name="title" value="" .value=${gameData.title} >

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value="" .value=${gameData.category} >

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="" .value=${gameData.maxLevel} >

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="" .value=${gameData.imageUrl} >

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${gameData.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game"  >

                </div>
            </form>
        </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const gameData = await getGameById(id)
  render(editTemplate(gameData, createSubmitHandler(onEdit)));

  async function onEdit({title, category, maxLevel, imageUrl, summary}, form) {
    if(!title || !category || !maxLevel || !imageUrl || !summary) {
        return alert("Fill all fields")
    }

   await updateGame( id, {title, category, maxLevel, imageUrl, summary});
    
    page.redirect("/catalog/" + id)
}


}

