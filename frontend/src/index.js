import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class UserRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {size:'minified'};
    }
    render(){
        if (this.state.size === 'minified') {
            return <tr onClick={()=>this.setState({size:'expanded'})}>
                <td>{this.props.userId}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.userCredits}</td>
            </tr>
        }
        if (this.state.size === 'expanded') {
            return <tr onClick={()=>this.setState({size:'minified'})}>
                <td style={{height: 100}}>{this.props.userId}</td>
                <td style={{height: 100}}>{this.props.userName}</td>
                <td style={{height: 100}}>{this.props.userCredits}</td>
            </tr>
        }
    }
}

class Requests extends React.Component{
    componentDidMount() {
        fetch("https://swapi.co/api/toto/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render(){
     const rows = [{id:1,name:'toto', credits:420},{id:2, name:'tata', credits: 69}]
     return <table>
         <tr><th>id</th><th>name</th><th>credits</th></tr>
         {rows.map((user)=> <UserRow userId={user.id} userName={user.name} userCredits={user.credits} />)}
         <tr><td colSpan={3}>+</td></tr>
     </table>
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Requests />);
