import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import { WithNotes } from "@kadira/storybook-addon-notes";
import {
    withKnobs,
    text,
    boolean,
    number
} from "@kadira/storybook-addon-knobs";
import Button from "./Button";
import IframeCommunication from "./IframeCommunication";

const stories = storiesOf("Iframe Communication", module);
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add("with a button", () => (
    <button disabled={boolean("Disabled", false)}>
        {text("Label", "Hello Button")}
    </button>
));

// Knobs as dynamic variables.
stories.add("as dynamic variables", () => {
    const name = text("Name", "Arunoda Susiripala");
    const age = number("Age", 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return <div>{content}</div>;
});

// Notes Example
// storiesOf("Button", module)
//     .add("with text", () => (
//         <WithNotes
//             notes={
//                 "Here we use some emoji as the Button text. Isn't it look nice?"
//             }
//         >
//             <Button onClick={action("clicked")}>Hello Button</Button>
//         </WithNotes>
//     ))
//     .add("with some emoji", () => (
//         <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
//     ));

stories.add("simple exmaple", () => {
    const attributes = {
        src: "https://pbojinov.github.io/iframe-communication/iframe.html",
        // src: "http://127.0.0.1:8080/examples/iframe.html",
        width: "100%",
        height: "175"
    };
    // const handleOnReady = () => {
    //     console.log("handleOnReady");
    // };
    // let postMessageData = number(Math.random(), 12345);
    const sendIframeMessage = () => {
        console.log("sending message to iframe...");
        // postMessageData = {
        //     topic: "hi again",
        //     data: Math.random()
        // };
    };
    return (
        <span>
            <IframeCommunication
                attributes={attributes}
                postMessageData={number(12345, 98765)}
                onReceiveMessage={action("onReceiveMessage")}
                onReady={action("handleOnReady")}
            />
            <button onClick={sendIframeMessage}>
                Send message to iframe
            </button>
        </span>
    );
});
