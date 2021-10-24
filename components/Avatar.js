function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile pic"
      className={`h-10 rounded-full cursor-pointer transition duration-200 transform hover:scale-125 ${className}`}
    />
  );
}

export default Avatar;
