import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import AllPost from '../allPosts/AllPosts';
import AddPost from '../AddPost/AddPost';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'Я сейчас изучаю JS - React',
                    like: true,
                    fix: false,
                },
                {
                    id: 2,
                    text: 'Осталось 4 часа до дедлайна',
                    like: false,
                    fix: false,
                },
                {
                    id: 3,
                    text: 'Создаю приложение...',
                    like: false,
                    fix: false,
                },
            ],
            id: 4,
            term: ''
        }
    }

    onSearch = (str) => {
        this.setState({
            term: str
        })
    }

    arrSearch = (data, term) => {
        if (term === '') {
            return data
        } else {
            return (
                data.filter(item => {
                    const lowText = item.text.toLowerCase();
                    const lowTerm = term.toLowerCase();
                    return (lowText.indexOf(lowTerm) > -1);
                })           
            )   
        }
    }


    getId = () => {
        this.setState((state) => ({
            id: ++state.id,
        }))
        return this.state.id;
        
    }
    
    addPost = (newPost) => {
        this.setState((state) => {
            const newData = state.data.slice();
            newData.push(newPost)
            return {
                data: newData
            }
        })
    }


    deletePost = (postId) => {
        if (postId === null) {
            return
        }
        this.setState((state) => {
            const index = state.data.findIndex(item => item.id === postId)
            const beforeIndex = state.data.slice(0, index)
            const afterIndex = state.data.slice(index + 1);
            const newState = [...beforeIndex, ...afterIndex];
            return {
                data: newState
            }
        })
    }

    onLike = (id) => {
        this.setState((state) => {
            const index = state.data.findIndex(item => item.id === id);
            const oldElem = state.data[index];
            // console.log(oldElem.like);
            const newElem = {...state.data[index], like: !oldElem.like}
            // console.log(oldElem.like);
            const beforeIndex = state.data.slice(0, index)
            const afterIndex = state.data.slice(index + 1);
            const newState = [...beforeIndex, newElem, ...afterIndex];
            return ({
                data: newState
            }   
            )

        })
    }

    onFix = (id) => {
        this.setState((state) => {
            const index = state.data.findIndex(item => item.id === id);
            const oldElem = state.data[index];
            const newElem = {...oldElem, fix: !oldElem.fix};
            const before = state.data.slice(0, index);
            const after = state.data.slice(index + 1);
            const newState = [...before, newElem, ...after]
            // console.log(newState);
            return {
                data: newState
            }
        })
    }

    render() {
        const totalPosts = this.state.data.length;
        const likePosts = this.state.data.filter(item => item.like === true).length;
        const searchPosts = this.arrSearch(this.state.data, this.state.term);
        return (
            <div className="Twitter">
                <Header totalPosts={totalPosts} likePosts={likePosts}></Header>
                <Search onSearch={this.onSearch} term={this.state.term}></Search>
                <AllPost data={searchPosts} deletePost={this.deletePost} onlike={this.onLike} onfix={this.onFix}></AllPost>
                <AddPost add={this.addPost} getId={this.getId}></AddPost>
            </div>
        )
    }
}



