import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsListForm = (props) => {

    const [newFriend, setNewFriend] = useState({
        id: 0,
        name: '',
        age: '',
        email: ''
    })


    const postFriend = event => {
        event.preventDefault();

        //make a POST request and send newFriend object to the api
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(response => {
            console.log("friendsListForm post: ", response)

            //call function from FriendsListPrivate component, that will change the data to include new friend to render client-side
            props.updateFriendsList(response.data)
            
            //reset friend form to be empty values
            setNewFriend({
                id: 0,
                name: '',
                age: '', 
                email: ''
            })
        })
        .catch(error => {
            console.log(error)
        })
    }


    const handleChanges = event => {
        setNewFriend({
            ...newFriend,
            id: props.getFriendsListLength()+1,
            [event.target.name]: event.target.value
           
        })
    }


    return (
        <div className="NewFriendForm">
            <h2>Add a new friend!</h2>
            
            <form onSubmit={postFriend}>
                <label htmlFor="name">Name: </label>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChanges}
                />

                <label htmlFor="age">Age: </label>
                <input
                    type='text'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChanges}
                />

                <label htmlFor="email">Email: </label>
                <input
                    type='text'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChanges}
                />

                <button>Add</button>

            </form>
            {console.log(props.getFriendsListLength())}
        </div>
    );
}

export default FriendsListForm