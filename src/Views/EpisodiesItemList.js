import React from "react";
import EpisodiesItem from "./EpisodiesItem";

const EpisodiesItemList = ({ items }) => {
    return (
        <div className="row g-2">
            {items?.map(({ id, name, air_date, episode }) => (
                <div className="col-md-4" key={id}>
                    <EpisodiesItem id={id} name={name} air_date={air_date} episode={episode} />
                </div>
            ))}
        </div>)
}
export default EpisodiesItemList;