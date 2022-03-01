export default function Star(props){
    return(
        <div>
            <img src= {props.starIcon} onClick = {props.Click}className="card--favorite" alt = ""/>
        </div>
    )
}