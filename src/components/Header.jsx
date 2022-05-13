import '../styles/Header.css'
const Header = ()=>{
    return(
        <div className="header">
          <div className="header-box">
              <div><i className="fa-solid fa-list"></i></div>
              <div className="header-title">activities</div>
              <div><i className="fas fa-calendar-alt"></i></div>
          </div>
        </div>
    )
}

export default Header;