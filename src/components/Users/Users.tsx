import React from 'react';
import cl from './users.module.css';
import userAvatar from '../../assets/img/images.jpg';//avatarchik.jpg
import { NavLink } from 'react-router-dom';
import {MapDispatchToPropsType, MapStateToPropsType} from './UsersWrap';
import {FollowUserApi} from "../../common/AsksApi";
import {onUnFollowTC, userItemType} from "../../redux/UsersReducer";
import {Pagination} from "../../common/pagination/Pagination";
import {User} from "./User";

type propsType = {
    users: Array<userItemType>
    pagesSize: number
    currentPage: number
    countUsers: number
    onPageChanged: (currentPage: number) => void
    followingIsProgress: number[]
    onFollowTC:(id:number)=>void
    onUnFollowTC:(id:number)=>void
}

export const Users = (props: propsType) => {
    return (
        <>
            <div className={cl.usersWrap}>
                {props.users.map( u => <User key={u.id} user={u} changeFollow={props.onFollowTC} changeUnFollow={onUnFollowTC}
                          followingIsProgress={props.followingIsProgress}/> )
                }
            </div>
            <Pagination currentPage={props.currentPage} countItems={props.countUsers} onPageChanged={props.onPageChanged}
            pagesSize={props.pagesSize}/>
        </>
    )
}

