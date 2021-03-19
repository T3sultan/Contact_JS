import { http } from './http';
import { ui } from './ui';
//getting contact after dom loaded
document.addEventListener('DOMContentLoaded', getContacts);

//Delete contact
document.getElementById('contacts').addEventListener('click', deleteContact);

//deleted function
function deleteContact(e) {
    if (e.target.parentElement.id === 'delete') {
        const id = e.target.parentElement.dataset.id;
        //console.log(id)
        http
            .delete(` http://localhost:3000/contacts/${id}`)
            .then(() => {
                console.log('contact deleted');
                getContacts();
            }).catch(err => console.log(err))
    }

}
//edit contact
document.getElementById('contacts').addEventListener('click', editContact);
//edit contact function
function editContact(e) {
    if (e.target.parentElement.id === 'edit') {
        const id = e.target.parentElement.dataset.id;
        http
            .get(` http://localhost:3000/contacts/${id}`)
            .then(data => {
                ui.fillForm(data);
                ui.btnHandle();

            })
    }

}
//handdling cancle button
document.querySelector('.contact-form').addEventListener('click',cancleUpdate);
///handdling cancle function
function cancleUpdate(e){
    if(e.target.id ==='cancle'){
        ui.changeState('add');
        ui.clearFields()

    }


  e.preventDefault();
}



//From submit handle
document.getElementById('contact-submit').addEventListener('click', e => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const id = document.getElementById('id').value;
    if (firstName === '' || lastName === '' || email === '' || phone === '') {
        console.log('Please provide nesseary information');
    } else {
        const data = {
            firstName, lastName, email, phone
        };
        if (id === '') {
            http
                .post('http://localhost:3000/contacts', data)
                .then(data => {
                    ui.clearFields();
                    getContacts();

                });

        }

        else {
            http
                .update('http://localhost:3000/contacts', data)
                .then(() => {
                   
                    ui.changeState('add');
                     ui.clearFields();
                    getContacts()

                })
        }
    }

    e.preventDefault();

});
//main function
function getContacts() {
    http
        .get('http://localhost:3000/contacts')
        .then(contacts => {


            ui.paint(contacts)
        })
        .catch(err => console.log(err));

}

