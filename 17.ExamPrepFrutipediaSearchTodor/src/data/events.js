import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: "/data/fruits?sortBy=_createdOn%20desc",
    allFruits: "/data/fruits",
    fruitById : "/data/fruits/"
}

// const host = "http://localhost:3030";

export async function getAllFruits() {
  return await get(endpoints.dashboard)
}


export async function getFruitById(id) {
   return await get(endpoints.fruitById + id)
}

export async function createFruit(name, imageUrl, description, nutrition) {
   return await post(endpoints.allFruits, {name, imageUrl, description, nutrition})
}

export async function editFruit(id, data) {
   return await put(endpoints.fruitById + id, data)
}

export async function deleteFruit(id) {
    await del(endpoints.fruitById + id)
}



