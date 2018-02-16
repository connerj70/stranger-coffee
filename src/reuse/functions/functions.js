import React from 'react';

var functions = {
    createStars: function(stars) {
        let starsToDisplay = [];
        let key = 1;
        for(var i=0; i < stars; i++) {
            starsToDisplay.push(<i style={{color: "#F4D35E"}} className="fas fa-star" key={key}></i>)
            key++
        }

        while(starsToDisplay.length < 5) {
            starsToDisplay.push(<i key={key} className="far fa-star" style={{color: "#EBEBD3"}}></i>)
            key++
        }
        return starsToDisplay;
    },
}

export default functions;