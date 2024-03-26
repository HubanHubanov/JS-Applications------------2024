import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: "/data/motorcycles?sortBy=_createdOn%20desc",
    motorcycles: "/data/motorcycles",
    motorcyclesById: "/data/motorcycles/"

}

export async function getAllMotorcycles() {
       return get(endpoints.dashboard)
}

export async function getMotorcycletById(id) {
    return get(endpoints.motorcyclesById + id)
}

export async function createMotorcycle(model, imageUrl, year, mileage, contact, about) {
    return post(endpoints.motorcycles, {model, imageUrl, year, mileage, contact, about})
}

export async function updateMotorcycle(id, data) {
   return put(endpoints.motorcyclesById + id, data)
}

export async function deleteMotorcycle(id) {
    del(endpoints.motorcyclesById + id)
}