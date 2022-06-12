import React from 'react'

interface Props {
    children: React.ReactNode
}

const TopBarButton = (props: Props) => {
    return (
        <button className="border-0 rounded-xl hover:bg-gray-200/30 p-1">
            {props.children}
        </button>
    )
}

export default TopBarButton