import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
        {
            /*Sidebar*/
        }
        <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >Portfolio</motion.span>
        <div className="social">
            <a target="_blank" href="https://www.facebook.com/aditya.dhonde.545/"><img src="/facebook.png" alt="" /></a>
            <a target="_blank" href="https://www.instagram.com/adi_dhonde/"><img src="/instagram.png" alt="" /></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCcljnI_sWYtRcwFCOHo4ZBQ"><img src="/youtube.png" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/aditya-dhonde-15a915280/"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
