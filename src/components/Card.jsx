import { useState } from 'react';
import { getCollection, getEntry} from 'astro:content'
import DisplayCard from './DisplayCard';
import '../styles/card.css'
/*Gets the data collection 'seminar', located at src/content/seminars*/
const seminars = await getCollection('seminars');
let currentDate = new Date()
currentDate = (currentDate.getFullYear()+ ' 0'+currentDate.getMonth()+ ' '+ 
currentDate.getDate()+' '+currentDate.getHours()+' '+currentDate.getMinutes())
const seminarN = seminars.filter((a) => currentDate < a.data.datetime)
const seminarP = seminars.filter((a) => currentDate > a.data.datetime)
//sort's collection 
/*seminars.sort((a,b) => {
    return new Date(a.data.datetime) - new Date(b.data.datetime)
})*/

console.log(202405181200>202303181300)
export default function Card()
{

    const [display, setDisplay] = useState(false)
    const [seminar, setSeminar] = useState(null)
    let i = -1
    /*Maps the astro data collection 'seminars' into a card model*/
    const Nextseminars = seminarN.map(seminar => (
        <div key={i =+ 1} id={i==-1 ? 'next' : null} className={i==-1 ? 'card-div-parent-next' : 'card-div-parent'} onClick={async () => {setDisplay(!display) 
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

    i = -1
    const Pastseminars = seminarP.map(seminar => (
        <div key={i =+1}id={i==-1 ? 'past' : null} className='card-div-parent' onClick={async () => {setDisplay(!display) 
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
    <div className='cards'>
        {(display && seminar!=null) ? <DisplayCard seminar={seminar}/> : <>{Nextseminars} {Pastseminars}</>}
        
    </div>
);}