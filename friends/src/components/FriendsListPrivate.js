import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsListForm from './FriendsListForm';

const FriendsListPrivate = (props) => {

    const [friendsList, setFriendsList] = useState({friends: []})

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                console.log("friends: ", response)
                setFriendsList({
                    friends: response.data
                })
            })
            .catch(error => {
                console.log("Error with GET request to fetch list of friends: ", error)
            })
    }


    //function to update the friendsList state after a new friend is added in the FriendsListForm
    const updateFriendsList = (updatedList) => {
        setFriendsList({
            friends: updatedList
        })
    }

    function getFriendsListLength() {
        const num = friendsList.friends.length
        return num;
    }

    return (
        <div className="FriendsList">
            <h1>Friends List</h1>
            <ul>
                {friendsList.friends.map(friend => {
                    return(
                        <li>{friend.name}</li>
                    )
                })}
            </ul>
            <FriendsListForm updateFriendsList={updateFriendsList} friendsList={friendsList}  getFriendsListLength={getFriendsListLength}/>
        </div>
    );
}

export default FriendsListPrivate