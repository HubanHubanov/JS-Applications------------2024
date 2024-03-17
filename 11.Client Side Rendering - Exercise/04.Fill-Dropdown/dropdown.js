import { html, render } from "./node_modules/lit-html/lit-html.js";
const root = document.getElementById("menu")
const url ="http://localhost:3030/jsonstore/advanced/dropdown";
document.querySelector("form").addEventListener("submit", addItem);


onLoad()
async function onLoad() {
   const response = await fetch(url);
   const data = await response.json()
   const option = Object.values(data).map(op => optionTemplate(op));
   update(option)
}

function optionTemplate(data) {
     return html`<option values=${data._id}>${data.text}</option>`
     /// value ? vaues
}

function update(data) {
   render(data, root)
}

function addItem(e) {
    e.preventDefault();
    const text = document.getElementById("itemText").value;
    addItemInDb(text)
}

async function addItemInDb(data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
         body: JSON.stringify(data)
    })
    onLoad()
}