// import { onNavigate } from "./views/nav.js";
import { onNavigate, visit } from "./nav.js";



document.querySelector("nav").addEventListener("click", onNavigate);


visit("home")

