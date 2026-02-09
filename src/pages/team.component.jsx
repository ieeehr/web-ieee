import * as React from "react"
import { Member } from "../components/member.component"
let core_members = [
  {
    name:"Dr. Joseph K D",
    img:"https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Dr.%20Joseph%20K%20D%20-%20Branch%20counsellor_.jpg?updatedAt=1740124294036",
    position:"Branch counsellor"
  },
  {
    name: "Pavithra S",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Copy%20of%20Pavithra%20S%20-%20SB%20Chairperson.jpg?updatedAt=1739860349906",
    position: "Chairperson",
    
  },
  {
    name: "Felix Geemon",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Felix%20Geemon%20Vice-chairperson_.jpg?updatedAt=1739860355145",
    position: "Vice Chairperson",
  },
  {
    name: "Pranav K Nair",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Pranav%20K%20Nair%20-%20Secretary_.jpg?updatedAt=1739860382686",
    position: "Secretary",
  },
  {
    name: "Kavya A",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/KAVYA%20A-%20Treasurer.JPG?updatedAt=1739860365280",
    position: "Treasurer",
  },
  {
    name: "Hridwick ",
    img:"https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/HridwickWeb%20Lead.jpg?updatedAt=1757556345355",
    position: "Webmaster",
  },
  {
    name: "Maria Siby",
    img:"https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Maria%20Siby%20-%20ECC.jpg?updatedAt=1740050794285",
    position: "ECC",
  },
  {
    name: "Niranjana V",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Niranjana%20V-Membership%20Development%20Coordinator.jpg?updatedAt=1739860374924",
    position: "MDC",
  },
  
  
  
  {
    name: "Diya S Nair",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Diya%20S%20Nair%20-%20Design%20Lead_.jpg?updatedAt=1739860382276",
    position: "Design Lead",
  },
  {
    name: "N Jyothi Lakshmi",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/N%20Jyothi%20Lakshmi%20-%20Content%20Lead.jpg?updatedAt=1739860373315",
    position: "Content Lead",
  },
  
  {
    name: "Rohit Sajeev",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/ROHITH%20SAJEEV%20-%20MEDIA%20LEAD.jpg?updatedAt=1739860383195",
    position: "Media Lead",
  },
  {
    name: "Mrudhul Sankar V S",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Mrudhul%20sankar%20vs%20-%20Project%20lead,%20IAS%20seceratry.jpg?updatedAt=1739860366515",
    position: "Project Lead",
  },
  {
    name: "Nandana Nair",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Nandana%20Nair%20-%20LINK%20Representative%20,%20IAS%20Chairperson.jpg?updatedAt=1739860367588",
    position: "LINK Representative",
  },
  
  
]
let societies = [
  {
    soc_name: "Communication Society",
    members: [
      {
        name:"Dr Job Chunkath",
        img:"https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Dr%20Job%20Chunkath%20-%20Comsoc%20advisor.jpg?updatedAt=1740124019749",
        position:"Chapter Advisor",

      },
      {
        name: "Dhruv Vikas",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Dhruva%20Vikas-%20Comsoc%20chair.jpg?updatedAt=1739860348367",
        position: "Chairperson",
      },
      {
        name: "Vasudev R",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Vasudev%20R%20Comsoc%20secretary.jpg?updatedAt=1739860382234",
        position: "Secretary",
      },
      {
        name: "Nandana S",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Nandana%20S%20-%20WiCE,Communications%20Society_.jpg?updatedAt=1739860367050",
        position: "WiCE",
      },
    ],
  },
  {
    soc_name: "Computer Society",
    members: [
      {
        name:"Dr Gilesh M P",
        img:"https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Dr%20Gilesh%20M%20P%20CS%20ADVISOR.jpg?updatedAt=1740124019744",
        position:"Chapter Advisor",
      },
      {
        name: "Adwaidh P",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Adwaidh%20Payattuparambil%20-%20CS%20Chairperson.jpg?updatedAt=1739860373101",
        position: "Chairperson",
      },

      {
        name: "Archith Sunil",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/ARCHITH%20SUNIL%20%20CS%20%20SECRETARY%20.jpg?updatedAt=1739860346492",
        position: "Secretary",
      },
      {
        name: "Gayathri Shaji",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Gayathri%20Shaji-%20WiCS,Computer%20Society%20.jpg?updatedAt=1739860348056",
        position: "WiC",
      },
    ],
  },
  {
    soc_name: "Robotics and Automation Society",
    members: [
      {
        name:"Mr Sajithkumar M",
        img:"https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Sajith%20Kumar%20Advisor%20RAS.JPG?updatedAt=1740124020442",
        position:"Chapter Advisor",
      },
      {
        name: "Meghna R",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Meghna%20R%20-%20RAS%20Chairperson.jpg?updatedAt=1739860360898",
        position: "Chairperson",
      },
      {
        name: "Adithyan V",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/ADITHYAN%20V,%20%20Vice-chairperson%20RAS.jpeg?updatedAt=1739860348665",
        position: "Vice Chairperson",
      },
      {
        name: "Sreehari M",
        img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/SREEHARI%20M,RAS%20SECRETARY.jpg?updatedAt=1739860383094",
        position: "Secretary",
      },
      
      
    ],
  },

]
let societies1=[{
  soc_name: "Industry Applications Society",
  members: [
    {name: "Prof Lalgy Gopi",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Prof.Lalgy%20Gopi,%20IAS.jpg?updatedAt=1740124020084",
      position: "Chapter Advisor",},
    
    {
      name: "Nandana Nair",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Nandana%20Nair%20-%20LINK%20Representative%20,%20IAS%20Chairperson.jpg?updatedAt=1739860367588",
      position: "Secretary",
    },
    {
      name: "Mrudhul Sankar V S",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Mrudhul%20sankar%20vs%20-%20Project%20lead,%20IAS%20seceratry.jpg?updatedAt=1739860366515",
      position: "Secretary",
    },
    
  ],
},
{
  soc_name: "Power & Energy Society",
  members: [
    {
      name: "Prof Bijo Lawrence T",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Bijo%20Lawrence%20T-PES%20advisor.jpeg?updatedAt=1740124019754",
      position: "Chapter Advisor",
    },
    {
      name: "Irin Maria",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Irin%20Maria-PES%20Chairperson.JPG?updatedAt=1739860357908",
      position: "Chairperson",
    },
    {
      name: "K Srihari",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/K%20Srihari%20PES%20Secretary.jpg?updatedAt=1739860373387",
      position: "Secretary",
    },
    
    
  ],
},
{
  soc_name: "Power Electronics Society",
  members: [
    {
      name: "Dr Jaison Mathew",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Prof.%20Jaison%20Mathew%20PELS.jpg?updatedAt=1740124294414",
      position: "Chapter Advisor",
    },
    {
      name: " Muhammed Adhil T N",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/MUHAMMED%20ADHIL%20TN.jpg?updatedAt=1739860384493",
      position: "Chairperson",
    },
    {
      name: "Neethu K N",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Neethu%20K%20N%20-%20PELS%20Secretary.jpg?updatedAt=1739860369892",
      position: "Secretary",
    },
    
  ],
},
{
  soc_name: "Signal Processing Society",
  members: [
    {
      name: "Dr Job Chunkath",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Dr%20Job%20Chunkath%20-%20Comsoc%20advisor.jpg?updatedAt=1740124019749",
      position: "Chapter Advisor",
    },
    {
      name: "S Gayathri",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/S%20Gayathri,%20SPS%20Chairperson.JPG?updatedAt=1739860385549",
      position: "Chairperson",
    },
    {
      name: "Joseph P George",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Joseph%20p%20George%20-%20SPS%20secretary%20.jpg?updatedAt=1739860358548",
      position: "Secretary",
    },
  ],
},
{
  soc_name: "Technology and Engineering Management Soceity",
  members: [
    {
      name: "Dr Laly M J",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Prof.%20Laly%20MJ%20TEMS%20advisor.jpg?updatedAt=1740124019868",
      position: "Chapter Advisor",
    },
    {
      name: "Resha Fathima",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Resha%20Fathima%20TEMS%20Chairperson_.jpg?updatedAt=1739860380526",
      position: "Chairperson",
    },
    {
      name: "Albin Ebby",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Albin%20Ebby%20-%20TEMS%20Secretary.jpg?updatedAt=1739860357183",
      position: "Secretary",
    },
    
  ],
},
{
  soc_name: "Women In Engineering",
  members: [
    {
      name: "Prof Anu Jayan",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Anu%20jayan%20(WiE%20staff%20advisor).jpg?updatedAt=1740124294148",
      position: "Chapter Advisor",
    },
    {
      name: "Veda K G",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Veda%20KG(WiE%20chair).jpg?updatedAt=1739860382160",
      position: "Chairperson",
    },
    {
      name: "Pavithra B",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Pavithra%20B%20_%20WIE%20secretary%20_.jpg?updatedAt=1739860375514",
      position: "Secretary",
    },
    

  ],
},


]

