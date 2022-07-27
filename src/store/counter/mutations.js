

const increment = ( state ) => {
    state.count++
    state.lastMutation = 'increment'
}
const incrementBy = ( state, val ) => {
    state.count += val
    state.lastMutation = `incrementBy + ${val}`
}
const setLoading = ( state, val ) => {
    state.isLoading = val
}


export {
    increment,incrementBy,setLoading
}