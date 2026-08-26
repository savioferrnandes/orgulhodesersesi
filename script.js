//==============================================
// ORGULHO DE SER SESI
// SIMULAÇÃO EDUCATIVA
// SEGURANÇA NA INTERNET
//==============================================


//==============================================
// ELEMENTOS DA PÁGINA
//==============================================

const video = document.getElementById("webcam");

const systemStatus =
    document.getElementById("system-status");

const resultBox =
    document.getElementById("result-box");

const nomeVisitante =
    document.getElementById("nomeVisitante");

const btnExperiencia =
    document.getElementById("btnExperiencia");


//==============================================
// ATUALIZA O STATUS DO SISTEMA
//==============================================

function updateStatus(
    text,
    color = "#0ea5e9"
) {

    systemStatus.innerHTML = `
        <i class="fas fa-circle"></i>
        ${text}
    `;

    systemStatus.style.background = color;

}


//==============================================
// ATIVA A CÂMERA
//
// A câmera serve SOMENTE para visualização.
//
// Nenhuma foto é capturada.
// Nenhuma foto é armazenada.
// Nenhuma imagem é enviada.
//==============================================

async function startCamera() {

    try {

        const stream =
            await navigator.mediaDevices.getUserMedia({

                video: {

                    width: 640,
                    height: 480

                },

                audio: false

            });


        video.srcObject = stream;


        updateStatus(
            "Câmera Ativa",
            "#0ea5e9"
        );


    } catch (erro) {

        console.log(
            "Câmera não autorizada:",
            erro
        );


        updateStatus(
            "Câmera não autorizada",
            "#ef4444"
        );

    }

}


//==============================================
// BOTÃO PARTICIPAR DA EXPERIÊNCIA
//==============================================

btnExperiencia.addEventListener(
    "click",
    () => {

        const nome =
            nomeVisitante.value.trim();


        // Verifica se o nome foi preenchido

        if (nome === "") {

            alert(
                "Digite seu nome para participar da experiência."
            );

            nomeVisitante.focus();

            return;

        }


        // Inicia a simulação

        iniciarExperiencia(nome);

    }
);


//==============================================
// PERMITE PRESSIONAR ENTER NO CAMPO
//==============================================

nomeVisitante.addEventListener(
    "keydown",
    (evento) => {

        if (evento.key === "Enter") {

            btnExperiencia.click();

        }

    }
);


//==============================================
// INICIA A SIMULAÇÃO
//==============================================

function iniciarExperiencia(nome) {

    updateStatus(
        "Processando participação...",
        "#f59e0b"
    );


    resultBox.innerHTML = `

        <div class="user-avatar">

            <i class="fas fa-camera"></i>

        </div>


        <h2>

            Preparando sua participação...

        </h2>


        <p id="statusAnimacao">

            📷 Preparando câmera...

        </p>

    `;


    const texto =
        document.getElementById(
            "statusAnimacao"
        );


    //==========================================
    // ETAPA 1
    //==========================================

    setTimeout(() => {

        texto.innerHTML =
            "📷 Verificando acesso à câmera...";

    }, 1200);


    //==========================================
    // ETAPA 2
    //==========================================

    setTimeout(() => {

        texto.innerHTML =
            "👤 Confirmando participante...";

    }, 2400);


    //==========================================
    // ETAPA 3
    //==========================================

    setTimeout(() => {

        texto.innerHTML =
            "📝 Registrando participação...";

    }, 3600);


    //==========================================
    // ETAPA 4
    //==========================================

    setTimeout(() => {

        texto.innerHTML =
            "🔐 Finalizando experiência...";

    }, 4800);


    //==========================================
    // REVELAÇÃO
    //==========================================

    setTimeout(() => {

        mostrarArmadilha(nome);

    }, 6200);

}


//==============================================
// MOSTRA A ARMADILHA
//==============================================

function mostrarArmadilha(nome) {

    updateStatus(
        "SIMULAÇÃO CONCLUÍDA",
        "#ef4444"
    );


    // Cria o alerta

    const alerta =
        document.createElement("div");


    alerta.id =
        "alertaSimulacao";


    alerta.innerHTML = `

        <div class="alerta-conteudo">


            <!-- ÍCONE -->

            <div class="alerta-icone">

                🚨

            </div>


            <!-- TÍTULO -->

            <div class="alerta-titulo">

                VOCÊ CAIU NA SIMULAÇÃO!

            </div>


            <!-- EXPLICAÇÃO -->

            <div class="alerta-subtitulo">

                Você confiou na aparência da página
                e forneceu seus dados.

            </div>


            <!-- DADO INFORMADO -->

            <div class="alerta-destaque">

                👤

                <strong>
                    Nome informado:
                </strong>


                <strong>

                    ${escaparHTML(nome)}

                </strong>

            </div>


            <!-- ALERTA -->

            <div class="alerta-mensagem">

                ⚠️ Isso poderia ser um golpe real.

            </div>


            <!-- SEGURANÇA -->

            <div class="alerta-seguranca">

                🔐 NENHUM DADO FOI ARMAZENADO
                OU ENVIADO.

            </div>


            <!-- BOTÃO -->

            <button
                class="btn-entendi"
                onclick="fecharAlerta()">

                ENTENDI

            </button>


        </div>

    `;


    // Coloca o alerta na tela

    document.body.appendChild(alerta);

}


//==============================================
// FECHA O ALERTA
//==============================================

function fecharAlerta() {

    const alerta =
        document.getElementById(
            "alertaSimulacao"
        );


    if (alerta) {

        alerta.classList.add(
            "fechando"
        );


        setTimeout(() => {

            alerta.remove();

            mostrarExplicacao();

        }, 300);

    }

}


//==============================================
// MOSTRA A EXPLICAÇÃO DEPOIS DO ALERTA
//==============================================

function mostrarExplicacao() {

    resultBox.innerHTML = `

        <div class="user-avatar alerta">

            <i class="fas fa-shield-alt"></i>

        </div>


        <h2>

            Experiência concluída!

        </h2>


        <p>

            Esta página foi criada para uma
            <strong>
                atividade educativa sobre
                Segurança na Internet.
            </strong>

        </p>


        <hr>


        <h3>

            O que você aprendeu?

        </h3>


        <ul>

            <li>

                Verifique quem está solicitando
                seus dados.

            </li>


            <li>

                Desconfie de páginas que pedem
                informações pessoais.

            </li>


            <li>

                Pense antes de autorizar
                câmera, microfone ou localização.

            </li>


            <li>

                Não confie apenas na aparência
                de um site.

            </li>


            <li>

                Confira o endereço do site antes
                de fornecer informações.

            </li>

        </ul>


        <hr>


        <p>

            🔐

            <strong>

                Segurança começa antes
                de clicar.

            </strong>

        </p>


        <br>


        <button
            class="btn-primary"
            onclick="novaExperiencia()">

            <i class="fas fa-redo"></i>

            Fazer Novamente

        </button>

    `;


    updateStatus(
        "Experiência educativa",
        "#22c55e"
    );

}


//==============================================
// PROTEÇÃO DO NOME
//
// Impede que alguém digite HTML ou código
// dentro do campo de nome.
//==============================================

function escaparHTML(texto) {

    const div =
        document.createElement("div");


    div.textContent =
        texto;


    return div.innerHTML;

}


//==============================================
// NOVA EXPERIÊNCIA
//==============================================

function novaExperiencia() {

    location.reload();

}


//==============================================
// INICIALIZA O SISTEMA
//==============================================

startCamera();