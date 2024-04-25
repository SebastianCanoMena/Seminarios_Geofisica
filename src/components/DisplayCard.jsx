export default function DisplayCard({ seminar, display }){
    return(
        <>
        <button onClick={() =>display(!display)}>cerrar</button>
        <h2>{seminar.data.datetime}</h2>
        </>
    )

}