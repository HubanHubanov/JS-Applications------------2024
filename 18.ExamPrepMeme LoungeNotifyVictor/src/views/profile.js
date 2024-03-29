
import { getAllMemes, getMemesByUserId } from "../data/events.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (user, userMemes) => html`
<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                ${user.gender == "male" ? html`
                <img id="user-avatar-url" alt="user-profile" src="/images/male.png">
                ` : html`
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                 `}
                 <!-- <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png"> -->

                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${userMemes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
               ${userMemes.length ? userMemes.map(memeTemplate) : html`
               <p class="no-memes">No memes in database.</p>
               `}                
            </div>
        </section>
`





const memeTemplate = (meme) => html`
  <div class="user-meme">
                    <p class="user-meme-title">${meme.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
                    <a class="button" href="/catalog/${meme._id}">Details</a>
                </div>
`


export async function showProfile(ctx) { 
    const user = await getUserData();
    const id = user._id
    const userMemes = await getMemesByUserId(id)
      

   
  render(profileTemplate(user, userMemes));
}



