import React from 'react'

export default function Header(props) {
    return (
        <section className='--header-wrapper'>
        <div className='--header'>
            <img src={props.logo} id='--logo'></img>
            <div className='--user-action-wrapper'>
            <i className="fa-solid fa-bag-shopping --icon-bag"></i>
            <i class="fa-solid fa-bars --icon-open"></i>
            </div>
        </div>
        </section>
    )
}