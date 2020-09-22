import React, {useCallback, useEffect} from 'react';
import cl from './users.module.css';
import axios from 'axios';
import userAvatar from '../../assets/img/images.jpg';//avatarchik.jpg
import {userItemType, usersInitialStateType} from "../../redux/UsersReducer";


type propsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userItemType>) => void
    users: Array<userItemType>
}
type AxiosGetType = {
    items: Array<userItemType>
    totalCount: number
    error: string
}

class Users extends React.Component<propsType>{
    // constructor(props:propsType) {
    //     super(props);
    //     if (props.users.length === 0) {
    //         axios.get<AxiosGetType>(`https://social-network.samuraijs.com/api/1.0/users`)
    //             .then(response => {
    //                 props.setUsers(response.data.items)
    //             });
    //     }
    // }
    componentDidMount() {
            axios.get<AxiosGetType>(`https://social-network.samuraijs.com/api/1.0/users`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                });

    }

    render() {
        return (
            <div className={cl.usersWrap}>
                {this.props.users.map(u => {
                    const changeFollow = () => {
                        this.props.follow(u.id)
                    }
                    const changeUnFollow = () => {
                        this.props.unfollow(u.id)
                    }
                    return (
                        <div key={u.id} className={cl.userItems}>
                 <span className={cl.avatarBlock}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} alt="icon-user"
                             className={cl.avatar}/>
                    </div>
                     {/*<div><img src={u.photoUrl} alt="icon-user" className={cl.avatar}/></div>*/}
                     <div>
                        {u.followed ?
                            <button onClick={changeFollow}>follow</button> :
                            <button onClick={changeUnFollow}>unfollow</button>
                        }
                    </div>
                 </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"city"}</div>
                        <div>{"country"}</div>
                    </span>
                                {/* <div><RegUser/></div> */}
                </span>
            </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Users;