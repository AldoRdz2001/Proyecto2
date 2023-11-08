import {saveTask} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {

});

const login = document.querySelector('#savecte');
login.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = login['name'];
    const email = login['email'];
    const pass = login['password'];
    
    saveTask(name.value, email.value, pass.value);
});