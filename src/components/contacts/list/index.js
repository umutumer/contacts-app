import {useState} from 'react';


function List({contacts}) {
    const [filterText,setFilterText] = useState("");
    const filtered =contacts.filter((item)=>{
        return Object.keys(item).some((key)=>{
          return  item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
        });
    });
  return (
    <div>
        <h1>CONTACS</h1>
        <input placeholder='Filter Contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
      <ul className='list'>
        {filtered.map((contact, i) =>(
            <li key={i}>
                <span>{contact.fullname}</span> <br />
                <span>{contact.phone_number}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default List
