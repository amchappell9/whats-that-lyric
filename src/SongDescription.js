import React from 'react'

export default function SongDescription(props) {
    const description = props.description.dom.children.map((node) =>
        <div>{node}</div>
    );

    console.log(description);

    return (
        <div className="flex1 px-4 py-2 m-2">
            {/* {description} */}
        </div>
    )
}
