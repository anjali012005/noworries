import React from 'react'
import './MyProfile.css';
import pic from '../../public/doc.jpg'

// const MyProfile = () => {
//     return (
//         <div className='myprofile-container'>
//             <div className='user-img-container'>
//                 <img className='my-profile-img' src={pic} alt="my-pic" />
//             </div>
//             <div className='user-info-container'>
//                 <h4>Name : Amit Raj</h4>
//                 <h4>Email : amit@gmail.com</h4>
//                 <h4>Age : 35 Years</h4>
//             </div>
//         </div>
//     )
// }


const MyProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={pic || '/default-avatar.png'}
            alt="Profile"
            className="profile-img"
          />
          <h2>name</h2>
          <p className="role">Role</p>
        </div>

        <div className="profile-body">
          <div className="profile-section">
            <h4>Personal Details</h4>
            <p><strong>Age:</strong> Age</p>
            <p><strong>Gender:</strong> Gender</p>
            <p><strong>Phone:</strong>Phone</p>
            <p><strong>Email:</strong>Email</p>
          </div>

          {/* {user.role === 'Doctor' && (
            <div className="profile-section">
              <h4>Doctor Info</h4>
              <p><strong>Department:</strong> {user.department}</p>
              <p><strong>Experience:</strong> {user.experience} years</p>
              <p><strong>Available:</strong> {user.availability}</p>
            </div>
          )} */}

          {/* {user.role === 'Patient' && (
            <div className="profile-section">
              <h4>Medical Info</h4>
              <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
              <p><strong>Last Visit:</strong> {user.lastVisit}</p>
              <p><strong>Allergies:</strong> {user.allergies}</p>
            </div>
          )} */}
        </div>

        <div className="profile-actions">
          <button className="btn edit">Edit Profile</button>
          {/* <button className="btn book">Book Appointment</button> */}
        </div>
      </div>
    </div>
  );
};



export default MyProfile
