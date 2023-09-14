import {useState,useEffect} from 'react'
import List from './list'
import Form from './form'
import {} from "./style.css"

function Contacts() {
    const [contacts,setContacts] = useState([
        {
            fullname:"Umut",
            phone_number:"123-123-123"
        },
        {
            fullname:"Emir",
            phone_number:"234-234-234"
        },
        {
            fullname:"Kadir",
            phone_number:"345-345-345"
        },
    ]);

    useEffect(()=>{
    console.log(contacts);
    },[contacts]);

  return (
    <div id='container'>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
