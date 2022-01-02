import React from 'react'
import randomcolor from 'randomcolor'

export const Avatar = ({ initials }) => {
    const style = {
        backgroundColor: randomcolor({
            seed: initials,
            luminosity: 'light',
        }),
    }

    return (
        <div className="user me-2" style={style}>
            {initials}
        </div>
    )
}

