import CompD from "./CompD";
let CompC = (props)=>{
    return <div>
                <h2>Component C</h2>
                <pre>{JSON.stringify(props)}</pre>
                <hr/>
                <CompD ename={props.ename}/>
            </div>
}
export default CompC;