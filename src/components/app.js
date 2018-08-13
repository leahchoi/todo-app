import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import TodoList from './todo_list';
import ItemDetails from './item_details';
import NotFound from './404';
import AddItem from './add_item';
import Home from './home';
import axios from 'axios';
import config from '../config';

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
        const { api: { BASE_URL, API_KEY } } = config;

        const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);
        this.setState({
            items: resp.data.todos
        });
    }

    async deleteItem(id){
        const {BASE_URL, API_KEY} = config.api;

        try {
            const resp = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
            console.log('delete resp: ', resp)
        }catch(err){
            console.log('delete error: ', err.message)
        }
    }
    async addItem(item){
        const {api: {BASE_URL, API_KEY}}= config;

        try{
            await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
            this.getListData()
        }catch(err){
            console.log('something went wrong:', err.message);
        }
    }
    render(){
    return(
    <div className = "container">
        <Switch>
            <Route 
            exact 
            path="/" 
            render={(props) => {
                return <Home getList={this.getListData.bind(this)} add={this.addItem.bind(this)} list={this.state.items} {...props} />
            }} />
            <Route 
            path='/item-details/:item_id' 
            render={routeProps => {
                return <ItemDetails delete ={this.deleteItem.bind(this)} {...routeProps}/>
            }}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
    );
}
}

export default App;
