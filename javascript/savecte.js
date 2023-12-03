import { saveClient, ValidarEmail } from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {

});

const login = document.querySelector('#savecte');
login.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = login['name'];
    const email = login['email'];
    const pass = login['password'];
    const pass2 = login['password2'];

    try {
        const emails = await ValidarEmail(email.value);
        if(emails.length > 0){
            alert('Ya existe un usuario con ese Email');
        }else{
            await saveClient(name.value, email.value, pass.value);
            if(confirm('Se almaceno el usuario con exito, desea ir al inicio de sesion?')){
                window.location.href='iniciosesion.html';
            }else{
                name.value = '';
                email.value = '';
                pass.value = '';
                pass2.value = '';
            }
        }
        
    } catch (ex) {
        alert(ex);
    }
});