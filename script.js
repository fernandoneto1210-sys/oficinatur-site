// ========================================
// MENU MOBILE
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});


// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// SCROLL SUAVE
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const roteiro = formData.get('roteiro');
        const mensagem = formData.get('mensagem');

        // Criar link mailto
        const mailtoLink = `mailto:oficinadeturismo@oficinatur.com.br?subject=Contato: ${roteiro}&body=Nome: ${nome}%0D%0AEmail: ${email}%0D%0ATelefone: ${telefone}%0D%0ARoteiro de Interesse: ${roteiro}%0D%0A%0D%0AMensagem:%0D%0A${mensagem}`;

        window.location.href = mailtoLink;

        // Limpar formulário
        contactForm.reset();

        alert('Obrigado pelo contato! Seu cliente de e-mail será aberto para enviar a mensagem.');
    });
}

// ========================================
// GERAR PDF AUTOMÁTICO
// ========================================
function gerarPDF(nomeRoteiro) {
    // Dados dos roteiros
    const roteiros = {
        'Inglaterra & Escócia': {
            titulo: 'Inglaterra & Escócia',
            datas: '17 a 29 de setembro de 2026',
            duracao: '13 dias / 11 noites',
            descricao: 'Uma jornada pelos castelos, highlands e cidades históricas da Inglaterra e Escócia.',
            itinerario: `
DIA 1 (17/09) - Embarque com destino a Londres

DIA 2 (18/09) - Londres
Traslado do Aeroporto Heathrow de Londres até o hotel. Alojamento, restante do dia livre.

DIA 3 (19/09) - Londres - City Tour Panorâmico
Passeio panorâmico por Londres: Westminster, Kensington, Mayfair, Belgravia. Parlamento, Big Ben, Abadia de Westminster, Palácio de Buckingham, troca da guarda, West End, Picadilly Circus, Trafalgar Square.

DIA 4 (20/09) - Londres / Oxford / Stratford / Chester / Liverpool
Oxford (faculdades universitárias), Stratford-Upon-Avon (berço de Shakespeare), Chester (cidade murada), Liverpool (berço dos Beatles). Jantar incluído.

DIA 5 (21/09) - Liverpool / Lake District / Gretna Green / Glasgow
Lake District, Gretna Green (fronteira com a Escócia), Glasgow (Buchanan Street).

DIA 6 (22/09) - Glasgow / Loch Lomond / Fort William / Lago Ness / Inverness
Loch Lomond, Fort William, Lago Ness, Castelo de Urquhart, Inverness. Jantar incluído.

DIA 7 (23/09) - Highlands / Pitlochry / Stirling / Edimburgo
Destilaria de whisky, Castelo de Stirling, Edimburgo.

DIA 8 (24/09) - Edimburgo - Dia Livre
Dia livre para explorar: Castelo de Edimburgo, Palácio de Holyrood, Catedral de St. Giles, Galeria Nacional, Royal Yacht Britannia.

DIA 9 (25/09) - Edimburgo / Jedburgh / Durham / York / Harrogate
Jedburgh (abadia beneditina), Durham (catedral), York (origem romana e viking). Jantar incluído.

DIA 10 (26/09) - Harrogate / Cambridge / Londres
Cambridge, Londres.

DIA 11 (27/09) - Londres - Dia Livre
Dia livre. Sugestão: Castelo de Windsor.

DIA 12 (28/09) - Londres - Dia Livre
Dia livre. Sugestão: passeio de barco pelo rio Tâmisa.

DIA 13 (29/09) - Londres
Traslado ao aeroporto. Fim dos serviços.
            `
        },
        'Maratona de Punta del Este': {
            titulo: 'Maratona de Punta del Este',
            datas: '04 a 08 de setembro de 2026',
            duracao: '5 dias / 4 noites',
            descricao: 'Participe da Maratona de Punta del Este com acompanhamento completo e passeios exclusivos.',
            itinerario: `
DIA 1 (04/09) - Voo com destino a Montevidéu
Chegada e traslado ao hotel em Punta del Este. À tarde, retirada do kit para a maratona. Noite livre.

DIA 2 (05/09) - Punta del Este - City Tour
Café da manhã. City tour por Punta del Este. Visita a Casapueblo com ingresso incluído. Retorno ao hotel e restante do dia livre.

DIA 3 (06/09) - MARATONA DE PUNTA DEL ESTE
Hoje é o grande dia! Maratona de Punta del Este. Horários de largada conforme organização.

DIA 4 (07/09) - Punta del Este - Dia Livre
Café da manhã. Dia livre para atividades independentes. Sugerimos passeio opcional a Colônia del Sacramento, Montevidéu ou vinícolas.

DIA 5 (08/09) - Retorno
Café da manhã. Traslado ao aeroporto de Montevidéu para voo com destino a São Paulo.
            `
        },
        'África do Sul': {
            titulo: 'África do Sul',
            datas: '21 a 30 de maio de 2026',
            duracao: '10 dias / 9 noites',
            descricao: 'Safáris, vinícolas, Table Mountain e pinguins. Uma experiência completa na África do Sul.',
            itinerario: `
DIA 1 (21/05) - Embarque com destino a Johannesburgo

DIA 2 (22/05) - Johannesburgo
Chegada. Traslado ao hotel. City tour: Constitution Hill, Melville, Newtown, Museu África.

DIA 3 (23/05) - Johannesburgo / Pilanesberg
Traslado ao lodge (3h). Almoço e safári ao final da tarde. Pensão completa.

DIA 4 (24/05) - Pilanesberg
Safári matinal e vespertino. Dia completo para observar os Big Five. Pensão completa.

DIA 5 (25/05) - Pilanesberg / Cape Town
Safári matinal, café da manhã e voo para Cape Town. Traslado ao hotel.

DIA 6 (26/05) - Cape Town
Table Mountain (teleférico fast track), Jardins de Kirstenbosch. À tarde, passeio de barco ao pôr do sol com espumante.

DIA 7 (27/05) - Cape Town
Cabo da Boa Esperança, Simon's Town (Praia dos Pinguins). Almoço incluído. Retorno via Chapman's Peak.

DIA 8 (28/05) - Cape Town
Vinícolas de Stellenbosch & Franschhoek. Degustação em 2 fazendas e almoço estilo piquenique incluído.

DIA 9 (29/05) - Cape Town
Dia livre. Sugestão: compras no Victoria Wharf. À noite, jantar de despedida no Gold Restaurant.

DIA 10 (30/05) - Retorno
Café da manhã, checkout e traslado ao aeroporto para voo de retorno.
            `
        },
        'Punta Cana': {
            titulo: 'Punta Cana',
            datas: '15 a 21 de abril de 2026',
            duracao: '7 dias / 6 noites',
            descricao: 'Resort all inclusive em Punta Cana com passeios opcionais para Ilha Saona e cenotes.',
            itinerario: `
DIA 1 (15/04) - Embarque com destino a Punta Cana
Chegada e traslado ao hotel. Restante do dia livre.

DIA 2 (16/04) - Punta Cana All Inclusive
Dia para descansar e aproveitar as atividades do hotel. Sugerimos conhecer o centrinho de Bávaro (comércio local, artesanato).

DIA 3 (17/04) - Punta Cana All Inclusive
Sugerimos passeio OPCIONAL à Ilha Saona (catamarã ou lancha, piscinas naturais, águas cristalinas).

DIA 4 (18/04) - Punta Cana All Inclusive
Sugerimos passeio OPCIONAL ao Hoyo Azul & Scape Park (cenote de água azul turquesa, cavernas, tirolesas).

DIA 5 (19/04) - Punta Cana All Inclusive
Dia livre.

DIA 6 (20/04) - Punta Cana All Inclusive
Sugerimos passeio OPCIONAL à Reserva Ojos Indígenas (trilhas, 12 lagoas de água doce, fauna e flora nativa).

DIA 7 (21/04) - Retorno
Café da manhã. Traslado ao aeroporto para voo com destino a São Paulo.
            `
        }
    };

    const roteiro = roteiros[nomeRoteiro];

    if (!roteiro) {
        alert('Roteiro não encontrado');
        return;
    }

    // Criar conteúdo do PDF em texto
    let conteudo = `
╔════════════════════════════════════════════════════════════╗
║                  OFICINA DE TURISMO                        ║
║            SUA VIAGEM COMEÇA AQUI!                         ║
║      30 ANOS TRANSFORMANDO SONHOS EM VIAGENS               ║
╚════════════════════════════════════════════════════════════╝

${roteiro.titulo.toUpperCase()}

Datas: ${roteiro.datas}
Duração: ${roteiro.duracao}

────────────────────────────────────────────────────────────

SOBRE ESTE ROTEIRO

${roteiro.descricao}

────────────────────────────────────────────────────────────

ITINERÁRIO COMPLETO (DIA A DIA)

${roteiro.itinerario}

────────────────────────────────────────────────────────────

INFORMAÇÕES E RESERVAS

📧 E-mail: oficinadeturismo@oficinatur.com.br
📱 WhatsApp: +55 35 98862-2943
☎️ Telefones: (35) 98844-5517 / (35) 98866-2944
🌐 Website: www.oficinatur.com.br

Endereço:
Av D Pedro II, 538 - LJ3
São Lourenço - MG

Atendimento: Segunda a Sexta, 9h às 18h

────────────────────────────────────────────────────────────

VALORES E CONDIÇÕES

Para informações sobre valores, formas de pagamento e 
condições especiais, entre em contato conosco através dos 
canais acima. Teremos prazer em apresentar as melhores 
opções para você!

────────────────────────────────────────────────────────────

INCLUSO

✓ Passagem aérea com bagagem
✓ Hospedagem em hotéis selecionados
✓ Traslados aeroporto/hotel/aeroporto
✓ Seguro viagem
✓ Acompanhamento personalizado
✓ Guia profissional

════════════════════════════════════════════════════════════
© 2026 Oficina de Turismo - 30 Anos
════════════════════════════════════════════════════════════
    `;

    // Criar blob e fazer download
    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Roteiro_${nomeRoteiro.replace(/\s+/g, '_')}_2026.txt`;
    link.click();

    alert(`✅ Roteiro "${nomeRoteiro}" baixado com sucesso!\n\nO arquivo foi salvo como TXT. Você pode abri-lo e salvá-lo como PDF usando qualquer editor de texto ou navegador.`);
}

// ========================================
// ANIMAÇÃO AO SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.roteiro-card, .diferencial-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
