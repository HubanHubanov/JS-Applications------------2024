import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: "/data/memes?sortBy=_createdOn%20desc", 
    memes: "/data/memes",
    memeById: "/data/memes/",
    memesByUserId: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`

}

export async function getMemesByUserId(id) {
     return get(endpoints.memesByUserId(id)) 
}

// export async function getMemesByUserId(id) {
//     return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
//     ) 
// }


export async function getAllMemes() {
       return get(endpoints.dashboard)
}

export async function getMememtById(id) {
    return get(endpoints.memeById + id)
}

export async function createMeme(title, description, imageUrl) {
    return post(endpoints.memes, {title, description, imageUrl})
}

export async function updateMeme(id, data) {
   return put(endpoints.memeById + id, data)
}

export async function deleteMeme(id) {
    del (endpoints.memeById + id)
}