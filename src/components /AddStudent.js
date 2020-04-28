import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

function AddStudent() {
    const [newStudent, setNewStudent] = useState({
        name: '',
        email: ''
    })

    const onChangeHandler = e => {
        const { name, value } = e.target;
        setNewStudent({...newStudent, [name]: value})
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/students', newStudent)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} >
                <div>
                    <input
                        type='text'
                        name='name'
                        required
                        value={newStudent.name}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <input
                        type='email'
                        name='email'
                        value={newStudent.email}
                        onChange={onChangeHandler}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddStudent;