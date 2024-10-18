import React, {useEffect, useState} from "react"
import { getAllRaces } from "../api"
import RaceDetailBox from "../components/RaceDetailBox"
import RaceManagementBox from "../components/RaceManagementBox";
import Footer from "../components/Footer";

export default function RaceManagementPage() {

    return(
        <>
            <h2>竞赛管理页面</h2>
            <RaceManagementBox />
            <Footer/>
        </>
    );
}