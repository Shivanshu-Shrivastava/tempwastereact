import React,{useState } from 'react'

function Table() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState('')
  const [data, setData] = useState([])
  const [storename, setStorename] = useState([])
  const [storedate, setStoreDate] = useState([])
  const [storetype, setStoreType] = useState([])
  function onchange(e){
      
      if (e.target.name === 'name' ){
          setName(e.target.value)
      }
      else if (e.target.name === 'date' ){
          setDate(e.target.value)
      }
      else if (e.target.name === 'type' ){
          setType(e.target.value)
      }
  }
  function submi(){
    
      
          setStorename([...storename,name])
          setStoreDate([...storedate,date])
          setStoreType([...storetype,type])
          setData([storename.length+1])

      

  }
  console.log(name)
  console.log(data)
  // console.log(date)
  // console.log(type)
  console.log(storename)
  console.log(storedate)
  console.log(storetype)
  
    return (
      <>
      
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title" id="exampleModalCenterTitle">Add New Date</h3>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {/*  */}
        <form   >
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input required onChange={(e)=>onchange(e)} name='name' style={{fontSize:1.4+'rem'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Date</label>
    <input required onChange={(e)=>onchange(e)} name='date' style={{fontSize:1.4+'rem'}} type="date" className="form-control" id="exampleInputPassword1" placeholder="Date" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Type</label>
    <select required onChange={(e)=>onchange(e)}  name='type' style={{fontSize:1.4+'rem'}} className="form-control" id="exampleFormControlSelect1">
      <option>Optional</option>
      <option>Select</option>
      <option>New</option>
      
    </select>
  </div>
  
      <div className="modal-footer">
        <button   style={{fontSize:1.4+'rem'}} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={submi}  style={{fontSize:1.4+'rem'}} type="button" data-dismiss="modal" className="btn btn-primary">Save changes</button>
      </div>
</form>
        {/*  */}
      </div>
    </div>
  </div>
</div>
        <div style={{fontSize:1.4+'rem'}} className='mt-5 table-responsive'>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    {storename.map(num=><td>{num}</td> )}
    {storetype.map(num=><td>{num}</td>)}
    {storedate.map(num=><td>{num}</td>)}
    </tr>
    <tr>
      <td> Malinaaaaaaaaaaaa a</td>
      <td>Optional</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>jacob</td>
      <td>Optional</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>jacob</td>
      <td>Optional</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>jacob</td>
      <td>Optional</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
</table>
        </div>
        </>
    )
}

export default Table
