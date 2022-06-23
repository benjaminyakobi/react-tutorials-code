import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <div>
                                        F - Without Hooks: {user} - {channel}
                                    </div>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
