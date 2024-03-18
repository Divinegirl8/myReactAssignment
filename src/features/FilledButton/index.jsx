import style from "./index.module.css"

const FilledButton = ({text,bgColor,txtColor}) =>{
    return(
        <div>
        <button style={{backgroundColor: bgColor,color:txtColor}} className={style.filledBtn}>{text}</button></div>
    )
}

export default FilledButton