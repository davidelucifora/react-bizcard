import React from "react";

function Button(props) {
    return (
<a className="social-button" href={props.url} title={props.text}>{props.text}</a>
    )
}

function ButtonSection() {
    return(
        <div id="button-list">
            <Button text ="Website" url="https://mkondo.digital/" />
            <Button text ="GitHub" url="https://github.com/davidelucifora/" />
            <Button text ="LinkedIN" url="https://linkedin.com/in/davidelucifora/" />
        </div>
    )
}

export default ButtonSection