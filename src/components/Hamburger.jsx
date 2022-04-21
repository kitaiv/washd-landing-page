const Hamburger = ({isOpen}) => {
    return (
        <>
            <div className="hamburger">
                <div className="burger burger1"/>
                <div className="burger burger2"/>
            </div>
            <style jsx="true">{`
                .hamburger{
                    width: 2rem;
                    height: 1.5rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: black;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg) translate(0px, 3px)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'rotate(-45deg) translate(-10px, 5px)' : 'rotate(0)'}  ;
                }

                
            `}</style>
        </>
    )
}

export default Hamburger
