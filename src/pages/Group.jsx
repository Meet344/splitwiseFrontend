import LeftSection from "../components/LeftSection"
import GroupRight from "../components/group/GroupRight"
import GroupMiddle from "../components/group/GroupMiddle"

function Group() {
  return (
    <div className="w-screen">
      <div className="w-3/5 flex justify-between items-center mx-auto overflow-visible container relative">
        <LeftSection />
        <GroupMiddle />
        <GroupRight />
      </div>
    </div>
  )
}

export default Group