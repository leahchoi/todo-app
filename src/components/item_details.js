import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import config from '../config';

class ItemDetails extends Component {
    state = {
        itemDetails: {}
    }
        async componentDidMount(){
        //const item_id = 
        const {BASE_URL, API_KEY} = config.api;
            const { item_id } = this.props.match.params;
            console.log('item id: ', item_id)
        const resp= await axios.get(`${BASE_URL}/todos/${item_id + API_KEY}`);
        this.setState({
            itemDetails: resp.data.todo
        })
        console.log('Item details resp: ', resp);
    }

    async handleDelete(){
        console.log('delete item: ', this.state.itemDetails._id);

        await this.props.delete(this.state.itemDetails._id);

        this.props.history.push('/');
    }

    async handleToggleComplete(){
        const todoItem = await this.props.toggleComplete(this.state.itemDetails._id);
        console.log('item details toggle complete resp:', todoItem)

        this.setState({
            itemDetails: todoItem
        })
    }

    render(){
        const {itemDetails} = this.state;
        console.log('item details: ', itemDetails)

        if(!itemDetails){
            return <h1 className='grey-text'>Loading...</h1>;
        }

        return (
            <div>
                <h1 className='center'>Item Details</h1>
                <div className='row'>
                    <div className="col s12 right-align">
                        <Link to='/' className= 'btn purple darken-2'>Back to List</Link>
                    </div>
                </div>
                <h4><em>Title: </em>{itemDetails.title}</h4>
                <h4><em>Details: </em>{itemDetails.details}</h4>
                <h5>
                    {
                        itemDetails.complete
                            ? 'item Complete'
                            : 'item is not yet complete'
                    }
                </h5>
                <div className="row">
                    <div className="col s6 center">
                            {
                                itemDetails.complete
                            ? <button onClick={this.handleToggleComplete.bind(this)} className="btn blue darken-2">Completed</button>
                        : <button onClick={this.handleToggleComplete.bind(this)} className="btn red darken-2">Incomplete</button>
                            }
                    </div>
                    <div className="col s6 center">
                        <button onClick={this.handleDelete.bind(this)} className="btn red darken-2">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetails;