const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            EXECUTIVE COMMITTEE
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Welcome</span>
          </span>{" "}
          our talented team of student leaders
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Meet the very versatile and dynamic Executive Committee Team of IEEE
          SB GECT for the year 2025- 2026
        </p>
      </div>
      <div className="grid gap-12 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        {core_members.map(m => {
          return (
            <Member
              memberName={m.name}
              imageLink={m.img}
              memberPos={m.position}
            />
          )
        })}
      </div>

      <div>
        {societies.map(society => {
          return (
            <>
              <hr className="mb-6 mt-4"></hr>
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xl font-normal tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  {society.soc_name}
                </p>
              </div>
              <div className="my-4"></div>
              <div className="grid gap-10 row-gap-10  mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">

                {society.members.map(mem => {
                  return (
                    <Member
                      memberName={mem.name}
                      imageLink={mem.img}
                      memberPos={mem.position}
                    />
                  )
                })}
              </div>
            </>
          )
        })}
      </div>
      <div>
        {societies1.map(society => {
          return (
            <>
              <hr className="mb-6 mt-4"></hr>
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xl font-normal tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  {society.soc_name}
                </p>
              </div>
              <div className="my-4"></div>
              <div className="grid gap-10 row-gap-10 gap-x-32 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">

                {society.members.map(mem => {
                  return (
                    <Member
                      memberName={mem.name}
                      imageLink={mem.img}
                      memberPos={mem.position}
                    />
                  )
                })}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Team
