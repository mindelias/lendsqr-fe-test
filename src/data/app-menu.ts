import Briefcase from "../assets/icons/briefcase-active.svg";
import Users from "../assets/icons/activate-user.svg";
import UserTimes from "../assets/icons/user-times.svg";
import UserFriends from "../assets/icons/user-friends.svg";
import Home from "../assets/icons/home.svg";
import Gurantor from "../assets/icons/guarantor.svg";
export const menu = [
  {
    key: 1,
    title: "Switch Organization",
    name: "switch-organization",
    path: "/dashboard",
    icon: Briefcase,
  },
  {
    key: 2,
    title: "Dashboard",
    name: "dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    key: 3,
    title: "Customers",
    name: "customers",
    hasSubMenu: true,
    subMenu: [
      {
        key: 4,
        title: "Users",
        name: "/users",
        path: "/users",
        icon: UserFriends,
      },
      {
        key: 6,
        title: "Guarantors",
        name: "guarantors",
        path: "/guarantors",
        icon: Gurantor,
      },
      {
        key: 7,
        title: "Loans",
        name: "loans",
        path: "/loans",
        icon: UserTimes,
      },
      {
        key: 8,
        title: "Decision Models",
        name: "decision-models",
        path: "/decision-models",
        icon: UserTimes,
      },
      {
        key: 9,
        title: "Savings",
        name: "savings",
        path: "/savings",
        icon: UserTimes,
      },
      {
        key: 10,
        title: "Loan Requests",
        name: "loan-requests",
        path: "/loan-requests",
        icon: UserTimes,
      },
      {
        key: 11,
        title: "Whitelist",
        name: "whitelist",
        path: "/whitelist",
        icon: UserTimes,
      },
      {
        key: 12,
        title: "karma",
        name: "karma",
        path: "/karma",
        icon: UserTimes,
      },
    ],
  },

  {
    key: 13,
    title: "Businesses",
    name: "businesses",
    hasSubMenu: true,
    subMenu: [
       {
          key: 14,
          title: "Organization",
          name: "organization",
          path: "/organization",
          icon: Briefcase,
       },
       {
          key: 15,
          title: "Loan Products",
          name: "loan-products",
          path: "/loan-products",
          icon: Briefcase,
       },
       {
          key: 16,
          title: "Savings Products",
          name: "savings-products",
          path: "/savings-products",
          icon: Briefcase,
       },
       {
          key: 17,
          title: "Fees and Charges",
          name: "fees-and-charges",
          path: "/fees-and-charges",
          icon: Briefcase,  
       },

       {
          key: 18,
          title: "Transactions",
          name: "transactions",
          path: "/transactions",
          icon: Briefcase,
       },
       {
          key: 19,
          title: "Services",
          name: "services",
          path: "/services",
          icon: Briefcase,
       },
       {
          key: 20,
          title: "Service Account",
          name: "service-account",
          path: "/service-account",
          icon: Briefcase,
       },

       {
          key: 21,
          title: "Settlements",
          name: "settlements",
          path: "/settlements",
          icon: Briefcase,
       },

       {
          key: 22,
          title: "Reports",
          name: "reports",
          path: "/reports",
          icon: Briefcase,
       },
    ],
  },
  {
    key: 23,
    title: "Settings",
    name: "settings",
    hasSubMenu: true,
    subMenu: [
      {
        key: 24,
        title: "Preferences",
        name: "preferences",
        path: "/preferences",
        icon: Briefcase,
      },
      {
        key: 25,
        title: "Fees and Pricing",
        name: "fees-and-pricing",
        path: "/fees-and-pricing",
        icon: Briefcase,
      },
      {
        key: 26,
        title: "Audit Logs",
        name: "audit-logs",
        path: "/audit-logs",
        icon: Briefcase,
      },
    ],
  },
];
