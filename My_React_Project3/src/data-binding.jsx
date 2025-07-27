import { useState,useEffect } from "react";


export function DataBinding(){
    const [product,setProduct]=useState({title:'',price:0,image:'',rating:{rate:0,ratings:0,review:0},offers:[]});
    
    useEffect(()=>{
        var http= new XMLHttpRequest();
        http.open("get","db.json",true);
        http.send();
        http.onreadystatechange=function(){
            if(http.readyState===4){
                setProduct(JSON.parse(http.responseText));
            }
        }

    })
    return(
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-3">
                    <img src={product.image || "placeholder.png"} width="100%"/>
                </div>
                <div className="col-9">
                    <div className="h4 fw-bold">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-fill"></span></span>
                        <span className="text-secondary fw-bold ms-3">{product.rating.ratings.toLocaleString()} <span className=""> Ratings &</span><span>{product.rating.reviews} Rewiews</span> </span>
                    </div>
                    <div className="mt-3 h1">{product.price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0})}
                    </div>
                    <div>
                        <div className=" fw-bold h5">Available Offers:</div>
                        <div>
                            <ul className=" list-unstyled">
                                {product.offers.map((offer)=>(
                                    <li className=" text-success bi bi-tag-fill " key={offer}>
                                        <span className=" text-secondary ms-2">{offer}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}