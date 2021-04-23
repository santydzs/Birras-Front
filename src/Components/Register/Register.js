import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';

const Register = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [rolId, setRolId] = useState("");

    const callapi = () =>{
        console.log('se registro');
    }

    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item>
            <TextField id="standard-basic" label="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
        </Grid>
        <Grid item>
            <TextField id="standard-basic" label="Email" value={user} onChange={(e) => setUser(e.target.value)}/>
        </Grid>
        <Grid item>
            <TextField id="standard-basic" label="Passowrd" value={pass} onChange={(e) => setPass(e.target.value)}/>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary" onClick={callapi}>
                Registrarse
            </Button>
        </Grid>
    </Grid>
    )
}

export default Register
