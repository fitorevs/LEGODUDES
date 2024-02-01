import {useState} from "react"
import Cart from "./Cart"

export default function Header({amount, cart, setCart}) {
    const [toggle, setToggle] = useState(false) //Setter handlevognen til å være skjult ved oppstart
    
    const handleClick = () => { //Funksjon som endrer toggle til det motsatte av det den er (true/false)
        setToggle(!toggle)
    }

    return(
      <header>
            <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
            <button id="carttoggle" onClick={(handleClick)}>
                <span id="cartcount">{amount}</span>
                <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <Cart toggle={toggle} cart={cart} setCart={setCart}/>
        </header>
    )
  }
