import Banner1 from "../components/Banner1";
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from "../counterReduxSlice";

function Home() {
const count=useSelector(s=>s.counter)
const dispatch=useDispatch();

    return (
        <div className="">
            <div className="grid grid-cols-2">

                <div className="col-span-1 bg-gradient-to-tr from-orange-500 to-yellow-300 h-[100vh] text-white flex flex-col justify-center gap-10 font-extrabold p-4">
                    <p className="text-5xl">Welcome to the Home Page</p>
                    <p className="font-normal text-xl">This is a simple home page created using React.</p>
                    <p className="text-xl">count is {count}</p>
                    <button onClick={()=>dispatch(increment())}>Increment</button>
                    <button onClick={()=>dispatch(decrement())}>Decrement</button>
                </div>
                <div className="col-span-1 h-[100vh]">
                    <Banner1 />
                </div>
            </div>
            
        </div>
    );
}

export default Home;