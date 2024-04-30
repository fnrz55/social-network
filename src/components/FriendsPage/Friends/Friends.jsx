import React from "react";
import c from './Friends.module.css'
import Friend from './Friend/Friend';
import { useState } from "react";
import ni from './../../../img/Users/chevron-right.svg'
import pi from './../../../img/Users/chevron-left.svg'
import fi from './../../../img/Users/first-page.png'
import li from './../../../img/Users/last-page.png'
import { useEffect } from "react";
import { useRef } from "react";

const Friends = (props) => {
    
    return (
        <div className={c.pageCont}>
            <FriendsList {...props}/>
        </div>
    )
}

const FriendsList = (props) => {



{/* <Pagination totalFriendsCount={props.totalFriendsCount} pageSize={props.pageSize}
             currentPage={props.currentPage} onPageChanged={props.onPageChanged}
             portionSize={10}  />
             */}

    return (
        <div className={c.container}>
            <div className={c.title}>
                <h3>ALL FRIENDS {props.totalFriendsCount}</h3>
            </div>
            <DynamicPagination friends={props.friends} onPageChanged={props.onPageChanged} currentPage={props.currentPage}
            followingInProgress={props.followingInProgress}
            addUser={props.addUser}
            deleteUserThunk={props.deleteUserThunk}
            pagesCount={props.pagesCount}/>
        </div>

    )


}

const Pagination=(props)=>{
    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
    let pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)

    }
    
    let portionCount=Math.ceil(pagesCount/props.portionSize)
    let [potrionNumber,setPortionNumber]=useState(Math.ceil(props.currentPage / props.portionSize))
    let leftPotrionNumber=(potrionNumber-1)*props.portionSize+1
    let rightPotrionNumber=potrionNumber*props.portionSize

    return(
        
        <div className={c.pagesCont}>
            <button onClick={()=>{props.onPageChanged(1)}}><img src={fi} alt="" /> </button>
        {potrionNumber>1 &&
            <button className={c.button} onClick={()=>{setPortionNumber(potrionNumber-1)}}> <img src={pi} alt="" /></button>
        }
                <ul className={c.pagesLict}>
                    {pages
                    .filter(p=>p>=leftPotrionNumber&&p<=rightPotrionNumber)
                    .map(p => {
                        return (
                            <li className={props.currentPage === p && c.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</li>
                        )
                    })}
                </ul>
            {portionCount>potrionNumber&& <button className={c.button} onClick={()=>{setPortionNumber(potrionNumber+1)}}><img src={ni} alt="" /></button> }
            <button onClick={()=>{props.onPageChanged(pages[pages.length-1])}}><img src={li} alt="" /></button>
            </div>
    )
}

 const DynamicPagination = (props) => {

    const [friends,setFriends]=useState(props.friends);
    const [currentPage,setCurrentPage]=useState(1);
    const [fetching,setFetching]=useState(false);
    const containerRef = useRef(null);
    
    useEffect(()=>{
        if(fetching){
            props.onPageChanged(currentPage)
            setFriends([...friends,props.friends])
            if(currentPage+1<=props.pagesCount){
                setCurrentPage(p => p+1)
            }
            setFetching(false)
            console.log(currentPage);
        }
    },[fetching,props])

    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return function(){
            document.removeEventListener('scroll',scrollHandler)
        }
    },[])

    const handleScroll = () => {
        if (
          containerRef.current.scrollTop + containerRef.current.clientHeight >=containerRef.current.scrollHeight
        ) {
          if (!fetching) {
            setFetching(true);
            setCurrentPage((prevPage) => prevPage + 1);
          }
        }
      };

    const scrollHandler=(e)=>{
        if(e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100){
            setFetching(true)
            console.log('got');
            }
    }

    return (
        <div>
            {props.friends.map(u =>
                <Friend photos={u.photos}
                    name={u.name} status={u.status} location={u.location}
                    added={u.followed} id={u.id} followingInProgress={props.followingInProgress}
                    addUser={props.addUser}
                    deleteUserThunk={props.deleteUserThunk} />)}
        </div>

  )
}


export default Friends