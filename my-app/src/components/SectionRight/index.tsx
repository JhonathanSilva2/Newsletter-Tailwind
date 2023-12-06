export default function SectionRight(props:NestedComponentProps) {
    return (
        <section className={`bg-white p-10 gap-6 flex flex-col justify-center rounded-lg lg:w-1/2  lg:rounded-l-none ${props.classeName || ""}`} >
            
            {
            
                props.children
            }
        </section>

    )
}