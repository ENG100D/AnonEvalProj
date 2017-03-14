/* Node Modules */
import axios from 'axios';
import * as qs from 'qs';

/* Return Type Keyword Constants */
export const LOGIN = 'LOGIN';
export const GETCLASSES = 'GETCLASSES';
export const GETTEAMS = 'GETTEAMS';
export const GETTEAMDATA = 'GETTEAMDATA';
export const GETSTUDENT = 'GETSTUDENT';


/* Root URL for API calls */
export function instrLogin(props) {
  const request = axios.post('/signIn/', qs.stringify(props));
  return {
    type: LOGIN,
    payload: request
  };
};

export function getClasses() {
  const request = axios.get('/getListOfClasses/');

  return {
    type: GETCLASSES,
    payload: request
  };
};

export function getTeams(classItem) {
  var param = {
    classNumber: classItem.classItem
  };

  const request = axios.post('/getListOfTeams/', qs.stringify(param));

  return {
    type: GETTEAMS,
    payload: request
  };
};

export function getTeamData(classItem, team) {
  var param = {
    teamNumber: team,
    classNumber: classItem
  };


  const request = axios.post('/getTeamData/', qs.stringify(param));

  return {
    type: GETTEAMDATA,
    payload: request
  };
};
