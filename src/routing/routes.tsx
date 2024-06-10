import UserDetails from "../screens/user/UserDetails";
import Users from "../screens/user/Users";
 
 


  const routes = [
     
    {
      id: 1,
      path: '/users',
      element:  <Users /> 
    },
    {
      id: 3,
      path: '/user/:id',
      element: <UserDetails />
    },
     
    
  ];

  export const menu = [
    {
      key: 1,  
      title: 'Switch Organization',
      link: '/app/dashboard',
      icon: require('../assets/icons/briefcase.svg'),
    },
    {
        key: 2,
        title: 'Dashboard',
        link: '/app/dashboard',
    },
    {
      key: 3 ,
      title: 'Customers',
      menuOpen: true,
      subMenu: [
        {
          key: 4, 
          title: 'All Users',
          link: '/app/users',
          icon: require('../assets/icons/users.svg'),
        },
        {
          key: 5, 
          title: 'Inactive Users',
          link: '/app/inactive-users',
          icon: require('../assets/icons/users.svg'),
        },
        {
          key: 6,
          title: 'Dormant Users',
          link: '/app/dormant-users',
          icon: require('../assets/icons/users.svg'),
        },
        {
          key: 7,
          title: 'Top Senders',
          link: '/app/top-senders',
          icon: require('../assets/icons/users.svg'),
        },
      ],
    },
  
    
    {
      title: 'Logout',
      link: '/auth/login',
    },
  ];
  export default routes
  