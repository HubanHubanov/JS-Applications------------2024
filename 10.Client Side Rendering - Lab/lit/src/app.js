import { html, render } from "../node_modules/lit-html/lit-html.js";
import { classMap } from "../node_modules/lit-html/directives/class-map.js";
import{ styleMap } from "../node_modules/lit-html/directives/style-map.js"

const articles = [
    "Article 1",
    "Article 2",
    "Article 3"
]
const classes = {
    red:true,
    underline:true
    }

    const styles = {
        backgroundColor: "orange",
        padding: "16px"
    }

const template = (name, value, articles) => html`
  <h1 class=${classMap(classes)}>Hello, ${name}</h1>
  <p>This part should not update</p>
  <button @click=${() => alert("Button has been clicked")}>Experiemntal button</button>
  <input style=${styleMap(styles)} .value=${value} />
  <ul>
    ${articles.map(articleTemplate)}

  </ul>
`;

const articleTemplate = name => html`<li>${name}</li>`

const root = document.querySelector("main");

document.querySelector("button").addEventListener("click", () => {
  render(template("Dynamic content"), root);
});

render(template("Lit-html", 5, articles), root);
