import React from 'react'

const Head = () => {
    return (
        <div>
             <nav className="nav-extended black" style={{height:"125px"}}>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">
                    <i className="large material-icons" style={{fontSize:"75px",marginTop:"15px",marginRight:"0"}}>shopping_basket</i>
                    </a>
                </div>
                <div className="nav-content">
                    <p className="center">Hello, Basket!</p>
                </div>
            </nav>
        </div>
    )
}

export default Head
