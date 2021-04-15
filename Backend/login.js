const endPointRoot = "https://sethi.digital/COMP4537/termproject/API/V1"
const xhttp = new XMLHttpRequest();

// UI-UX for Login

function showLogin(){
    document.getElementById("loginSection").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginSection").style.display = "none";
}

function showSignup(){
    document.getElementById("signupSection").style.display = "block";
}

function closeSignup() {
    document.getElementById("signupSection").style.display = "none";
}

function showAdminlogin(){
    document.getElementById("adminSection").style.display = "block";
}

function closeAdmin() {
    document.getElementById("adminSection").style.display = "none";
}

// Create an Account

function createAccount(usernameLogin, passwordLogin){
    (async() => {
        let result = fetch(endPointRoot + "/users", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usernameLogin: usernameLogin,
                passwordLogin: passwordLogin
            }),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((res) => {
            window.location.href = "https://sethi.digital/COMP4537/termproject/API/V1/home.html";
          });
      })();
}

// Login to your Account

async function login(usernameLoginX, passwordLoginX) {
    const result = await fetch(endPointRoot + "/users/?usernameLogin=" + usernameLoginX)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        if (passwordLoginX == res[0].passwordLogin) { 
            window.location.href = "https://simrangandhi.technology/COMP4537/termproject/API/V1/listings.html";
        } else {
            window.alert("Wrong Username or Password");
        }
      });
}

// Log into Admin

async function adminLogin(usernameAdmin, passwordAdmin) {
    const result = await fetch(endPointRoot + "/admins/?usernameAdmin=" + usernameAdmin)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        if (passwordAdmin == res[0].passwordAdmin) { 
            window.location.href = "https://simrangandhi.technology/COMP4537/termproject/API/V1/admin.html";
        } else {
            window.alert("Wrong Username or Password");
        }
      });
}