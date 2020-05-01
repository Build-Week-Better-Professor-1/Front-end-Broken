import React from "react";
import { Link } from 'react-router-dom';
import { SmallBlueButton } from './styles';

const YourProjects = () => {
    return (
        <div>
            <Link to="/Dashboard"><SmallBlueButton>Dashboard</SmallBlueButton></Link>
            <p>Projects</p>
        </div>
    )

}

export default YourProjects;