import React from 'react';
import Images from './Images.jsx'
import Heading from './Heading.jsx'


function Cards(props)
{
    return(
        <>
            <div className="cards">
                <div className="card">
                    <div className="card_info">
                        <Images imgsrc={props.imgsrc}/>
                        <span className="card_category">{props.title}</span>
                        <Heading sname={props.sname}/>
                        <a href={props.slink} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;