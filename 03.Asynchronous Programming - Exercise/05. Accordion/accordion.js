async function solution() {
  const url = "http://localhost:3030/jsonstore/advanced/articles/list";
  const contentURL =
    "http://localhost:3030/jsonstore/advanced/articles/details/";

  const mainIdRef = document.getElementById("main");

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  data.forEach((e) => {
    createElement(e.title, e._id);
  });

  function createElement(name, id) {
    let divAccordion = document.createElement("div");
    divAccordion.className = "accordion";

    let divHead = document.createElement("div");
    divHead.className = "head";

    let span = document.createElement("span");
    span.textContent = name;

    let btn = document.createElement("button");
    btn.setAttribute("class", "button");
    btn.setAttribute("id", id);
    btn.textContent = "More";

    let divExtra = document.createElement("div");
    divExtra.className = "extra";
    divExtra.style.display = "none";

    let p = document.createElement("p");

    divAccordion.appendChild(divHead);
    divHead.appendChild(span);
    divHead.appendChild(btn);
    divAccordion.appendChild(divExtra);
    divExtra.appendChild(p);

    mainIdRef.appendChild(divAccordion);

    btn.addEventListener("click", pressMore);

    async function pressMore(e) {
      btn.textContent === "More"
        ? (btn.textContent = "Less")
        : (btn.textContent = "More");

      const responseContent = await fetch(contentURL + id);

      const dataContent = await responseContent.json();

      p.textContent = dataContent.content;
      divExtra.style.display === "none"
        ? (divExtra.style.display = "block")
        : (divExtra.style.display = "none");
    }
  }
}

solution();
