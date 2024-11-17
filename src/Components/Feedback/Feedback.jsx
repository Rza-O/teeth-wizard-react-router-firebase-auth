import React from 'react';

const Feedback = ({ feedBackData }) => {
    console.log(feedBackData);
    const {name, review, userImage} = feedBackData;
    return (
        <div>
            {
                feedBackData.map(feed => <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <div className='flex space-x-4 items-center'>
                            <img className='w-12 h-12 rounded-badge' src={feed.userImg} alt="" />
                        <h2 className="card-title">{feed.name}</h2>
                        <p>date</p>
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