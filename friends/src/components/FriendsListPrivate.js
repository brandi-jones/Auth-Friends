import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
        </div>
    );
}

export default FriendsListPrivate