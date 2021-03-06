import { FaBars, FaMedapps } from "react-icons/fa"
import { VscEdit } from "react-icons/vsc"
import {NavLink} from 'react-router-dom'
import "./Sidebar.scss"
import {useState} from 'react'


const Sidebar = ({children} : {children:any})=> {

    const [isOpen, setIsOpen] = useState(false)
    const toggle =()=> setIsOpen (!isOpen);

    const menuItem=[
        {
            path: "/designs",
            name: "Designs",
            icon: <FaMedapps/>
        },
        {
            path: "/setouts",
            name: "Setouts",
            icon: <VscEdit/>
        },
    ]

    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"></h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={(navData) => (navData.isActive ? 'link active' : 'link')}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
           </div>
           <main>{children}</main>
        </div>
    )
} 

export default Sidebar