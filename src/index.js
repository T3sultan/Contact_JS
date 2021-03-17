import {http } from './http';
import {ui} from './ui';

document.addEventListener
('DOMContentLoaded',getContacts);

function getContacts(){
    http 
       .get('http://localhost:3000/contact')
       .then(contacts=>ui.paint(contacts))
       .catch(err=>console.log(err));

}
