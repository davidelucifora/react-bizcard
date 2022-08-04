import React from 'react'
import ButtonSection from './contact-buttons';
import InfoCard from './info-sections';

function H1Title(props){
    return (
        <h1 className ="bingobongo" >{props.text}</h1>
    )
}

function Subtitle(props){
    const highlightedTextStyle = {
        color: '#1EFFE4'
    }
    return (
        <h4 className ="subtitle">
            I craft <span style={highlightedTextStyle}>beautiful, engaging</span> experiences for web and mobile.
            </h4>
    )
}

function Card() {

    return (
        <div id="card">
        <div id="image-wrapper">
        </div>
        <div id="title-wrapper">
            <H1Title text="Hi, I'm Davide" />
             <Subtitle/>
        </div>
        <ButtonSection />
        <InfoCard />

        </div>
    )
}

export default Card