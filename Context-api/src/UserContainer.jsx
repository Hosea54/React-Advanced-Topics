import { useGlobalContext } from "./context";
const UserContainer = () => {
  const { user, logout } = useGlobalContext();
  return (
    <div className="user-container">
      <p>{user ? `hello ${user}` : "please login"}</p>
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
};
export default UserContainer;
