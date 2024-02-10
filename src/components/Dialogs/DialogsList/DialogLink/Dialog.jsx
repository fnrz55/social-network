import { NavLink } from 'react-router-dom'
import c from './Dialog.module.css'
const Dialog = (props) => {

    return (
        <div className={c.item}>
            <NavLink to={"/dialogs/" + props.num}>
                <div className={c.itemCont}>

                    <div className={c.avatar}>
                        <img src="https://i.pinimg.com/736x/4f/1f/ab/4f1fabcce701473344138eb41fce144d.jpg" alt="" />
                    </div>

                    <div className={c.container}>
                        <div className={c.name}>
                            {props.name}
                        </div>
                        <div className={c.textPrewiew}>
                            {props.text}
                        </div>
                    </div>

                </div>
            </NavLink>
        </div>
    )
}
export default Dialog