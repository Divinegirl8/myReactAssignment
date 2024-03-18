import style from "./index.module.css"

const FilledButton2 = ({text,textColour,bgColor}) =>{
    return(
        <div>
            <button style={{color:textColour,backgroundColor: bgColor}} className={style.btn}>{text}</button>
        </div>
    )
}

export default FilledButton2