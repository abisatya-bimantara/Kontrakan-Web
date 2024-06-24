import Navbar from "../../components/Navbar/Navbar"
import Homepage from "../../components/Header/Homepage"
import Layanan from "../../components/Layanan/Layanan"
import Pencarian from "../../components/Pencarian/Pencarian"
import Rentalisting from "../../components/RentalListing/RentalListing"
import Footer from "../../components/Footer/Footer"

const Beranda = () => {
  return (
    <div>
    <Navbar/>
    <Homepage />
    <Layanan/>
    <Pencarian/>
    <Rentalisting/>
    <Footer/>
    </div>
  )
}

export default Beranda
