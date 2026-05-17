export default function Joke(prop){

    return(
        <article style={{display:(prop.setup)||(prop.punch) ? "block": "none"}}>
            {prop.setup && <span id="setup"><h4>Setup:</h4><p>{prop.setup}</p></span>}
            {prop.punch && <span id="punch"><h4>Punchline</h4><p>{prop.punch}</p></span>}
        </article>
    )


}