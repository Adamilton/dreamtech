// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import { useHistory, Link } from 'react-router-dom';


// export default function Profile() {
//   const history = useHistory();

//   // const checkName = () => {
//   //   if (localStorage.get('user')) {
//   //     const { name } = JSON.parse(localStorage.getItem('user'));
//   //     return name;
//   //   }
//   //   return '';
//   // }

//   const checkingEmail = () => {
//     if (localStorage.getItem('user')) {
//       const { email } = JSON.parse(localStorage.getItem('user'));

//       return email;
//     }
//     return '';
//   };

//   const logout = () => {
//     localStorage.clear();

//     history.push('/');
//   };

//   return (
//     <section>
//       <Sidebar />

//       <h1
//         data-testid="profile-email"
//       >

//         { checkingEmail() }
//       </h1>

//       <Link to="/calendar">
//         <button
//           type="button"
//         >
//           Agenda
//         </button>
//       </Link>

//       <Link to="/scenery">
//         <button
//           type="button"
//         >
//           Cenários
//         </button>
//       </Link>

//       <button
//         type="button"
//         onClick={ logout }
//       >
//         Logout
//       </button>
      
//     </section>
//   );
// }
