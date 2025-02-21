import React from "react";
import classes from './Header.module.css'
import {SlLocationPin} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <section>
      <section>
        <div className={classes.header_container}>
          {/* {logo} */}
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
          </div>
          {/* {delivery} */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
          </div>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        {/* {search section} */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          <BsSearch size={25} />
        </div>
        {/* {other section} */}
        {/* {right side link} */}
        <div>
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2413061151/display_1500/stock-photo-ethiopia-flag-on-a-wooden-surface-banner-of-the-grunge-ethiopia-flag-2413061151.jpg"
                alt="ethiopian flag"
              />
              <section>
                <option value="">EN</option>
              </section>
            </a>
          </div>
          {/* {3 components} */}
          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          {/* {orders} */}
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* {carts } */}
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader/>
    </section>
  );
}

export default Header;
