const Button = (prop) => {
    return (
     <button style={{backgroundColor: prop.color}} 
    className='btn'>
        {prop.text}
    </button>

    )
}

export default Button