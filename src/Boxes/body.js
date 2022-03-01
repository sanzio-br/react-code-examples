import React from "react"
import boxs from "./boxes"
import Box from './box'
import './style.css'
export default function Body() {
    const [boxes, setBox] = React.useState(boxs)
    function HandleClick(id){
        setBox(prevBox =>{
            return prevBox.map((box) =>{
                return box.id === id ? {...box, on: !box.on} : box
            })
        })
    }
    const boxElements = boxes.map(box=>{
        return <Box key = {box.id} id={box.id} on = {box.on} HandleClick = {HandleClick}/>
    })
    return (
        <main>
            {boxElements}
        </main>
    )
}



















// setBox(prevBox =>{
//     const newBoxes = []
//     for (let i = 0; i <  prevBox.length; i++) {
//         const currentBox = prevBox[i]
//     }
//     if(currentBox.id === id ){
//         const updatedBoxes = {
//             ...currentBox,
//             on : !currentBox.on
//         }
//     newBoxes.push(updatedBoxes)
//     }else{
//         newBoxes.push(currentBox)
//     }
// return newBoxes;