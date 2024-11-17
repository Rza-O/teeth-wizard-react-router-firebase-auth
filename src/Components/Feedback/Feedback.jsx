import React from 'react';

const Feedback = ({ feedBackData }) => {
    console.log(feedBackData);
    const {name, review, userImage} = feedBackData;
    return (
        <div className='grid grid-cols-3 w-[80%] mx-auto max-w-[1200] mt-6 gap-5'>
            {
                feedBackData.map(feed => <div className="card bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <div className='flex space-x-4 items-center'>
                            <img className='w-12 h-12 rounded-badge' src={feed.userImg} alt="" />
                        <h2 className="card-title">{feed.name}</h2>
                        <p>{new Date().toLocaleDateString()}</p>
                        </div>
                        <p>{feed.review}</p>
                        <div className="card-actions justify-end items-center">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Feedback;