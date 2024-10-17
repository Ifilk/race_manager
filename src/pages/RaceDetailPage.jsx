import {useParams} from "react-router";

export default function RaceDetailPage(props) {
    const {uid} = useParams()

    return (
        <>
            竞赛{uid}详细页面
        </>
    )
}