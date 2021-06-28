import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function District(props) {
  const [districtName, setDistrictName] = useState('Select');
  const handleChange = (event) => {
    setDistrictName(event.target.value);
  };

  let outputData = null;
  if(props.loading) {
    outputData = (
      <Container>
        <CircularProgress size={20} style={{margin:10}} />
      </Container>
    );
  }
  else if(props.error){
    outputData = (
      <Container>
        <p>Not Found...</p>
      </Container>
      
    );
  }
  else if(props.fetched===true)
  {
    outputData = (
      <Container style={{textAlign:"center",marginTop:10}} >
        <TableContainer component={Paper}>
          <Table aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Recovered</TableCell>
                <TableCell>Deaths</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                  <TableCell>{props.active}</TableCell>
                  <TableCell >{props.recovered}</TableCell>
                  <TableCell >{props.deaths}</TableCell>
                  <TableCell >{props.total}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }

  return (
    <Container maxWidth = "lg" style={{textAlign:"center"}} >
      <Grid item xs={12}>
        <Paper xs={12} style={{textAlign:"center",margin:10}} >
          <Container maxWidth="lg">
            <Select
              labelId="District"
              id="input"
              value={districtName}
              onChange={handleChange}
            >
              <MenuItem value={'Select'}>Select</MenuItem>
              <MenuItem value={'Agra'}>Agra</MenuItem>
              <MenuItem value={'Aligarh'}>Aligarh</MenuItem>
              <MenuItem value={'Ambedkar Nagar'}>Ambedkar Nagar</MenuItem>
              <MenuItem value={'Amethi'}>Amethi</MenuItem>
              <MenuItem value={'Amroha'}>Amroha</MenuItem>
              <MenuItem value={'Auraiya'}>Auraiya</MenuItem>
              <MenuItem value={'Ayodhya'}>Ayodhya</MenuItem>
              <MenuItem value={'Azamgarh'}>Azamgarh</MenuItem>
              <MenuItem value={'Baghpat'}>Baghpat</MenuItem>
              <MenuItem value={'Bahraich'}>Bahraich</MenuItem>
              <MenuItem value={'Ballia'}>Ballia</MenuItem>
              <MenuItem value={'Balrampur'}>Balrampur</MenuItem>
              <MenuItem value={'Banda'}>Banda</MenuItem>
              <MenuItem value={'Barabanki'}>Barabanki</MenuItem>
              <MenuItem value={'Bareilly'}>Bareilly</MenuItem>
              <MenuItem value={'Basti'}>Basti</MenuItem>
              <MenuItem value={'Bhadohi'}>Aligarh</MenuItem>
              <MenuItem value={'Bijnor'}>Bijnor</MenuItem>
              <MenuItem value={'Budaun'}>Budaun</MenuItem>
              <MenuItem value={'Bulandshahr'}>Bulandshahr</MenuItem>
              <MenuItem value={'Chandauli'}>Chandauli</MenuItem>
              <MenuItem value={'Chitrakoot'}>Chitrakoot</MenuItem>
              <MenuItem value={'Deoria'}>Deoria</MenuItem>
              <MenuItem value={'Etah'}>Etah</MenuItem>
              <MenuItem value={'Etawah'}>Etawah</MenuItem>
              <MenuItem value={'Farrukhabad'}>Farrukhabad</MenuItem>
              <MenuItem value={'Fatehpur'}>Fatehpur</MenuItem>
              <MenuItem value={'Firozabad'}>Firozabad</MenuItem>
              <MenuItem value={'Gautam Buddha Nagar'}>Gautam Buddha Nagar</MenuItem>
              <MenuItem value={'Ghaziabad'}>Ghaziabad</MenuItem>
              <MenuItem value={'Ghazipur'}>Ghazipur</MenuItem>
              <MenuItem value={'Gonda'}>Gonda</MenuItem>
              <MenuItem value={'Gorakhpur'}>Gorakhpur</MenuItem>
              <MenuItem value={'Hamirpur'}>Hamirpur</MenuItem>
              <MenuItem value={'Hapur'}>Hapur</MenuItem>
              <MenuItem value={'Hardoi'}>Hardoi</MenuItem>
              <MenuItem value={'Hathras'}>Hathras</MenuItem>
              <MenuItem value={'Jalaun'}>Jalaun</MenuItem>
              <MenuItem value={'Jaunpur'}>Jaunpur</MenuItem>
              <MenuItem value={'Jhansi'}>Jhansi</MenuItem>
              <MenuItem value={'Kannauj'}>Kannauj</MenuItem>
              <MenuItem value={'Kanpur Dehat'}>Kanpur Dehat</MenuItem>
              <MenuItem value={'Kanpur Nagar'}>Kanpur Nagar</MenuItem>
              <MenuItem value={'Kasganj'}>Kasganj</MenuItem>
              <MenuItem value={'Kaushambi'}>Kaushambi</MenuItem>
              <MenuItem value={'Kushinagar'}>Kushinagar</MenuItem>
              <MenuItem value={'Lakhimpur Kheri'}>Lakhimpur Kheri</MenuItem>
              <MenuItem value={'Lalitpur'}>Lalitpur</MenuItem>
              <MenuItem value={'Lucknow'}>Lucknow</MenuItem>
              <MenuItem value={'Maharajganj'}>Maharajganj</MenuItem>
              <MenuItem value={'Mahoba'}>Mahoba</MenuItem>
              <MenuItem value={'Mainpuri'}>Mainpuri</MenuItem>
              <MenuItem value={'Mathura'}>Mathura</MenuItem>
              <MenuItem value={'Mau'}>Mau</MenuItem>
              <MenuItem value={'Meerut'}>Meerut</MenuItem>
              <MenuItem value={'Mirzapur'}>Mirzapur</MenuItem>
              <MenuItem value={'Moradabad'}>Moradabad</MenuItem>
              <MenuItem value={'Muzaffarnagar'}>Muzaffarnagar</MenuItem>
              <MenuItem value={'Pilibhit'}>Pilibhit</MenuItem>
              <MenuItem value={'Pratapgarh'}>Pratapgarh</MenuItem>
              <MenuItem value={'Prayagraj'}>Prayagraj</MenuItem>
              <MenuItem value={'Rae Bareli'}>Rae Bareli</MenuItem>
              <MenuItem value={'Rampur'}>Rampur</MenuItem>
              <MenuItem value={'Sharanpur'}>Sharanpur</MenuItem>
              <MenuItem value={'Sambhal'}>Sambhal</MenuItem>
              <MenuItem value={'Sant Kabir Nagar'}>Sant Kabir Nagar</MenuItem>
              <MenuItem value={'Shahjahanpur'}>Shahjahanpur</MenuItem>
              <MenuItem value={'Shamli'}>Shamli</MenuItem>
              <MenuItem value={'Shrawasti'}>Shrawasti</MenuItem>
              <MenuItem value={'Siddharthnagar'}>Siddharthnagar</MenuItem>
              <MenuItem value={'Sitapur'}>Sitapur</MenuItem>
              <MenuItem value={'Sonbhadra'}>Sonbhadra</MenuItem>
              <MenuItem value={'Sultanpur'}>Sultanpur</MenuItem>
              <MenuItem value={'Unnao'}>Unnao</MenuItem>
              <MenuItem value={'Varanasi'}>Varanasi</MenuItem>
            </Select>
          </Container >
          {outputData}
          <Container maxWidth="lg">
            <Button
              style={{marginBottom:15, marginTop:15}}
              variant="outlined"
              color="default"
              onClick={(e)=> props.click(districtName) }
            > Submit
            </Button >
          </Container>
          </Paper>
        </Grid>      
    </Container>
  );
}
