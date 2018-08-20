import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import TodoList from './todo_list';
import AddItem from './add_item';
import listData from '../data/todo';


class App extends Component {
    constructor(props){
        super(props);

        this.state={
            items: []
        };
    }

    componentDidMount(){
        this.getListData();
    }
    getListData(){
        this.setState({
            items: listData
        });
    }
    render(){
        console.log('app state: ', this.state);
        return(
            <div className='container'>
                <h1 className='center'>Todo list</h1>
                <AddItem/>
                <TodoList/>
            </div>
        );
    }
}
// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             items: []
//         };
//     }

//     // getListData(){
//     //     const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp)=> {
//     //         this.setState({
//     //             items: resp.data.todos
//     //         });
//     //     }).catch((err)=> {
//     //         console.log('There was an error: ', err.message);
//     //     });

//     // }
//     async getListData(){
//         const { api: { BASE_URL, API_KEY } } = config;

//         const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);
//         this.setState({
//             items: resp.data.todos
//         });
//     }
//     async addItem(item){
//         const {api: {BASE_URL, API_KEY}}= config;

//         try{
//             await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
//             this.getListData()
//         }catch(err){
//             console.log('something went wrong:', err.message);
//         }
//     }
//     render(){
//     return(
//     <div className = "container">
//         <Switch>
//             <Route exact path="/" render={(props) => {
//                 return <Home getList={this.getListData.bind(this)} add={this.addItem.bind(this)} list={this.state.items} {...props} />
//             }} />
//             <Route path='/item-details/:item_id' component={ItemDetails}/>
//             <Route component={NotFound}/>
//         </Switch>
//     </div>
//     );
// }
// }

export default App;
