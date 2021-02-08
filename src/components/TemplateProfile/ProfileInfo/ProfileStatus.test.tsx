import React from "react";
//import { create } from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    const updateStatus=()=>{}

    // test("status from props should bi in the state", () => {
    //     const component = create(<ProfileStatus status={'some text'} updateStatus={updateStatus}/>);
    //     const instance = component.getInstance();
    //     expect(instance.state.status).toBe('some text');
    // });
    // test("started with span", () => {
    //     const component = create(<ProfileStatus status={'some text'} updateStatus={updateStatus}/>);
    //     const root = component.root;
    //     let span = root.findByType('span')
    //     expect(span.innerText).toBe('some text');
    //     expect(span.length).toBe(1)
    // });
    // test("dont have input", () => {
    //     const component = create(<ProfileStatus status={'some text'} updateStatus={updateStatus}/>);
    //     const root = component.root;
    //     expect(()=>{
    //         let input = root.findByType('input')
    //     }).toThrow()
    // });
    // test("callback should be called", () => {
    //     const mockCallback = jest.fn()
    //     const component = create(<ProfileStatus status={'some text'} updateStatus={mockCallback}/>);
    //     const instance = component.getInstance();
    //     instance.onChangeStatus();
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // });
});
