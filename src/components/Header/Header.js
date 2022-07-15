import React from "react";
import './Header.css';

const Header = (props) => {
    
    function ending(n) {
        if (n >=5 && n < 21) {
            return (`${n} постов`)
        } else if (n % 10 === 1) {
            return (`${n} пост`)
        } else if (n % 10 === 2 || n % 10 === 3 || n % 10 === 4) {
            return (`${n} поста`)
        } else {
            return (`${n} постов`)
        }
    }

    return(
        <div className="Header">
            <div>My App</div>
            <div>{ending(props.totalPosts)}, из них {props.likePosts} понравились</div>
        </div>
    )
}

export default Header;