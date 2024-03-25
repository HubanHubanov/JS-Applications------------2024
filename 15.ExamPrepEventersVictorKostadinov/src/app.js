import { page } from "./lib.js";
import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { logout } from "./data/user.js";
import { updateNav } from "./util.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import * as api from "./data/going.js";
window.api = api
import * as api2 from "./data/events.js"
window.api2 = api2



updateNav()

page("/", showHome);
page("/catalog", showCatalog);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit)



page.start();

document.getElementById("logoutBtn").addEventListener("click", async () => {
    logout();
    updateNav()
    page.redirect("/")
})






