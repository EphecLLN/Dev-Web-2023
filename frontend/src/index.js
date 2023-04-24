import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

// class RiderProfile extends React.Component {
//     render(){
//         return <div>
//             <img className="profile-pic" src="https://d1cjc45f8abyu4.cloudfront.net/test1.png"/>
//             <p>rider name</p>
//         </div>
//     }
// }
//
// class CurrentState extends React.Component {
//     render(){
//         return <div>
//             <p>Nombre de credit de cours: <span>69</span></p>
//             <p>Nombre de cours reserver: <span>69</span></p>
//         </div>
//     }
// }
//
// class Operation extends React.Component {
//     render(){
//         return <form onSubmit="() => return false;">
//             <label for="op">Operation:</label>
//             <input id="op" type="number"/><br/>
//             <label for="comment">Commentaire:</label><br/>
//             <input id="comment" type="textarea"/>
//             {/*<input type="button">Soumettre</input>*/}
//         </form>
//     }
// }
// class Log extends React.Component {
//     render(){
//         return <textarea></textarea>
//     }
// }
//
// class Structure extends React.Component {
//     render(){
//         return <div class="full"><div className="top-container">
//             <div className="top-left">
//                 <RiderProfile/>
//             </div>
//             <div className="top-right">
//                 <CurrentState/>
//                 <Operation/>
//             </div>
//         </div>
//             <hr/>
//         <div className="bot-container">
//             <Log/>
//         </div></div>
//     }
// }

const Structure = () => {
    const [users, setUsers] =useState([])

    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(()=>{
        fetchUserData()
    },[])

    return (<div> {users.map(user => (
        <li key={user.id}>{user.name}</li>
    ))} </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Structure />);
