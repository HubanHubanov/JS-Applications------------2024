console.log("Hello")


const p = new Promise(executor)


p.then(onSuccess).catch(onError)

console.log("there")

function executor(resolve, reject) {
    console.log("Executig");
    // resolve("Bye")
    setTimeout(reject, 2000, "Bye!")

}

function onSuccess(data) {
  console.log(data);
}

function onError() {
    console.log("Encountered error:", error);
}


