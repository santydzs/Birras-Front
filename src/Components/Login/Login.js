import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {loginFetch} from '../../Apis/Auth';

const Login = ({setAuth}) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    let history = useHistory();

    const callapi = () => {
        let promise = loginFetch(user, pass);

        promise.then(resp => resp.json().then(data => {
            setAuth(data);
            console.log(data);
            history.push('/main');
        }));
        promise.catch(error => console.log(error));
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
            <Grid item>
                <TextField id="standard-basic" label="Email" value={user} onChange={(e) => setUser(e.target.value)}/>
            </Grid>
            <Grid item>
                <TextField id="standard-basic" label="Passowrd" value={pass} onChange={(e) => setPass(e.target.value)}/>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={callapi}>
                    Acceder
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => history.push('/register')}>
                    Registrarse
                </Button>
            </Grid>
        </Grid>
    )
}

export default Login;
