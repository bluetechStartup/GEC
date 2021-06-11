import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.scss'

function MenuPage() {
    return (
        <div className="menu">
            <div className="menu_left">
                <Link><h3>Courrier Entrant</h3></Link>
                <Link><h3>Courrier Sortant</h3></Link>
                <Link><h3>Statistique</h3></Link>
            </div>
            <div className="menu_right">
                <Link><h3>Rechercher Courrier</h3></Link>
                <Link><h3>Archive</h3></Link>
                <Link><h3>Parametre</h3></Link>
            </div>
        </div>
    )
}

export default MenuPage
