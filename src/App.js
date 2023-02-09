import React,{useEffect,useState} from 'react'
function App() {
  const [Datas,setDatas]=useState([])
  useEffect(()=>{
    fetch("http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com:80/getCountries").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setDatas(resp)
      })
    })
  },[])
  console.warn(Datas)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
        <td>CountryId</td>
          <td>CountryName</td>
          <td>CountryCode</td>
         
        </tr>
        {
          Datas.map((item,index)=>
            <tr>
          <td>{item.index}</td>
          <td>{item.country_name}</td>
          <td>{item.country_code}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;