let bizarraries = []

export const useAttractions = () => {
    return bizarraries.slice()
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(
            parsedAttractions => {
                // console.table(parsedAttractions)
                bizarraries = parsedAttractions
            }
        )
}


// &limit=500 - to provide more than 50 options in the select dropdown.