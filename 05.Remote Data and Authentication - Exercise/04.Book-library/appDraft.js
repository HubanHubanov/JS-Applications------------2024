const loadBtn = document.getElementById("loadBooks");
loadBtn.addEventListener("click", onLoad);

const submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", onSubmit);

const loadURL = "http://localhost:3030/jsonstore/collections/books";

const editURL = "http://localhost:3030/jsonstore/collections/books/";

const tableBody = document.getElementsByTagName("tbody")[0];
// const tableBody = document.querySelector("#loadBooks tbody")

async function onLoad() {
  tableBody.innerHTML = "";
  const response = await fetch(loadURL);
  const data = await response.json();
  Object.values(data).forEach((el) => {
    const author = el.author;
    const title = el.title;

    let trLoad = createRow(author, title);

    tableBody.appendChild(trLoad);
  });
}

function createRow(author, title) {
  tr = document.createElement("tr");

  let authorCell = tr.insertCell(0);
  authorCell.innerText = author;

  let titleCell = tr.insertCell(1);
  titleCell.innerText = title;

  let btnsCell = tr.insertCell(2);

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  editBtn.addEventListener("click", onEdit);
  delBtn.addEventListener("click", onDelete);

  btnsCell.appendChild(editBtn);
  btnsCell.appendChild(delBtn);

  return tr;
}

async function onSubmit(e) {
  e.preventDefault();

  let titleRef = document.getElementsByName("title")[0];

  let authorRef = document.getElementsByName("author")[0];

  if (titleRef.value === "" || authorRef.value === "") {
    return;
  }

  let option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleRef.value,
      author: authorRef.value,
    }),
  };
  let response = await fetch(loadURL, option);
  let data = await response.json();
  titleRef.value = "";
  authorRef.value = "";
}

async function onEdit(e) {
  let author = e.target.parentElement.parentElement.children[0].textContent;
  let title = e.target.parentElement.parentElement.children[1].textContent;
}
async function onDelete(e) {
  let parent = e.target.parentElement.parentElement;
  parent.remove();
}
