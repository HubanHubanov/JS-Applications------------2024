import { searchBike } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const searchTemplate = (onSearch, result) => html`
<section id="search">
<div class="form">
  <h4>Search</h4>
  <form class="search-form" @submit=${onSearch}>
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4 id="result-heading">Results:</h4>
${result ? showResultTemp(result) : null}
  </div>
        </section>`;


const showResultTemp = (result) => html`
  <div class="search-result">
    ${result.length
      ? result.map(
          (motorcycle) => html` <div class="motorcycle">
            <img src=${motorcycle.imageUrl} alt="example1" />
            <h3 class="model">${motorcycle.model}</h3>
            <a class="details-btn" href="/catalog/${motorcycle._id}"
              >More Info</a
            >
          </div>`
        )
      : html` <h2 class="no-avaliable">No result.</h2> `}
  </div>
`;

/*
        
 <h2 class="no-avaliable">No result.</h2>
  <!--If there are matches display a div with information about every motorcycle-->
 <div class="motorcycle">
  <img src="./images/Honda Hornet.png" alt="example1" />
  <h3 class="model">Honda Hornet</h3>
    <a class="details-btn" href="">More Info</a>
</div>
        
         */

export function showSearch() {
  render(searchTemplate(createSubmitHandler(onSearch)));
}

async function onSearch(data, form) {
  const { search } = data;
  if (!search) {
    return alert("Type in the search field");
  }

  const result = await searchBike(search);
  render(searchTemplate(createSubmitHandler(onSearch), result));
}
