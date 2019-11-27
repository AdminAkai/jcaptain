import React, { Component } from 'react'
import './dropdown.css'

export default class DropDown extends Component {

    render() {
        return(
            <div className="container">
                <div className="nav">
                    <div className="dropdown">
                        <ul>
                            <li>
                                <ul className="drop-menu menu-7">
                                    <li>Test</li>
                                    <li>Test2</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        )
    }
} 

