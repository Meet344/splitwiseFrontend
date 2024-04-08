import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="relative">
        <nav className=" bg-blue-200 fixed top-0 z-50 w-full px-72 pt-1 pb-1 flex justify-between items-center">
            {/* LOGO */}
            <div className="Logo">
            <Link className="flex items-center" to="/">
            <i className="fa-brands fa-skype text-4xl mr-2 "></i>
            <span className="text-xl font-bold">SplitWise</span>
            </Link>
            </div>

            {/* middle section */}
            <div>
              <ul className="flex gap-8">
                <li className="hover:cursor-pointer hover:shadow-lg"><Link to="/" >Home</Link></li>
                <li>|</li>
                <li className="hover:cursor-pointer hover:shadow-lg"><Link to="/group" >group</Link></li>
                <li>|</li>
                <li className="hover:cursor-pointer hover:shadow-lg"><Link to="/about" >about</Link></li>
              </ul>
            </div>

            {/* User section */}
            <button>
            <div className="flex justify-between gap-3 items-center hover:cursor-pointer hover:shadow-lg">
            <i className="fa-solid fa-user text-2xl flex items-center justify-center rounded-full "></i>
            <span>Meet Thakkar</span>
            <i className="fa-solid fa-caret-down text-lg"></i>
            </div>
            </button>
        </nav>
    </div>
  )
}

export default Navbar