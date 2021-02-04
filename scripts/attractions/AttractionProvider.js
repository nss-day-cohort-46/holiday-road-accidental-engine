let bizarraries = []

export const useAttractions = () => {
    return bizarraries.slice()
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(
            parsedAttractions => {
                console.table(parsedAttractions)
                bizarraries = parsedAttractions
            }
        )
}