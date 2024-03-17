import { Link } from "react-router-dom"

function LeftSection() {
  return (
    <div className="groups pt-4 min-h-screen w-1/5 text-center">
        <div className="flex justify-between items-center mt-2 mr-6 text-sm p-1 bg-gray-200 hover:bg-gray-300">
            <div className="text-left">
            <span>Groups</span>
            </div>
            <div className=" text-xs hover:text-blue-700">
            <Link className="">
            <i className="fa-solid fa-plus"></i>
            Add
            </Link>
            </div>
        </div>

        <div className="text-left pl-6 pt-1">
            <ul>
                <Link>
                <li className="hover:bg-gray-200 pl-2 mr-9 mb-1"><i className="fa-solid fa-user-group mr-2 text-xs"></i>ABC</li>
                </Link>
                <Link>
                <li className="hover:bg-gray-200 pl-2 mr-9 mb-1"><i className="fa-solid fa-user-group mr-2 text-xs"></i>ABC</li>
                </Link>
                <Link>
                <li className="hover:bg-gray-200 pl-2 mr-9 mb-1"><i className="fa-solid fa-user-group mr-2 text-xs"></i>ABC</li>
                </Link>
                <Link>
                <li className="hover:bg-gray-200 pl-2 mr-9 mb-1"><i className="fa-solid fa-user-group mr-2 text-xs"></i>ABC</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default LeftSection