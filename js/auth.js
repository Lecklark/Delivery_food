
const auth = () => {
    const buttonAuth = document.querySelector(".button-auth");
    const modalAuth = document.querySelector(".modal-auth");
    const closeAuth = document.querySelector(".close-auth");
    const logInForm = document.getElementById("logInForm");
    const buttonOut = document.querySelector(".button-out");
    const userName = document.querySelector(".user-name");
    const buttonCart = document.querySelector('.button-cart');


    const login = (user) => {
        buttonAuth.style.display = "none";
        buttonOut.style.display = "flex";
        userName.style.display = "flex";
        buttonCart.style.display = "flex";
        userName.innerHTML = user.login;
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        buttonAuth.style.display = "flex";
        buttonOut.style.display = "none";
        userName.style.display = "none";
        buttonCart.style.display = "none";
        userName.innerHTML = "";
        localStorage.removeItem('user');
    }

    buttonAuth.addEventListener('click', () => {
        modalAuth.style.display = 'flex';
    });

    closeAuth.addEventListener('click', () => {
        modalAuth.style.display = 'none';
    });

    logInForm.addEventListener('submit', (e) => {
        const inputLogin = document.getElementById("login");
        const inputPass = document.getElementById("password");
        e.preventDefault();
        const user = {
            login: inputLogin.value,
            password: inputPass.value
        }
        login(user);
        modalAuth.style.display = 'none';
    })

    buttonOut.addEventListener('click', () => {
        logout();
    });

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')));
    }
}

auth()