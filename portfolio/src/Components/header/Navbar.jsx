import React from "react";
import { useNavigate,useLocation } from 'react-router-dom';

function Navbar(){
   const navigate=useNavigate()
   const location = useLocation();
return(
<>
 <div className="absolute top-0 right-0 w-[40%] h-[6%] bg-black pr-30 flex justify-between mt-2">
   <button  className={`relative text-white bg-black active:bg-gray-800 hover:bg-gray-900 focus:outline-none px-4 py-2 rounded ${location.pathname === "/" ? "before:content-['▼'] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-lg before:mb-2" : ""}`}onClick={() => navigate("/",{replace:true})}>Home</button>

   <button className={`relative text-white bg-black active:bg-gray-800 hover:bg-gray-900 focus-outline-none  px-4 py-2 rounded ${location.pathname === "/about" ? "before:content-['▼'] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-lg before:mb-2" : ""}`}onClick={()=>navigate("/about")}>About</button>
   <button className={`relative text-white bg-black active:bg-gray-800 hover:bg-gray-900 focus-outline-none  px-4 py-2 rounded ${location.pathname === "/services" ? "before:content-['▼'] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-lg before:mb-2" : ""}`}onClick={()=>navigate("/services")}>Services</button>
   <button className={`relative text-white bg-black active:bg-gray-800 hover:bg-gray-900 focus-outline-none  px-4 py-2 rounded ${location.pathname === "/skills" ? "before:content-['▼'] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-lg before:mb-2" : ""}`}onClick={()=>navigate("/skills")}>Skills</button>
   <button className={`relative text-white bg-black active:bg-gray-800 hover:bg-gray-900 focus-outline-none  px-4 py-2 rounded ${location.pathname === "/contact" ? "before:content-['▼'] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-lg before:mb-2" : ""}`}onClick={()=>navigate("/contact")}>Contacts</button>
 </div>
</>
)
}
export default Navbar