import { http } from './http';
import { ui } from './ui';
//getting contact after dom loaded
document.addEventListener('DOMContentLoaded', getContacts);

  //Delete contact
  document.getElementById('contacts').addEventListener('click',deleteContact);

  //deleted function
function deleteContact(e){
    if(e.target.parentElement.id === 'delete'){
        const id = e.target.parentElement.dataset.id;
        //console.log(id)
       http
        .delete(` http://localhost:3000/contacts/${id}`)
        .then(()=>{
           console.log('contact deleted');
           getContacts();
       }).catch(err=>console.log(err))
    }

 }
 //edit contact
 document.getElementById('contacts').addEventListener('click',editContact);
 //edit contact function
 function editContact(e){
     if(e.target.parentElement.id==='edit'){
         const id=e.target.parentElement.dataset.id;
        http
        .get(` http://localhost:3000/contacts/${id}`)
        .then(data=>{
           ui.fillForm(data);
           ui.btnHandle();

        })
     }

 }
 
   
  
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
//main function
function getContacts() {
    http
        .get('http://localhost:3000/contacts')
        .then(contacts =>{
            console.log(contacts)

            ui.paint(contacts)
        })
        .catch(err => console.log(err));

}

