import React, { useContext } from "react";
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import {SlLocationPin} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from '../../Utility/firebase';

const Header =() => {

  const [{basket, user},dispatch] = useContext(DataContext)
  const totalItem =basket?.reduce((amount,item)=>{return item.amount +amount},0)

  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        {/* {logo} */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
          {/* {delivery} */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* {search section} */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
        </div>
        {/* {other section} */}
        {/* {right side link} */}

        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2413061151/display_1500/stock-photo-ethiopia-flag-on-a-wooden-surface-banner-of-the-grunge-ethiopia-flag-2413061151.jpg"
              alt="ethiopian flag"
            />

            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          {/* {3 components} */}
          <Link to="/auth">
            <div>
                {user?(
                  <>
                  <p>Hello{user?.email?.split("@")[0]}</p>
                <span onClick={()=>auth.signOut()}> sign Out </span>
                </>
              ):(
                <>
                 <p>Sign In</p>
              <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
}

export default Header;
