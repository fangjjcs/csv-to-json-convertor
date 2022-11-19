

export const generateColumns = (data) => {

    if(data.length===0){
        return []
    }

    const originCols = Object.keys(data[0])
    let columnMap = {}
    originCols.forEach( col => {
        const charArray = col.split(/-| |_/)
        let camel = charArray[0].toLowerCase()
        let upperCases = ""
        if(charArray.length>1) {
            for(let i = 1 ; i < charArray.length ; i++) {
                upperCases += charArray[i].charAt(0).toUpperCase() + charArray[i].slice(1).toLowerCase();
            }
        }
        camel += upperCases
        columnMap[col] = camel
    })

    let camelCaseData = []
    data.forEach( d => {
        let row = {}
        originCols.forEach( col => {
            row[columnMap[col]] = d[col]
        })
        camelCaseData.push(row)
    })
    console.log(columnMap, camelCaseData)

    return [columnMap,camelCaseData]
}

export const convertColumnName = (type, dict, data) => {
    if(data.length===0){
        return []
    }
    
}