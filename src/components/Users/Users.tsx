import React from 'react';
import cl from './users.module.css';
import userAvatar from '../../assets/img/images.jpg';//avatarchik.jpg
import { NavLink } from 'react-router-dom';
import {MapDispatchToPropsType, MapStateToPropsType} from './UsersWrap';
import {FollowUserApi} from "../../common/AsksApi";
import {onUnFollowTC, userItemType} from "../../redux/UsersReducer";

type propsType = {
    users: Array<userItemType>
    pagesSize: number
    currentPage: number
    countUsers: number
    onPageChanged: (currentPage: number) => void
    //toggleFollowingIsProgress:(followingIsProgress:boolean,id:number)=>void
    followingIsProgress: number[]
    onFollowTC:(id:number)=>void
    onUnFollowTC:(id:number)=>void
}
//type propsType = MapStateToPropsType & MapDispatchToPropsType &UsersPropsTYpe
// type UsersPropsTYpe={
//     onPageChanged: (currentPage: number) => void
// }
export const Users = (props: propsType) => {

    let countPages = Math.ceil(props.countUsers / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    return (
        <>

            <div className={cl.usersWrap}>
                {props.users.map(u => {
                    const changeFollow = () => {
                        // props.toggleFollowingIsProgress(true,u.id)
                        // FollowUserApi.follow(u.id)
                        //     .then(response => {
                        //        if(response.data.resultCode===0){
                        //            props.follow(u.id)
                        //        }
                        //         props.toggleFollowingIsProgress(false,u.id)
                        //     });
                        props.onFollowTC(u.id)
                    }
                    const changeUnFollow = () => {
                        // props.toggleFollowingIsProgress(true,u.id)
                        // FollowUserApi.unfollow(u.id)
                        //     .then(response => {
                        //         if(response.data.resultCode===0){
                        //             props.unfollow(u.id)
                        //         }
                        //         props.toggleFollowingIsProgress(false,u.id)
                        //     });
                        props.onUnFollowTC(u.id)
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
                                        <button onClick={changeUnFollow} disabled={props.followingIsProgress.some(id=>id=== u.id) }>unfollow</button> :
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
            <div>
                {pages.map(p => {return <span className={p===props.currentPage ?  cl.currentPage : cl.ollPage}
                                 onClick={(e) => {props.onPageChanged(p) } }>
                        -{p}</span>
                })}
            </div>
        </>
    )
}

