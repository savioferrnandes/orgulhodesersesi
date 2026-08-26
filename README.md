 🛡️ SENAI Cam Access - Controle de Acesso Facial

Sistema moderno e responsivo de **Controle de Acesso Biométrico Facial em Tempo Real** desenvolvido para instituições de ensino e empresas (com identidade visual alinhada ao **SENAI**). O sistema realiza a captura do feed de vídeo, processamento dos descritores faciais via Inteligência Artificial e consulta/armazenamento de cadastros em nuvem através do **Supabase**.

---

## Visão Geral

O **SENAI Cam Access** transforma qualquer webcam em um ponto inteligente de checagem de acesso. Utilizando modelos treinados da biblioteca `face-api.js`, o sistema identifica e reconhece usuários em fração de segundos, comparando a estrutura vetorial (*descriptors*) da face capturada com os registros mantidos no banco de dados **Supabase**.

A interface foi projetada com foco em **UX/UI**, trazendo o **vermelho SENAI (#e30613)** como cor predominante, modo escuro (*Dark Mode*), feedbacks visuais animados para leitura facial e modal estilizado para novos cadastros.

---

## Funcionalidades e Recursos

- 🎥 **Monitoramento em Tempo Real**: Captura o feed da webcam com detecção contínua de rostos (300ms loop).
- 🧠 **Reconhecimento Facial Inteligente (IA)**: Utiliza redes neurais convolucionais para extrair descritores faciais de 128 pontos.
- 🟢🔴 **Acesso Liberado / Negado Instantâneo**: Exibe o status visual dinâmico com o nome, matrícula e curso/cargo do usuário identificado.
- 📐 **HUD / Scanner Animado**: Moldura visual de alinhamento com efeito pulsante ao detectar um rosto.
- 📝 **Modal de Cadastro Integrado**: Interface limpa para cadastro de novos usuários vinculando a biometria capturada aos dados pessoais.
- ☁️ **Persistência em Nuvem**: Armazenamento seguro dos vetores numéricos do rosto no banco de dados Supabase.
- 🎨 **Design Moderno e Responsivo**: Tema escuro institucional alinhado ao padrão SENAI.

---

## Tecnologias Utilizadas

### Front-end
- **HTML5 & CSS3**: Estruturação semântica com layout responsivo e variáveis CSS.
- **JavaScript (ES6+)**: Lógica assíncrona (`async/await`), manipulate DOM e controle da câmera.
- **FontAwesome 6**: Ícones vetoriais modernos.

### Inteligência Artificial & Computação Gráfica
- **[face-api.js](https://github.com/justadudewhohacks/face-api.js)**: API construída sobre o TensorFlow.js para detecção e reconhecimento facial no navegador.
  - *Tiny Face Detector* (Detecção rápida de faces)
  - *Face Landmark 68 Net* (Mapeamento dos pontos faciais)
  - *Face Recognition Net* (Extração dos vetores de reconhecimento)

### Backend & Banco de Dados
- **[Supabase](https://supabase.com/)**: Plataforma BaaS (Backend-as-a-Service) utilizada para persistência e consulta rápida de usuários.

---

## 🛠️ Pré-requisitos e Configuração do Banco (Supabase)

Antes de rodar o projeto, você precisa configurar a tabela no **Supabase**.

### 1. Criando a Tabela `usuarios`
No painel do Supabase, vá até o **SQL Editor** e execute o comando abaixo para criar a tabela com os campos necessários:

```sql
CREATE TABLE usuarios (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    nome TEXT NOT NULL,
    matricula TEXT NOT NULL,
    curso TEXT NOT NULL,
    descriptor JSONB NOT NULL
);
```

> **Nota:** O campo `descriptor` salva um array/vetor de números de ponto flutuante referentes à assinatura facial extraída pela IA.

---

## Como Executar o Projeto

Como o projeto é construído totalmente em **HTML/CSS/JS Client-Side**, não é necessário instalar dependências no Node.js.

### Opção 1: Servidor Local (Recomendado)
Para utilizar a webcam sem restrições de segurança do navegador, execute um servidor local simples (ex: **VS Code Live Server** ou Python HTTP Server).

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/senai-cam-access.git
   cd senai-cam-access
   ```

2. **Inicie um servidor local com Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   ```

3. **Acesse no navegador:**
   ```text
   http://localhost:8000
   ```

---

## 🎯 Como Usar

1. **Inicialização do Sistema**:
   - Permita o acesso do navegador à sua **Webcam**.
   - O status no canto superior direito indicará `CARREGANDO IA...` e posteriormente `CÂMERA ATIVA - PRONTO`.

2. **Reconhecimento Facial**:
   - Posicione seu rosto em frente à câmera.
   - Se você estiver cadastrado no Supabase, o card de resultado exibirá um ícone verde de sucesso juntamente com o seu **Nome**, **Matrícula** e **Curso/Cargo**.
   - Se você não estiver cadastrado, o sistema alertará `Não Identificado` com acesso negado.

3. **Cadastrando um Novo Usuário**:
   - Posicione o rosto da pessoa não cadastrada em frente à câmera.
   - Clique no botão vermelho **`Cadastrar Novo Usuário`**.
   - O modal de cadastro se abrirá. Preencha o **Nome Completo**, **Matrícula** e **Curso / Cargo**.
   - Clique em **`Finalizar Cadastro`**.
   - Pronto! O vetor facial foi salvo no Supabase e o reconhecimento do novo usuário passará a funcionar imediatamente na câmera.

---

## 📁 Estrutura de Arquivos

```text
senai-cam-access/
├── index.html     # Estrutura principal, modal de cadastro e carregamento de scripts
├── style.css      # Estilização visual (Tema SENAI, Animações, Modal e Responsive)
├── script.js     # Lógica de integração com Supabase, captura da webcam e Face-API
└── README.md      # Documentação do repositório
```

---

## Desenvolvido pelo Squad Phoenix Dev's 
### Isabella, Kemmily, Felipe Jacques e Lorena
### LinkedIn 
### - Isabella Rosa
### -Kemmilly de Sousa Carvalho
### -Lorena  Fontana Souza 
### -Felipe Jacques



<p align="center">
  Desenvolvido para fins educacionais e de controle de acesso — <b>SENAI</b>
</p>
