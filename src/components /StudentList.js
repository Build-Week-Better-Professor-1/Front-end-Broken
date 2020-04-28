import React, {useState,useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";


function StudentList() {

    const[student,setStudent] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/api/students")
            .then(res => {
                console.log(res)
                // setStudent(res.data.students)
            })
            .catch(err => console.log(err))
    },[])
        return(
            <div>Student List
                {student.map(item => (
                    <li>{item.name} {item.email}</li>
                ))}
            </div>

        )
}

export default StudentList