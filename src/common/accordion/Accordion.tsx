import React, {useState} from "react";
import cl from './AccordonStyle.module.css'

type AccordionType = {
    items: Array<itemType>
    titleValue: string
}

export function Accordion(props: AccordionType) {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div className={cl.parent}>
            <AccordionTitle title={props.titleValue} onClickHandler={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onClickHandler: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h6 onClick={props.onClickHandler}>{props.title}</h6>
    )
}

export type itemType = {
    name: string
    desk?: any
    id: number
    link?: string
}
export type AccordionBodyType = {
    // items: any
    items: Array<itemType>
}
export function AccordionBody(props: AccordionBodyType) {
    // return <ul style={{position:"absolute"}}>
    return <ul className={ `${cl.wrapList}`}>
        {props.items.map(i => {
            return <li className={cl.itemList} key={i.id}><a href={i.link}>{i.name}:{i.desk} </a></li>
        })}
    </ul>

}
