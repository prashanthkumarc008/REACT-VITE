import CompB from "./CompB";
let CompA = ()=>{
    let ename="Rahul Gandhi";
    return <div>
                <h2>Component A</h2>
                <hr/>
                <CompB ename={ename}/>
            </div>
}
export default CompA;