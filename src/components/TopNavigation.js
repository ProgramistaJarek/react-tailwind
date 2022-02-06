import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "./useDarkMode";

function TopNavigation() {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." className="search-input" />
      <FaSearch size="18" className="text-sexondary my-auto" />
    </div>
  );
};

const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">tailwind-css</h5>;
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => <FaUserCircle size="24" className="top-navigation-icon" />;

export default TopNavigation;
