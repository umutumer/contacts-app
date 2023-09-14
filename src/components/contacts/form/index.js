import {useState,useEffect} from 'react';

const initialFormValues ={fullname:"",phone_number:""};

function Form({addContact,contacts}) {
    const[form,setForm] = useState(initialFormValues);

    useEffect(()=>{
        setForm(initialFormValues);
    },[contacts])

    const onChangeInput =(e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    };

    const onSubmit = (e)=>{
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
        return false
    }
    addContact([...contacts, form ]);
    
    }

  return (
    <form onSubmit={onSubmit}>
      <input value={form.fullname} name='fullname' placeholder='Fullname' onChange={onChangeInput}/> <br/>
      <input value={form.phone_number} name='phone_number' placeholder='Phone Number' onChange={onChangeInput} /> <br/>
      <button>Add List</button>
    </form>
  )
}

export default Form
