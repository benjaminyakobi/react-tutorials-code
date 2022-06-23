import { useEffect } from 'react'

//Hooks shall be started with the word 'use'
//this is a convention - even for the linters
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle
