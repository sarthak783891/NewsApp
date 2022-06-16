import React from 'react'



const Newsitem = (props) => {

  return (
      <div className="conatiner my-3">
    <div className="card" style={{
      height: "70%"
    }} >
  <img src={props.img ? props.img : "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/04/breaking-1618535752.jpg"} className="card-img-top" style={{width: "100%",height: "240px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title ? props.title.slice(0.40) + "...":"No Title Present At The Moment"}</h5>
    <p className="card-text">{props.desc ? props.desc.slice(0,100) + "..." : "NO DESCRIPTION PRESENT" }</p>
    <p><small className='text-muted'>{props.author ? props.author : "Unknown Author"}</small></p>
    <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>
</div>
  )
}

export default Newsitem