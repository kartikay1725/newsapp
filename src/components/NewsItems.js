import React from 'react'
import nb from "./nb.png"

export default function NewsItems(props){
    let {title , description , imageurl,newsurl,author,date ,source} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "100%", zIndex: "1"}}>{source}</span>
            <img src={imageurl?imageurl:nb} className="card-img-top" style={{height: "150px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target='_blank' rel='noreferrer'className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
}
