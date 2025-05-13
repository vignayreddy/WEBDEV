import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert } from '@mui/material';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';


function App() {
  // let handleClick = function (){
  //   console.log("Button Was Clicked");
  // }
 
  return (<>
  {/* <h1>Material UI Demo</h1> */}
  {/* <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon/>}>Delete</Button>
  <Button variant="contained" onClick={handleClick} disabled >Click me!</Button>
  <Button variant="contained" onClick={handleClick}  color="success">Click me!</Button>
  <Button size= "large"variant="contained" onClick={handleClick}  color="success">Click me!</Button> */}
{/* <Alert severity="error">Delete option is given</Alert> */}
  <SearchBox/>
  <InfoBox/>
    </>
  );
}

export default App
