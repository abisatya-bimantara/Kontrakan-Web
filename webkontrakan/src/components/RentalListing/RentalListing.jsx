import PropTypes from "prop-types";
    import '../RentalListing/RentalListing.css'
    

    const ListingCard = ({ listing }) => (
    <div className="listing-card">
        <img src={listing.imgSrc} alt={listing.name} />
        <div className="listing-details">
        <h2>{listing.name}</h2>
        <div className="rating">
            {"★".repeat(listing.rating)}
            {"☆".repeat(5 - listing.rating)}
        </div>
        <p>{listing.location}</p>
        <p>{listing.price}</p>
        <p>{listing.status}</p>
        </div>
        <button className="wishlist-btn"></button>
    </div>
    );

    ListingCard.propTypes = {
    listing: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    }).isRequired,
    };

    const daftarProperti = [
    {
        id: 1,
        name: "Kontrakan Incredible",
        price: "12.000.000/tahun",
        status: "Kosong",
        rating: 4,
        location: "Kec. Aljibarang",
        imgSrc: "/src/assets/rumah/rumah_incri.svg",
    },
    {
        id: 2,
        name: "Kontrakan Ajimas",
        price: "20.000.000/tahun",
        status: "Tersisi",
        rating: 5,
        location: "Kec. Aljibarang",
        imgSrc: "/src/assets/rumah/rumah 2.jpeg",
    },
    {
        id: 3,
        name: "Kontrakan Pak Kasmand",
        price: "18.000.000/tahun",
        status: "Kosong",
        rating: 4,
        location: "Kec. Aljibarang",
        imgSrc: "/src/assets/rumah/rumah 1.jpeg",
    },
    {
        id: 4,
        name: "Kontrakan Tiara",
        price: "13.000.000/tahun",
        status: "Kosong",
        rating: 5,
        location: "Kec. Aljibarang",
        imgSrc: "/src/assets/rumah/rumahtiara.svg",
    },
    {
        id: 5,
        name: "Kontrakan Akai",
        price: "12.000.000/tahun",
        status: "Kosong",
        rating: 4,
        location: "Kec. Aljibarang",
        imgSrc: "/src/assets/rumah/rumah 3.jpeg",
    },
    {
        id: 6,
        name: "Kontrakan Pak Kasmand",
        price: "18.000.000/tahun",
        status: "Kosong",
        rating: 4,
        location: "Kec. Aljibarang",
        imgSrc: "/src/assets/rumah/rumahpakkasman2.svg",
    },
    ];

    const RentalListing = () => (
        <>
        <div className="container-rental" id="rental">      
        <div className="fieldset">
            <b className="title">Urutkan</b>
            <div className="section">
                <button className="button active">Terdekat</button>
                <button className="button">Terbaru</button>
            </div>
            <div className="pagination">
                <span className="txt">
                    <span>1</span>
                    <span className="span">/14</span>
                </span>
            <img className="link-icon" alt="Previous" src="/src/assets/iconn/kiri.svg" />
            <img className="link-icon1" alt="Next" src="/src/assets/iconn/kanan.svg" />
        </div>
        </div>

    <div className="grid">
        <div className="listing-grid">
        {daftarProperti.map((properti) => (
            <ListingCard key={properti.id} listing={properti} />
        ))}
        </div>
    </div>
    <ul className="Navigation">
        <li className="disabled"><a href="#" className="arrow">&lt;</a></li>
        <li className="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#" className="arrow">&gt;</a></li>
    </ul>
        
    </div>
    </>
);

export default RentalListing;