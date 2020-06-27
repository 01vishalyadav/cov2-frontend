import React,{Component} from 'react';
import District from './District/District';
import process from 'process';
class App extends Component
{
  state = {
    loading:false,
    fetched:false,
    err:false,
    name: "default data",
    active:"-1",
    recovered:"-1",
    deaths:"-1",
    total:"-1"
  }
  getData(dist)
  {
    let url = "https://node-py-1.herokuapp.com/api/districts/"+dist
    
    if(process.env.NODE_ENV==='development')
      url="http://localhost:3333/api/districts/"+dist;
    fetch(url)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        this.setState(
          {
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
        this.setState(
          {fetched:true,err:true,loading:false});
      });
  }

  btnClickedCount=0;
  buttonClickedHandler = (event) => {
    let dist = document.getElementById('input').value;
    if(dist==="")
    {
      this.setState({err:true,fetched:true,loading:false});
      return;
    }
    ++this.btnClickedCount;
    this.setState({loading:true});
    if(this.btnClickedCount>1)
    {
      setTimeout(()=>{
        this.getData(dist);
      },600);
    }
    else
      this.getData(dist);
  }
  render()
  {
    
    const {loading,fetched,err,name,active,recovered,deaths,total}=this.state;
    
    if(!fetched)
    {
      return(
            <District
              error = {err}
              loading = {loading}
              click={(event)=>this.buttonClickedHandler(event)}
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
            click={(event)=>this.buttonClickedHandler(event)}
            
          />
      );
    }
  }
}

export default App;
