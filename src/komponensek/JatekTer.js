import Elem from "./Elem.js";

function JatekTer(props) {
  
    function kattintas(index){
        //console.log("Index: " + props.index)
        props.kattintas(index)
    }

    return (
    <div className="jatekter">
        {props.lista.map((elem, index)=>{
            return (<Elem ertek = {elem} index = {index} key = {index} kattintas = {kattintas}/>)
        })}
    </div>
  )
}

export default JatekTer