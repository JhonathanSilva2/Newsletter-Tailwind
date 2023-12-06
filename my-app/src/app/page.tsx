import EmailForm from "@/components/EmailForm";
import Imagem from "@/components/Imagem";
import Main from "@/components/Main";
import SectionLeft from "@/components/SectionLeft";
import SectionRight from "@/components/SectionRight";
import Sininho from "@/components/Sininho";
import TitleParagh from "@/components/Title&Paragh";

export default function Home() {
  return (
    <Main>
      <SectionLeft>
        <Imagem classeName={"p-6 m-auto"}
         src={"/icone-mergulhador.svg"}
         alt="icone de mergulhador"
        />
      </SectionLeft>
      <SectionRight>
        <Sininho/>
        <TitleParagh/>
        <EmailForm/>
      </SectionRight>
    </Main>
   
  )
}
