import Reactlogo from '../src/imgs/logo.png';
export default function Header(){
    return(
        <div className = "Header">
            <h3>
                <img src = {Reactlogo} alt ="" />
                ReactFacts
            </h3>
            <p>React Course - Project 1</p>
        </div>
    )
}