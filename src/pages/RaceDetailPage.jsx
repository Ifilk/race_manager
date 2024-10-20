import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRaceByUid, getAllMembers, getTeamsByUids } from "../api.js";
import RaceDetailBox from "../components/RaceDetailBox.jsx"

export default function RaceDetailPage() {
    const { uid } = useParams(); // 用于从当前 URL 中提取参数。这些参数通常是在路由定义中动态部分的值。例如，如果你有一个路由路径 /race/:uid，那么 useParams 可以帮助你获取 uid 的值。
    const [race, setRace] = useState(null);
    const [members, setMembers] = useState([]);
    const [teams, setTeams] = useState([]);
    // 在组件挂载时获取竞赛信息、成员信息和队伍信息，并在 uid 发生变化时重新获取数据。
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
