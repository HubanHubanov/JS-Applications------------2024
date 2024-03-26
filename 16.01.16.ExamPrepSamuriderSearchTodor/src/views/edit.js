import {    getMotorcycletById, updateMotorcycle } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler,  } from "../util.js";

const editTemplate = (motorcycleData, onEdit) => html`
<section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form class="edit-form" @submit=${onEdit}>
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  .value=${motorcycleData.model}
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  placeholder="Moto Image"
                  .value=${motorcycleData.imageUrl}
                />
                <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                .value=${motorcycleData.year}
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="mileage"
              .value=${motorcycleData.mileage}
            />
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              .value=${motorcycleData.contact}
            />
              <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
                .value=${motorcycleData.about}
              ></textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const motorcycleData = await getMotorcycletById(id)
  render(editTemplate(motorcycleData, createSubmitHandler(onEdit)));

  async function onEdit({model, imageUrl, year, mileage, contact, about}, form) {
    if(!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert("Fill all fields")
    }

   await updateMotorcycle( id, {model, imageUrl, year, mileage, contact, about});
    
    page.redirect("/catalog/" + id)
    

}


}

