/* Node Modules */
import axios from 'axios';
import * as qs from 'qs';

/* Return Type Keyword Constants */
export const LOGIN = 'LOGIN';
export const GETCLASSES = 'GETCLASSES';
export const GETTEAMS = 'GETTEAMS';
export const GETSTUDENTINTEAM = 'GETSTUDENTINTEAM';
export const GETSTUDENT = 'GETSTUDENT';


/* Root URL for API calls */
export function instrLogin(props) {
  const request = axios.post('/signIn/', qs.stringify(props));
  return {
    type: LOGIN,
    payload: request
  };
};
