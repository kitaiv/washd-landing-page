import s from '../assets/style/style.module.css'

const Card = ({icon, title = '', text = ''}) => {
    return (
        <div className={s.card}>
            <img src={icon} alt="icon"/>
            <h3>{title}</h3>
            <h4>{text}</h4>
        </div>
    )
}

export default Card
