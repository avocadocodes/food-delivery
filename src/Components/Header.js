import React, { useEffect } from 'react';
import {} from "@mui/material";
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";

function Header() {

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");

    toggleIcon.addEventListener("click", () => {
        document.querySelector(".rightMenu").classList.toggle("active");
    })
  }, [])

  return (
    <header>
    <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-8c8c4.appspot.com/o/logo.png?alt=media&token=13af45bf-3b26-4d3e-8a6a-1da9eb03e321" 
    alt=""
    className="logo" 
    />

    <div className="inputBox">
        <SearchRounded className="searchIcon"/>
        <input type="text" placeholder="Search"/>
    </div>

    <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
            <p>
                2 
            </p>
        </div>
    </div>

    <div className="profileContainer">
        <div className="imgBox">
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-8c8c4.appspot.com/o/profile.png?alt=media&token=f9c9048f-854f-48a0-ad1c-71e127e9b44d"
             alt=""
             className="profilePic"
            />
        </div>

        <h2 className="userName"> Nikita Kar</h2>
    </div>

    <div className="toggleMenu">
        <BarChart className="toggleIcon" />
    </div>
  </header>
) 
}

export default Header