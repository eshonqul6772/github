import { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import icon from "../../assets//imgs/photo_2022-12-07_13-41-21.jpg";
import Manu from "../../components/MyProfil/Manu";
import { BsBell, BsSlashLg } from "react-icons/bs";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openRepo, setOpenRepo] = useState(false);
  const [searchinUser, setSearchingUser] = useState(false);
  const [userName, setUserName] = useState([]);

  const SER_URL = `https://api.github.com/search/users?q=${userName}`;

  // useEffect(() => {
  //   fetch(SER_URL)
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  // }, [userName]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const openRepoMenu = () => {
    setOpenRepo(!openRepo);
  };

  const searchUses = () => {
    setSearchingUser(!searchinUser);
  };


  const nav = [
    {path:"/pulRAequest", text:"Pull requests"},
    {path:"/issue", text:"Issues"},
    {path:"*", text:"Codespaces"},
    {path:"*", text:"Marketplace"},
    {path:"*", text:"Explore"}
  ]

  return (
    <>
      <header className="header">
        <div className="containers">
          <div className="header__info">

            <div className="d-flex gap-2 gap-md-4 align-items-center">

              <Link to="/home">
                <i className="fab fa-github fa-2x text-white"></i>
              </Link>

              <div className="position-relative">
                <input
                  onChange={(el) => setUserName(el.target.value)}
                  className="header__input px-2"
                  type="text"
                  placeholder="search or jump to..."
                />
                <button onClick={searchUses} className="search-btn">
                  <span className="search-btn-icon">
                    <BsSlashLg />
                  </span>
                </button>
                {searchinUser ? (
                  <div>
                    <div className="text-wite resul-menu">
                      <ul className="result-list">
                        <li className="resul-item">{userName}</li>
                        <li className="resul-item">new users</li>
                        <li className="resul-item">new users</li>
                        <li className="resul-item">new users</li>
                        <li className="resul-item">new users</li>
                      </ul>

                      <div className="resul-bottom">nev project</div>
                    </div>
                  </div>
                ) : null}
              </div>

              <nav className="nav">
                <ul className="nav__list">
                  {
                    nav.map((e, i)=>{
                      return(
                          <li key={i}>
                            <Link to={e.path} className="text-white header__link">{e.text}</Link>
                          </li>
                      )
                    })
                  }
                </ul>
              </nav>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <a href="">
                <BsBell style={{ color: "white", fontSize: "20px" }} />
                <span className="badge bg-danger badge-dot"></span>
              </a>

              <div className="position-relative">
                <button onClick={openRepoMenu} className="add-repo">
                  <i className="fas fa-plus me-1"></i>
                  <i className="fas fa-caret-down"></i>
                </button>

                <div>
                  {openRepo ? (
                    <ul className="my-repo ">
                      <li className="my-repo__item">New repository</li>
                      <li className="my-repo__item">import repository</li>
                      <li className="my-repo__item">New codespace</li>
                      <li className="my-repo__item">New gist</li>
                      <li className="my-repo__item">New organization</li>
                      <li className="my-repo__item">New project</li>
                    </ul>
                  ) : null}
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 position-relative">
                <button onClick={toggleMenu} className="your-btn">
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    src={icon}
                    alt=""
                  />
                  <i className="fas fa-caret-down text-white icon"></i>
                </button>
                <div>
                  {openMenu ? (
                    <div>
                      <Manu />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
