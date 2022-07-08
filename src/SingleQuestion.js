import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

export default function SingleQuestion({ question, answer }){
    const [isClicked, setIsClicked] = useState(false)

    return(
        <div className='qna'>
            <article onClick={()=>setIsClicked(!isClicked)} className="article-question">
                <p className={`${isClicked && 'clicked'}`}>{question}</p>
                {!isClicked ? <FaChevronDown className='icon'/> : <FaChevronUp className='icon'/>}
            </article>
            {isClicked && <p className='answer'>{answer}</p>}
        </div>
    )
}
