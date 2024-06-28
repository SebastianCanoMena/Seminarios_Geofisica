import { useState } from 'react';
import { getCollection, getEntry} from 'astro:content'
import Institutional from './type/Institutional'
import DisplayCard from './DisplayCard';
import angel from '../../assets/speaker/Angel-Ramirez.png'
/*Gets the data collection 'seminar', located at src/content/seminars*/
const seminars = await getCollection('seminars');

export default function Card({type})
{
    
    const [display, setDisplay] = useState(false)
    const [seminar, setSeminar] = useState(null)
    const [nextSeminar, setNextSeminar] = useState(true)

    /*Gets the user current date */
    let currentDate = new Date()

    /*Changes currentDate format, to the date format used in 'seminars' collection*/
    currentDate = (currentDate.getFullYear()+ ' 0'+currentDate.getMonth()+ ' '+ 
    currentDate.getDate()+' '+currentDate.getHours()+' '+currentDate.getMinutes())

    /*Gets upcoming seminars*/ 
    var seminarN = seminars.filter((a) => currentDate < a.data.datetime)

    /*Gets the past seminars*/
    var seminarP = seminars.filter((a) => currentDate > a.data.datetime)
    
    if(type != "institutional"){
        seminarN = seminarN.filter((a) => a.data.type == type)

        seminarP = seminarP.filter((a) => a.data.type == type)
    }
    
    let i = -1
    /*Maps the next seminars data to a jsx format*/
    const Nextseminars = seminarN.map(seminar => (
        <div key={i =+ 1} id={i==-1 ? 'next' : null} className={i==-1 ? 'card-div-parent-next' : 'card-div-parent'} 
        onClick={async () => {  
            setDisplay(!display) 
            /*Get's the collection of the seminar clicked*/    
            seminar = setSeminar(await getEntry('seminars', seminar.id)) 
            /*Indicates that the seminar clicked belongs to the next seminars or 'seminarN' group*/
            setNextSeminar(true)}}>
            <div className='card-div-child'>
            <div className='card-div-top'>
            <img className='speaker-img'src={angel.src} alt={seminar.data.speaker.img_alt}/>
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
    /*Maps the past seminars data to a jsx format*/
    const PastSeminars = seminarP.map(seminar => (
        <div key={i =+1}id={i==-1 ? 'past' : null} className='card-div-parent' 
        onClick={async () => {
            setDisplay(!display)
            /*Get's the collection of the seminar clicked*/
            seminar = setSeminar(await getEntry('seminars', seminar.id))
             /*Indicates that the seminar clicked belongs to the past seminars or 'seminarP' group*/
            setNextSeminar(false)}}>
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
            {(display && seminar!=null) ? <DisplayCard seminar={seminar} display={setDisplay} nextSeminar={nextSeminar}/> :<> {Nextseminars} {PastSeminars}</>}
        </div> 
    );}

    

    