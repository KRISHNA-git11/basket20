import React,{useState} from 'react';

const Form = () => {
    const [name, setName] = useState("")
    const book = window.localStorage.getItem('name2')
    const changeName = event => {
        setName(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        window.localStorage.setItem('name2',name);
        setName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={changeName}></input>
            </div>
            <button type='submit'>Submit</button>
            {book}
        </form>
    )
}

export default Form
