/**
 * Nav Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav id="bottom-nav">
                <ul>
                    <li className="selected"><a href="#">info</a></li>
                    <li><a href="#">work</a></li>
                    <li><a href="#">resume</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;