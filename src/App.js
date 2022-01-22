import {Container, AppBar, Typography, Grid, Grow} from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";
import useStyles from "./styled";
function App() {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Best Moments
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='moments'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing='3'>
            <Grid xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
