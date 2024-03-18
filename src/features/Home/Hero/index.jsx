import style from  "./index.module.css"
import hero from "../../../assets/heroimg/heroimg.svg"
import FilledButton2 from "../../FilledButton2";
import {Link} from "react-router-dom";
import firstIcon from  "../../../assets/heroimg/first.svg";
import secondIcon from "../../../assets/heroimg/second.svg";
import thirdIcon from "../../../assets/heroimg/third.svg";
import fourthIcon from "../../../assets/heroimg/fourth.svg";
import fifthIcon from "../../../assets/heroimg/fifth.svg";
import sixthIcon from  "../../../assets/heroimg/sixth.svg";
import seventhIcon from "../../../assets/heroimg/seventh.svg"
import {Content} from "./data";


const Hero = () =>{
    return(
        <div className={style.parent} >



            <div className={style.mainCont} >

                <div style={{display:"flex",flexDirection:"column" ,marginTop:"290px" ,marginBottom:"290px"}}>
                    <p className={style.lesson} >Lessons and insights <span style={{display: "block",color:"#4CAF4F",marginTop:"7px"}}>from 8 years</span></p>
                    <p className={style.grow}>Where to grow your business as a photographer: site or social media?</p>
                   <Link to={""} style={{marginTop: "20px"}}>
                       <FilledButton2 text={"Register"} textColour={"#FFF"} bgColor={"#4CAF4F"}/>
                   </Link>
                </div>
                <img src={hero} alt={"hero"} style={{marginTop:"170px",marginBottom:"120px"}}/>



            </div>

            <div className={style.secondCont}>
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>

                <div style={{marginRight:"120px",marginTop:"30px"}}>
                    <img src={firstIcon} alt={"first icon"}/>
                    <img src={secondIcon} alt={"second icon"}/>
                    <img src={thirdIcon} alt={"third icon"}/>
                    <img src={fourthIcon} alt={"fourth icon"}/>
                    <img src={fifthIcon} alt={"fifth icon"}/>
                    <img src={sixthIcon} alt={"sixth icon"}/>
                    <img src={seventhIcon} alt={'seventh icon'}/>
                </div>
            </div>

            <div className={style.thirdCont}>
                <div className={style.writing}>
                    <h1>Manage your entire community <span style={{display:"block",textAlign: "center"}}>in a single system</span></h1>
                    <p>Who is Nextcent suitable for?</p>
                </div>

                <div style={{marginLeft:"340px"}}>

                <div  className={style.mapping}>

                {
                    Content.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div>
                                    <img src={item.image} alt={""}/>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            </div>



        </div>
    )
}
export default Hero