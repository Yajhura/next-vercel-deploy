import React from "react";
import LinksActivos from "./LinksActivos";



import navStyle from "./navbar.module.css";



const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  
  return (
    <div className={`${navStyle.navbar}`}>
       {
         menuItems.map((item,i) => (
          <LinksActivos key={i} text={item.text} href={item.href}/>
         ))
       }
    </div>
  );
};

export default Navbar;
