import './ShowUser.css'
export default function ShowUser({info}){
    const {id,name,email} = info
    return (
        <div className="design">
        <h4>Id: {id}</h4>
        <h4>Name:{name}</h4>
        <h4>Email: {email}</h4>
        </div>

    )
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import './ShowUser.css';

// export default function ShowUser({ info }) {
//   const { id, name, email } = info;

//   return (
//     <div className="design">
//       <h4>Id: {id}</h4>
//       <h4>Name: {name}</h4>
//       <h4>Email: {email}</h4>
//     </div>
//   );
// }

// ShowUser.propTypes = {
//   info: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//   }).isRequired,
// };
