const endPointRoot = "https://sethi.digital/COMP4537/termproject/API/V1"
const xhttp = new XMLHttpRequest();

function getUsers() {
    (async() => {
        let result = await fetch(endPointRoot + "/users").then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((res) => {
            document.getElementById("container").innerHTML = "";
            for(let i = 0; i < res.length; i++){
                newUsers(res[i]);
            }
        })
    })();
}

function newUsers(userInfo){
    let aside = document.createElement("aside");

        let user1 = document.createElement("div");
        let u1 = document.createElement("p");
        let u1x = document.createElement("p");

        let user2 = document.createElement("div");
        let u2 = document.createElement("p");
        let u2x = document.createElement("p");

        let user3 = document.createElement("div");
        let u3 = document.createElement("p");
        let u3x = document.createElement("p");

        user1.className = "user_c";
        u1.innerHTML = "Username: ";
        u1.className = "label";
        u1x.className = "item";
        u1x.innerHTML = userInfo.usernameLogin;

        user3.className = "user_c";
        u3.innerHTML = "ID: ";
        u3.className = "label";
        u3x.className = "item";
        u3x.innerHTML = userInfo.id;

        console.log("USERS | ID:" + userInfo.id + " - Username: " + userInfo.usernameLogin);

        let gap = document.createElement("br");
        let lb = document.createElement("hr");
        let gap1 = document.createElement("br");

    document.getElementById("container").append(aside);
    aside.append(user1);
    user1.append(u1);
    user1.append(u1x);

    aside.append(user3);
    user3.append(u3);
    user3.append(u3x);
    user3.append(gap);
    user3.append(lb);
    user3.append(gap1);
}

getUsers();
