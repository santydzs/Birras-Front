import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Login = ({loginApi}) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    let history = useHistory();

    const callapi = () => {
        var promise = loginApi(user, pass);

        promise.then(resp => console.log(resp));
        promise.catch(error => console.log(error));

        console.log(user, pass);
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
