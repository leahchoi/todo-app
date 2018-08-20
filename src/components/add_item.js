import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleInputChange=(e)=>{
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleAddItem = (e)=> {
        e.preventDefault();
        console.log('values: ', this.state);
    }
    render(){
        return (
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className='col s6'>
                        <label>Title</label>
                        <input type="text" name='title' onChange={this.handleInputChange} value={this.state.title} />
                    </div>
                    <div className='col s6'>
                        <label>Details</label>
                        <input type="text" name='details' onChange={this.handleInputChange} value = {this.state.details}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 right-align">
                        <button className='btn purple'>Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;