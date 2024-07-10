import React from 'react'
import Logo from "../assets/TestLogo.png"
import home from '../assets/home.png'
import group from '../assets/group.png'
import calendar from '../assets/calendar.png'
import chat from '../assets/chat.png'
import credit from '../assets/credit.png'
import senior from '../assets/senior.png'
import settings from '../assets/settings.png'
import './Navbar.css'
import Dots from "./Dots"



const Navbar = () => {
  return (
    <>
    <div className='content '>
        <div className='logo'>
            <img src={Logo} alt="" width={100} height={50} />
        </div>
    
            <div>
                <div className="menu  ">
                    <div className="menu-list">
                        <img
                        src={home}
                        alt={""}
                        height={20}
                        width={20} />
                        <span className='item'>Overview</span>
                    </div>
                    <div className="menu-list patient">
                        <img
                        src={group}
                        alt={""}
                        height={20}
                        width={20} />
                        <span className='item'>Patients</span>
                    </div>
                    <div className=" menu-list">
                        < img
                        src= {calendar}
                        alt={""}
                        height={20}
                        width={20}/>
                        <span className='item'>Schedule</span>
                    </div>
                    <div className=" menu-list">
                        <img
                        src={chat}
                        alt={""}
                        height={20}
                        width={20}/>
                        <span className='item'>Message</span>
                    </div>
                    <div className="menu-list">
                        <img
                        src={credit}
                        alt={""}
                        height={20}
                        width={20} />
                        <span className='item'>Transactions</span>
                    </div>
                </div>
            </div>
            <div className='end'>
                <div className="doctor">
                    <div className="person">
                        <img src={senior} alt={""} width={40} height={40} className=" "></img>
                        <div className='profile'>
                            <span className="doctor-name ">Dr Jose Simmons</span> <br/>
                            <span className='title'>General practitioner</span>
                        </div>
                    </div>
                    <div className="line "></div>
                    <div className='settings'>
                        < img src={settings} alt={""} width={25} height={25}/>
                    </div>
                    <Dots />
                </div>
            </div>
    </div>

    </>
  )
}

export default Navbar