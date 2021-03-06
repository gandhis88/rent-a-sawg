const endPointRoot = "https://sethi.digital/COMP4537/termproject/API/V1"
const xhttp = new XMLHttpRequest();

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

        let gap = document.createElement("br");
        let lb = document.createElement("hr");
        let gap1 = document.createElement("br");
        
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
    swag5.append(gap);
    swag5.append(lb);
    swag5.append(gap1);
}

getSwag();
