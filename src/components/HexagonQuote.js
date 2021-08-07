import { useEffect, useRef, useState } from 'react';
import { Hexagon } from 'react-honeycomb';
import HexagonQuoteText from './HexagonQuoteText';

const HexagonQuote = (props) => {

    const textSpanRef = useRef(null)

    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
        setTextWidth(textSpanRef.current.clientWidth)
    }, [])

    return ( 
        <Hexagon className="HexagonQuoteBorder">
            <div className="HexagonQuote">
                <span className="QuoteText" ref={textSpanRef}>
                    <HexagonQuoteText item={props.item} textWidth={textWidth}/>
                </span>
            </div>
        </Hexagon>
     );
}
 
export default HexagonQuote;