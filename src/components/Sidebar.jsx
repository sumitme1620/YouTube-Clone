import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { LiaFileVideoSolid } from "react-icons/lia";
import { MdWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import Avatar from "react-avatar";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { PiFilmSlateBold } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { MdPodcasts } from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarMainItems = [
    {
      icons: <IoHomeSharp size={24} />,
      title: "Home",
    },
    {
      icons: <SiYoutubeshorts size={24} />,
      title: "Shorts",
    },
    {
      icons: <MdSubscriptions size={24} />,
      title: "Subscriptions",
    },
  ];

  const sidebarYourItems = [
    {
      icons: <ImProfile size={24} />,
      title: "Your channel",
    },
    {
      icons: <FaHistory size={24} />,
      title: "History",
    },
    {
      icons: <MdPlaylistPlay size={24} />,
      title: "Playlists",
    },
    {
      icons: <LiaFileVideoSolid size={24} />,
      title: "Your videos",
    },
    {
      icons: <FaHistory size={24} />,
      title: "History",
    },
    {
      icons: <MdWatchLater size={24} />,
      title: "Watch Later",
    },
    {
      icons: <BiSolidLike size={24} />,
      title: "Liked videos",
    },
  ];

  const subscriptions = [
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Apna Collage",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "CodeWithHarry",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Filmi India",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Ravish Kumar Official",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Sofia Goyal",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Step by Step",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Goldmines",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "BkShivani",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Made Easy",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Guru Gopal Das",
    },
    {
      logo: (
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
          size={30}
          round="{true}"
        />
      ),

      title: "Kapil Sharma",
    },
  ];

  const explore = [
    {
      icons: <FaArrowTrendUp size={24} />,
      title: "Trending",
    },
    {
      icons: <MdShoppingBag size={24} />,
      title: "Shopping",
    },
    {
      icons: <IoMdMusicalNote size={24} />,
      title: "Music",
    },
    {
      icons: <PiFilmSlateBold size={24} />,
      title: "Films",
    },
    {
      icons: <SiYoutubegaming size={24} />,
      title: "Gaming",
    },
    {
      icons: <IoNewspaper size={24} />,
      title: "News",
    },
    {
      icons: <GiTrophyCup size={24} />,
      title: "Sport",
    },
    {
      icons: <FaLightbulb size={24} />,
      title: "Courses",
    },
    {
      icons: <MdPodcasts size={24} />,
      title: "Podcasts",
    },
  ];

  const open = useSelector((store) => store.app.open);

  return (
    <div className="mx-5  pr-16 -my-2  w-auto cursor-pointer left-0 sticky z-20 h-[calc(100vh-4.25rem)] overflow-y-scroll overflow-x-hidden hidden lg:block">
      {sidebarMainItems.map((item, index) => (
        <div className="flex items-center my-4 mr-3" key={index}>
          <p>{item.icons}</p>
          <p className={`mx-5 text-[16px] ${open ? "" : "hidden"}`}>
            {item.title}
          </p>
        </div>
      ))}
      <hr
        className={`my-3 h-[1px] bg-[#ccc] w-[85%] ${open ? "" : "hidden"}`}
      />
      <div className="flex items-center w-[90%]">
        <p className={`text-[18px] mr-2 font-semibold ${open ? "" : "hidden"}`}>
          You
        </p>
        <IoIosArrowForward />
      </div>

      {sidebarYourItems.map((item, index) => (
        <div className="flex items-center my-5 mr-3" key={index}>
          <p>{item.icons}</p>
          <p className={`mx-5 text-[16px] ${open ? "" : "hidden"}`}>
            {item.title}
          </p>
        </div>
      ))}
      <hr
        className={`my-3 h-[1px] bg-[#ccc] w-[85%] ${open ? "" : "hidden"}`}
      />
      <div className="flex items-center w-[90%]">
        <p className={`text-[18px] mr-2 font-semibold ${open ? "" : "hidden"}`}>
          Subscriptions
        </p>
      </div>

      {subscriptions.map((item, index) => (
        <div className="flex items-center my-5 mr-3" key={index}>
          <p>{item.logo}</p>
          <p className={`mx-3 text-[16px] ${open ? "" : "hidden"}`}>
            {item.title}
          </p>
        </div>
      ))}
      <hr
        className={`my-3 h-[1px] bg-[#ccc] w-[85%] ${open ? "" : "hidden"}`}
      />
      <div className="flex items-center w-[90%]">
        <p className={`text-[18px] mr-2 font-semibold ${open ? "" : "hidden"}`}>
          Explore
        </p>
      </div>

      {explore.map((item, index) => (
        <div className="flex items-center my-5 mr-3" key={index}>
          <p>{item.icons}</p>
          <p className={`mx-5 text-[16px] ${open ? "" : "hidden"}`}>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
