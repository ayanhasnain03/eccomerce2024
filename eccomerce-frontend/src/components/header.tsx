import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa"
import { Link } from "react-router-dom"
import { User } from "../types/types";


interface PropsType {
  user: User | null;
}
const Header = ({user}:PropsType) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const logoutHandler =()=>{
setisOpen(false)
  }
  return (
    <nav className="header">
        <Link onClick={()=>setisOpen((false))} to={"/"}>Home</Link>
        <Link onClick={()=>setisOpen((false))} to={"/search"}><FaSearch/></Link> 
        <Link onClick={()=>setisOpen((false))} to={"/cart"}><FaShoppingBag/></Link> 
        {
            user?._id? (
                <><button
                onClick={()=>setisOpen((prev)=>!prev)}><FaUser/></button>
                <dialog open={isOpen}><div className="">
                    {
                      user.role === "admin" && (
                        <Link onClick={()=>setisOpen((false))} to="/admin/dashboard">Admin</Link>
                      )
                    }
                    <Link onClick={()=>setisOpen((false))} to="/orders">Orders</Link>
                    <button onClick={logoutHandler}>
                        <FaSignOutAlt/>
                    </button>
                    </div></dialog>
                </>
            ):<Link to={"/login"}><FaSignInAlt/></Link>
        }
    </nav>
  )
}

export default Header