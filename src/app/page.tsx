import Appetizers from "@/components/Appetizers"
import Curry from "@/components/Curry"
import Desserts from "@/components/Desserts"
import Dishes from "@/components/Dishes"
import Drinks from "@/components/Drinks"
import Header from "@/components/Header"

const Home = () => {
  return (
    <>
      <Header />
      <Appetizers />
      <Dishes />
      <Curry />
      <Desserts />
      <Drinks />
    </>
  )
}

export default Home