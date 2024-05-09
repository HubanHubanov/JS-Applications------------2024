import { logout } from "./data/user.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
// //TODO Remove these imports after testing
// import * as api from "./data/events.js"
// window.api = api;
// import * as  userApi from "./data/user.js"

updateNav()

page("/", showHome);
page("/catalog", showCatalog);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit);


page.start();

document.getElementById("logoutBtn").addEventListener("click", async () => {
    logout();
    updateNav()
    page.redirect("/")
})


// //TODO Remove these properties after testing
// window.userApi = userApi;
