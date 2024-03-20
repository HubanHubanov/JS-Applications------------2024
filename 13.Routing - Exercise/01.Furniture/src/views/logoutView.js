import { userService } from "../service/userService.js"
import { usesrHelper } from "../utility/userHelper.js";

export async function showLogoutView(ctx) {
   await userService.logout();
   usesrHelper.clearUserData();
   ctx.updateNav();
   ctx.goTo("/  ")

}