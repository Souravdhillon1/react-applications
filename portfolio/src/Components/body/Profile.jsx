import React from "react";
import sourav_image from "../../assets/sourav_dhillon_image.jpg";

function Profile() {
  return (
    <div className="absolute right-15 bottom-15 flex-1 h-140 w-140  bg-black rounded-full flex items-center justify-center ">
      <img className="h-full w-full object-cover  rounded-full" src={sourav_image} alt="image_of_me" />
    </div>
  );
}

export default Profile;
