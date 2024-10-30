interface HeaderProps {
  handleLogOut: Function;
}

const Header: React.FC<HeaderProps> = ({ handleLogOut }) => {
  return (
    <>
      <header className="app-header">
        <h1>
          CodeTutor Chat with:
          <img
            src="https://cdn-icons-png.flaticon.com/512/166/166730.png"
            className="hoppo-img"
          ></img>
          先生
        </h1>
        <button
          onClick={() => {
            handleLogOut();
          }}
        >
          Logout
        </button>
      </header>
    </>
  );
};

export default Header;
