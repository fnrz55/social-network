import c from './Message.module.css'

const Message = (props) => {
    return (
        <div className={c.item}>
            <div className={c.avatar}>
                <img src="https://i.pinimg.com/736x/4f/1f/ab/4f1fabcce701473344138eb41fce144d.jpg" alt="" />
            </div>
            <div className={c.container}>
                <div className={c.name}>
                    {props.name}
                </div>
                <div className={c.text}>
                    {props.text}
                </div>
            </div>

        </div>
    )
}
export default Message