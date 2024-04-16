// 1. Address Book Application:
// Create an address book application where each contact is represented as an object with properties like name, email, phone, and address.
// Implement functionalities to add new contacts, edit existing contacts, delete contacts, and search for contacts by name or email.
let contacts ={
              newContacts:[],
              name1:'John', 
              email:'john@gmail.com',
              phone:1234567890,
              address:'Pune',
              addNewContact:function(n,e,p,add){
                let newContact={
                    name1:n,
                    email:e,
                    phone:p,
                    address:add
                }
                this.newContacts.push(newContact);
                // showContact();          
            }
            }
function showContact(newContacts){
    newContacts.forEach(element => {
        for(let x in element){
        console.log(element[x]);
        }
    })
};
showContact(contacts.newContacts);
contacts.addNewContact=function(n,e,p,add){
    let newContact={
        name1:n,
        email:e,
        phone:p,
        address:add
    }
    this.newContacts.push(newContact)
}
contacts.addNewContact('Tom','tom@gmail.com',4545454545,'Pune');
contacts.addNewContact('Jerry','Jerry@gmail.com',4545454545,'Pune');
showContact(contacts.newContacts);
