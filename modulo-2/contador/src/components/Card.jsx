function Card ({ title, subtitle, children}){
    return (
        <div>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <div>{children}</div>
        </div>
    )    
}

export default Card;