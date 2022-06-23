import React from 'react';

// context object always comes with 2 components: Provider & Consumer
// const UserContext = React.createContext()
const UserContext = React.createContext("Ilay")
//with a default value -> default value will be displayed when 
//no value is passed in with UserProvider "value" prop

//context react components -> more readable way before we export them out
const UserProvider = UserContext.Provider 
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext //another way to display context