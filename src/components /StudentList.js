import React, {useState,useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";


function StudentList(props) {
    const[student,setStudent] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/api/students")
            .then(res => {
                console.log(res)
                setStudent(res.data.students)
            })
            .catch(err => console.log(err))
    },[])

    const onClickEditHandler = (item) => {
        window.location.href=`/update-student/${item.id}`
    }

    const onClickDeleteHandler = (ev, item) => {
        ev.preventDefault();

        axiosWithAuth()
            .delete(`/api/students/${item.id}`)
            .then(res => window.location.href="/student-list")
            .catch(err => console.log(err))
    }

    return(
        <div>Student List
            {student.map(item => {
                return (
                    <div>
                        <li>
                            {item.name} {item.email}
                        </li>
                        <button onClick={() => onClickEditHandler(item)}>edit</button>
                        <button onClick={ev => onClickDeleteHandler(ev, item)} >delete</button>

                    </div>
                );
            })}
        </div>

    )
}

export default StudentList