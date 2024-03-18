import style from "./index.module.css"

const GhostButton = ({text,txtColor,bgColor}) =>{
    return(
        <div>
            <button style={{color:txtColor, backgroundColor: bgColor}} className={style.gstButton}>{text}</button>
        </div>
    )
}

export default GhostButton