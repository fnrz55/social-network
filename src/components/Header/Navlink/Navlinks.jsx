import { NavLink } from 'react-router-dom'
import c from './Navlinks.module.css'
import rss from '../../../img/Header/rss.svg'
import m from '../../../img/Header/message-square.svg'
import n from '../../../img/Header/briefcase.svg'
import mu from '../../../img/Header/users.svg'
import b from '../../../img/Header/bell.svg'


const Nav = (props) => {

  return (

    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/profile">
          <div className={c.icon}>
            <img src={rss} alt="" />
          </div>
          Profile
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs">
          <div className={c.icon}>
            <img src={m} alt="" />
          </div>
          Messages
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/users">
          <div className={c.icon}>
            <img src={mu} alt="" />
          </div>
          Users
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="#">
          <div className={c.icon}>
            <img src={n} alt="" />
          </div>
          News
        </NavLink>
      </div>
      
      <div className={c.item}>
        <NavLink to="#">
          <div className={c.icon}>
            <img src={b} alt="" />
          </div>
          Notices
        </NavLink>
      </div>
    </nav>


  )
}

export default Nav