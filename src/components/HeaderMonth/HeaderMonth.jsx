//    R E A C T
import React from 'react';
import { Link } from 'react-router-dom';

//    S A S S 
import "./HeaderMonth.scss";


const HeaderMonth = props => {
    return (
        <div>
            <header className="month-header">
                <div className="calendar-nav">
                    <div className="row">
                        <Link to={"/" + props.prevMonth.slug}>
                            <i className="fas fa-chevron-circle-left" />
                        </Link>
                    </div>
                    <div className="row">
                        <p className="current-date">{props.curMonth.name}</p>
                    </div>
                    <div className="row">
                        <Link to={"/" + props.nextMonth.slug}>
                            <i className="fas fa-chevron-circle-right" />
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderMonth;