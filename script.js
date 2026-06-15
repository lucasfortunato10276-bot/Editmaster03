 // --- CONFIGURAÇÃO DO TIMER (15 MINUTOS) ---
    function iniciarTimer(duracao) {
        let timer = duracao;
        const display = document.querySelector('#countdown');

        setInterval(() => {
            let minutos = Math.floor(timer / 60);
            let segundos = timer % 60;

            display.textContent = (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);

            if (--timer < 0) timer = duracao; // Reinicia ao chegar em 0
        }, 1000);
    }

    // --- NOTIFICAÇÕES DE SEGURANÇA REAIS ---
    const alertas = [
        { titulo: "Pagamento via Kiwify", desc: "Ambiente 100% criptografado." },
        { titulo: "Garantia Blindada", desc: "7 dias para testar ou reembolso total." },
        { titulo: "Acesso Imediato", desc: "Receba o curso no e-mail agora." },
        { titulo: "Site Seguro SSL", desc: "Conexão protegida por 256 bits." }
    ];

    let index = 0;

    function alternarNotificacao() {
        const toast = document.getElementById('notification-toast');
        const txt = document.getElementById('notif-text');
        const desc = toast.querySelector('p:last-child');

        // Define os textos
        txt.innerHTML = `<b>${alertas[index].titulo}</b>`;
        desc.innerText = alertas[index].desc;

        // Mostra (Fade In)
        toast.style.display = 'flex';
        setTimeout(() => { toast.style.opacity = '1'; }, 10);

        // Esconde após 5 segundos (Fade Out)
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => { 
                toast.style.display = 'none';
                index = (index + 1) % alertas.length; // Próximo alerta
            }, 500);
        }, 5000);
    }

    // Inicializar ao carregar a página
    window.onload = () => {
        iniciarTimer(15 * 60); // Inicia timer
        setTimeout(alternarNotificacao, 3000); // Primeira notificação
        setInterval(alternarNotificacao, 12000); // Repete a cada 12 segundos
    };