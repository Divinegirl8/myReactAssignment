import logo from "../../../assets/footerimg/Logo.svg"
import style from  "./index.module.css"
import ig from "../../../assets/footerimg/ig.svg"
import fb from "../../../assets/footerimg/fb.svg"
import twitter from "../../../assets/footerimg/twitter.svg"
import ytb from "../../../assets/footerimg/ytb.svg"
import {Link} from "react-router-dom";
import send from "../../../assets/footerimg/send.svg"
const Footer = () =>{
    return(
        <div className={style.mainCont}>


            <div>
                <img src={logo} alt={"nexcent logo"} style={{width: "78%", marginTop: "20px"}}/>
                <p style={{marginTop: "56px"}}>Copyright &copy; 2020 Nexcent ltd.<span
                    style={{display: "block", lineHeight: "50px"}}>All rights reserved</span></p>

                <div className={style.socialIcon}>
                    <Link to={""}> <img src={ig} alt={"instagram logo"}/></Link>
                    <Link to={""}> <img src={fb} alt={"facebook logo"}/></Link>
                    <Link to={""}> <img src={twitter} alt={"twitter logo"}/></Link>
                    <Link to={""}> <img src={ytb} alt={"youtube logo"}/></Link>
                </div>
            </div>

            <div className={style.secondCont} style={{display: "flex", flexDirection: "row", gap: "100px"}}>

                <div>
                    <h1>Company</h1>
                    <div style={{marginTop: "40px"}}>
                        <Link to={""} className={style.link}><p>About us</p></Link>
                        <Link to={""} className={style.link}><p>Blog</p></Link>
                        <Link to={""} className={style.link}><p>Contact us</p></Link>
                        <Link to={""} className={style.link}><p>Pricing</p></Link>
                        <Link to={""} className={style.link}><p>Testimonies</p></Link>

                    </div>
                </div>


                <div>
                    <h1>Support</h1>

                    <div style={{marginTop: "40px"}}>
                        <Link to={""} className={style.link}><p>Help centre</p></Link>
                        <Link to={""} className={style.link}><p>Terms of service</p></Link>
                        <Link to={""} className={style.link}><p>Legal</p></Link>
                        <Link to={""} className={style.link}><p>Privacy policy</p></Link>
                        <Link to={""} className={style.link}><p>Status</p></Link>

                    </div>

                </div>


                {/*<div>*/}
                {/*    <h1>Stay up to date</h1>*/}

                {/*    <div style={{display: "flex",flexDirection: "row", }}>*/}
                {/*    <input type={"text"} required={true} style={{marginTop:"20px",position:"relative",outline:"none"}} className={style.inputField} placeholder={"Your email address"}/>*/}
                {/*   <div style={{marginTop: "17px",backgroundColor:"white",width:"20px",height:"5px",padding:"20px",borderRadius: "8px",position:"absolute",marginLeft: '210px'}}>*/}
                {/*    <img src={send} alt={"send logo"}/></div></div>*/}
                {/*</div>*/}

                {/*</div>*/}


                <div>
                    <h1>Stay up to date</h1>

                    <div style={{display: "flex", flexDirection: "row",}}>
                        <input type={"text"} required={true}
                               style={{marginTop: "20px", position: "relative", outline: "none",overflow:"hidden"}}
                               className={style.inputField} placeholder={"Your email address"}/>
                        <Link to={""} style={{
                            marginTop: "17px",
                            backgroundColor: "transparent",
                            width: "20px",
                            height: "5px",
                            padding: "16px",
                            borderRadius: "8px",
                            position: "absolute",
                            marginLeft: '230px'
                        }}>

                            <img src={send} alt={"send logo"}/></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Footer