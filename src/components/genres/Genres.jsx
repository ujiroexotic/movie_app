import React from 'react'
import './style.scss';
import { useSelector } from 'react-redux';

const Genres = ({ data }) => {

    const { genres } = useSelector(state => state.home);

    return (
        <div className='genres'>
            {
                data?.map((gen, i) => {
                    if (!genres[gen]?.name) return;
                    return (
                        <div key={i} className="genre">
                            {genres[gen]?.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Genres