async function lockedProfile() {
  const url = "http://localhost:3030/jsonstore/advanced/profiles";

  try {

    const mainRef = document.getElementById("main");
  mainRef.innerHTML = "";

  const response = await fetch(url);
  const data = await response.json();

  let dataValues = Object.values(data);

  dataValues.forEach((e) => {
    createElements(e.username, e.email, e.age);
  });

  function createElements(username, email, age) {
    let divProfile = document.createElement("div");
    divProfile.className = "profile";

    let img = document.createElement("img");
    img.setAttribute("src", "./iconProfile2.png");
    img.className = "userIcon";

    let labelLock = document.createElement("label");
    labelLock.textContent = "Lock";

    let inputRadioLock = document.createElement("input");
    inputRadioLock.setAttribute("type", "radio");
    inputRadioLock.setAttribute("name", `user1Locked`);
    inputRadioLock.setAttribute("value", "lock");
    inputRadioLock.checked = true;

    //////////////////////////////////////

    let labelUnclok = document.createElement("label");
    labelUnclok.textContent = "Unlock";

    let inputRadioUnlock = document.createElement("input");
    inputRadioUnlock.setAttribute("type", "radio");
    inputRadioUnlock.setAttribute("name", `user1Locked`);
    inputRadioUnlock.setAttribute("value", "unlock");

    mainRef.appendChild(divProfile);
    divProfile.appendChild(img);
    divProfile.appendChild(labelLock);
    divProfile.appendChild(inputRadioLock);
    divProfile.appendChild(labelUnclok);
    divProfile.appendChild(inputRadioUnlock);

    let br = document.createElement("br");
    divProfile.appendChild(br);

    let hr = document.createElement("hr");
    divProfile.appendChild(hr);

    let labelUserName = document.createElement("label");
    labelUserName.textContent = "Username";
    divProfile.appendChild(labelUserName);

    let inputUserName = document.createElement("input");
    inputUserName.setAttribute("type", "text");
    inputUserName.setAttribute("name", "user1Username");
    inputUserName.setAttribute("value", username);
    inputUserName.disabled = true;
    inputUserName.readOnly = true;
    divProfile.appendChild(inputUserName);

    ////////////////////////////////////////////////
    let divHiddenFields = document.createElement("div");
    divHiddenFields.id = "user1HiddenFields";

    let hr2 = document.createElement("hr");

    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Email";

    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("name", "user1Email");
    inputEmail.setAttribute("value", email);
    inputEmail.disabled = true;
    inputEmail.readOnly = true;
    ///////////////////////////

    let labelAge = document.createElement("label");
    labelAge.textContent = "Age";

    let inputAge = document.createElement("input");
    inputAge.setAttribute("type", "text");
    inputAge.setAttribute("name", "user1Age");
    inputAge.setAttribute("value", age);
    inputAge.disabled = true;
    inputAge.readOnly = true;
    //////////////////////////////////////////////////

    divHiddenFields.appendChild(hr2);
    divHiddenFields.appendChild(labelEmail);
    divHiddenFields.appendChild(inputEmail);
    divHiddenFields.appendChild(labelAge);
    divHiddenFields.appendChild(inputAge);

    divProfile.appendChild(divHiddenFields);

    divHiddenFields.style.display = "none";

    let btn = document.createElement("button");
    btn.textContent = "Show more";
       
    divProfile.appendChild(btn);
    btn.addEventListener("click", onClick);

    
  }

  function onClick(e) {

    let btnPressed = e.target
    // let btnState = document.querySelector('input[type="radio"]:checked');

    console.log(btnPressed);

if(btnPressed.parentElement.children[2].checked === "true" ) {
  return
}

    // if (btnState.value === "lock") {
    //   return;
    // }

    let hiddenField = btnPressed.parentElement.children[9]


        btnPressed.textContent === "Show more"
      ? (btnPressed.textContent = "Hide it")
      : (btnPressed.textContent = "Show more");
    hiddenField.style.display === "none"
      ? (hiddenField.style.display = "block")
      : (hiddenField.style.display = "none");


  //   btn.textContent === "Show more"
  //     ? (btn.textContent = "Hide it")
  //     : (btn.textContent = "Show more");
  //   divHiddenFields.style.display === "none"
  //     ? (divHiddenFields.style.display = "block")
  //     : (divHiddenFields.style.display = "none");

  }

    
  } catch (error) {
    console.log("Error");
  }

  
}
