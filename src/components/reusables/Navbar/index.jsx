import logo from "../../../assets/navbarImg/logo.svg";
import style from "./index.module.css"
import FilledButton from "../../../features/FilledButton";
import GhostButton from "../../../features/GhostButton";
import {Link} from "react-router-dom";


const Navbar = () => {
    return(

         <div className={style.mainCont}>
          <div className={style.logoCont}><img src={logo} alt={"nextcent logo"} style={{marginTop: "10px",marginLeft: "87px"}}/></div>
             <div className={style.info}>
                 <Link to={""} className={style.link}><p>Home</p></Link>
                 <Link to={""} className={style.link}><p>Service</p></Link>
                 <Link to={""} className={style.link}><p>Feature</p></Link>
                 <Link to={""} className={style.link}><p>Product</p></Link>
                 <Link to={""} className={style.link}><p>Testimonial</p></Link>
                 <Link to={""} className={style.link}><p>FAQ</p></Link>
             </div>

             <div className={style.btn}>
                 <Link to={""} className={style.link}> <GhostButton text={"Login"} bgColor={"#F5F7FA"} txtColor={"#4CAF4F"}/></Link>
                 <Link to={""} className={style.link}><FilledButton text={"Sign up"} bgColor={"#4CAF4F"} txtColor={"#FFF"}/></Link>

             </div>

         </div>

    )
}

export default Navbar