import React, { useState } from "react";
import Card from "./Card";
import axios from 'axios';



function Main(props) {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    // const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    const searchBook = (event) =>  {
            // axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCaDUD4WjL5OSXMJqLLdjyx6UyUB4h62e4'+'&maxResults=40')
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'googlescholar&key=AIzaSyCcPU0xVXiE37cEPIf0QQvkRIUOmkavHWU'+'&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err));
             
        }
         const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                searchBook();
            }
        }


    return (
        <div>
            <div className="header">
                <div className="row1">
                    <h1>BooKs W@Sh away from the soul <br />The Du$t of EveryDay</h1>
                </div>
                <div className="row2">
                    <h2>Google Scholar  find easy</h2>
                   
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={handleKeyDown} 
                            
                        />
                        {/* <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button> */}
                        <button type="submit" onClick={searchBook}>search</button>
                        
                    </div>
                </div>
            </div>
            <div className="container">
                {bookData && bookData.length > 0 && (
                    <Card book={bookData} />
                )}
            </div>
        </div>
    );
}

export default Main;
