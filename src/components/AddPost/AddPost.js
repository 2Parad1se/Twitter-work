import React, {Component} from "react";
import './AddPost.css'


export default class AddPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    changeInput(e) {
        // console.log(e.target.value);
        // console.log(e);
        this.setState({
            inputValue: e.target.value,
        })
        
    }

    createNewPost() {
        this.setState({
            inputValue: '',
        })
        return ({
            id: this.props.getId(),
            text: this.state.inputValue,
            like: false,
            fix: false
        })  
    }

    postNewPost = () => {
        if (this.state.inputValue) {
            this.props.add(this.createNewPost())
        } else {
            return
        }
        
    }

    pressEnter = (e) => {
        if (this.state.inputValue) {
            if (e.code === 'Enter') {
                // console.log('!!!');
                this.props.add(this.createNewPost())
            }
        } else {
            return
        }

    }

    render() {
        return (
            <div className="AddPost">
            <input
                placeholder="Что хотите запостить"
                className="AddPost_input"
                value={this.state.inputValue}
                onChange={(e) => this.changeInput(e)}
                onKeyDown={(e) => this.pressEnter(e)}
            />
            <button 
                className="AddPost_button"
                onClick={() => this.postNewPost()}
            >Добавить
            </button>
        </div>
        )
    }
}