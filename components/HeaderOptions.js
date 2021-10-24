import Option from "./Option";
import {
  DotsVericalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-44 border-b-[1px]">
      {/*Left*/}
      <div className="flex space-x-4 items-center ">
        <SearchIcon
          className="h-4  text-blue-700 mb-3 border-b-4 border-blue-500  mb-3 sm:border-b-0"
          selected
        />
        <Option title="All" selected />
        <PhotographIcon className="h-4  text-gray-500 mb-3" />
        <Option title="Images" />
        <PlayIcon className="h-4  text-gray-500 mb-3" />
        <Option title="Videos" />
        <NewspaperIcon className="h-4  text-gray-500 mb-3" />
        <Option title="News" />
        <MapIcon className="h-4  text-gray-500 mb-3" />
        <Option title="Maps" />
      </div>
      {/*Right*/}
      <div className="flex space-x-4 ">
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
