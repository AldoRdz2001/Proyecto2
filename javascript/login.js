import { login } from './firebase.js'

const Login = document.querySelector('#login');
Login.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = Login['email'];
    const pass = Login['password'];

    try {
        const Validacion = await login(email.value, pass.value);
        if(Validacion.length > 0){
            alert(`Bienvenido ${Validacion[0].name}`)
            window.location.href='index.html';
        }else{
            alert('No se pudo iniciar sesion');
        }
    } catch (ex) {
        alert(ex);
    }
});