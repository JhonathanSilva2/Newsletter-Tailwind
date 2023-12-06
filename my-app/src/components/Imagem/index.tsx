

export default function Imagem(props: ImagemProps) {
    return <img className={props.classeName||""} src={props.src} alt={props.alt} />;
}