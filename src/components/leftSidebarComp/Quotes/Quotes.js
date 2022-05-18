import React, {useState, useEffect} from 'react'

import './Quotes.css'

function Quote() {

    const [quote, setQuote] = useState({
        anime:null,
        character:null,
        quote:null
    })

    const fetchQuote = async () => {
        return await fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
    }

    useEffect(async () => {
        setQuote(await fetchQuote())
    }, [])

    const generate = async () => {
        setQuote(await fetchQuote())
    }

  return (
      
    <div className='quote'>
        <div className="quote__anime" title={ quote.anime }>{ quote.anime }</div>
        <blockquote>{ quote.quote }</blockquote>
        <div className="quote__character" title={ quote.character }>{ quote.character }</div>

        <button className='quotes__btn' onClick={generate}>Generate new Quote</button>
    </div>
  )
}

export default Quote