import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useState } from "react";
// import logo from "../assets/logoBlack.png";
// import dashImg from "../assets/dashboard.png";
// import hamIcon from "../assets/hamIcon.png";
// import notification from "../assets/notification.png";
// import usflag from "../assets/us-flag.png";
// import power from "../assets/power.png";
// import feedbackbg from "../assets/feedbackbg.png";
// import avatar from "../assets/avatar.png";
// import downArrow from "../assets/downArrow.png";
// import per1 from "../assets/per1.png";
// import per2 from "../assets/per2.png";
// import per3 from "../assets/per3.png";
import ChartBoi from "./ChartBoi";
import BookingTable from "./BookingTable";
import { fetchRoomDetails, fetchTotalSales } from "./HandleAdminRoutes";
const Dashboard = () => {
  const [notiCount, setNotiCount] = useState(5);
  const [userList, setUserList] = useState([]);
  const [sidebar, showSidebar] = useState(true);
  const [notifications, showNotifications] = useState(false);
  const [languages, showLanguages] = useState(false);
  const [accounts, showAccounts] = useState(false);
  const [totalSales, setTotalSales] = useState(0);
  const [availableRooms, setAvailableRooms] = useState(0);
  const [username, setUsername] = useState(localStorage.getItem('username'));
  useEffect(()=>{
    setUserList([localStorage.getItem('username')]);
    fetchTotalSales().then((data)=>{
      // console.log('Total Sales:',data);
      setTotalSales(data);
    }).catch((error)=>{
      console.log('Error fetching total sales:',error);
    })
    fetchRoomDetails().then((data)=>{
      
      setAvailableRooms(data[0].availableRooms+data[1].availableRooms);

    }).catch((error)=>{
      console.log('Error fetching room details:',error);
    })

  },[])
  
  const navigate = useNavigate()

  function isTokenExpired() {
    const expirationDate = new Date(localStorage.getItem('tokenExpiration'));
    return new Date() > expirationDate;
 }
  function handleLogout() {
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('username');
    navigate('/login')
  }

  useEffect(() => {
    if (isTokenExpired()) {
      handleLogout()
    }
  }, [notiCount]);

  return (
    <div className="grid grid-cols-16">
      <div
        className={`sidebar ${
          sidebar ? "col-span-3" : "col-span-1"
        } h-full flex flex-col items-center justify-between`}
      >
        <div className="w-full flex flex-col items-center gap-5 cursor-pointer"
        onClick={()=>navigate('/home')}
        >
          
          <img src={logo} className="h-[60px] w-[110px]" />
          <div
            className={`bg-golden rounded-lg text-white gap-4 flex items-center p-4 ${
              sidebar ? "pl-10 pr-20" : ""
            } `}
          >
            <img src={dashImg} className="h-5 w-5" />
            {sidebar && <p>Dashboard</p>}
          </div>
        </div>
        <div className="flex items-center gap-2 font-semibold mb-6 cursor-pointer"
          onClick={handleLogout}
        >
          <img src={power} alt="" className="h-5 w-5" />
          <p>Logout</p>
        </div>
      </div>
      <div
        className={`${
          sidebar ? "col-span-13" : "col-span-15"
        } h-[100vh]  overflow-y-auto`}
      >
        <div className="navigation grid grid-cols-2 p-2">
          <div className="col-span-1 flex gap-10 p-3 items-center ">
            <img
              src={hamIcon}
              className="h-8 w-8 ml-3 cursorPointer"
              onClick={() => showSidebar(!sidebar)}
            />
            <SearchBar />
          </div>
          <div className="col-span-1 flex justify-end">
            {/* notification */}
            <div className="bell relative flex items-center mx-4 cursorPointer ">
              {notiCount > 0 && (
                <div className="absolute p-[2px] px-[6px]   rounded-full bg-red-500 text-xs text-white top-2 right-0">
                  {notiCount}
                </div>
              )}
              <img src={notification} alt="notification" className="h-8 w-8" />
            </div>

            {/* country */}
            <div className="flex items-center mx-4 gap-5">
              <img src={usflag} className="h-8" />
              <div className="drop flex gap-3 items-center cursorPointer">
                <p>English</p>
                <img
                  src={downArrow}
                  className="h-2 w-3  rounded-full "
                />
              </div>
            </div>

            {/* profile */}
            <div className="dropdown relative cursorPointer list  flex gap-4  p-2 mr-10 items-center rounded-md">
            {true && (
                  <div className="min-h-20 w-48 bg-white absolute right-0 top-20 shadow-md rounded-md p-2">
                    {userList.map((user, index)=>{
                      return(
                        <div className="w-full flex" key={index}>

                          <p className="text-sm font-semibold">{user}</p>
                        </div>
                      )
                    })}
                  </div>
                )}
              <img
                src={avatar}
                alt="avatar"
                className="h-10 w-10 rounded-full"
              />
              <div className="relative">
                
                <p className="text-base font-bold">{username}</p>
                <p className="text-sm font-normal">Admin</p>
              </div>
              <img src={downArrow} alt="" className="h-2 w-3  rounded-full " />
            </div>
          </div>
        </div>
        <div className=" bg-slate-100 p-7">
          {/* remaining code will be here */}
          <p className="text-4xl font-bold">Dashboard</p>
          <div className="stats w-full grid grid-cols-5 gap-3 mt-9">
            <SmolCard
              name="Total Profit"
              amount={totalSales}
              imgPath={"src/assets/profit.png"}
            />
            <SmolCard
              name="Total check in"
              amount={1500}
              imgPath={"src/assets/checkin.png"}
            />
            <SmolCard
              name="Total check out"
              amount={1500}
              imgPath={"src/assets/checkin.png"}
            />
            <SmolCard
              name="Available rooms"
              amount={availableRooms}
              imgPath={"src/assets/room.png"}
            />
            <SmolCard
              name="Sold out rooms"
              amount={1500}
              imgPath={"src/assets/room.png"}
            />
          </div>
          <div
            className="table-container mt-8 w-full bg-white rounded-xl p-3 "
            style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
          >
            <BookingTable  />
          </div>
          <div className="mt-8 w-full flex gap-10">
            <div
              className="graph bg-white h-80 w-[60%] rounded-xl"
              style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
            >
              <ChartBoi />
            </div>
            <div
              className="feedback overflow-hidden bg-white h-80 w-[38%] rounded-xl"
              style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
            >
              <div
                className="relative h-[25%] bg-cover bg-center flex items-start justify-start p-3"
                style={{ backgroundImage: `url(${feedbackbg})` }}
              >
                <span className="text-white text-base font-bold">
                  Feedback Data
                </span>
              </div>
              <div className="relative h-[15%] border border-b-2 flex items-center justify-center p-3 inset-0">
                <div className="absolute top-[-20px] left-3 flex items-center ">
                  <img
                    src={per1}
                    alt="First Image"
                    className="w-8 h-8 rounded-full mx-1 object-cover"
                  />

                  <img
                    src={per2}
                    alt="Middle Image"
                    className="w-10 h-10 rounded-full mx-1 object-cover " //border-4 border-golden
                  />

                  <img
                    src={per3}
                    alt="Third Image"
                    className="w-8 h-8 rounded-full mx-1 object-cover"
                  />
                </div>
                <div className="bg-golden text-white  rounded-md px-4 py-2 text-center absolute  top-[-20px]  ">
                  <svg
                    width="75"
                    height="13"
                    viewBox="0 0 75 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1870_1517)">
                      <path
                        d="M6.56918 8.99463L9.95239 10.9373L9.05458 7.27588L12.0436 4.81234L8.1075 4.49463L6.56918 1.0415L5.03086 4.49463L1.09473 4.81234L4.08378 7.27588L3.18597 10.9373L6.56918 8.99463Z"
                        fill="white"
                      />
                    </g>
                    <g clipPath="url(#clip1_1870_1517)">
                      <path
                        d="M21.3504 8.99463L24.7336 10.9373L23.8358 7.27588L26.8249 4.81234L22.8888 4.49463L21.3504 1.0415L19.8121 4.49463L15.876 4.81234L18.865 7.27588L17.9672 10.9373L21.3504 8.99463Z"
                        fill="white"
                      />
                    </g>
                    <g clipPath="url(#clip2_1870_1517)">
                      <path
                        d="M36.6786 8.99463L40.0618 10.9373L39.164 7.27588L42.153 4.81234L38.2169 4.49463L36.6786 1.0415L35.1402 4.49463L31.2041 4.81234L34.1932 7.27588L33.2953 10.9373L36.6786 8.99463Z"
                        fill="white"
                      />
                    </g>
                    <g clipPath="url(#clip3_1870_1517)">
                      <path
                        d="M52.5545 8.99463L55.9377 10.9373L55.0399 7.27588L58.029 4.81234L54.0929 4.49463L52.5545 1.0415L51.0162 4.49463L47.0801 4.81234L50.0691 7.27588L49.1713 10.9373L52.5545 8.99463Z"
                        fill="white"
                      />
                    </g>
                    <g clipPath="url(#clip4_1870_1517)">
                      <path
                        d="M68.4305 3.71338L68.9615 4.90609L69.2188 5.48421L69.8758 5.5363L71.228 5.64567L70.1988 6.49463L69.7006 6.90609L69.8484 7.52067L70.155 8.77588L68.9944 8.10921L68.4305 7.77588L67.8666 8.0988L66.7061 8.76546L67.0126 7.51025L67.1604 6.89567L66.6623 6.48421L65.6331 5.63525L66.9853 5.52588L67.6422 5.4738L67.8995 4.89567L68.4305 3.71338ZM68.4305 1.0415L66.8922 4.49463L62.9561 4.81234L65.9451 7.27588L65.0473 10.9373L68.4305 8.99463L71.8137 10.9373L70.9159 7.27588L73.905 4.81234L69.9688 4.49463L68.4305 1.0415Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1870_1517">
                        <rect width="13.1387" height="12.5" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_1870_1517">
                        <rect
                          width="13.1387"
                          height="12.5"
                          fill="white"
                          transform="translate(14.2334)"
                        />
                      </clipPath>
                      <clipPath id="clip2_1870_1517">
                        <rect
                          width="13.1387"
                          height="12.5"
                          fill="white"
                          transform="translate(30.1094)"
                        />
                      </clipPath>
                      <clipPath id="clip3_1870_1517">
                        <rect
                          width="13.1387"
                          height="12.5"
                          fill="white"
                          transform="translate(45.9854)"
                        />
                      </clipPath>
                      <clipPath id="clip4_1870_1517">
                        <rect
                          width="13.1387"
                          height="12.5"
                          fill="white"
                          transform="translate(61.8613)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="text-sm">Robert Smith</p>
                  <p className="text-xs">Guest</p>
                </div>
                <div className="absolute right-10 flex items-center justify-between w-1/5">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#B5A166"/>
                        <g clipPath="url(#clip0_1870_1561)">
                        <path d="M18.41 10.41L17 9L11 15L17 21L18.41 19.59L13.83 15L18.41 10.41Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1870_1561">
                        <rect width="24" height="24" fill="white" transform="translate(3 3)"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#B5A166"/>
                        <g clipPath="url(#clip0_1870_1560)">
                        <path d="M13.0199 9L11.6099 10.41L16.1899 15L11.6099 19.59L13.0199 21L19.0199 15L13.0199 9Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1870_1560">
                        <rect width="24" height="24" fill="white" transform="translate(3 3)"/>
                        </clipPath>
                        </defs>
                    </svg>

                </div>
              </div>
              <div className="p-6">
                <p>
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration some
                  form, by injected humors. There are many variations of
                  passages of lorem ipsum available, but the majority have
                  suffered alteration some form, by injected humors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function SearchBar() {
  return (
    <form className="form relative w-[65%]">
      <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
          className="w-5 h-5 text-gray-700"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <input
        className="input rounded-full px-8 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-slate-100 w-full"
        placeholder="Search..."
        required=""
        type="text"
      />
    </form>
  );
}

function SmolCard({ name, imgPath, amount }) {
  let msg;
  if(name!=="Available rooms"){
      msg=`$${amount}`
  }else{
    msg=`${amount}`
  }
  return (
    <div
      className="p-3 flex gap-4 rounded-md  bg-white items-center"
      style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
    >
      <img
        src={imgPath}
        alt="image"
        className="bg-blue-200 p-1 rounded-md h-12 w-12"
      />
      <div className="info">
        <p className="text-md font-light">{name}</p>
        <p className="text-xl font-bold">{msg}</p>
      </div>
    </div>
  );
}

export default Dashboard;