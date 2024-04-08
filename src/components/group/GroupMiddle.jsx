import billImage from "../../assets/bill-image.png";

const GroupMiddle = () => {
  return (
    <div className="dashh w-3/5 min-h-screen shadow-2xl text-center pt-12">
      <div className=" bg-gray-200 pt-6 flex items-center justify-between px-5 pb-4 border-b-[1px] border-gray-300">
        <span className="text-2xl font-semibold">DashBoard</span>
        <div>
          <button className=" bg-orange-500 shadow-inner shadow-orange-600 rounded-md text-white px-3 py-2 mr-2">
            Add an expense
          </button>
          <button className=" bg-blue-200 shadow-inner shadow-blue-300 rounded-lg text-white px-3 py-2 ">
            Settle up
          </button>
        </div>
      </div>

      <div className="expenses">
        <ul>
          <li className="border-b-2 hover:bg-gray-100">
            <div className="main-block inline-block w-1/2 text-left px-3 text-ellipsis py-[6px] hover:underline">
              <div className="date text-xs text-gray-500 font-semibold opacity-70 inline-block mr-3">
                APR
                <div className="num text-xl -mt-1">03</div>
              </div>
              <img src={billImage} className="inline-block w-[35px] h-[35px] aspect-auto align-text-bottom mr-3" />
              <div className="header inline-block align-top mt-2 pb-1">
                <span className="text-lg font-semibold">Test</span>
              </div>
            </div>
            <div className="cost inline-block w-1/4 text-right text-sm font-semibold text-ellipsis px-2 py-1">
              <span className="text-gray-500 opacity-70 block">user</span>
              <span className="text-base -mt-2">INR20.20</span>
            </div>
            <div className="you inline-block w-1/4 text-left text-ellipsis px-3 text-sm font-semibold py-1">
              <span className="text-gray-500 opacity-70">user lent</span> 
              <span className="inline-block text-base text-[#5bc5a7] -mt-2">INR50.00</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GroupMiddle;
