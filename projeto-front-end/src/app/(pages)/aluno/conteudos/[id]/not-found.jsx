import SidebarPosLogin from "@/app/components/SidebarPosLogin/SidebarPosLogin";
import Botao from "@/app/components/Botoes/Botao/Botao";

export default function ConteudoNaoEncontrado() {
    return (
        <SidebarPosLogin perfil="aluno">
            <div className="p-4 p-md-5">
                <h1>Conteúdo não encontrado</h1>
                <p className="my-3">Esse conteúdo não está disponível. Escolha uma das aulas da nossa biblioteca.</p>
                <Botao href="/aluno/conteudos" texto="Voltar para conteúdos" classe="btn-blue" />
            </div>
        </SidebarPosLogin>
    );
}
