import React, { useEffect , useState } from 'react'
import './header.css'
import ToggleBtn from '../ToggleButton/ToggleBtn'

const header = ({data,onQuerry}) => {

  const [KeyWord, setKeyWord] = useState('');

  const inputHandler = (e) => {
    if(e.key === "Enter")
    {
      onQuerry(KeyWord)
      setKeyWord('')
    }
  }

  return (
    <div className='Header'>
        <div className="city_country_Box">
            <i className="ri-map-pin-2-fill"></i>
            <span className='city'>{data?.name ? data?.name : '----'},</span>
            <span className='country'>{data?.sys?.country === 'PK' ? "Pakistan" : data?.sys?.country || '---'}</span>
        </div>
        <div className="searchField">
            <i className="ri-search-line"></i>
            <input onChange={(e)=>{setKeyWord(e.target.value)}} onKeyUp={(e)=>{inputHandler(e)}} value={KeyWord} type="text" placeholder='Search city...' />
        </div>
        <ToggleBtn/>
    </div>
  )
}

export default header