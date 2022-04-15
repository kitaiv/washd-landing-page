const Input = ({title, placeholder = null, type = 'text'}) => {
    return(
        <div>
            <h5>{title}</h5>
            <input type={type} placeholder={placeholder} required/>
        </div>
    )
}

export default Input
