import { dataServise } from "../service/dataService.js";

export async function deleteItem(ctx) {
    const id = ctx.params.id;
    const res = confirm("delete")
    if(res) {

        await dataServise.delFurniture(id);
        ctx.goTo("/")
    }
}