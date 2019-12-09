import React from 'react'

const initial = { user: undefined, loggingIn: true}

export const UserContext = React.createContext({
    userState : initial,
})
