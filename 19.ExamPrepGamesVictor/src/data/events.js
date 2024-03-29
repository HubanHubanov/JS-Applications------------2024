import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: "/data/games?sortBy=_createdOn%20desc",
    homeGames: "/data/games?sortBy=_createdOn%20desc&distinct=category",
    games: "/data/games",
    gameById: "/data/games/"

}

export async function getHomePageGames() {
    return get(endpoints.homeGames)
}

export async function getAllGames() {
       return get(endpoints.dashboard)
}

export async function getGameById(id) {
    return get(endpoints.gameById + id)
}

export async function createGame(title, category, maxLevel, imageUrl, summary) {
    return post(endpoints.games, {title, category, maxLevel, imageUrl, summary})
}

export async function updateGame(id, data) {
   return put(endpoints.gameById + id, data)
}

export async function deleteGame(id) {
    del (endpoints.gameById + id)
}   