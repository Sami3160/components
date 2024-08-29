import Banner1 from "../components/Banner1";

function Home() {
    return (
        <div className="">
            <div className="grid grid-cols-2">

                <div className="col-span-1 bg-gradient-to-tr from-orange-500 to-yellow-300 h-[100vh] text-white flex flex-col justify-center gap-10 font-extrabold p-4">
                    <p className="text-5xl">Welcome to the Home Page</p>
                    <p className="font-normal text-xl">This is a simple home page created using React.</p>
                </div>
                <div className="col-span-1 h-[100vh]">
                    <Banner1 />
                </div>
            </div>
            
        </div>
    );
}

export default Home;