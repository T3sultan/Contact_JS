class UI{
    constructor(){
        this.contactInput = document.getElementById('contacts');
        this.firstNameInput = document.getElementById('firstName');
        this.lastNameInput = document.getElementById('lastName');
        this.emailInput = document.getElementById('email');
        this.phoneInput = document.getElementById('phone');
        this.contactSubmit =document.getElementById('contact-submit')
    }
   paint(contacts){
       let output ='';
       contacts.forEach(contact=>{
           const {firstName,lastName,email,phone}=contact;
           output +=`
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
         this.contactInput.innerHTML=output;

   }
   fillForm({firstName,lastName,email,phone}){
    this.firstNameInput.value=firstName;
    this.lastNameInput.value=lastName;
    this.emailInput.value=email;
    this.phoneInput.value=phone;
    
   }
   btnHandle(){
    this.contactSubmit.textContent = 'updateContact';
    this.contactSubmit.classList.remove('btn-primary');
    this.contactSubmit.classList.add('btn-danger')
   }
   clearFields(){
       this.firstNameInput.value='';
       this.lastNameInput.value='';
       this.emailInput.value='';
       this.phoneInput.value='';
   }
}
export const ui = new UI();