interface User {
    email: string;
    password: string;
}

// Selección de elementos del DOM
const formTitle = document.getElementById("form-title") as HTMLHeadingElement;
const authForm = document.getElementById("authForm") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
const toggleForm = document.getElementById("toggle-form") as HTMLAnchorElement;
const logoutBtn = document.getElementById("logout-btn") as HTMLButtonElement;

let isLoginMode = true;

// Alternar entre registro e inicio de sesión
toggleForm.addEventListener("click", () => {
    isLoginMode = !isLoginMode;
    formTitle.textContent = isLoginMode ? "Iniciar Sesión" : "Crear Cuenta";
    submitBtn.textContent = isLoginMode ? "Ingresar" : "Registrarse";
    toggleForm.textContent = isLoginMode ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión";
    errorMessage.textContent = "";
});

// Guardar usuario en localStorage
function saveUser(user: User) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

// Obtener usuarios de localStorage
function getUsers(): User[] {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

// Verificar si el usuario ya existe
function userExists(email: string): boolean {
    return getUsers().some(user => user.email === email);
}

// Autenticar usuario
function authenticateUser(email: string, password: string): boolean {
    return getUsers().some(user => user.email === email && user.password === password);
}

// Manejar el formulario de registro/login
authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    if (isLoginMode) {
        // Inicio de sesión
        if (authenticateUser(email, password)) {
            localStorage.setItem("sessionUser", email);
            alert("Inicio de sesión exitoso");
            location.reload();
        } else {
            errorMessage.textContent = "Correo o contraseña incorrectos";
        }
    } else {
        // Registro de usuario
        if (userExists(email)) {
            errorMessage.textContent = "El correo ya está registrado";
        } else {
            saveUser({ email, password });
            alert("Cuenta creada con éxito");
            isLoginMode = true;
            formTitle.textContent = "Iniciar Sesión";
            submitBtn.textContent = "Ingresar";
            toggleForm.textContent = "¿No tienes cuenta? Regístrate";
            authForm.reset();
        }
    }
});

// Cerrar sesión
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("sessionUser");
    location.reload();
});

// Verificar sesión activa
document.addEventListener("DOMContentLoaded", () => {
    const sessionUser = localStorage.getItem("sessionUser");
    if (sessionUser) {
        formTitle.textContent = `Bienvenido, ${sessionUser}`;
        authForm.style.display = "none";
        toggleForm.style.display = "none";
        logoutBtn.style.display = "block";
    }
});