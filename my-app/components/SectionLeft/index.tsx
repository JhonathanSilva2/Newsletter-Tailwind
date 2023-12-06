export default function sectionLeft(props:NestedComponentProps) {
    return (
        <section className={`bg-azul-escuro hidden lg:block w-1/2 rounded-l-lg ${props.classeName || ""}`} >
            {
                props.children
            }
        </section>

    )
}