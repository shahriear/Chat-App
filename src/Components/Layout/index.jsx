import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  // console.log(user);

  useEffect(() => {
    if (!user) {
      return navigate();
    }
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;

// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Outlet, useNavigate } from 'react-router-dom';

// const Layout = () => {
//   const navigate = useNavigate();
//   const user = useSelector(state => state.user);

//   useEffect(() => {
//     if (!user) {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <>
//       <Outlet />
//     </>
//   );
// };

// export default Layout;
