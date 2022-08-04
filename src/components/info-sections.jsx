function InfoTitle(props){
    return (
        <h2 className="orange-text">{props.text}</h2>
    )
} 

function AboutParagraph(props){


    return(
        <div>
        <p className="infocard-paragraph">I wrote my first line of code when I was 13. It was 2003 and seeing lines of 
    Pascal turning into mini-programs made me fall in love with development.
     Growing up I spent my teenage years on graphic design forums learning design principles,
      Illustrator and Photoshop. At Uni I majored in English, Russian and Spanish while 
      I kept coding and creating websites for friends and family. 
      After a successful career in Tech as a SaaS Account Executive, 
      I took 2 years off to learn modern <span className="highlighted-text">Javascript</span> and <span className="highlighted-text">Javascript</span> and worked as a freelance web developer.</p>
        </div>
    )
}

function InterestsParagraph(props){
    return(
        <p className="infocard-paragraph">{props.text}</p>
    )
}

function InfoCard() {
      
      return(
        <div className="info-card">
            <InfoTitle text="<About />" />
            <AboutParagraph />
            <InfoTitle text="<Interests />" />
            <InterestsParagraph text="I’ve always had a passion for languages, I’m fluent in English, Spanish Russian, 
            Italian and French and currently studying Mandarin. When I’m not coding I’m working on mKondo, 
            the agency I run with my wife, studying to get my OSCP certification or spending time exploring
             and travelling. I love travelling to places that strike with culture shocks and putting myself in
              uncomfortable situations, as I believe it’s a great way to grow as a person." />
            


        </div>
    )


}

export default InfoCard