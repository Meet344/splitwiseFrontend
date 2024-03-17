import LeftSection from "../components/LeftSection"
import MiddleSection from "../components/MiddleSection"
import RightSection from "../components/RightSection"

function Home() {
  return (
    <>
      <div className="flex w-full justify-between items-center px-72 pt-10">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </>
  )
}

export default Home