import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/navbar"
import SearchHotel from "./search/SearchHotel"

function Hotel() {
  return (
    <div>
      <Navbar />
      <SearchHotel />
      <Footer />
    </div>
  )
}

export default Hotel