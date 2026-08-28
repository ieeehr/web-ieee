import * as React from "react"
import { Member } from "../components/member.component"
let core_members = [
  {
    name:"Dr. Joseph K D",
    img:"https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Dr.%20Joseph%20K%20D%20-%20Branch%20counsellor_.jpg?updatedAt=1740124294036",
    position:"Branch counsellor"
  },
  {
    name: "Nandana Nair",
    img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Nandana%20Nair%20-%20LINK%20Representative%20,%20IAS%20Chairperson.jpg?updatedAt=1739860367588",
    position: "Chairperson"
    
  },
  {
    name: "Neeraj K V ",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Neeraj%20K%20V.jpg?updatedAt=1787926993869",
    position: "Vice Chairperson"
  },
  {
    name: "Neethu K N",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Neethu%20K%20N.jpg",
    position: "Secretary"
  },
  {
    name:"Pranav Praseed Kuruvath",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Pranav%20Praseed.jpg",
    position:"Joint Secretary"
  },
  {
    name:"Adidev Suresh",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Adidev%20Suresh.pdf",
    position:"Joint Secretary"
  },
  {
    name: "Pavithra B",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Pavithra%20B.jpg?updatedAt=1787926991556",
    position: "Treasurer"
  },
  {
    name: "Thulasi S",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Thulasi%20S.jpg",
    position: "Joint Treasurer"
  },
  {
    name:"Mrudhul Sankar V S",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Mrudhul%20Sankar%20V%20S.jpg?updatedAt=1787926991010",
    position:"Technical Coordinator"
  },
  {
    name: "Aadithya Suresh P",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/AADITHYA%20SURESH%20P.jpg",
    position: "Webmaster"
  },
  {
    name: "Hridwick Reman",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Hridwick%20Reman.jpg",
    position: "Joint Webmaster",
  },
  {
    name: "Ashwin R",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Ashwin%20R.jpg?updatedAt=1782649067693",
    position: "ECC",
  },
  {
    name:"Abbhiramie Ajayan",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Abbhiramie%20Ajayan.jpg?updatedAt=1782649067849",
    position:"Joint ECC"
  },
  {
    name: "Alan C Ajith",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Alan%20C%20Ajith.jpg?updatedAt=1782649067833",
    position: "Design Lead",
  },
  {
    name: "Aashlyn Rose Antony",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Aashlyn%20Rose%20Antony.jpg?updatedAt=1782649068044",
    position: "Content Lead",
  },
  {
    name: "Arya KS",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Arya%20K%20S.jpg?updatedAt=1782649067676",
    position: "Media Lead",
  },
  {
    name:"Sandie Morris",
    img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Sandie%20Morris.jpg?updatedAt=1782649067771",
    position:"SIGHT Coordinator"
  },
  {
    name: "Resha Fathima",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Resha%20Fathima.jpg?updatedAt=1782649068159",
    position: "MDC & Project Lead",
  },
  
  {
    name: "Della Anna George",
    img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Della%20Anna%20George.jpg?updatedAt=1782649067791",
    position: "LINK Representative",
  },
  
  
]
let societies = [
  {
    soc_name: "Communication Society",
    members: [
      {
        name:"Dr Sunny K D",
        img:"",
        position:"Chapter Advisor",

      },
      {
        name: "Hrudik N V",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Hrudik%20N%20V.png",
        position: "Chairperson",
      },
      {
        name: "Hridya V",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Hridya%20V.jpg",
        position: "Secretary",
      },
      {
        name: "Karthika S",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Karthika%20S.jpeg?updatedAt=1782838343600",
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
        name: "Archith Sunil",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Archith%20Sunil.jpg",
        position: "Chairperson",
      },

      {
        name: "Rohan Shyam",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Rohan%20Shyam.jpg",
        position: "Secretary",
      },
      {
        name: "Nidha Balkees K V",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Nidha%20Balkees.jpg",
        position: "WiC",
      },
    ],
  },
  {
    soc_name: "Industrial Electronics Society",
    members: [
      {
        name:"Mohammed Ajmal M",
        img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Advisors/Mohammed%20Ajmal.jpg",
        position:"Chapter Advisor",
      },
      {
        name: "Jan Zameera",
        img: "",
        position: "Chairperson",
      },

      {
        name: "Abhimanyu P",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Abhimanyu%20P.jpg?updatedAt=1782844199413",
        position: "Secretary",
      },
      {
        name: "Malavika E B",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Malavika%20E%20B.jpg",
        position: "WiES",
      },
    ],
  },
  {
  soc_name: "Industry Applications Society",
  members: [
    {name: "Dr Lalgy Gopi",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Prof.Lalgy%20Gopi,%20IAS.jpg?updatedAt=1740124020084",
      position: "Chapter Advisor",},
    
    {
      name: "Nandakishore R S",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Nandakishore%20R%20S.jpg",
      position: "Chairperson",
    },
    {
      name: "Sooraj V Suresh",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Sooraj%20V%20Suresh.png?updatedAt=1782912708091",
      position: "Vice Chairperson",
    },
    {
      name: "Albin Reji",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Albin%20Reji.jpg?updatedAt=1782844199910",
      position: "Secretary",
    },
    
  ],
},
{
  soc_name: "Power & Energy Society",
  members: [
    {
      name: "Prof Nimi N P",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Advisors/Nimi%20N%20P.jpg?updatedAt=1782912008752",
      position: "Chapter Advisor",
    },
    {
      name: "Pavan G Nair",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Pavan%20G%20Nair.jpg",
      position: "Chairperson",
    },
    {
      name: "Nadiya Sharafudeen",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Nadiya%20Sharafudeen.jpg",
      position: "Secretary",
    },
    {
      name:"Della Anna George",
      img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Della%20Anna%20George.jpg",
      position:"Woman in Power"
    }
    
    
  ],
},
{
  soc_name: "Power Electronics Society",
  members: [
    {
      name: "Dr Nakul Narayanan K",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Advisors/Nakul%20Narayanan%20K.jpg?updatedAt=1782912008871",
      position: "Chapter Advisor",
    },
    {
      name: "Albert Joy Mambrakaran",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Albert%20Joy%20Mambrakaran.jpg",
      position: "Chairperson",
    },
    {
      name: "Maani K Joshy",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Maani%20K%20Joshy.jpeg",
      position: "Vice Chairperson",
    },
    {
      name: "Vibisha S",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Vibisha%20S.jpg",
      position: "Secretary",
    },
    
  ],
},
{
  soc_name: "Technology and Engineering Management Soceity",
  members: [
    {
      name: "Dr M J Laly ",
      img: "https://ik.imagekit.io/u4sib0gco/IEEE%20Execom/Execom/Chapter%20advisors/Prof.%20Laly%20MJ%20TEMS%20advisor.jpg?updatedAt=1740124019868",
      position: "Chapter Advisor",
    },
    {
      name: "Kasinath V",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/KASINATH%20A%20V%20.png",
      position: "Chairperson",
    },
    {
      name:"Afna Zubair A V",
      img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Afna%20Zubair%20A%20V.jpg",
      position:"Vice Chairperson"
    },
    {
      name: "Devapriya Dileep",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Devapriya%20Dileep.jpg",
      position: "Secretary",
    },
    
  ],
},
{
  soc_name: "Women In Engineering",
  members: [
    {
      name: "Prof Anusree Radhakrishnan ",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Advisors/Anusree%20Radhakrishnan.png",
      position: "Chapter Advisor",
    },
    {
      name: "Smrithi K S",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Smrithi%20K%20S.png?updatedAt=1782998000836",
      position: "Chairperson",
    },
    {
      name:"Krishnananda Saju",
      img:"https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Krishnananda%20Saju.jpg?updatedAt=1782998000432",
      position:"Vice Chairperson"
    },
    {
      name: "Anugraha David",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Anugraha%20David.jpg?updatedAt=1782998000719",
      position: "Secretary",
    },
    

  ],
},
  
  
  

]
let societies1=[
{
    soc_name: "Robotics and Automation Society",
    members: [
    
      {
        name: "Adithyan V",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Adithyan%20V.jpg?updatedAt=1783439073837",
        position: "Chairperson",
      },
      {
        name: "Sreehari M",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Sreehari%20M.jpg?updatedAt=1783439070800",
        position: "Vice Chairperson",
      },
      {
        name: "Manikandan K V",
        img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Manikandan%20K%20V.jpg?updatedAt=1783439074060",
        position: "Secretary",
      },
      
      
    ],
  },

{
  soc_name: "Signal Processing Society",
  members: [
    {
      name: "Joseph P George",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Joseph%20P%20George.jpg?updatedAt=1783439779820",
      position: "Chairperson",
    },
    {
      name: "Rithul George",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Rithul%20George.jpg?updatedAt=1783439782171",
      position: "Secretary",
    },
    {
      name: "Lakshmi Unnikrishnan",
      img: "https://ik.imagekit.io/tczanxxbu/IEEE%20Execom%2026/Socieites/Lakshmi%20Unnikrishnan.jpg?updatedAt=1783439778885",
      position: "WiSP",
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
