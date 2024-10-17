import members from './assets/member_list.json';
import races from './assets/race_list.json';
import teams from './assets/team_list.json';

export function getMemberByUid(uid){
    return members.filter(member => member.uid === uid)[0];
}

export function getRaceByUid(uid){
    return races.filter(race => race.uid === uid)[0];
}

export function getTeamByUid(uid){
    return teams.filter(team => team.uid === uid)[0];
}

export function getAllRaces(){
    return races;
}

export function getAllMembers() {
    return members;
}

export function getAllTeams(){
    return teams;
}

export function verifyUsernameAndPassword(username, password){
    return username === 'administrator' && password === 'administrator';
}