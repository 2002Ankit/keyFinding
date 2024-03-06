import React, { useState} from 'react';
import { CaretDownOutlined,CaretUpOutlined  } from "@ant-design/icons";
import { VOSviewerOnline } from "vosviewer-online";
import data from "../data.json";
import './KeyLinkage.css';

function KeyLinkage({ linkagePosts, apiData }) {
    const [vosViewer, setVosViewer] = useState(false);
    console.log(apiData); 
   

    function btnHandler() {
        setVosViewer(!vosViewer);
        console.log(vosViewer)
    }


    return (
        <div className='key-linkage-container'>
            <div className='key-linkage-card flex flex-wrap flex-col'>
                <p className='linkage-title'>{linkagePosts.title}</p>
                <p className='linkage-description'>{linkagePosts.description}</p>
                <div className='linkage-info'>
                    <span className='linkBrand-value'><span className='linkage-brand'>brand:</span>{linkagePosts.brand}</span>
                    <span className='linkCat-value'><span className='linkage-category'>category:</span>{linkagePosts.category}</span>
                </div>
                <div className='linkage-description'>
                    <span><span className='linkage-price'>Price:</span>₹{linkagePosts.price}</span>
                    <span><span className='linkage-rating'>Rating:</span> {linkagePosts.rating}</span>
                    <span><span className='linkage-discount'>Discount:</span> {linkagePosts.discountPercentage}</span>
                </div>
                <div className='linkage-action' >
                    <button onClick={btnHandler}>
                        Show Key Linkage {vosViewer?(<CaretUpOutlined className='show-key-UpArrow'/> ):(<CaretDownOutlined className='show-key-downArrow'/>)}
                    </button>
                </div>

                <div >
                    {vosViewer &&
                        <div className="vos-viewer-container"  >
                            <VOSviewerOnline data={data} parameters={{ scale: 1.0 }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default KeyLinkage;
