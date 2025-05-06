let CompD = (props)=>{
    return <div>
                <h2>Component D</h2>
                <pre>{JSON.stringify(props)}</pre>
                
                <h4>Employee Name:{props.ename}</h4>
            </div>
}
export default CompD;