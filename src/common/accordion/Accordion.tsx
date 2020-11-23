import React, {useState} from "react";

type AccordionType = {
    items: Array<itemType>
    titleValue: string
}

export function Accordion(props: AccordionType) {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <>
            <AccordionTitle title={props.titleValue} onClickHandler={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody items={props.items}/>}
        </>
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
    return <div style={{position:"absolute"}}>
        {props.items.map(i => {
            return <li key={i.id}><a href={i.link}>{i.name}:{i.desk} </a></li>
        })}
    </div>

}
