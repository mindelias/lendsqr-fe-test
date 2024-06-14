import UserDetails from "../screens/user/UserDetails/UserDetails";
import Users from "../screens/user/Users";
 
 


  const routes = [
     
    {
      id: 1,
      path: '/dashboard',
      element:  <Users /> 
    },
    {
      id: 2,
      path: '/users',
      element:  <Users /> 
    },
    {
      id: 3,
      path: '/user/details',
      element: <UserDetails />
    },
    {
      id: 3,
      path: '/karma',
      element: <UserDetails />
    },
     
    
  ];

  
  export default routes
  