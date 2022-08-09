//ShortCut to Import Component
//rafc->Enter
//rafc(react attribute fragment component)

import React, { useState } from "react";
import './style.css';
import Menu from './menuApi';
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(                   //"..." is Spread Operator to Print all Pure arr data only
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restaurent = () => {
  const [menuData,setmenuData] = useState(Menu); //hooks-> Return Our Data on Page
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    
    if(category == "All")
    {
      setmenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setmenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem = {filterItem} menuList = {menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurent;
