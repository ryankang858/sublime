import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-bar">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-title" to={"/"}>
          Project Sublime
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item  nav-bluebutton">
              <Link className="nav-link nav-font button-3d" to={"/sublimation"}>
                What is Sublimation?
              </Link>
            </li>
            <li className="nav-item  nav-bluebutton">
              <Link className="nav-link nav-font button-3d" to={"/stories"}>
                Our Stories
              </Link>
            </li>
            <li className="nav-link nav-font button-3d dropdown nav-bluebutton dropdown-style">
              <a
                className="nav-link dropdown-toggle nav-font"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/passions"}>
                    Passions
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Actions
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/discussions"}>
                    Discussions
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    References
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="searchbar d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-margin search-submit-btn"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};