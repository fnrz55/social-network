import c from './Header.module.css'
import Nav from './Navlink/Navlinks';
import Logo from '../../img/Header/logoProject.png'
import searchImg from '../../img/Header/search.svg'
import showMore from '../../img/Header/expand-more.svg'
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form"


const Header = (props) => {



    return (
        <header className={c.header}>
            <NavLink to={'/profile'}>
                <div className={c.logo}>
                    <img src={Logo}></img>
                </div>
            </NavLink>
            <Nav />
            <SearchForm />

            {props.isAuth && props.userProfile
                ? <MyProfileInfo logOut={props.logOut} userProfile={props.userProfile} login={props.login} />
                : <div className={c.loginLink}> <NavLink to={'/login'} >LOGIN</NavLink></div>}
        </header>)
}

const MyProfileInfo = (props) => {

    return (
        <div className={c.infoCont}>
            <div className={c.info}>
                <NavLink to={'/profile'}>
                    <div className={c.avatar}>
                        <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : "https://i.pinimg.com/564x/06/a0/59/06a059e6ef315c59c3eb07dfb54e27d2.jpg"} />
                    </div>
                </NavLink>
                <div className={c.name}>
                    {props.userProfile.fullName}
                </div>
                <button onClick={props.logOut}><img src={showMore} alt="" /></button>

            </div>
        </div>

    )
}

const SearchForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className={c.search}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('searchField')} placeholder='Search' />
                <button type='submit'><img src={searchImg} alt="" /></button>
            </form>
        </div>
    )


}

export default Header