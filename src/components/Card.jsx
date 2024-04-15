import { useState } from 'react';
import { getCollection, getEntry } from 'astro:content'
import DisplayCard from './DisplayCard';
import '../styles/card.css'
/*Gets the data collection 'seminar', located at src/content/seminars*/
const seminars = await getCollection('seminars');
let d
export default function Card()
{

    const [display, setDisplay] = useState(false)
    const [seminar, setSeminar] = useState(null)
    let i = -1
    /*Maps the astro data collection 'seminars' into a card model*/
    const seminarsCard = seminars.map(seminar => (
        <div key={i = i+1} className='card-div-parent' onClick={async () => {setDisplay(!display) 
                                                seminar = setSeminar(await getEntry('seminars', seminar.id))}}>
            <div className='card-div-child'>
            <div className='card-div-top'>
            <img className='speaker-img'src={seminar.data.speaker.img_url} alt={seminar.data.speaker.img_alt}/>
            <h2 className='card-div-top-title'>{seminar.data.title}</h2>
            <div className='card-div-top-horizontal-line' />
            <h3 className='card-div-top-type'>{seminar.data.type}</h3>
            <h4 className='card-div-top-date'>27 Febrero</h4>
            </div>
            <div className='card-div-bottom'>
            <p className='card-div-bottom-name'>{seminar.data.speaker.name}</p>
            <div className='card-div-bottom-show-more'/>
            </div>
            </div>
        </div>
        ))
    return( 
    <div>
        {(display && seminar!=null) ? <DisplayCard seminar={seminar}/> : seminarsCard}
    
</div>
);}



