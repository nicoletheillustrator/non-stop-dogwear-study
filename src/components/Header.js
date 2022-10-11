import React, {useState, useRef} from 'react'
import NavMenu from './navigationMenu'

export default function Header(props) {
    const btnRef = useRef()
    const navRef = useRef()


    let barIcon = "fa-solid fa-bars --icon-open"
    let closeIcon = "fa-solid fa-xmark --icon-open"

    const [iconState, setIconState] = useState(barIcon)

    if (iconState === closeIcon) {
        document.body.classList.add("lock-scroll")
    }
    else {
        document.body.classList.remove("lock-scroll")
    }

     function clickHandler() {
        navRef.current.classList.toggle('open-nav')
        
        setIconState ((firstIcon) =>{
           return firstIcon === barIcon ? closeIcon : barIcon;

        })
    
       }

       
    return (
        <section className='--header-wrapper'>
        <div className='--header'>
            <img src={props.logo} id='--logo' alt='img'></img>
            <div className='--user-action-wrapper'>
            <i className="fa-solid fa-bag-shopping --icon-bag"></i>
            <i className={iconState} ref={btnRef} onClick={clickHandler}></i>
            </div>
        </div>
        <NavMenu ref={navRef}/>
        </section>
    )
}
