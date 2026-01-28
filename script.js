// ===== LOGIN =====
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // cek kosong
    if (username === "" || password === "") {
        alert("Username dan password harus diisi!");
        return;
    }

    // cek username & password
    if (username === "galih" && password === "puma12") {
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", username);
        window.location.href = "home.html";
    } else {
        alert("Username atau password salah!");
    }
}

// ===== CEK LOGIN & KATA PENYAMBUTAN =====
function checkLogin() {
    if (localStorage.getItem("isLogin") !== "true") {
        window.location.href = "login.html";
    } else {
        const welcome = document.getElementById("welcome");
        if (welcome) {
            const username = localStorage.getItem("username");
            welcome.innerText =
                "Selamat datang, " + username +
                "! Terima kasih telah mengunjungi website resmi PUMA. Nikmati pengalaman menjelajahi produk dan informasi kami.";
        }
    }
}

// ===== LOGOUT =====
function logout() {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}
