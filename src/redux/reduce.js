//@flow
export default function reduce<T>(initialState: T, handlers:any) {
    return (state:T = initialState, action:any = {}) => {
        const handler = handlers[action.type];
        return handler ? handler(state, action) : state;
    }
}