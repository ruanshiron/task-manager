import React from 'react'

import { useRouteMatch, useHistory } from 'react-router-dom'
import { Menu } from '@blueprintjs/core'

export function LinkMenuItem({ to, activeOnlyWhenExact, icon, text }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    })

    let history = useHistory()

    return (
        <Menu.Item
            style={{ marginTop: "2px" }}
            icon={icon}
            text={text}
            active={match ? true : false}
            onClick={(e) => {
                history.push(to)
            }}
        />
    )
}
