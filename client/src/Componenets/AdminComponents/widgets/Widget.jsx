import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import UpdownInput from "../UpdownInput";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "../../../Hooks/axios";
import { useState } from "react";

const Widget = ({ type }) => {
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const [input, setInput] = useState({})
    useEffect(() => {
        switch (type) {
            case "allUsers":
                axios.get(`/api/users/numbers`, {
                    headers: {
                        token: "Bearer " + cookies.token
                    }
                }).then(response => setInput(response.data)).catch(err => console.log(err))
                break;

            default: return

        }


    }, [type])
    console.log(input);

    let data;
    switch (type) {
        case "allUsers": data = {
            title: "New Custumer Today",
            isMoney: false,
            link: "See All Users",
            count: "input[0].total",
            icon: <PersonOutlineIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />,

        };
            break;
        case "orders": data = {
            title: "Orders",
            isMoney: false,
            link: "See All Orders",
            icon: <CreditCardIcon className="icon" style={{
                color: "green", backgroundColor: 'rgba(0, 128, 0, 0.419)'
            }} />,

        };
            break;
        case "earnings": data = {
            title: "Earnings",
            isMoney: true,
            link: "See All Earnings",
            icon: <MonetizationOnIcon className="icon" style={{ color: "purple", backgroundColor: 'rgba(128, 0, 128, 0.328)' }} />,

        };
            break;
        case "balance": data = {
            title: "Balance",
            isMoney: true,
            link: "See All Balance",
            icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
                color: "orangered", backgroundColor: 'rgba(255, 68, 0, 0.324)'
            }} />
        };
            break;
        default:
            break;

    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{data.count}</span>
                <Link to={`/admin/${type}`} className="link-wrapper">
                    <span className="link">{data.link}</span>
                </Link>

            </div>
            <div className="right">
                <UpdownInput input={"20%"} sign={"positive"} />
                {data.icon}

            </div>
        </div>
    )
}

export default Widget