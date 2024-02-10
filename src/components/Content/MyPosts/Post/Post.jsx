import c from './Post.module.css'
import l from '../../../../img/Profile/thumbs-up.svg'
import comm from '../../../../img/Profile/Vector.svg'

const Post = (props) => {
    return (
        <div className={c.item}>
            <div className={c.container}>
            <div className={c.avatar}>
                <img src="https://i.pinimg.com/736x/4f/1f/ab/4f1fabcce701473344138eb41fce144d.jpg" alt="" />
            </div>
            <div className={c.name}>
                Aristarh P.
            </div>
            </div>
            <div className={c.text}>
            <p>{props.text}</p>
            </div>
            <div className={c.feedback}>
                <div className={c.likes}>
                <button>
                    <img src={l} alt="" />
                    <span>{props.likesCount}</span>
                </button>
                
                </div>
                <div className={c.comment}>
                    <button>
                        <img src={comm} alt="" />
                        <span>0</span>
                    </button>
                    
                </div>

            </div>
        </div>
    )
}

export default Post