import { GlobeIcon } from "@heroicons/react/solid";
function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Bulgaria</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-y-5 grid-flow-row-dense px-12 py-3 md:mx-12 xl:mx-0">
        <div className="flex justify-center space-x-8 whitespace-nowrap md-space-x-11 xl:justify-self-start">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 xl:ml-auto">
          <p>Privacy</p>
          <p>Times</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
