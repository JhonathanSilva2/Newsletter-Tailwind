
export default function Main(props:NestedComponentProps) {
    return(
        <main className={`flex px-6 drop-shadow-2xl lg:w-3/4 ${props.classeName||""}`}>
            {props.children}
        </main>

    )
}
