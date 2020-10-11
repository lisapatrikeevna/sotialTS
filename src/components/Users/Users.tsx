import React from 'react';
import cl from './users.module.css';
import userAvatar from '../../assets/img/images.jpg';//avatarchik.jpg
import {userItemType} from "../../redux/UsersReducer";
import { NavLink } from 'react-router-dom';

type propsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    // setUsers: (users: Array<userItemType>) => void
    users: Array<userItemType>
    pagesSize: number
    currentPage: number
    countUsers: number
    // setCurrentPage: (currentPage: number) => void
    // setTotalUsers: (totalCount: number) => void
    onPageChanged: (currentPage: number) => void
}
export const Users = (props: propsType) => {

    let countPages = Math.ceil(props.countUsers / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    return (
        <>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage ? cl.ollPage : cl.currentPage}
                        onClick={(e) => {props.onPageChanged(p) } }>-{p}</span>
                })}
            </div>
            <div className={cl.usersWrap}>
                {props.users.map(u => {
                    const changeFollow = () => {
                        props.follow(u.id)
                    }
                    const changeUnFollow = () => {
                        props.unfollow(u.id)
                    }
                    return (
                        <div key={u.id} className={cl.userItems}>
                             <span className={cl.avatarBlock}>
                                <div>
                                    <NavLink to={'/profile/'+u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userAvatar} alt="icon-user"
                                         className={cl.avatar}/>
                                    </NavLink>
                                </div>
                                 {/*<div><img src={u.photoUrl} alt="icon-user" className={cl.avatar}/></div>*/}
                                 <div>
                                    {u.followed ?
                                        <button onClick={changeUnFollow}>unfollow</button> :
                                        <button onClick={changeFollow}>follow</button>
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
        </>
    )
}

