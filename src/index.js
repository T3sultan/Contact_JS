import { http } from './http';
import { ui } from './ui';
//getting contact after dom loaded
document.addEventListener
    ('DOMContentLoaded', getContacts);
//From submit handle
document.getElementById('contact-submit').addEventListener('click', e => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (firstName === '' || lastName === '' || email === '' || phone === '') {
        console.log('Please provide nesseary information');
    } else {
       const data ={
           firstName,lastName,email, phone };
       http
         .post('http://localhost:3000/contacts',data)
         .then(data=>{  
             ui.clearFields();
              getContacts();
         
       });
    }

    e.preventDefault();

});

function getContacts() {
    http
        .get('http://localhost:3000/contacts')
        .then(contacts =>{
            console.log(contacts)

            ui.paint(contacts)
        })
        .catch(err => console.log(err));

}
