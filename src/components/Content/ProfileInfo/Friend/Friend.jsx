import { Link, NavLink } from 'react-router-dom'
import c from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={c.friend}>
      <Link target={'_blank'} to={`/profile/${props.id}`}>
      <img src={props.avatar?props.avatar:'https://i.pinimg.com/564x/06/a0/59/06a059e6ef315c59c3eb07dfb54e27d2.jpg'} alt="" />
      <div className={c.name}>
        {props.name}
      </div>
      </Link>
    </div>
  )
}

export default Friend