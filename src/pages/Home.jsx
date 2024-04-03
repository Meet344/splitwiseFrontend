import LeftSection from "../components/LeftSection"
import MiddleSection from "../components/MiddleSection"
import RightSection from "../components/RightSection"

function Home() {
  return (
    <div className="w-screen">
      <div className="w-3/4 flex justify-between items-center mx-auto overflow-visible container relative">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </div>
  )
}

export default Home