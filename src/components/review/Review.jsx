import React from "react";
import './review.scss';

function StarRating({max, current}) {
    const getRating = () => {
        return (current / max) * 100;
    };

    return (
        <div className="star-rating">
            {[...Array(max)].map((_, i) => (
                <span key={i} className='circle'>&#9675;</span>
            ))}
            <div className="star-rating__current" style={{width: getRating() + '%'}}>
                {[...Array(max)].map((_, i) => (
                    <span key={i} className='circle'>&#9679;</span>
                ))}
            </div>
        </div>
    );
}


export default function Review({rating}) {

    return (
        <div className='review'>

            <StarRating max={5} current={rating}/>

        </div>
    )
}