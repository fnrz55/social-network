import c from './FriendsPageMenu.module.css'
import i from '../../img/Users/users.svg'
import g from '../../img/Users/global.svg'


const FriendPageMenu=(props)=>{
    return (
      <div className={c.menu}>
          <div className={c.item}>
              <button onClick={()=>{props.changeShowmode(0)}}>
              <img src={i} alt="" />
              YOUR FRIENDS
              </button>
          </div>
          <div className={c.item}>
          <button onClick={()=>{props.changeShowmode(1)}}>
          <img src={g} alt="" />
              ADD NEW FRIENDS
              </button>
          </div>
      </div>
    )
  }
  export default FriendPageMenu