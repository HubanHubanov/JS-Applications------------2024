import {  deleteGame, getGameById } from "../data/events.js";
import { html, render, page } from "../lib.js";
import {  getUserData } from "../util.js";

const detailsTemplate = (gameData, hasUser, isOwner, onDelete) => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${gameData.imageUrl} />
                    <h1>${gameData.title}</h1>
                    <span class="levels">MaxLevel: ${gameData.maxLevel}</span>
                    <p class="type">${gameData.category}</p>
                </div>

                <p class="text">
                   ${gameData.summary}
                </p>

                <!-- Bonus ( for Guests and Users ) -->
                <!-- <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul> -->
                        <!-- list all comments for current game (If any) -->
                        <!-- <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul> -->
                    <!-- Display paragraph: If there are no games in the database -->
                    <!-- <p class="no-comment">No comments.</p>
                </div> -->

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                ${isOwner ? html`
                <div class="buttons">
                    <a href="/edit/${gameData._id}" class="button">Edit</a>
                    <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
                </div>
                ` : null}
                
            </div>

`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const gameData = await getGameById(id);
    const user = getUserData();
    const hasUser = !!user
   const isOwner = hasUser && user._id == gameData._ownerId
  
   
  render(detailsTemplate(gameData, hasUser, isOwner, onDelete))

  async function onDelete() {
    const choise = confirm("Are you sure?")
    if(choise) {
      await deleteGame(id)  
     page.redirect("/catalog")

    }
  }
}

  