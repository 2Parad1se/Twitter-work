import React from "react";
import './Search.css';

// export default class Search extends Component {


const Search = (props) => {
    
    return (
        <input 
            className="search_input" 
            placeholder="Поиск по записям"
            onChange={(e) => {props.onSearch(e.target.value)}}
            value={props.value}>
        </input>
    )
}

export default Search;

