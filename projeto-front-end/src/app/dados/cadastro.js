export const tiposUsuario = [
    { tipId: 1, tipNome: "Aluno" },
    { tipId: 2, tipNome: "Escola" },
    { tipId: 3, tipNome: "Administrador" }
];

const usuariosIniciais = [
    {
        usuId: 1,
        usuNome: "Administrador",
        usuEmail: "admin@roboteco.com",
        usuSenha: "123456",
        tipId: 3
    }
];

const usuariosCadastrados = [...usuariosIniciais];
let usuarioLogado = null;

function gerarNovoId(usuarios) {
    if (!usuarios.length) {
        return 1;
    }

    return Math.max(...usuarios.map((usuario) => usuario.usuId)) + 1;
}

function normalizarEmail(email) {
    return String(email || "").trim().toLowerCase();
}

export function obterUsuarios() {
    return usuariosCadastrados.map((usuario) => ({ ...usuario }));
}

export function cadastrarUsuario({ usuNome, usuEmail, usuSenha, tipId = 1 }) {
    const nome = String(usuNome || "").trim();
    const email = normalizarEmail(usuEmail);
    const senha = String(usuSenha || "").trim();

    if (!nome || !email || !senha) {
        return { ok: false, mensagem: "Preencha nome, e-mail e senha." };
    }

    const usuarios = obterUsuarios();

    const emailJaExiste = usuarios.some((usuario) => normalizarEmail(usuario.usuEmail) === email);

    if (emailJaExiste) {
        return { ok: false, mensagem: "E-mail já cadastrado." };
    }

    const novoUsuario = {
        usuId: gerarNovoId(usuarios),
        usuNome: nome,
        usuEmail: email,
        usuSenha: senha,
        tipId
    };

    usuariosCadastrados.push(novoUsuario);

    return { ok: true, mensagem: "Cadastro realizado com sucesso.", usuario: novoUsuario };
}

export function autenticarUsuario(usuEmail, usuSenha) {
    const email = normalizarEmail(usuEmail);
    const senha = String(usuSenha || "").trim();

    if (!email || !senha) {
        return { ok: false, mensagem: "Informe e-mail e senha." };
    }

    const usuarios = obterUsuarios();

    const usuario = usuarios.find(
        (item) => normalizarEmail(item.usuEmail) === email && item.usuSenha === senha
    );

    if (!usuario) {
        return { ok: false, mensagem: "E-mail ou senha inválidos." };
    }

    usuarioLogado = { ...usuario };

    return { ok: true, mensagem: "Login efetuado com sucesso.", usuario };
}

export function obterUsuarioLogado() {
    if (!usuarioLogado) {
        return null;
    }

    return { ...usuarioLogado };
}

export function sairDoSistema() {
    usuarioLogado = null;
}

export function obterRotaPorTipoUsuario(tipId) {
    if (tipId === 3) {
        return "/admin/painel-admin";
    }

    return "/aluno/painel-do-aluno";
}

export function obterNomeTipoUsuario(tipId) {
    const tipo = tiposUsuario.find((item) => item.tipId === tipId);
    return tipo?.tipNome ?? "Aluno";
}

export function atualizarUsuarioLogado({ usuNome, usuEmail, usuSenha }) {
    if (!usuarioLogado) {
        return { ok: false, mensagem: "Faça login para editar o perfil." };
    }

    const nome = String(usuNome || "").trim();
    const email = normalizarEmail(usuEmail);
    const senha = String(usuSenha || "").trim();

    if (!nome || !email) {
        return { ok: false, mensagem: "Nome e e-mail são obrigatórios." };
    }

    const indiceUsuario = usuariosCadastrados.findIndex((item) => item.usuId === usuarioLogado.usuId);

    if (indiceUsuario < 0) {
        return { ok: false, mensagem: "Usuário não encontrado." };
    }

    const emailEmUso = usuariosCadastrados.some(
        (item) => item.usuId !== usuarioLogado.usuId && normalizarEmail(item.usuEmail) === email
    );

    if (emailEmUso) {
        return { ok: false, mensagem: "Este e-mail já está em uso." };
    }

    const usuarioAtualizado = {
        ...usuariosCadastrados[indiceUsuario],
        usuNome: nome,
        usuEmail: email,
        usuSenha: senha || usuariosCadastrados[indiceUsuario].usuSenha
    };

    usuariosCadastrados[indiceUsuario] = usuarioAtualizado;
    usuarioLogado = { ...usuarioAtualizado };

    return {
        ok: true,
        mensagem: "Perfil atualizado com sucesso.",
        usuario: { ...usuarioAtualizado }
    };
}
