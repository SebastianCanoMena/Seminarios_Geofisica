
export default function NextCard({seminar, display}){
return(
<> 
    <div className="next-card-top">
        <div>
            <button className="next-card-close" onClick={() => display(!display)}><img src="displayCard/x.png"/>cerrar</button>
        </div>
        <div className="next-card-title">
            <h1>{seminar.data.title}</h1>
            <div className='next-card-horizontal-line' />
        </div>
            <h2 className="next-card-type">{seminar.data.type}</h2>
    </div>
    <div className="next-card-mid">
        <div className="next-card-speaker">
            <div className="next-card-speaker-child">
                <img src={seminar.data.speaker.img_url} alt={seminar.data.speaker.img_alt}
                className="next-card-img-speaker"/>
                <div className="next-card-speaker-data">
                    <p className="institution">{seminar.data.speaker.institution}</p>
                    <div className="name">
                        <h2>{seminar.data.speaker.name}</h2>
                        <div className="next-card-horizontal-line"/>
                        <p className="institution-deparment">{seminar.data.speaker.institution_department}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="next-card-semblance">
            <p>{seminar.data.speaker.semblance}</p>
        </div>
        <div className="next-card-basic-info">
            <div className="basic-info-child">
                <img src="displayCard/date.png"/>
                <p>{seminar.data.datetime}</p>
            </div>
            <div className="basic-info-child">
                <img src="displayCard/hour.png"/>
                <p>{seminar.data.datetime}</p>
            </div>
            <div className="basic-info-child">
                <img src="displayCard/address.png"/>
                <p>{seminar.data.place}</p>
            </div>
            <div className="basic-info-child">
                <img src="displayCard/faceToFace.png"/>
                <p>{seminar.data.modality}</p>
            </div>
        </div>
    </div>
    <div className="next-card-bottom">
        <div className="next-card-bottom-left">
            <div className="next-card-host">
                <img src={seminar.data.host.img_url} alt={seminar.data.host.img_alt}/>
                <div className="next-card-host-data">
                    <p className="host-institution">{seminar.data.host.institution}</p>
                    <div className="host-name">
                        <h3>{seminar.data.host.name}</h3>
                        <div className="next-card-horizontal-line"/>
                    </div>
                    <p>{seminar.data.host.institution_departament}</p>
                </div>
            </div>
            <div className="next-card-satellite-location">
            </div>
        </div>

        <div className="next-card-bottom-right">
            <p>{seminar.data.description}</p>
        
            <div >
                <button className="next-card-register">Registrarme</button>
            </div>
        </div>
    </div>
</>
    )
}


