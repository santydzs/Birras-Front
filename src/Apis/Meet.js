import {get, post, put} from './FetchAPI/FetchAPI';

let baseToken = "Bearer "

export const Get = (id,token) => get('Meet/'+ id, {Authorization:baseToken.concat(token)});

export const Join = (Title, Userid, token) => post('Meet/unirse',{Title,Userid},{Authorization:baseToken.concat(token)})

export const Assist = (invitationId, token) => put('Meet/Assist/' + invitationId,{},{Authorization:baseToken.concat(token)})