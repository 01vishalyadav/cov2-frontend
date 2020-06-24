import React,{Component} from 'react';
import District from './District/District';
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
    let url = "localhost:3333/api/districts/"+dist;
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

  buttonClickedHandler = (event) => {
    this.setState({loading:true});
    setTimeout(()=>{
      
      let dist = "Mau";
      dist = document.getElementById('input').value;
      this.getData(dist);
    },1000)
    
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
