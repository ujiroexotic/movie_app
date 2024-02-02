import React, { useState } from 'react'
import { Carousel, ContentWrapper, SwitchTabs } from '../../../components'
import useFetch from "../../../hooks/useFetch";

const Popular = () => {

    const [endPoint, setEndPoint] = useState("movie");

    const { data, loading } = useFetch(`/${endPoint}/popular`);

    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                {/* For Making Dynamic Component (Day, week) k ilawa or bhi values desakte h */}
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
        </div>
    )
}

export default Popular