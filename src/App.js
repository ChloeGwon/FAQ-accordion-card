import {question} from './questions'
import {useState} from 'react'

import desktop from './images/illustration-woman-online-desktop.svg'
import mobile from './images/illustration-woman-online-mobile.svg'
import boxDesktop from './images/illustration-box-desktop.svg'
import shadowMobile from './images/bg-pattern-mobile.svg'
import SingleQuestion from './SingleQuestion'

function App() {
  const [quests] = useState(question)

  return (
    <div className="container">
      <article>
        <picture>
          <source media='(max-width: 600px)' srcSet={mobile} />
          <img src={desktop} alt='' />
          <img src={boxDesktop} alt='' />
        </picture>
      </article>

      <article>
        <h1>FAQ</h1>
        {quests.map((quest)=>(
          <SingleQuestion 
            key={quest.id}
            question={quest.question}
            answer={quest.answer}
          />
        ))}
      </article>

    </div>
  );
}

export default App;
