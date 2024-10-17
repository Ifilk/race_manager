import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {LoginBox} from "../components/LoginBox.jsx";
import {verifyUsernameAndPassword} from "../api.js";
import {useNavigate} from "react-router";

export function LoginPage() {
    const navigate = useNavigate();
    const verifyUnameAndPwd = ({username, password}) => {
        if(verifyUsernameAndPassword(username, password)){
            alert(`欢迎 ${username}`)
            navigate("/races");
        } else
            alert(`用户名或者密码错误!`)
    }
    return (
        <>
            <Header/>
            <LoginBox onSubmit={verifyUnameAndPwd}/>
            <Footer/>
        </>
    )
}