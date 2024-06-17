import ComingSoon from "../screens/coming-soon/ComingSoon";
import UserDetails from "../screens/user/UserDetails/UserDetails";
import Users from "../screens/user/Users";

const routes = [
  {
    id: 1,
    path: "/dashboard",
    element: <Users />,
  },
  {
    id: 2,
    path: "/users",
    element: <Users />,
  },
  {
    id: 3,
    path: "/user/details",
    element: <UserDetails />,
  },
  {
    id: 4,
    path: "/dashboard",
    element: <ComingSoon />,
  },
  {
    id: 5,
  path: "/guarantors",
  element: <ComingSoon />,
  },
  {
    id: 6,
    path: "/loans",
    element: <ComingSoon />,
  },
  {
    id: 7,
    path: "/decision-models",
    element: <ComingSoon />,
  },
  {
    id: 8,
    path: "/savings",
    element: <ComingSoon />,
  },
  {
    id: 9,
    path: "/loan-requests",
    element: <ComingSoon />,
  },
  {
    id: 10,
    path: "/whitelist",
    element: <ComingSoon />,
  },
  {
    id: 11,
    path: "/karma",
    element: <ComingSoon />,
  },
  {
    id: 12,
    path: "/organization",
    element: <ComingSoon />,
  },
  {
    id: 13,
    path: "/loan-products",
    element: <ComingSoon />,
  },
  {
    id: 14,
    path: "/savings-products",
    element: <ComingSoon />,
  },
  {
    id: 15,
    path: "/fees-and-charges",
    element: <ComingSoon />,
  },
  {
    id: 16,
    path: '/transactions',
  },
  {
    id: 17,
    path: "/services",
    element: <ComingSoon />,
  },
  {
    id: 18,
    path: "/service-account",
    element: <ComingSoon />,
  },
  {
    id: 19,
    path: "/settlements",
    element: <ComingSoon />,
  },
  {
    id: 20,
    path: "/reports",
    element: <ComingSoon />,
  },
  {
    id: 21,
    path: "/preferences",
    element: <ComingSoon />,
  },
  {
    id: 22,
    path: "/fees-and-pricing",
    element: <ComingSoon />,
  },
  {

    id: 23,
    path: "/audit-logs",
    element: <ComingSoon />,
  },
  

   

];

export default routes;
