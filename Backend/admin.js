const endPointRoot = "https://sethi.digital/COMP4537/termproject/API/V1"
const xhttp = new XMLHttpRequest();

function postSwag(brand, item, description, price){
    (async() => {
        let result = fetch(endPointRoot, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: "Swag",
                brand: brand,
                item: item,
                description: description,
                price: price
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
    })();
}

function getSwag() {
    (async() => {
        let result = await fetch(endPointRoot).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((res) => {
            document.getElementById("container").innerHTML = "";
            for(let i = 0; i < res.length; i++){
                newSwag(res[i]);
            }
        })
    })();
}

function getStatistics() {
    (async() => {
        let result = await fetch(endPointRoot + "/statistics").then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((res) => {
            document.getElementById("statistics").innerHTML = "";
            for(let i = 0; i < res.length; i++){
                newStats(res[i]);
            }
        })
    })();
}

function getUsers() {
    (async() => {
        let result = await fetch(endPointRoot + "/users").then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((res) => {
            document.getElementById("containerUsers").innerHTML = "";
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
        u3x.setAttribute("id", "swagID");
        u3x.innerHTML = userInfo.id;

        console.log("USERS | ID:" + userInfo.id + " - Username: " + userInfo.usernameLogin);

        let btndiv = document.createElement("div");
        let btn = document.createElement("button");
        let gap = document.createElement("br");
        let gap1 = document.createElement("br");
        let lb = document.createElement("hr");

        btndiv.className = "user_c";
        btn.innerHTML = "Delete";
        btn.setAttribute("onclick", "deleteUser()");
        btn.className = "btnDel"

    document.getElementById("containerUsers").append(aside);
    aside.append(user1);
    user1.append(u1);
    user1.append(u1x);

    aside.append(user3);
    user3.append(u3);
    user3.append(u3x);

    aside.append(btndiv);
    btndiv.append(btn);
    btndiv.append(gap);
    btndiv.append(gap1);
    btndiv.append(lb);
}

function newSwag(shopInfo){
    let aside = document.createElement("aside");

        let swag1 = document.createElement("div");
        let l1 = document.createElement("p");
        let i1 = document.createElement("p");

        let swag2 = document.createElement("div");
        let l2 = document.createElement("p");
        let i2 = document.createElement("p");

        let swag3 = document.createElement("div");
        let l3 = document.createElement("p");
        let i3 = document.createElement("p");

        let swag4 = document.createElement("div");
        let l4 = document.createElement("p");
        let i4 = document.createElement("p");

        let swag5 = document.createElement("div");
        let l5 = document.createElement("p");
        let i5 = document.createElement("p");

        let btndiv = document.createElement("div");
        let btn = document.createElement("button");
        let btn1 = document.createElement("button");
        let gap = document.createElement("br");
        let gap1 = document.createElement("br");
        let lb = document.createElement("hr");
        
        swag1.className = "swag_c";
        l1.innerHTML = "Brand Name: ";
        l1.className = "label";
        i1.className = "item";
        i1.innerHTML = shopInfo.brand;

        swag2.className = "swag_c";
        l2.innerHTML = "Item Name: ";
        l2.className = "label";
        i2.className = "item";
        i2.innerHTML = shopInfo.item;

        swag3.className = "swag_c";
        l3.innerHTML = "Description of Swag: ";
        l3.className = "label";
        i3.className = "item";
        i3.innerHTML = shopInfo.description;

        swag4.className = "swag_c";
        l4.innerHTML = "Price to Rent: ";
        l4.className = "label";
        i4.className = "item";
        i4.innerHTML = shopInfo.price;

        swag5.className = "swag_c";
        l5.innerHTML = "Item ID: ";
        l5.className = "label";
        i5.className = "item";
        i5.innerHTML = shopInfo.id;
        i5.setAttribute("id", "swagID");

        console.log("SWAG | ID:" + shopInfo.id + " - Swag Name: " + shopInfo.brand + " " + shopInfo.item);

        btndiv.className = "swag_c";
        btn.innerHTML = "Delete";
        btn.className = "btnDel";
        btn.addEventListener("click", function () {
            deleteRequest(swagID).then(() => {
                shopInfo = null;
            });
        });

        btn1.innerHTML = "Edit";
        btn1.className = "btnEdit";
        
    document.getElementById("container").append(aside);
    aside.append(swag1);
    swag1.append(l1);
    swag1.append(i1);

    aside.append(swag2);
    swag2.append(l2);
    swag2.append(i2);

    aside.append(swag3);
    swag3.append(l3);
    swag3.append(i3);

    aside.append(swag4);
    swag4.append(l4);
    swag4.append(i4);

    aside.append(swag5);
    swag5.append(l5);
    swag5.append(i5);

    aside.append(btndiv);
    btndiv.append(btn);
    btndiv.append(btn1);
    btndiv.append(gap);
    btndiv.append(gap1);
    btndiv.append(lb);
}

function newStats(statInfo){
    let stats = document.getElementById("statistics");
    let t1 = document.createElement("p");
    let t2 = document.createElement("p");
    let t3 = document.createElement("p");
    
    t1.innerHTML = statInfo.Endpoint;
    t2.innerHTML = statInfo.GET_statistics;
    t3.innerHTML = statInfo.POST_statistics;
    
    stats.append(t1);
    stats.append(t2);
    stats.append(t3);

    console.log(statInfo);
}

// DELETE FUNCTION - NOT WORKING

async function deleteRequest(swagID) {
    let result = await fetch(endPointRoot, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        swagID: swagID
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }


getSwag();
getUsers();
getStatistics();