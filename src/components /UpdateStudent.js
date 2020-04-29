import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {axiosWithAuth} from "../utils/axiosWithAuth";

function UpdateStudent(props) {

    const [item, setItem] = useState({
        name: '',
        email: ''
    })

    const {id} = useParams();

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/students/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    })

    return(
        <div>
            boo
        </div>
    );
}

export default UpdateStudent;