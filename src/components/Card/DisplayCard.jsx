import PastCard from './PastCard.jsx'
import NextCard from './NextCard.jsx'

export default function DisplayCard({ seminar, display, nextSeminar }){
    return(
        <div className='DisplayCard'>
            {nextSeminar ? <NextCard seminar={seminar} display={display}/> : <PastCard seminar={seminar} display={display}/>}
        </div>
    )

}