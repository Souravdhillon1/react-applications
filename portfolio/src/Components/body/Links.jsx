import React from "react";
import git_logo from "../../assets/github_logo.png"
import leetcode_logo from "../../assets/leetcode_logo.png"
function Links(){
    return(
    <div className="absolute left-20 bottom-0 h-50 w-70 bg-black flex justify-around">
  {/* Leetcode Button + Label */}
  <div className="flex flex-col items-center">
    <button id="leet" className="p-2 w-15 h-15 bg-gray-300 hover:bg-gray-900 focus-outline-none rounded " onClick={()=>window.open("https://leetcode.com/u/Sourav_Dhillon/","_blank")}>
      <img src={leetcode_logo} alt="leetcode" className="w-full h-full" />
    </button>
    <label htmlFor="leet" className="text-white mt-2">Leetcode Profile</label>
  </div>

  {/* GitHub Button + Label */}
  <div className="flex flex-col items-center">
    <button id="git" className="p-2 w-15 h-15 bg-gray-300 hover:bg-gray-900 focus-outline-none  rounded" onClick={()=>window.open("https://github.com/Souravdhillon1","_blank")}>
      <img src={git_logo} alt="github" className="w-full h-full"/>
    </button>
    <label htmlFor="git" className="text-white mt-2">Github Profile</label>
  </div>
</div>

    )
}
export default Links;