import CompC from "./CompC";
let CompB = (props)=>{
    return <div>
                <h2>Component B</h2>
                <pre>{JSON.stringify(props)}</pre>
                <hr/>
                <CompC ename={props.ename}/>
            </div>
}
export default CompB;