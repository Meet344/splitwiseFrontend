import { Link } from "react-router-dom"

function MiddleSection() {
  return (
    <div className="dashh w-3/5 min-h-screen shadow-2xl text-center pt-12">
      <div className=" bg-gray-200 pt-6 flex items-center justify-between px-5 pb-2 border-b-[1px] border-gray-300">
        <span className="text-2xl font-semibold">DashBoard</span>
        <div>
          <button className=" bg-orange-500 shadow-inner shadow-orange-600 rounded-md text-white px-3 py-2 mr-2">Add an expense</button>
          <button className=" bg-blue-200 shadow-inner shadow-blue-300 rounded-lg text-white px-3 py-2 ">Settle up</button>
        </div>
      </div>

      <div className="bg-gray-200 border-black py-2">
        <ul className="flex justify-between items-center text-center px-5 text-xs">
          <li className="w-1/3"><span>Total balance</span><br/><span className="text-green-500">+454545</span></li>
          <li className="border-l-[1px] border-gray-300 w-1/3"><span>Total balance</span><br/><span className="text-green-500">+454545</span></li>
          <li className="border-l-[1px] border-gray-300 w-1/3"><span>Total balance</span><br/><span className="text-green-500">+454545</span></li>
        </ul>
      </div>

      <div className="py-2 px-5">
        <div className="text-gray-400 font-semibold flex justify-between">
          <span>YOU OWE</span>
          <span>YOU ARE OWED</span>
        </div>

        <div className="flex">
          <div className="negatives w-1/2 text-left">
            <div className="py-4 text-gray-400 font-semibold">You do not Owe anything</div>
          </div>
          <div className="positives border-l-[1px] border-gray-300 text-left pl-5 py-2">
            <ul>
              <li>
                <Link className="flex items-center py-2">
                <i className="fa-solid fa-user text-3xl justify-center"></i>
                <div className="sender-detail ml-3">
                <span className="text-base ">Meet Thakkar</span>
                <span className="text-sm text-green-500 block">
                  owes you
                  <span className="text-base leading-3 ml-1">$400</span>
                </span>
                </div>
                </Link>
              </li>
              <li>
                <Link className="flex items-center py-2">
                <i className="fa-solid fa-user text-3xl justify-center"></i>
                <div className="sender-detail ml-3">
                <span className="text-base ">Meet Thakkar</span>
                <span className="text-sm text-green-500 block">
                  owes you
                  <span className="text-base leading-3 ml-1">$400</span>
                </span>
                </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MiddleSection