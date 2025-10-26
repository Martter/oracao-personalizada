# Geração de Orações Católicas Personalizadas por IA

[![Status](https://img.shields.io/badge/Status-Online%20%7C%20Serverless-28A745)](https://oracaosalva.me)
[![Tecnologia](https://img.shields.io/badge/Tecnologia-Python%20%7C%20Gemini%20API-38761D)]()
[![Frontend](https://img.shields.io/badge/Frontend-GitHub%20Pages-1E90FF)]()

## 🌐 Acesse a Aplicação Final
**Domínio Principal:** [https://oracaosalva.me](https://oracaosalva.me)
**Frontend:** [https://github.com/Martter/oracao-personalizada/](https://github.com/Martter/oracao-personalizada/)

---

## 💡 Visão Geral do Projeto

**Oração Salva** é uma aplicação *full-stack* que demonstra a integração de serviços *serverless* com Inteligência Artificial Generativa para criar uma experiência de usuário única e de valor. O objetivo é fornecer orações católicas únicas e personalizadas baseadas nas intenções específicas do usuário.

Este projeto serve como portfólio para demonstrar proficiência em arquitetura desacoplada, segurança de API Keys e desenvolvimento frontend.

## ⚙️ Stack Tecnológico e Arquitetura

O projeto é baseado em uma arquitetura *Serverless* e *Static Site* para garantir escalabilidade massiva, baixa latência e custo operacional mínimo.

### Backend (IA & API)

* **Linguagem:** Python 3.11 (Runtime).
* **Modelo de IA:** Gemini 2.5 Flash (Google GenAI SDK).
* **Hospedagem:** **Google Cloud Functions (2ª Geração) / Cloud Run.**
* **Segurança:** Utilização do **Google Secret Manager** e **`SecretParam`** para armazenar a chave de API do Gemini, garantindo que o segredo não seja exposto no código ou nas variáveis de ambiente de *deploy* público (princípio da menor exposição).
* **Comunicação:** Endpoint HTTP configurado com CORS (Cross-Origin Resource Sharing) para aceitar requisições `POST` do frontend estático.

### Frontend (Interface)

* **Tecnologias:** HTML, CSS, JavaScript (Vanilla JS).
* **Função:** Captura da entrada do usuário e execução de chamadas assíncronas (`fetch`) para o endpoint do Backend.
* **Hospedagem:** GitHub Pages.
* **Design:** Implementação de CSS limpo, responsivo e temático (com imagem de fundo de igreja e container com filtro `backdrop-filter`).

## 🛠️ Como Funciona o Fluxo de Dados

1.  O usuário insere o motivo no `index.html`.
2.  O `script.js` envia o motivo (payload JSON) para o endpoint **`run.app`** do Google Cloud.
3.  A função Python recebe o payload e injeta o `motivo` em um *system prompt* que define o comportamento da IA como um "Criador de Orações Católicas".
4.  O Gemini gera o texto da oração.
5.  A função retorna o texto puro (String) para o JavaScript.
6.  O JavaScript exibe o texto final no frontend.

## 🚀 Como Rodar Localmente (Para Desenvolvedores)

Este projeto foi desenvolvido para ser facilmente replicável.

### Pré-requisitos

* Node.js e Firebase CLI
* Python 3.11+ e `pip`
* Uma chave de API do Google Gemini (obtida no Google AI Studio)

### Passos

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/martter/](https://github.com/martter/oracao-personalizada)
    cd oracao-personalizada
    ```
2.  **Configurar o Backend (Python Functions):**
    ```bash
    cd functions
    pip install -r requirements.txt
    ```
3.  **Configurar o Segredo (Necessário Plano Blaze no GCP):**
    ```bash
    firebase functions:secrets:set GEMINI_API_KEY
    # Cole sua chave aqui.
    ```
4.  **Deploy da Função:**
    ```bash
    firebase deploy --only functions
    ```
    *A URL de teste será fornecida no terminal.*

---

## 👨‍💻 Autor

**Rodrigo Poggi**

* **Desenvolvedor:** [Rodrigo]
* **Instagram:** [@poddicrer](https://www.instagram.com/poddicrer)
* **GitHub:** [https://github.com/martter]

*(Este projeto é um portfólio de estudo para a área de desenvolvimento Serverless e IA.)*
