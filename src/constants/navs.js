import { RiUser3Fill } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

import { IoIosAddCircle } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";


const navs = [
    {   id:0,
        name : "User Details",
        icon : <RiUser3Fill />,
        iconOutine : <RiUser3Line/>,
        path : "/"
    },
    {id:1,
        name : "User Creation",
        icon : <IoIosAddCircle/>,
        iconOutine : <IoIosAddCircleOutline/>,
        path : "/create"

    },
   
]
export default navs;