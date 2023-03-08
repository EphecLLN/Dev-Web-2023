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
                <td colSpan={3}>
                    <table>
                        <tr>
                            <td>{this.props.userId}</td>
                            <td>{this.props.userName}</td>
                            <td>{this.props.userCredits}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                insert text stuff here
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        }
    }
}

// class NewUser extends React.component {
//
// }

class Requests extends React.Component{
    constructor() {
        super();
        this.rows = [];
    }
    componentDidMount() {
        fetch("http://localhost:3001/api/user/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.rows=result;
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render(){
     return <table>
         <tr><th>id</th><th>name</th><th>credits</th></tr>
         {this.rows.map((user)=> <UserRow userId={user.id} userName={user.name} userCredits={user.lessonCredits} />)}
         <tr><td colSpan={3}>+</td></tr>
     </table>
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Requests />);
