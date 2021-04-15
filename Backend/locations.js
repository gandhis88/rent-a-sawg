const endPointRoot = "https://sethi.digital/COMP4537/termproject/API/V1"
const xhttp = new XMLHttpRequest();

function getLocations() {
    (async() => {
        let result = await fetch(endPointRoot + "/locations").then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((res) => {
            document.getElementById("container").innerHTML = "";
            for(let i = 0; i < res.length; i++){
                newLocations(res[i]);
            }
        })
    })();
}

function newLocations(locationInfo){
    let aside = document.createElement("aside");

        let loc1 = document.createElement("div");
        let l1 = document.createElement("p");
        let i1 = document.createElement("p");

        let loc2 = document.createElement("div");
        let l2 = document.createElement("p");
        let i2 = document.createElement("p");

        let loc3 = document.createElement("div");
        let l3 = document.createElement("p");
        let i3 = document.createElement("p");

        let loc4 = document.createElement("div");
        let l4 = document.createElement("p");
        let i4 = document.createElement("p");

        let loc5 = document.createElement("div");
        let l5 = document.createElement("p");
        let i5 = document.createElement("p");

        let gap = document.createElement("br");
        let lb = document.createElement("hr");
        let gap1 = document.createElement("br");
        
        loc1.className = "swag_c";
        l1.innerHTML = "Street Address: ";
        l1.className = "label";
        i1.className = "item";
        i1.innerHTML = locationInfo.street_address;

        loc2.className = "swag_c";
        l2.innerHTML = "City: ";
        l2.className = "label";
        i2.className = "item";
        i2.innerHTML = locationInfo.city;

        loc3.className = "swag_c";
        l3.innerHTML = "Province: ";
        l3.className = "label";
        i3.className = "item";
        i3.innerHTML = locationInfo.province;

        loc4.className = "swag_c";
        l4.innerHTML = "Country: ";
        l4.className = "label";
        i4.className = "item";
        i4.innerHTML = locationInfo.country;

        loc5.className = "swag_c";
        l5.innerHTML = "Postal Code: ";
        l5.className = "label";
        i5.className = "item";
        i5.innerHTML = locationInfo.postal_code;

        console.log("LOC | Street : " + locationInfo.street_address + " - Postal Code: " + locationInfo.postal_code + " " + locationInfo.province);
        
    document.getElementById("container").append(aside);
    aside.append(loc1);
    loc1.append(l1);
    loc1.append(i1);

    aside.append(loc2);
    loc2.append(l2);
    loc2.append(i2);

    aside.append(loc3);
    loc3.append(l3);
    loc3.append(i3);

    aside.append(loc4);
    loc4.append(l4);
    loc4.append(i4);

    aside.append(loc5);
    loc5.append(l5);
    loc5.append(i5);
    loc5.append(gap);
    loc5.append(lb);
    loc5.append(gap1);
}

getLocations();
