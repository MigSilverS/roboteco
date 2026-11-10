// A chave de cada conteúdo é o identificador usado na URL.
export const conteudos = {
    "o-que-e-robotica": {
        titulo: "O que é robótica?",
        categoria: "Robótica",
        nivel: "Primeiros passos",
        tempo: "10 Min",
        descricao: "Entenda sensores, comandos e movimentos.",
        objetivos: [
            "Reconhecer o que um robô pode fazer.",
            "Diferenciar sensores, comandos e atuadores.",
            "Identificar a robótica no dia a dia."
        ],
        secoes: [
            {
                titulo: "Robôs estão mais perto do que você imagina",
                texto: "Um robô é uma máquina programada para realizar tarefas. Ele pode ajudar a montar um carro, explorar lugares distantes ou limpar o chão de uma casa. Nem todo robô tem braços, pernas ou aparência de gente!"
            },
            {
                titulo: "Perceber, decidir e agir",
                texto: "Os sensores recebem informações do ambiente, como luz ou distância. O programa usa essas informações para escolher uma ação. Os atuadores, como motores, colocam essa ação em prática. É assim que um robô pode perceber um obstáculo e mudar de direção."
            },
            {
                titulo: "Cada parte tem uma função",
                texto: "Imagine um carrinho que desvia de objetos: o sensor mede a distância, o programa verifica se há algo perto e os motores giram as rodas. Essas partes trabalham juntas para cumprir a tarefa que foi programada."
            }
        ],
        atividade: {
            titulo: "Invente seu primeiro robô",
            descricao: "Pegue papel e lápis e imagine um robô que ajude em uma tarefa do seu dia.",
            passos: [
                "Desenhe o robô e dê um nome para ele.",
                "Escreva qual tarefa ele vai realizar.",
                "Escolha o que ele precisa perceber e qual movimento vai fazer."
            ],
            pergunta: "Se o seu robô encontrar um obstáculo, o que ele deve fazer?",
            resposta: "Uma possibilidade é parar, verificar um caminho livre e mudar de direção. O sensor percebe o obstáculo, o programa escolhe a ação e os motores realizam o movimento."
        },
        lembrete: "Um robô segue instruções. Quanto mais claras elas forem, melhor ele poderá realizar sua tarefa."
    },
    "sequencias-e-comandos": {
        titulo: "Sequências e comandos",
        categoria: "Programação",
        nivel: "Primeiros passos",
        tempo: "8 Min",
        descricao: "Organize instruções para resolver um problema.",
        objetivos: [
            "Entender o que é uma sequência de instruções.",
            "Criar comandos simples e claros.",
            "Testar uma sequência e corrigir seus passos."
        ],
        secoes: [
            {
                titulo: "Uma instrução de cada vez",
                texto: "Um comando é uma instrução para realizar uma ação, como avançar um passo ou virar à direita. Uma sequência é um conjunto de comandos em uma ordem definida. Na programação, essa ordem ajuda a chegar ao resultado esperado."
            },
            {
                titulo: "A ordem faz diferença",
                texto: "Pense em como você calça um tênis: primeiro coloca a meia, depois o tênis e, por fim, amarra o cadarço. Trocar essa ordem pode atrapalhar a tarefa. Um programa também precisa de passos organizados para funcionar."
            },
            {
                titulo: "Testar também é aprender",
                texto: "Se uma sequência não chegar ao resultado esperado, observe cada passo. Talvez falte um comando ou uma direção esteja trocada. Corrigir essas instruções faz parte da programação e é uma forma de aprender com os testes."
            }
        ],
        atividade: {
            titulo: "Programe um caminho no papel",
            descricao: "Desenhe uma grade de quatro linhas e quatro colunas. Marque uma saída e uma chegada em lugares diferentes.",
            passos: [
                "Coloque uma borracha na saída para representar o robô.",
                "Escreva comandos como avançar uma casa, virar à esquerda e virar à direita.",
                "Execute um comando por vez e ajuste a sequência até chegar ao destino."
            ],
            pergunta: "O robô foi para o lugar errado. Você precisa apagar todos os comandos?",
            resposta: "Não. Execute novamente um passo por vez e encontre onde o caminho mudou. Muitas vezes, basta corrigir uma direção ou acrescentar um comando."
        },
        lembrete: "Comandos claros e uma ordem bem pensada são o começo de um bom programa."
    },
    "conhecendo-os-circuitos": {
        titulo: "Conhecendo os circuitos",
        categoria: "Eletrônica",
        nivel: "Primeiros passos",
        tempo: "12 Min",
        descricao: "Identifique os elementos de um circuito simples.",
        objetivos: [
            "Reconhecer os elementos de um circuito.",
            "Diferenciar um caminho aberto de um fechado.",
            "Representar um circuito com um desenho."
        ],
        secoes: [
            {
                titulo: "Um caminho para a corrente elétrica",
                texto: "Um circuito elétrico conecta componentes para permitir a passagem de corrente elétrica. Em uma lanterna simples, uma pilha fornece energia, os contatos conduzem a corrente e a lâmpada transforma parte dessa energia em luz."
            },
            {
                titulo: "Conheça as partes",
                texto: "A fonte fornece energia, os condutores ligam os componentes e o receptor utiliza a energia para realizar uma função. Um interruptor permite abrir ou fechar o caminho, como acontece quando você liga ou desliga uma lanterna."
            },
            {
                titulo: "Aberto ou fechado?",
                texto: "Quando existe um caminho contínuo passando pela fonte e pelo receptor, o circuito está fechado e a corrente pode circular. Se o interruptor interrompe esse caminho, o circuito fica aberto e a lâmpada apaga."
            }
        ],
        atividade: {
            titulo: "Desenhe uma lanterna por dentro",
            descricao: "Nesta atividade, você só precisa de papel e lápis para representar um circuito.",
            passos: [
                "Desenhe uma pilha, uma lâmpada e um interruptor.",
                "Ligue os elementos com linhas, formando um caminho entre os dois polos da pilha, passando pela lâmpada.",
                "Faça outro desenho com o interruptor aberto e marque onde o caminho foi interrompido."
            ],
            pergunta: "Por que a lâmpada apaga quando abrimos o interruptor?",
            resposta: "Porque o caminho da corrente foi interrompido. Sem um circuito fechado, a corrente deixa de passar pela lâmpada."
        },
        lembrete: "O desenho ajuda a entender as conexões antes de montar um circuito de verdade."
    }
};
