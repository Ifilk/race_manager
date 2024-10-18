import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRaceByUid, getAllMembers, getTeamsByUids } from "../api.js";
import RaceDetailBox from "../components/RaceDetailBox.jsx"

export default function RaceDetailPage() {
    const { uid } = useParams();
    const [race, setRace] = useState(null);
    const [members, setMembers] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchedRace = getRaceByUid(uid);
        if (fetchedRace) {
            setRace(fetchedRace);
            setTeams(getTeamsByUids(fetchedRace.participants)); // 根据参赛队伍 UID 获取队伍信息
        }
        setMembers(getAllMembers());
    }, [uid]);

    return (
        <>
            <h2>竞赛 {uid} 详细页面</h2>
            {race ? <RaceDetailBox race={race} members={members} teams={teams} /> : <p>加载中...</p>}
        </>
    );
}
