import '../css/Quotes.css'

const MakeQuoteChoice = (props) => {
    return ( 
        <>
            {props.quotes[props.index] != undefined ? <button className={`ChooseButton ${props.className ? props.className : ``}`} value={props.index} onClick={props.makeChoice}> { props.quotes[props.index].title } </button> : null}
        </>
     );
}
 
export default MakeQuoteChoice;