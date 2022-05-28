import React from 'react';
import Navigation from './Navigation'
import { useDispatch } from 'react-redux';
import { HOME } from '../page-utils/actions';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <header>
            <div className="gradient">
                <div className="upper-header"></div>

                <div id="intro">

                    <div>
                        <a className="name flex" href="#" onClick={() =>
                            dispatch({
                                type: HOME
                            })
                        }>Jimmy Reilly</a>
                    </div>

                </div>
                <Navigation />
            </div>
        </header>
    )
}