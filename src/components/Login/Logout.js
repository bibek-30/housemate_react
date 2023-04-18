import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { Location } from "react-router-dom";
function Logout() {
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  }

  return (
    <button onClick={handleLogout}>
      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
    </button>
  );
}

export default Logout;
