import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useHistory } from "react-router-dom";
import {GetRoles} from '../../Apis/Roles'
import {RegisterFetch} from '../../Apis/Auth'

const Register = ({setAuth}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [rolId, setRolId] = useState("");
    const [roles, setRoles] = useState([]);

    let history = useHistory();

    useEffect(() => {
        let promise = GetRoles();

        promise.then(resp => resp.json().then(data => {
            setRoles(data);
        }));
        promise.catch(error => console.log(error));
    }, [])

    const callapi = () =>{
        let promise = RegisterFetch({
            name,
            email,
            password: pass,
            rolId
        });
        promise.then(resp => resp.json().then(data => {
            setAuth(data);
            history.push('/main');
        }));
        promise.catch(error => console.log(error));
    }

    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item>
            <TextField id="standard-basic" label="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
        </Grid>
        <Grid item>
            <TextField id="standard-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Grid>
        <Grid item>
            <TextField id="standard-basic" label="Passowrd" value={pass} onChange={(e) => setPass(e.target.value)}/>
        </Grid>
        {roles && roles.length > 0 && <Grid item xs={6}>
            <InputLabel id="rol-label">Rol</InputLabel>
            <Select
                labelId="rol-label"
                id="rol"
                value={rolId}
                onChange={(e) => setRolId(e.target.value)}
                >{
                    roles.map((rol) =>
                        <MenuItem key={rol.id} value={rol.id}>{rol.title}</MenuItem>
                    )
                }
            </Select>
        </Grid>}
        <Grid item>
            <Button variant="contained" color="primary" onClick={callapi}>
                Registrarse
            </Button>
        </Grid>
    </Grid>
    )
}

export default Register
