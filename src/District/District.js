import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
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

const district = (props) => {
  let outputData = null;
  
  if(props.loading)
  {
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
              <TableCell component="th" scope="row">
                {props.active}
              </TableCell>
              <TableCell >{props.recovered}</TableCell>
              <TableCell >{props.deaths}</TableCell>
              <TableCell >{props.total}</TableCell>
              
            </TableRow>
    
        </TableBody>
      </Table>
    </TableContainer>

      </Container>
    )
  }
  return (
    <Container maxWidth = "lg" style={{textAlign:"center"}} >
      <Grid item xs={12}>
        <Paper xs={12} style={{textAlign:"center",margin:10}} >
          <Container maxWidth="lg">
            <TextField
              style={{marginTop:10}}
              id="input"
              label="District"
            />
          </Container >
          {outputData}
          <Container maxWidth="lg">
            <Button
              style={{marginBottom:15, marginTop:15}}
              variant="outlined"
              color="default"
              onClick={ props.click }
            > Submit
            </Button >
          </Container>
          </Paper>
        </Grid>
      
    </Container>
  );
};

export default district;