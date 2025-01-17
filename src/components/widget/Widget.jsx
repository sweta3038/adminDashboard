import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const Widget = ({type}) => {
    let data;
    //temp
    const amount=500;
    const diff=30;
    switch(type){
        case "student":
            data={
                title:"STUDENT",
                isMoney:false,
                link:"See Details",
                icon:<PersonOutlineOutlinedIcon className='icon'  style={{ color: "crimson", backgroundColor: "#ff000033" }}/>
            }
            break; 
            case "courses":
            data={
                title:"COURSES",
                isMoney:false,
                link:"View all courses",
                icon:<LibraryBooksOutlinedIcon className='icon'  style={{ color: "goldenrod", backgroundColor: "#daa52033" }}/>
            }
            break;
            case "earnings":
            data={
                title:"TOTAL EARNINGS",
                isMoney:true,
                link:"View net earnings",
                icon:<MonetizationOnOutlinedIcon className='icon' style={{ color: "green", backgroundColor: "#00800033" }}/>
            }
            break; 
            case "balance":
            data={
                title:"MY BALANCE",
                isMoney:true,
                link:"Withdraw money",
                icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "purple", backgroundColor: "#80008033" }}/>
            }
            break;
            default:
                break;
    }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
