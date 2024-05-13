
export default function PastCard({seminar, display}){
    return(
        <>
        <h1>Pasado</h1>
        <div class="card-top">
            <button onClick={() => display(!display)}>cerrar</button>
            <h1>{seminar.data.title}</h1>
            <h2>{seminar.data.type}</h2>
        </div>
        <div class="speaker">
            <img src={seminar.data.speaker.img_url} alt={seminar.data.speaker.img_alt}/>
            <p>{seminar.data.speaker.institution}</p>
            <h2>{seminar.data.speaker.name}</h2>
            <p>{seminar.data.speaker.institution_deparment}</p>
        </div>
        <div class="semblance">
            <p>{seminar.data.speaker.semblance}</p>
        </div>
        <div>
            <p>{seminar.data.datetime}</p>
            <p>{seminar.data.datetime}</p>
            <p>{seminar.data.place}</p>
            <p>{seminar.data.cycle}</p>
        </div>
        <div class="host">
            <img src={seminar.data.host.img_url} alt={seminar.data.host.img_alt}/>
            <p>{seminar.data.host.institution}</p>
            <h3>{seminar.data.host.name}</h3>
            <p>{seminar.data.host.institution_departament}</p>
        </div>
        <div class="description">
            <p>{seminar.data.description}</p>
        </div>
        <div class="video">
    
        </div>
    </>
    )
    }
    
    