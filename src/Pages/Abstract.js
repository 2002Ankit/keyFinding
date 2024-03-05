import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import DataCard from '../components/DataCard';

import "./Abstract.css";

function Abstract({ linkagePosts, setLinkagePosts, filteredData, setFilteredData, apiData, setApiData }) {
    const [formData, setFormData] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchApiData() {
        setLoading(true);
        try {
            const res = await fetch('https://dummyjson.com/products/');
            const data = await res.json();
            setApiData(data.products);
        } catch (error) {
            alert("something went wrong");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchApiData();
    }, []);

    function changeHandler(event) {
        const value = event.target.value;
        setFormData(value);
        if (value !== "") {
            const filteredOutput = apiData.filter((item) => {
                return Object.values(item).join("").toLowerCase().includes(value);
            });
            setFilteredData(filteredOutput);
        } else {
            setFilteredData([]);
        }
    }

    return (
        <div className={filteredData.length !== 0 ? "abstractPage-bg" : "bg-ZeroFilterData"}>
            <div className='text-slate-100 font-serif  text-center text-[2rem] font-normal'>
                <h2 className=' abstract-heading relative top-5 '>Search here to get your abstract</h2>
            </div>
            <div className='mt-[2.5rem] text-center'>
                <form>
                    <input
                        type='search'
                        placeholder='search here'
                        value={formData}
                        onChange={changeHandler}
                        className=' abstract-searchBar p-4 outline-none w-[50vw] border rounded'
                    />
                </form>
            </div>
          

            <div className='mt-3'>
                {loading ? (
                    <Spin size='large' className='w-[50vw] ml-[25vw]' />
                ) : (
                    <div className='dataCard-container grid grid-cols-3 gap-3 w-[90vw] m-auto max-w-screen-lg'>
                        {filteredData.map((data) => (
                            <DataCard
                                key={data.id}
                                data={data}
                                linkagePosts={linkagePosts}
                                setLinkagePosts={setLinkagePosts}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Abstract;
