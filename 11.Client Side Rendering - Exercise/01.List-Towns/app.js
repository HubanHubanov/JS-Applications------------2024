import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById("root");

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const input = formData.get("towns");
  const towns = input.split(", ");

  render(template(towns), root);
}

function template(towns) {
  return html`
    <ul>
      ${towns.map((town) => html`<li>${town}</li>`)}
    </ul>
  `;
}
