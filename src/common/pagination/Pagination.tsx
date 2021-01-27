import React, {useState} from "react";
import cl from "./pagination.module.css";
import style from  '../../components/TemplateSettings/ThemeChange.module.css';
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/ReduxStore";
import {themType} from "../../redux/AppReducer";

type propsType = {
    countItems: number
    pagesSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}
export const Pagination = (props: propsType) => {
let theme = useSelector<RootStateType,themType>(state => state.app.theme);
    let countPages = Math.ceil(props.countItems / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(countPages/props.pagesSize);
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber-1)*props.pagesSize+1;
    let rightPortionNumber = portionNumber*props.pagesSize;
    let somePagesCount = pages.filter(p=> p >= leftPortionNumber && p <= rightPortionNumber).map(p => {
        return <span className={p === props.currentPage ? `${style[theme+'Pag']} ${cl.currentPage}` : `${style[theme+'Pag']} ${cl.ollPage}`}
                     onClick={(e) => { props.onPageChanged(p)}}> {p}</span>
    })
const onChangePrev = ()=>{
    setPortionNumber(portionNumber - 1)
}
const onChangeNext = ()=>{
    setPortionNumber(portionNumber + 1)
}
    return (
        <div className={cl.default}>
            {portionNumber >1 && <button onClick={onChangePrev}>prev</button>}
            {/*{pages.filter(p=> p >= leftPortionNumber && p <= rightPortionNumber)}*/}
            {somePagesCount}
            {portionCount > portionNumber &&<button onClick={onChangeNext}>next</button>}
        </div>
    )
}