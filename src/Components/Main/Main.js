import React, {useEffect, useContext, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {Get, Join, Assist} from '../../Apis/Meet'
import {AppContext} from '../../Contexts/AppContext'
import MeetData from './MeetData'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Main = () => {
  const [invitations, setInvitations] = useState([]);
  const [newMeet, setNewMeet] = useState("");
  const [notifications, setNotifications] = useState([]);
  const context = useContext(AppContext)
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => GetMeets(), []);

  const handleClickOpen = (invitation) => {
    setNotifications(invitation.meet.notifications);
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const CheckAssist = (id) =>{
    let promise = Assist(id,context.authResult.token);

    promise.then(resp => resp.json().then(data => GetMeets()));
    promise.catch(error => console.log(error));
  }

  const GetMeets = () =>{
    let promise = Get(context.user.id,context.authResult.token);

    promise.then(resp => resp.json().then(data => setInvitations(data) ));
    promise.catch(error => console.log(error));
  }

  const join = ()=>{
    let promise = Join(newMeet,context.user.id,context.authResult.token);

    promise.then(resp => resp.json().then(data => GetMeets()));
    promise.catch(error => console.log(error));
  }

  return (
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <TextField id="standard-basic" label="Inscribirse" value={newMeet} onChange={(e) => setNewMeet(e.target.value)}/>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" size="small" onClick={() => join()}>
                  Unirse
              </Button>
            </Grid>
          </Grid>
          {
            invitations.map((invitation) =>
            <Card key={invitation.id} className={classes.root} variant="outlined">
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>{invitation.meet.title}</Typography>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>Fecha: {invitation.meet.date}</Typography>
                  <Divider />
                  <Typography className={classes.title} color="textSecondary" gutterBottom>Temperatura: {invitation.meet.temp}</Typography>
              </CardContent>
              <CardActions>
                  <Button variant="contained" color="primary" size="small" onClick={() => handleClickOpen(invitation)}>Ver Mas</Button>
                  {!invitation.attended ? 
                      <Button variant="contained" color='secondary' size="small" onClick={() => CheckAssist(invitation.id)}>No Asistio</Button> :
                      <Button disabled variant="contained" size="small">Asistio</Button>}
              </CardActions>
            </Card>
          )}
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            {context.user.rol.title === 'admin' && <Grid item>
                <Button variant="contained" color="primary" onClick={() => console.log("Se crea la meet")}>
                    Crear Meet
                </Button>
            </Grid>}
          </Grid>
          <MeetData notifications={notifications} handleClose={handleClose} open={open}></MeetData>
      </Grid>
  )
}

export default Main
