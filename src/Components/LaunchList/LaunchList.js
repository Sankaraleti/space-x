import React from 'react'
import Launch from '../Launch/Launch'

const LaunchList = (props) => {
    const data = props.data
    const name = data.mission_name;
    const date = data.launch_date_local;
    const desc = data.details;
    // console.log(props)
    const url = data.links.flickr_images.length === 0 ? "https://farm2.staticflickr.com/1633/25788014884_6a3f9ae183_o.jpg" : data.links.flickr_images[0]

    return (
        <>
            <Launch
                imageUrl={url}
                name={name}
                launchDate={date}
                description={desc}
            />
        </>
    )
}
export default LaunchList
