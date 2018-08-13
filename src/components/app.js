import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import TodoList from './todo_list';
import AddItem from './add_item';
import Home from './home';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=lfz_data_soora'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    // getListData(){
    //     const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp)=> {
    //         this.setState({
    //             items: resp.data.todos
    //         });
    //     }).catch((err)=> {
    //         console.log('There was an error: ', err.message);
    //     });

    // }
    async getListData(){
        const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);
        this.setState({
            items: resp.data.todos
        });
    }
    async addItem(item){
        const resp = await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        this.getListData()
    }
    render(){
    return(
    <div className = "container">
        <Route exact path="/" render={(props)=> {
            return <Home getList={this.getListData.bind(this)} add={this.addItem.bind(this)} list = {this.state.items} {...props}/>
        }}/>
    </div>
    );
}
}

export default App;
