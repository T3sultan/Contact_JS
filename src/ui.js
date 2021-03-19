class UI {
    constructor() {
        this.contactInput = document.getElementById('contacts');
        this.firstNameInput = document.getElementById('firstName');
        this.lastNameInput = document.getElementById('lastName');
        this.emailInput = document.getElementById('email');
        this.phoneInput = document.getElementById('phone');
        this.contactSubmit = document.getElementById('contact-submit');
        this.contactForm = document.getElementById('.contact-form');
        this.formEnd = document.getElementById('.form-end');
        this.idInput = document.getElementById('id')
    }
    paint(contacts) {
        let output = '';
        contacts.forEach(contact => {
            const { firstName, lastName, email, phone } = contact;
            output += `
           <div class="card" class="mb-3">
           <div class="card-body">
               <h5 class="card-title ">${firstName} ${lastName}</h5>
               <p class="card-text ">${email}</p>
               <p clase="card-text ">${phone}</p>
               <a href="#" id="edit" class="mr-3" data-id="${contact.id}">
                   <i class="fas fa-pencil-alt  "></i>
               </a>
               <a href="#" id="delete" data-id="${contact.id}">
                   <i class="fas fa-trash"></i>

               </a>

           </div>

       </div>
           `;
        });
        this.contactInput.innerHTML = output;

    }
    fillForm({ firstName, lastName, email, phone, id }) {
        this.firstNameInput.value = firstName;
        this.lastNameInput.value = lastName;
        this.emailInput.value = email;
        this.phoneInput.value = phone;
        this.idInput.value = id;

    }
    btnHandle() {
        this.contactSubmit.textContent = 'updateContact';
        this.contactSubmit.classList.remove('btn-primary');
        this.contactSubmit.classList.add('btn-danger');


        this.addCancleBtn();



    }
    addCancleBtn() {
        const btn = document.createElement('button');
        btn.className = 'btn btn-block btn-success';
        btn.id = 'cancle';
        btn.textContent = 'cancle';
        //insetting cancle button before form end
        this.contactForm.insertBefore(btn,this.formEnd);

    }
    changeState(state) {
        if (state === 'add') {
            if(document.getElementById('cancle')){
                document.getElementById('cancle').remove();

            }
       
            this.contactSubmit.textContent = 'Submit';
            this.contactSubmit.classList.add('btn-primary');
            this.contactSubmit.classList.remove('btn-danger');
            this.idInput.value = ' ';
        }
    }
    clearFields() {
        this.firstNameInput.value = '';
        this.lastNameInput.value = '';
        this.emailInput.value = '';
        this.phoneInput.value = '';
    }
}
export const ui = new UI();