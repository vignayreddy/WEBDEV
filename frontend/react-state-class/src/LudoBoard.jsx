import { useState } from "react";

export default function LudoBoard()
{

    let [moves,setMoves] = useState({blue:0,red:0,yellow:0,green:0});
    let updateBlue = () =>
    {
       
        console.log(moves.blue);
        setMoves({...moves,blue: moves.blue+=1});
    }
    let updateYellow = () =>
        {
            moves.yellow+=1;
            console.log(moves.yellow);
            setMoves({...moves});
        }  
  let updateGreen = () =>
            {
                moves.green+=1;
                console.log(moves.green);
                setMoves({...moves});
            } 
               let updateRed = () =>
                {
                    moves.red+=1;
                    console.log(moves.red);
                    setMoves({...moves});
                }




    return (<div>
        <p>Game Begins</p>
        <div className="board">
            <p>Blue Moves ={moves.blue}</p>
            <button onClick={updateBlue}style ={{backgroundColor:"blue"}}>+1</button>
            <p>Yellow Moves ={moves.yellow}</p>
            <button onClick={updateYellow} style ={{backgroundColor:"yellow",color:"black"}}>+1</button>
            <p>Green Moves ={moves.green}</p>
            <button onClick={updateGreen} style ={{backgroundColor:"green"}}>+1</button>
            <p>Red Moves ={moves.red}</p>
            <button onClick={updateRed}  style ={{backgroundColor:"red"}}>+1</button>
        </div>
    </div>

    );
}