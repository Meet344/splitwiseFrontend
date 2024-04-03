import memberImage from "../assets/group-members.png";
import userImage from "../assets/user-dp.png";
import splitwiseImage from "../assets/splitwise-group-photo.svg";
import { useRef, useState } from "react";
import { createGroup } from "../features/groupSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

let counter = 1;
const NewGroup = () => {
  const [array, setArray] = useState([1]);

  const addPerson = (e) => {
    e.preventDefault();
    setArray((prev) => [...prev, counter++]);
  };

  const removePerson = (e, idx) => {
    e.preventDefault();
    var arrayCopy = [...array];
    arrayCopy.splice(idx, 1); //remove the the person at the specific index
    setArray(arrayCopy);
  };

  const ref = useRef(null);

  const [group, setGroup] = useState({
    title: "",
    members: [],
  });

  const onTitleChange = (e)=>{
    ref.current.className = "secondary-input";
    setGroup({...group, [e.target.name]: e.target.value})
  }

  const onChange = (e,index)=>{
    // console.log('index: ' + index);
    // console.log('property name: '+ e.target.name);

    const newgroup = group;
    const newMembers = newgroup.members
    newMembers[index-1] = e.target.value;
    setGroup({...group, members:newMembers})
    // console.log(group);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGroup(group))
    console.log("New group created successfully");
    navigate("/")
  };
  return (
    <div className="newGroup-main pt-12 text-center container">
      <div className="flex justify-center w-auto max-w-[700px] mx-auto my-14">
        <div className="mr-4">
          <img
            src={splitwiseImage}
            className="w-[220px] h-[220px] aspect-auto"
          />
        </div>
        <div className="content-block text-left w-full max-w-[400px] float-left pl-4">
          <h2 className="text-lg text-gray-600 font-semibold opacity-70">
            Start a New Group
          </h2>
          <form>
            <div className="text-2xl pt-3 pb-2">
              My Group shall be called ...
            </div>
            <input
              type="text"
              className="border-[1px] border-[#ccc] text-2xl h-11 p-2 mb-5 w-[100%] "
              id="title"
              name="title"
              value={group.title}
              placeholder="title"
              onChange={onTitleChange}
            />

            <div className="secondary-input hidden" ref={ref}>
              <hr className=" border-t-2 border-[#eeeeee] mb-4" />
              <div className="group-detail">
                <h2 className="text-lg text-gray-600 font-semibold opacity-70">
                  Group Members
                </h2>
                <div className="fields userField mt-3">
                  <img
                    src={userImage}
                    className="h-7 w-7 border rounded-full inline mr-1"
                  />
                  Meet Thakkar (
                  <em className="">meetprakash342004@gmail.com</em>)
                </div>

                {array.map((item, index) => (
                  <div className="fields mt-3" key={item}>
                    <img
                      src={memberImage}
                      className="h-7 w-7 border rounded-full inline mr-1"
                    />
                    <input
                      type="email"
                      className="border-[1px] border-[#ccc] rounded align-middle p-1"
                      id="members"
                      name="members"
                      value={group.members[item-1] || ""}
                      placeholder="members"
                      onChange={(e)=> onChange(e,item)}
                    />
                    <button onClick={(e) => removePerson(e, index)}>
                      <i className="fa-solid fa-xmark align-middle ml-2 text-red-700"></i>
                    </button>
                  </div>
                ))}

                <div className="my-3">
                  <a
                    className="text-blue-600 hover:text-blue-400 cursor-pointer"
                    onClick={addPerson}
                  >
                    + Add More Persons
                  </a>
                </div>
              </div>
            </div>
            <button className="text-xl bg-orange-500 shadow-inner shadow-orange-600 rounded-md text-white px-3 py-2 mr-2" onClick={handleSubmit}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewGroup;
