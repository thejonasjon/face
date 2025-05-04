export function Button ({children, className}){
    return (
        <button className={`${className} flex text-nowrap`}>
            {children}
        </button>
    )
}