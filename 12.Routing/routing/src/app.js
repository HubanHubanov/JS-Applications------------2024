import {
  itemNotFound,
  loadData,
  showCatalog,
  showCategory,
  showDetails,
} from "./catalog.js";
import page from "//unpkg.com/page/page.mjs";

const root = document.querySelector("main");
page("/", showHome);
page("/index.html", "/");
page("/catalog",loadData, showCatalog);
page("/catalog/:id", showDetails);
page("/catalog/:category/:id", showCategory);
page("/catalog/*", itemNotFound);
page("/about", showAbout);
page("*", notFound);

page();

function showHome() {
  root.innerHTML = "<p>Home page</p>";
}

function showAbout() {
  root.innerHTML = "<p>About page</p>";
}

function notFound() {
  root.innerHTML = "<p>Page not found</p>";
}

