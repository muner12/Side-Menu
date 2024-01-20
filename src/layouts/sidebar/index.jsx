import React, { useEffect, useState } from "react";
import {useMediaQuery} from "react-responsive";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import {RiBuilding3Line} from "react-icons/ri"
import {TbReportAnalytics} from "react-icons/tb"
import { NavLink, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";
function Sidebar() {

  let isTab=useMediaQuery({query:"(max-width:768px)"});
  const {pathname}=useLocation();
   const [isOpen, isSetOpen] = useState(isTab?false:true);

  const sidebar_animation =isTab ?{
    //mobile view
    open: {
      x:0,

      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      x:-250,
      width: "4rem",
      transition: {
        damping: 40,
      },
    },

  }:{
    //system view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };


const subMenuList=[
    {
        name:"build",
        icon:RiBuilding3Line,
        menus:["auth","app settings","storage","hosting"],
    },
    {
        name:"analytics",
        icon:TbReportAnalytics,
        menus:["dashboard","realtime","events",]
    }
]

useEffect(() => {
if(isTab){
  isSetOpen(false);
}else{
  isSetOpen(true);
}

},[isTab])
//path name change-> close sidebar
useEffect(()=>{
  isTab && isSetOpen(false);
},[pathname])
  return (
    <div>
    <div onClick={()=>isSetOpen(false)} className={`md:hidden  fixed inset-0 max-h-screen z-[998]
    bg-black/50  ${isOpen?'block':'hidden'}`}></div>
      <motion.div
        variants={sidebar_animation}
        initial={{x:isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl
        h-screen overflow-hidden z-[999] max-w-[16rem] w-[16rem]
        md:relative fixed"
      >
        {/*Logo*/}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <img
            src="https://img.freepik.com/free-vector/fire-colorful-gradient-design-illustration-logo_343694-3253.jpg?size=626&ext=jpg&uid=R116062868&ga=GA1.1.381521811.1689339242&semt=ais"
            alt="..."
            width={45}
          />
          <span className="text-xl whitespace-pre">Fireball</span>
        </div>

        {/*Menus*/}
        <div className="flex flex-col h-full">
          {/*first*/}
          <ul
            className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1
            font-medium overflow-x-hidden
            scrollbar-thin
            scrollbar-track-white scrollbar-thumb-slate-100
            h-[70%] md:h-[68%]
            "
          >
            <li>
              <NavLink to={"/"} className={"link"}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink to={"/authentication"} className={"link"}>
                <BsPerson size={23} className="min-w-max" />
                Authenthication
              </NavLink>
            </li>
            <li>
              <NavLink to={"/storage"} className={"link"}>
                <HiOutlineDatabase size={23} className="min-w-max" />
                Storage
              </NavLink>
            </li>

            {/**with subMenu */}

            {
                (isOpen || isTab) &&  <div className="border-y py-5 border-slate-300"> 
                <small className="pl-3 text-slate-500 inline-block mb-2">
                    Product Categories
                </small>
                {
                    subMenuList.map(menu=>(
                       <div key={menu.name} className="flex flex-col gap-1">
                       <SubMenu data={menu}/>
                       </div> 
                    )
                    )
                }
               
                </div>
            }
           
            <li>
            <NavLink to={"/setting"} className={"link"}>

               <IoSettingsOutline size={23} className="min-w-max"/>
              Setting
            </NavLink>
          </li>
          </ul>
          {/*second*/}
          { isOpen && <div className="flex-1 text-sm z-50 max-h-48 my-auth whitespace-pre w-full font-medium">
            <div className="flex border-y border-slate-300 p-4 items-center justify-between">
            <div>
                <p>Muner</p>
                <small>no cost 0$/month</small>
            </div>
            <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">upgrade</p>
            
            </div>
          </div>
        }
        </div>
        {/*controller Button*/}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0.2 }}
          onClick={() => isSetOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5
    cursor-pointer md:block hidden
    "
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>

      <div className="m-3 md:hidden cursor-pointer" onClick={()=>isSetOpen(true)}>

      <IoMdMenu size={25} />

      </div>
    </div>
  );
}

export default Sidebar;
