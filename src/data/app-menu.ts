import Briefcase from '../assets/icons/briefcase-active.svg';
import Users from '../assets/icons/users.svg';
import UserTimes from '../assets/icons/user-times.svg';
import UserFriends from '../assets/icons/user-friends.svg';
import Home from '../assets/icons/home.svg';
export const menu = [
  {
    key: 1,
    title: 'Switch Organization',
    name: 'switch-organization',
    path: '/dashboard',
    icon:Briefcase
  },
  {
    key: 2,
    title: 'Dashboard',
    name: 'dashboard',
    path: '/dashboard',
    icon: Home
  },
  {
    key: 3,
    title: 'Customers',
    name: 'customers',
    hasSubMenu: true,
    subMenu: [
      {
        key: 4,
        title: 'Users',
        name: '/users',
        path: '/users',
        icon: UserFriends,
      },
      {
        key: 5,
        title: 'Karma',
        name: 'karma',
        path: '/karma',
        icon: UserTimes
      },
      {
        key: 6,
        title: 'Guarantors',
        name: 'guarantors',
        path: '/guarantors',
        icon: UserFriends
      },
       
    ],
  },
];