function Option({ Icon, title, selected }) {
  return (
    <div
      className={`flex border-b-4 border-transparent hover:text-blue-500 pb-3 hover:border-blue-500 curder-pointer ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <p className="hidden sm:inline-flex items-left">{title}</p>
    </div>
  );
}

export default Option;
