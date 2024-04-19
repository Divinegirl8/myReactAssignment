import style from "./index.module.css"
import pix from "../../../assets/bodyImg/rafiki.svg"
import FilledButton2 from "../../FilledButton2";
import img1 from "../../../assets/bodyImg/pplgreen.svg"
import img2 from "../../../assets/bodyImg/hand.png"
import img3 from "../../../assets/bodyImg/handglow.svg"
import img4 from "../../../assets/bodyImg/wallet.svg"
import img5 from  "../../../assets/bodyImg/pana.svg"


const Body = () =>{
    return (
        <div>

            <div className={style.sec}>
            <img src={pix} alt={""}/>

            <div style={{marginLeft: "80px"}}>
                <h2>The unseen of spending three <span style={{display: "block"}}>years at Pixelgrade</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                    vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <FilledButton2 text={"Learn More"} textColour={"#FFF"} bgColor={"#4CAF4F"}/>
            </div>
            </div>

            <div className={style.thirdcont}>

                <div className={style.reInv}>
                    <div style={{marginBottom:"120px",marginTop:"50px"}}>
                        <h2 className={style.headTwo} style={{color:"#4D4D4D"}}>Helping a local <span style={{display:"block", color:"#4CAF4F"}}>business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>

                    <div className={style.pCont}>

                        {/*up div starts */}

                        <div style={{marginLeft:"-10px"}}>

                            <div>
                            <div className={style.im}>
                                <img src={img1} alt={""}/>
                                <div>
                                    <h3>2,245,341</h3>
                                    <p>Members</p>
                                </div>
                            </div>

                            <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
                                <img src={img3} alt={""}/>
                                <div>
                                    <h3>828,867</h3>
                                    <p>Event Bookings</p>
                                </div>
                            </div>

                        </div>
                        </div>

                        {/*down div starts*/}
                        <div className={style.dwn}>

                            <div style={{display: "flex", flexDirection: "row", gap: "20px",marginRight:"120px"}}>
                                <img src={img2} alt={""} width={"32%"} height={"32%"} style={{marginTop: "50px"}}/>
                                <div>
                                    <h3>46,328</h3>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
                                <img src={img4} alt={""}/>
                                <div>
                                    <h3>1,926,436</h3>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>

                        {/* down div ends */}

                    </div>
                </div>
            </div>


            <div style={{marginLeft:"300px"}}>
                <div className={style.womanCont}>
                    <img src={img5} alt={""}/>
                    <div>
                        <h2>How to design your site footer like <span style={{display:"block"}}>we did</span> </h2>
                        <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                      <div style={{marginTop:"30px"}}>
                          <FilledButton2 text={"Learn More"} textColour={"#FFF"} bgColor={"#4CAF4F"}/>
                      </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Body