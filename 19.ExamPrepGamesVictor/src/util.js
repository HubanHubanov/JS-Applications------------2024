export function setUserData(data) {
     localStorage.setItem("user", JSON.stringify(data))
}

export function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
}

export function clearUserData() {
    localStorage.removeItem("user")
}

//TODO Add custom validation
export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k,v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    }
}

export function updateNav() {
    const userData = getUserData()
    if(userData) {
        document.getElementById("user").style.display = "block";
        document.getElementById("guest").style.display = "none";
    } else {
        document.getElementById("user").style.display = "none";
        document.getElementById("guest").style.display = "block";
    }
}