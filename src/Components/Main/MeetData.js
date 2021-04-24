import React,{useContext, useEffect} from 'react'
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import {AppContext} from '../../Contexts/AppContext'

const MeetData = ({notifications, handleClose, open}) => {
    const context = useContext(AppContext)

    useEffect(() =>{
        if(notifications) console.log(notifications);
    }, [notifications])

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <MuiDialogContent>
                {notifications && notifications > 0 ? <list>
                    {notifications.map((noti) =>{
                        <ul><Typography>{noti.text}</Typography></ul>
                    })}
                </list> : <Typography>No Hay Notificaciones</Typography>}
            </MuiDialogContent>
            <MuiDialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cerrar
                </Button>
            </MuiDialogActions>
      </Dialog>
    )
}

export default MeetData
