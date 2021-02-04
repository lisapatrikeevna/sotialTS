import React from 'react';
import cl from './users.module.css';
import userAvatar from '../../assets/img/images.jpg';//avatarchik.jpg
import {NavLink} from 'react-router-dom';
import {MapDispatchToPropsType, MapStateToPropsType} from './UsersWrap';
import {FollowUserApi} from "../../common/AsksApi";
import {onUnFollowTC, userItemType} from "../../redux/UsersReducer";
import {Pagination} from "../../common/pagination/Pagination";

type propsType = {
    user: userItemType
    //toggleFollowingIsProgress:(followingIsProgress:boolean,id:number)=>void
    followingIsProgress: number[]
    changeFollow: (id: number) => void
    changeUnFollow: (id: number) => void
}

export const User = (props: propsType) => {
    let u = props.user
    const changeFollow =()=>{
        props.changeFollow(u.id)
    }
    const changeUnFollow =()=>{
        props.changeUnFollow(u.id)
    }
    const followingIsProgress = () =>{
        props.followingIsProgress.some(id => id === u.id)
    }
    return (
            <div className={cl.userItems}>
                <span className={cl.avatarBlock}>
                    <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userAvatar} alt="icon-user"
                                             className={cl.avatar}/>
                                    </NavLink>
                                </div>
                    <div>
                                    {u.followed ?
                                        <button onClick={changeUnFollow}
                                                disabled={props.followingIsProgress.some(id => id === u.id)}>unFollow</button> :
                                        <button onClick={changeFollow}>follow</button>
                                    }
                                </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </div>

    )
}

