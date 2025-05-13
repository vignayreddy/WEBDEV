import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function InfoBox()
{

    const INIT_URL = "data:image/jpeg;base64,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";

    let info = {
        city:"Delhi",
        feelslike: 24.84,
        temp:25.05,
        tempMin:25.5,
        tempMax: 25.5,
        humidity: 60,
        weather:"haze",
    }
    return (
        <div className="InfoBox" >
           
            <h1>WeatherInfo-{info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           <div>
            
           </div>
                </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    )

}