import React,{ useState } from 'react';
import District from './District/District';
import process from 'process';

export default function App()
{
  const [state, setState] = useState({
    loading:false,
    fetched:false,
    err:false,
    name: "default data",
    active:"-1",
    recovered:"-1",
    deaths:"-1",
    total:"-1",
  });
  
function getData(dist) {
  // let url = "https://node-py-1.herokuapp.com/api/districts/"+dist
  // now use aws hosted api
  let url = "http://ec2-65-2-140-32.ap-south-1.compute.amazonaws.com:3333/api/districts/"+dist;
  
  if(!process.env.NODE_ENV || process.env.NODE_ENV==='development')
    url="http://localhost:3333/api/districts/"+dist;
  // console.log(url);
  fetch(url)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setState({
        ...state,
        loading:false,
        fetched:true,
        err:false,
        name:data.name,
        active:data.active,
        recovered:data.recovered,
        deaths:data.deaths,
        total:data.total
      });
    })
    .catch(err=>{
      setState(
        {...state, fetched:true,err:true,loading:false});
    });
}

  const buttonClickedHandler = (dist) => {
    if(dist==="Select"){
      return;
    }
    else if(dist==="")
    {
      setState({...state, err:true,fetched:true,loading:false});
      return;
    }
    // setButtonClickedCount(setButtonClickedCount+1);
    setState({...state, loading:true});
    getData(dist);
  }

  const {loading,fetched,err,name,active,recovered,deaths,total}=state;
  
  if(!fetched)
  {
    return(
          <District
            error = {err}
            loading = {loading}
            click={(districtName)=>buttonClickedHandler(districtName)}
          />
    );
  }
  else
  {
    return(
        <District
          error = {err}
          loading={loading}
          fetched={fetched}
          active={active}
          recovered={recovered}
          deaths={deaths}
          total={total}
          click={buttonClickedHandler}
        />
    );
  }
  
}
