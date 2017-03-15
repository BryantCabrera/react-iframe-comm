import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import Welcome from "./Welcome";
import IframeCommunication from "./IframeCommunication";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));

storiesOf("IframeCommunication", module).add("with just src", () => {
    const attributes = {
        src: "https://pbojinov.github.io/iframe-communication/iframe.html"
    };
    const handleOnReady = () => {
        console.log("handleOnReady");
    };
    return (
        <IframeCommunication attributes={attributes} onReady={handleOnReady} />
    );
});
