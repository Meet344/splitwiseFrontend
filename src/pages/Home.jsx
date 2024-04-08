import LeftSection from "../components/LeftSection"
import MiddleDash from "../components/dashboard/MiddleDash"
import RightDash from "../components/dashboard/RightDash"

function Home() {
  return (
    <div className="w-screen">
      <div className="w-3/5 flex justify-between items-center mx-auto overflow-visible container relative">
        <LeftSection />
        <MiddleDash />
        <RightDash />
      </div>
    </div>
  )
}

export default Home