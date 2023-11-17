import { RiUser3Fill } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

import { IoIosAddCircle } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";


const navs = [
    {
        name : "User Details",
        icon : <RiUser3Fill />,
        iconOutine : <RiUser3Line/>,
        path : "/"
    },
    {
        name : "User Creation",
        icon : <IoIosAddCircle/>,
        iconOutine : <IoIosAddCircleOutline/>,
        path : "/create"

    },
   
]
export default navs;