import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img2.jpg";
// import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function Carousel() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("");
  useEffect(() => {
    const page = location.pathname.replace("/", "");
    setActivePage(page);
    if (page === "") {
      setActivePage("home");
    }
  }, [location.pathname]);

  function handleNavClick(target) {
    navigate(`/${target}`);
  }
  const data = [
    {
      title: "Charming Escapes:Where Comfort Meets Luxury",
      image: img1,
    },
    {
      title: "The Perfect Gataway:Relax and Unwind",
      image: img2,
    },
    {
      title: "Luxury Stays:Exerience Unmatched Hospatility",
      image: img3,
    },
  ];

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    cssEase: "cubic-bezier(0.47, 0, 0.745, 0.715)",
  };
  return (
    <div className="w-full  h-[35vh] md:h-[120vh] relative">

      <div className="w-full z-10 md:hidden flex justify-start mt-3 absolute cursor-pointer">
        {/* <img src={logo} alt="logo" className=" h-12" /> */}
        <img src={""} alt="logo" className=" h-12" />
      </div>
      {/* <div
        className="w-full z-10 md:hidden flex justify-end  pr-4 mt-2 absolute cursor-pointer"
        onClick={() => showSidebar(true)}
      >
        <img src={hamImg} alt="hamburger" className=" h-10" />
      </div> */}
      <div
        className="navbar absolute left-4 top-8 z-10 text-white font-bold w-[98%] h-20  md:flex flex-start items-center text-center hidden ">
        <div className="z-10 hidden md:flex justify-center cursor-pointer"
          onClick={()=>navigate("/home")}h-
        >
          <img src={logo} alt="logo" className=" h-24" />
        </div>
        <div className="z-10 hidden md:flex justify-center text-xl  w-[15%] ">
          Adity Residency Lodging and Boarding
        </div>
        <ul className="gap-12 flex text-xl font-normal m-auto">
          <li
            className={`cursor-pointer p-1 ${activePage === "home" ? "bg-black rounded-md  shadow-teal-500 shadow-md hover:bg-golden" : "bg-transparent"}`}
            onClick={() => handleNavClick("home")}

          >
            Home
          </li>
          <li
            className={`cursor-pointer p-1 ${activePage === "rooms" ? "bg-black rounded-md shadow-teal-500 shadow-md hover:bg-golden" : "bg-transparent"}`}
            onClick={() => handleNavClick("rooms")}
          >
            Rooms
          </li>
          <li
            className={`cursor-pointer p-1 ${activePage === "gallery" ? "bg-black rounded-md  shadow-teal-500 shadow-md hover:bg-golden" : "bg-transparent"}`}
            onClick={() => handleNavClick("gallery")}
          >
            Gallery
          </li>
          <li
            className={`cursor-pointer p-1 ${activePage === "about" ? "bg-black rounded-md  shadow-teal-500 shadow-md hover:bg-golden" : "bg-transparent"}`}
          // onClick={() => handleNavClick("about")}
          >
            <a href="/home#about">
              About Us
            </a>
          </li>
          <li
            className={`cursor-pointer p-1 ${activePage === "contact" ? "bg-black rounded-md  shadow-teal-500 shadow-md hover:bg-golden" : "bg-transparent"}`}

            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="w-full h-[35vh] md:h-[120vh] relative">
            <img
              src={item.image}
              alt="carousel"
              className="block w-full h-[35vh] md:h-[120vh] object-cover brightness-50"
            />
            <div className="absolute top-[45%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[85%] md:w-[70%]">
              <h1 className="font-extrabold md:font-bold text-white text-[26px]  md:text-[75px]">
                &quot;{item.title}&quot;
              </h1>
            </div>
            <button onClick={() => handleNavClick("mobilebooking")} className=" md:hidden absolute rounded-lg p-2 px-4 text-white bg-golden left-1/2 bottom-10 transform -translate-x-1/2 -translate-y-1">
              Book Now
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;