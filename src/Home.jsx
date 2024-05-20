// import React from 'react'
import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'



export default function Home() {
  const [news ,setnews]=useState([])
  const [heading,setHeading]=useState('')

useEffect(()=>{
    console.log(" useeffectfunctioncheck");
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=63675a6125f54e67a35ea7f9e1f8d110")
    .then((response)=>{
      setnews(response.data.articles);
      setHeading("General")
    })
  },[]  )
const getgeneral=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=63675a6125f54e67a35ea7f9e1f8d110")
  .then((response)=>{
    setnews(response.data.articles);
    setHeading("General")
  })
}  
const getentertainment=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=63675a6125f54e67a35ea7f9e1f8d110")
.then((response)=>{
  setnews(response.data.articles);
  setHeading("Entertainments")
})
}
const getbuniness=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=63675a6125f54e67a35ea7f9e1f8d110")
.then((response)=>{
  setnews(response.data.articles);
  setHeading("Business")

})  
}
const gethealth=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=63675a6125f54e67a35ea7f9e1f8d110")
.then((response)=>{
  setnews(response.data.articles);
  setHeading("Health")
})  
}
const getscience=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b69689f861bb43fe8a3d18a256e06f01")
.then((response)=>{
  setnews(response.data.articles);
  setHeading("Science")
})  
}
const getsports=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b69689f861bb43fe8a3d18a256e06f01")
.then((response)=>{
  setnews(response.data.articles);
  setHeading("Sports")
})  
}
const gettechnology=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b69689f861bb43fe8a3d18a256e06f01")
.then((response)=>{
  setnews(response.data.articles);
  setHeading("Technology")
})  
}
const getUsa=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b69689f861bb43fe8a3d18a256e06f01")
  .then((response)=>{
    setnews(response.data.articles);
    setHeading("Usa")
  })
}  
const getUk=()=>{
  console.log("check");
  axios.get("https://newsapi.org/v2/top-headlines?country=au&apiKey=b69689f861bb43fe8a3d18a256e06f01")
  .then((response)=>{
    setnews(response.data.articles);
    setHeading("Uk")
  })
}  
const datarender=news.map((value)=>{
  return(
    <div className="card">
    <img src={value.urlToImage}className='card-image'/>
    <div className='card-content'>
    <p className='card-content-1' >{value.title}</p>
    </div>
    <div className='card-content2'>
      <p className="card-content3">{value.description}</p>

    </div>
    <a href={value.url} className='readmore-button'>Readmore</a>
        </div>
  )
})


  return (
    <>
       
    <div className="side-bar">
<h1 className='category-heading'>Category</h1>
<div className='button-box'>
<button className="business-button1" onClick={getgeneral}>General</button>
 <button className="business-button2" onClick={getentertainment}>Entertainment</button> 
 <button className="business-button3"onClick={getbuniness}>Buniness</button> 
<button className="business-button4" onClick={gethealth}>Health</button>
<button className="business-button5" onClick={getscience}>Science</button>
<button className="business-button6" onClick={getsports}>Sports</button>
<button className="business-button7" onClick={gettechnology}>Technology</button>  
</div>
<div className="country">
  <h1 className='category-heading'>Country</h1>
<button className="business-button1" onClick={getgeneral}>India</button>
<button className="business-button2"onClick={getUsa}>Usa</button>
<button className="business-button3" onClick={getUk}>Uk</button>
</div>

</div>  








    {datarender}
    <div className='heading-news'>
    {heading }
    </div>

    
    {/* <h1 className="heading-news">General</h1> */}
    </>
  )
}
