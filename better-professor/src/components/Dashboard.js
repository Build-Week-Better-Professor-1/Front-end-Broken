import React from "react";
import { Link } from 'react-router-dom';
import { DashboardDiv, SmallBlueButton } from './styles';

const Dashboard = () => {
    return (
        <DashboardDiv> 
            <h1>Welcome to your Dashboard.</h1>
            <Link to="/AddStudents"><SmallBlueButton>Add Students</SmallBlueButton></Link>
            <Link to="/YourStudents"><SmallBlueButton>Your Students</SmallBlueButton></Link>
            {/* <Link to="/YourProjects"><SmallBlueButton>Your Projects</SmallBlueButton></Link> */}
        </DashboardDiv>
    )
}

// const mapStateToProps = state => {
//     return {
//       isLoading: state.isLoading,
//       activity: state.activity,
//       error: state.error,
//       posts: state.posts
//     };
//   };
export default Dashboard;
//   export default connect(
//     mapStateToProps,
//     { getGarden, addPlant }          
//   )(Dashboard);

