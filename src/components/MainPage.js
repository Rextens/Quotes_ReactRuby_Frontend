import { useEffect, useState } from 'react'
import axios from 'axios'
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb';
import '../css/MainPage.css'
import HexagonQuote from './HexagonQuote';
import ChooseQuote from './ChooseQuote';

const MainPage = () => {
  
  const [quotes, setQuotes] = useState([]);
  const [textLenghts, setTestLeghts] = useState([]);


  useEffect(() => {
    axios.get('/v1/quotes').then(result => {
      setQuotes(result.data)
    })
  }, [])


  const handleAddQuote = (event) => {
    event.preventDefault()

    let data = {
      quoteTitle: event.target[0].value
    }

    axios.post('/v1/quotes', data).then(result => {
      setQuotes(result.data.status)
    })
  }

  return (
    <div className="MainPage">
      <div className="Row">
        <div className="QuotesContainer">
          <form className="QuoteForm" onSubmit={handleAddQuote}>
            <label>
              <input className="QuoteInput"/>
            </label>
            <button className="QuoteSubmit" type="submit">Add Quote</button>
          </form>

          <ResponsiveHoneycomb
            defaultWidth={1024}
            size={50}
            items={quotes}
            renderItem={(item) => (
              <div className="Resize">
                <HexagonQuote item={item} />
              </div>
            )}
          />
        </div>

        <div className="ChooseContainer">
          <ChooseQuote/>
        </div>
      </div>
    </div>
  )
}

export default MainPage