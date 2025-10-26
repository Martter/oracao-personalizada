// A URL FINAL CORRETA DO SEU BACKEND (Cloud Run / run.app)
const FUNCAO_URL = "https://gerar-oracao-27u4zhdpla-uc.a.run.app"; 

document.getElementById('gerarBotao').addEventListener('click', gerarOracao);


// --- FUNÇÃO PRINCIPAL DE GERAÇÃO DE ORAÇÃO ---

async function gerarOracao() {
    const motivo = document.getElementById('motivoInput').value;
    const resultadoDiv = document.getElementById('resultado');

    if (!motivo.trim()) {
        resultadoDiv.innerHTML = '<p style="color: red;">Por favor, digite o motivo da sua oração.</p>';
        return;
    }

    // Estado de Carregamento
    resultadoDiv.innerHTML = '<p class="loading">Gerando oração... Aguarde.</p>';

    try {
        const response = await fetch(FUNCAO_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ motivo: motivo })
        });

        if (!response.ok) {
            // Se houver qualquer erro HTTP (4xx ou 5xx)
            resultadoDiv.innerHTML = '<p style="color: red;">Erro ao contatar o servidor de oração. Tente novamente mais tarde.</p>';
            return;
        }

        const data = await response.text(); 
        
        // 1. Exibe a Oração
        resultadoDiv.innerHTML = `
            <p style="font-weight: bold;">Sua Oração:</p>
            <p style="white-space: pre-wrap; text-align: left; padding: 10px;">${data}</p>
            <p style="margin-top: 15px; font-style: italic; font-size: 0.9em;">Que Deus atenda sua súplica.</p>
        `;
        

    } catch (error) {
        console.error("Erro na comunicação:", error);
        resultadoDiv.innerHTML = '<p style="color: red;">Falha na conexão. Verifique sua URL ou tente novamente.</p>';
    }
}
