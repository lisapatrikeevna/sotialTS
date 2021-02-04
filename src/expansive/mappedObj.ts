
export const mappedObj = (items:any[],itemId:any,objPropsName:any,newProperty:any) => {
    items.map(i => {
       // if (i['objPropsName'] === itemId) {
        if (i[objPropsName] === itemId) {
            return {...i, ...newProperty}
        }
        return i;
    })
}