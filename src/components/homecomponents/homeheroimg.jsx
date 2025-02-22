import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HomeHeroImg = () => (
  <div className="relative -mt-20" style={{ height: `100vh` }}>
    <StaticImage
      // src="../../images/group1.webp"
      src="https://ik.imagekit.io/rrjiefo85/IEEE/Grp.jpg?updatedAt=1738492896628"
      quality={100}
      placeholder="blurred"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="cover"
      className=" absolute inset-0 w-full h-full object-cover"
      style={{ position: "absolute" }}
    />
    {/* <div className="bg-black opacity-40 absolute inset-0" />
    <div className="absolute h-full w-full text-white flex items-center justify-center">
      <h1 className="text-3xl sm:text-6xl font-bold">
        IEEE Student Branch GEC Thrissur
      </h1>
    </div> */}
    {/* <div className="absolute inset-0">
  <img 
    src="https://ik.imagekit.io/rrjiefo85/IEEE/Group.jpg?updatedAt=1738031280967" 
    alt="Background" 
    className="w-full h-full object-cover" 
  />
</div>
<div className="bg-black opacity-10 absolute inset-0" />
<div className="absolute h-full w-full text-white flex items-center justify-center">
  
</div> */}

  </div>
)
export default HomeHeroImg
