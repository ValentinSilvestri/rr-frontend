import React from 'react';

export default function Header() {
    return (
        <div style = {{ background: '#ff4000', display: 'flex', flexDirection: 'row', color: '#ffffff', margin: '0px', padding: '25px', height: '75px' }}>
            <h1 style = {{ float: 'left' }}>Boilers</h1>
            <a href='#' style = {{ position: 'absolute', right: '15px', color: '#ffffff', textDecoration: 'none'}}>Log out</a>
        </div>
    )
}
