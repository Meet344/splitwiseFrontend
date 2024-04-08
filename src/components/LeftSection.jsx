
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import { getGroups } from "../features/groupSlice";
import React from "react";

const LeftSection = ()=>{

  let location = useLocation();
  React.useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  
  const groups = useSelector(state => state.groups);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getGroups());
  }, []);
  
  console.log(groups);

    return (
    <div className="groups pt-12 pr-5 min-h-screen w-1/5 text-center">

      
        <div className={`dashboard-btn text-left text-md mt-3 border-l-4 ${location.pathname==='/' ? "border-blue-300 text-blue-300" : "border-transparent"}`}>
            <Link>
            <ul>
            <li className=" py-1 pl-2 mb-1 pr-8 hover:bg-gray-200"><i className="fa-brands fa-skype text-xl mr-2 "></i>ABC</li>
            </ul>
            </Link>
        </div>
        <div className="mt-2">

        
        <div className="flex justify-between items-center text-sm p-1 ml-1 bg-gray-100 hover:bg-gray-300">
            <div className="text-left">
            <span>Groups</span>
            </div>
            <div className="text-xs ">
            <Link className="text-blue-500 hover:text-red-700 hover:cursor-pointer" to={"/creategroup"}>
            <i className="fa-solid fa-plus"></i>
            Add
            </Link>
            </div>
        </div>

        <div className="text-left text-sm">
            <ul>
                {groups.map((group)=> {
                  return (
                <Link key={group._id} to={`/group/${group._id}`}>
                <li key={group._id} className={`hover:bg-gray-300 pl-2 py-1 border-l-4 ${location.pathname==="/group/"+group._id ? "border-blue-300 text-blue-300" : "border-transparent"}`}><i className="fa-solid fa-user-group mr-2 text-xs"></i>{group.title}</li>
                </Link>
                  )
                })}
                
            </ul>
        </div>
        </div>
    </div>
  )
}

export default LeftSection