// import { useContext } from "react";

interface HeaderProps {
    handleLogOut: Function;
}

const Header: React.FC<HeaderProps> = ({ handleLogOut }) => {
    // const { logout } = useContext()

    return (
        <>
            <header className="app-header">
                <h1>CodeTutor Chat</h1>
                <button onClick={() => {handleLogOut()}}>
                    Logout
                </button>
            </header>
        </>
    )

}

export default Header;