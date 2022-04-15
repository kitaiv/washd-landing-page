import s from '../assets/style/style.module.css'

const Button = ({text = '', styles = {}}) => {
    return <button className={s.btn} style={styles}>{text}</button>
}

export default Button;
