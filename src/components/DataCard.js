import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from "@ant-design/icons";
import './DataCard.css'; 

function DataCard({ data, linkagePosts, setLinkagePosts }) {

    function clickHandler() {
        setLinkagePosts(data);
    }

    return (
        <div className='data-card'>
            <p className='title'>{data.title}</p>
            <p className='description'>{data.description.split("").slice(0,25).join("")+"....."}</p>
            <div className='info'>
                <span className='brand'><span className='label'>Brand:</span> {data.brand}</span>

                <span className='category'>  <span className='label'>Category:</span> {data.category}</span>
            </div>
            <span className='DataCard-price'>
                <span className='Price'><span className='price-label'>Price:</span> ₹{data.price}</span>

                <span className='rating'><span className='price-label'>Rating:</span> {data.rating}</span>
                <span className='discount'><span className='price-label'>Discount:</span> {data.discountPercentage}</span>
            </span>
            <div className='action'>
                <Link to="/keylinkage">
                    <button onClick={clickHandler} className='card-btn'>Key linkage to this abstract<span><ArrowRightOutlined /></span></button>
                </Link>
            </div>
        </div>
    )
}

export default DataCard;
