import axios from "axios";
import { useEffect, useState } from "react";
import MakeQuoteChoice from "./MakeQuoteChoice";
import '../css/Quotes.css'

const ChooseQuote = () => {
    const [randomQuotes, setRandomQuotes] = useState([]);
    
    useEffect(() => {
        axios.get('/v1/quotes/randomQuotes').then(result => {
            setRandomQuotes(result.data)
        })
    }, [])

    const makeChoice = (event) => {
        let sendQuotes = {}

        if(event.target.value == 0)
        {
            sendQuotes.chosenQuote = randomQuotes[0]
            sendQuotes.secondQuote = randomQuotes[1]
        }
        else
        {
            sendQuotes.chosenQuote = randomQuotes[1]
            sendQuotes.secondQuote = randomQuotes[0]
        }
        
        axios.post('/v1/quotes/makeChoice', sendQuotes)
    }

    const renderChoiceButtons = () => {
 
            return randomQuotes.length == 2 && (
                <>
                    <MakeQuoteChoice className="leftWingButton" quotes={randomQuotes} index={0} makeChoice={makeChoice}/>
                    <MakeQuoteChoice quotes={randomQuotes} index={1} makeChoice={makeChoice}/>
                </>
            )
    }
    
    return ( 
        <div>
            {
                renderChoiceButtons()
            }
        </div>
    );
}
 
export default ChooseQuote;