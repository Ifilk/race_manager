import React from "react";
import { getMembersByUids } from "../api.js";

// eslint-disable-next-line react/prop-types
export default function RaceDetailBox({ race, members, teams }) {
    // 获取所有参赛队伍的成员 UID
    // eslint-disable-next-line react/prop-types
    const participantMembersUids = teams.flatMap(team => team.members);
    // 根据 UID 获取对应的成员
    const participantMembers = getMembersByUids(participantMembersUids);

    return (
        <div>
            <div className="card mt-3">
                <div className="card-body">
                    {/* eslint-disable-next-line react/prop-types */}
                    <h5 className="card-title">{race.race_name}</h5>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="card-text"><strong>报名日期:</strong> {race.apply_date}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="card-text"><strong>开始日期:</strong> {race.start_date}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="card-text"><strong>结束日期:</strong> {race.end_date}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="card-text"><strong>赞助商:</strong> {race.sponsor}</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h5>所有本次比赛成员</h5>
                    <ul className="list-group">
                    {/* eslint-disable-next-line react/prop-types */}
                        {participantMembers.map(member => (
                            <li key={member.uid} className="list-group-item">{member.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h5>参赛队伍</h5>
                    <ul className="list-group">
                        {/* eslint-disable-next-line react/prop-types */}
                        {teams.map(team => (
                            <li key={team.uid} className="list-group-item">
                                {team.team_name} (隶属于: {team.affiliate})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
