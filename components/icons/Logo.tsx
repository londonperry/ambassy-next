const Logo = ({ className = '', ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="128" height="128" rx="64" fill="white" />
    <path d="M75 25L109.641 85H40.359L75 25Z" fill="black" />
    <path d="M62 21L105.301 96H18.6987L62 21Z" fill="black" />
    <rect
      x="68.7989"
      y="32.7689"
      width="2.9426"
      height="62.0382"
      transform="rotate(-30 68.7989 32.7689)"
      fill="white"
    />
    <rect
      x="32"
      y="73"
      width="3"
      height="60"
      transform="rotate(-90 32 73)"
      fill="white"
    />
  </svg>
);

export default Logo;
