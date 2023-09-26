import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
    return (
        <aside className="col-3 a_tbdr">
            <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/flight" >The Flight</Link>
                <a  href="#"></a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/city">The City</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/island">The Island</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" aria-disabled="true"  href="/food">The Food</Link>
            </li>
            </ul>
        </aside>
    )
}
