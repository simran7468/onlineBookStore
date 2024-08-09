import React, { useState } from "react";
import Modal from "./Modal";



function Card({ book }) {
    // console.log(book)
    const[show, setShow] = useState(false);
    const[bookitem, setItem]= useState()
    return (
        <>
            {
               book && book.map((item, index) => {
                const uniqueKey = item.id || index
                    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo?.imageLinks.smallThumbnail;
                    const amount = item.saleInfo.listPrice && item.saleInfo.listPrice?.amount;
                    const title = item.volumeInfo?.title
                    if (thumbnail && amount && title) {
                        return (
                            <>
                                <div key={uniqueKey} className="card"  onClick={()=>{setShow(true); setItem(item)}}>
                                    <img src={thumbnail} alt={title} />
                                    <div className="bottom">
                                        <h3 className="tittle">{title}</h3>
                                        <p className="amount">&#8377;{amount}</p>

                                    </div>

                                </div>
                                <Modal show={show} item={bookitem} onClose={()=>setShow(false)}/>
                            </>

                        )

                    }else{
                        return null;
                    }

                })
            }


        </>
    )
}
export default Card;