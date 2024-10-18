import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import RegisterBox from "../components/RegisterBox.jsx";
import {useNavigate} from "react-router"

export function RegisterPage() {
    const navigate = useNavigate();
    const verifyRegister = ({username, password, password2}) => {
        if(password != password2) {
            alert(`不是哥们，密码前后两次不对啊`)   
        }
        else if(username == "" || password == "" || password2 == ""){
            alert(`哥们，用户名和密码不能为空啊`)
        }
        else{
            navigate("/")
        }
    }
    return (
        <>
            <Header />
            <RegisterBox onSubmit={verifyRegister}/>
            <Footer />
        </>
    )
}