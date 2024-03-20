import LeftSection from "../components/LeftSection"
import MiddleSection from "../components/MiddleSection"
import RightSection from "../components/RightSection"

function Home() {
  return (
    <div className="relative w-screen -z-10">
      <div className="w-3/4 flex justify-between items-center mx-auto overflow-visible relative">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </div>
  )
}

export default Home