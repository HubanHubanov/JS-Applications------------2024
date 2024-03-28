import { editFruit, getFruitById } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (onEdit, fruitData) => html`

<section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                .value=${fruitData.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                .value=${fruitData.imageUrl}
                 />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value=${fruitData.description}
             ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value=${fruitData.nutrition}
               ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const fruitData = await getFruitById(id)
      render(editTemplate(createSubmitHandler(onEdit), fruitData))


      async function onEdit({name, imageUrl, description, nutrition}, form) {
        if(!name || !imageUrl || !description || !nutrition) {
          return alert("Fill all fields");
        }
         await editFruit(id, {name, imageUrl, description, nutrition});
         page.redirect(`/dashboard/${id}`)
  }
}




