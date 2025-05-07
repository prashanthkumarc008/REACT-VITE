
  function Table() {
    const employees = [
      {eid: 100, ename: 'Ford',esal:1000},
      {eid: 101, ename: 'BMW',esal:2000},
      {eid: 102, ename: 'Audi',esal:3000}
    ];
    return (
      <>
       <table className="table">
            <thead>
                <tr>
                        <th>Eid</th>
                        <th>Ename</th>
                        <th>Esal</th>
                </tr>
                

            </thead>
            <tbody>
            {
                employees.map((emp)=>{
                    return(
                        <tr key={emp.eid}>
                            <td>{emp.eid}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.esal}</td>
                        </tr>
                    )
                })
            }


            </tbody>
       </table>
      </>
    );
  }

  export default Table;