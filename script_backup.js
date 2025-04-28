document.addEventListener('DOMContentLoaded', () => {
    const plantasContainer = document.querySelector('.plantas-container');
    // Remover referência aos botões de filtro
    // const filtroButtons = document.querySelectorAll('.filtros button');

    // --- Dados das Plantas e Lojas ---
    // Informações detalhadas das lojas do térreo
    const lojasTerreo = [
        { 
            id: 1, 
            nome: 'Loja 01', 
            status: 'disponivel', 
            area: '83m²', 
            descricao: 'Loja térrea com excelente posição e visibilidade', 
            coords: { x1: 470, y1: 320, x2: 520, y2: 370 },
            imagem: 'img/lojas/LOJA 01.png',
            tipo: 'loja'
        },
        { 
            id: 2, 
            nome: 'Loja 02', 
            status: 'disponivel', 
            area: '69,46m²', 
            descricao: 'Loja térrea com acesso para a rua principal', 
            coords: { x1: 420, y1: 320, x2: 470, y2: 370 },
            imagem: 'img/lojas/LOJA 02.png',
            tipo: 'loja'
        },
        { 
            id: 3, 
            nome: 'Loja 03', 
            status: 'disponivel', 
            area: '105,34m²', 
            descricao: 'Loja térrea com vitrine ampla', 
            coords: { x1: 370, y1: 320, x2: 420, y2: 370 },
            imagem: 'img/lojas/LOJA 03.png',
            tipo: 'loja'
        },
        { 
            id: 4, 
            nome: 'Loja 04', 
            status: 'disponivel', 
            area: '66,41m²', 
            descricao: 'Loja térrea com preparação para mezanino', 
            coords: { x1: 320, y1: 320, x2: 370, y2: 370 },
            imagem: 'img/lojas/LOJA 04.png',
            tipo: 'loja'
        },
        { 
            id: 5, 
            nome: 'Loja 05', 
            status: 'disponivel', 
            area: '66,41m²', 
            descricao: 'Loja térrea com pé direito duplo', 
            coords: { x1: 270, y1: 320, x2: 320, y2: 370 },
            imagem: 'img/lojas/LOJA 05.png',
            tipo: 'loja'
        },
        { 
            id: 6, 
            nome: 'Loja 06', 
            status: 'disponivel', 
            area: '66,41m²', 
            descricao: 'Loja térrea com área para estoque', 
            coords: { x1: 220, y1: 320, x2: 270, y2: 370 },
            imagem: 'img/lojas/LOJA 06.png',
            tipo: 'loja'
        },
        { 
            id: 7, 
            nome: 'Loja 07', 
            status: 'disponivel', 
            area: '69,09m²', 
            descricao: 'Loja térrea com layout flexível', 
            coords: { x1: 170, y1: 320, x2: 220, y2: 370 },
            imagem: 'img/lojas/LOJA 07.png',
            tipo: 'loja'
        },
        // Adicionando garagens
        { 
            id: 8, 
            nome: 'Garagem 01', 
            status: 'disponivel', 
            area: '15m²', 
            descricao: 'Vaga de garagem ampla com fácil acesso', 
            coords: { x1: 120, y1: 320, x2: 170, y2: 370 },
            imagem: 'img/garagens/TÉRREO.png',
            tipo: 'garagem'
        },
        
    ];

    // Informações detalhadas das lojas do segundo pavimento
    const lojasSegundoPavimento = [
        { 
            id: 1, 
            nome: 'Sala 201', 
            status: 'disponivel', 
            area: '65m²', 
            descricao: 'Sala comercial com vista para rua', 
            coords: { x1: 470, y1: 320, x2: 520, y2: 370 },
            imagem: 'img/lojas/SALA 201.png',
            tipo: 'loja'
        },
        { 
            id: 2, 
            nome: 'Sala 202', 
            status: 'disponivel', 
            area: '48m²', 
            descricao: 'Sala comercial com infraestrutura para escritório', 
            coords: { x1: 420, y1: 320, x2: 470, y2: 370 },
            imagem: 'img/lojas/SALA 202.png',
            tipo: 'loja'
        },
        { 
            id: 3, 
            nome: 'Sala 203', 
            status: 'disponivel', 
            area: '72m²', 
            descricao: 'Ampla sala com possibilidade de divisórias', 
            coords: { x1: 370, y1: 320, x2: 420, y2: 370 },
            imagem: 'img/lojas/SALA 203.png',
            tipo: 'loja'
        },
        { 
            id: 4, 
            nome: 'Sala 204', 
            status: 'disponivel', 
            area: '55m²', 
            descricao: 'Sala comercial pronta para uso', 
            coords: { x1: 320, y1: 320, x2: 370, y2: 370 },
            imagem: 'img/lojas/SALA 204.png',
            tipo: 'loja'
        },
        { 
            id: 5, 
            nome: 'Garagem 201', 
            status: 'disponivel', 
            area: '15m²', 
            descricao: 'Vaga de garagem exclusiva no segundo pavimento', 
            coords: { x1: 270, y1: 320, x2: 320, y2: 370 },
            imagem: 'img/lojas/GARAGEM 201.png',
            tipo: 'garagem'
        }
    ];

    // Dados das plantas dos pavimentos
    const dadosPlantas = [
        { id: 1, nome: 'TÉRREO', status: 'disponivel', imagem: 'img/01 TÉRREO.jpg', lojas: lojasTerreo },
        { id: 2, nome: 'SEGUNDO PAVIMENTO', status: 'disponivel', imagem: 'img/02 SEGUNDO PAVIMENTO.jpg', lojas: lojasSegundoPavimento },
        { id: 3, nome: 'TERCEIRO PAVIMENTO', status: 'disponivel', imagem: 'img/03 TERCEIRO PAVIMENTO.jpg' },
        { id: 4, nome: 'QUARTO PAVIMENTO', status: 'disponivel', imagem: 'img/04 QUARTO PAVIMENTO.jpg' },
        { id: 5, nome: 'QUINTO PAVIMENTO', status: 'disponivel', imagem: 'img/05 QUINTO PAVIMENTO.jpg' },
        { id: 6, nome: 'SEXTO PAVIMENTO', status: 'disponivel', imagem: 'img/06 SEXTO PAVIMENTO.jpg' },
        { id: 7, nome: 'SÉTIMO PAVIMENTO', status: 'disponivel', imagem: 'img/07 SÉTIMO PAVIMENTO.jpg' },
        { id: 8, nome: 'OITAVO PAVIMENTO', status: 'disponivel', imagem: 'img/08 OITAVO PAVIMENTO.jpg' },
        { id: 9, nome: 'NONO PAVIMENTO', status: 'disponivel', imagem: 'img/09 NONO PAVIMENTO.jpg' },
        { id: 10, nome: 'DÉCIMO PAVIMENTO', status: 'disponivel', imagem: 'img/10 DÉCIMO PAVIMENTO.jpg' },
        { id: 11, nome: 'DÉCIMO PRIMEIRO PAVIMENTO', status: 'disponivel', imagem: 'img/11 DÉCIMO PRIMEIRO PAVIMENTO.jpg' },
        { id: 12, nome: 'DÉCIMO SEGUNDO PAVIMENTO', status: 'disponivel', imagem: 'img/12 DÉCIMO SEGUNDO PAVIMENTO.jpg' },
        { id: 13, nome: 'DÉCIMO TERCEIRO PAVIMENTO', status: 'disponivel', imagem: 'img/13 DÉCIMO TERCEIRO PAVIMENTO.jpg' },
        { id: 14, nome: 'DÉCIMO QUARTO PAVIMENTO', status: 'disponivel', imagem: 'img/14 DÉCIMO QUARTO PAVIMENTO.jpg' },
        { id: 15, nome: 'DÉCIMO QUINTO PAVIMENTO', status: 'disponivel', imagem: 'img/15 DÉCIMO QUINTO PAVIMENTO.jpg' },
        { id: 16, nome: 'DÉCIMO SEXTO PAVIMENTO', status: 'disponivel', imagem: 'img/16 DÉCIMO SEXTO PAVIMENTO.jpg' },
        { id: 17, nome: 'DÉCIMO SÉTIMO PAVIMENTO', status: 'disponivel', imagem: 'img/17 DÉCIMO SÉTIMO PAVIMENTO.jpg' },
        { id: 18, nome: 'DÉCIMO OITAVO PAVIMENTO', status: 'disponivel', imagem: 'img/18 DÉCIMO OITAVO PAVIMENTO.jpg' },
        { id: 19, nome: 'DÉCIMO NONO PAVIMENTO', status: 'disponivel', imagem: 'img/19 DÉCIMO NONO PAVIMENTO.jpg' },
        { id: 20, nome: 'VIGÉSIMO PAVIMENTO', status: 'disponivel', imagem: 'img/20 VIGÉSIMO PAVIMENTO.jpg' },
        { id: 21, nome: 'VIGÉSIMO PRIMEIRO PAVIMENTO', status: 'disponivel', imagem: 'img/21 VIGÉSIMO PRIMEIRO PAVIMENTO.jpg' },
        { id: 22, nome: 'VIGÉSIMO SEGUNDO PAVIMENTO', status: 'disponivel', imagem: 'img/22 VIGÉSIMO SEGUNDO PAVIMENTO.jpg' },
        { id: 23, nome: 'VIGÉSIMO TERCEIRO PAVIMENTO', status: 'disponivel', imagem: 'img/23 VIGÉSIMO TERCEIRO PAVIMENTO.jpg' },
    ];
    // --- Fim dos Dados das Plantas ---

    // Função para criar o HTML de uma planta
    function criarElementoPlanta(planta) {
        const divPlanta = document.createElement('div');
        divPlanta.classList.add('planta', planta.status);
        divPlanta.dataset.status = planta.status;
        divPlanta.dataset.plantaId = planta.id; // Adicionando ID da planta para referência

        const img = document.createElement('img');
        img.src = planta.imagem;
        img.alt = `Planta da ${planta.nome}`;
        img.onerror = () => {
            img.alt = `Erro ao carregar imagem: ${planta.imagem}`;
            divPlanta.classList.add('imagem-erro');
        };

        const divInfo = document.createElement('div');
        divInfo.classList.add('planta-info');

        const h3 = document.createElement('h3');
        h3.textContent = planta.nome;

        const spanStatus = document.createElement('span');
        spanStatus.classList.add('planta-status');
        
        // Adiciona texto diferente para pavimentos com lojas/espaços
        if (planta.id === 1 || planta.id === 2) { // Térreo ou segundo pavimento
            spanStatus.textContent = 'Ver Espaços';
            spanStatus.style.backgroundColor = 'var(--cor-principal)';
        } else {
            spanStatus.textContent = planta.status === 'disponivel' ? 'Disponível' : 'Vendido';
        }

        divInfo.appendChild(h3);
        divInfo.appendChild(spanStatus);
        divPlanta.appendChild(img);
        divPlanta.appendChild(divInfo);

        // Adiciona listener para abrir o modal ao clicar na planta
        divPlanta.addEventListener('click', function() {
            console.log('Planta clicada:', this.dataset.plantaId);
            abrirModal(this);
        });

        return divPlanta;
    }

    // Função para exibir as plantas na tela (simplificada, sem filtros)
    function exibirPlantas(plantas) {
        plantasContainer.innerHTML = '';
        plantas.forEach(planta => {
            const elementoPlanta = criarElementoPlanta(planta);
            plantasContainer.appendChild(elementoPlanta);
        });
        // Após exibir, observa as plantas para animação de scroll
        observarPlantas();
    }

    // --- Funcionalidade do Modal ---
    let modalOverlay = null;
    let infoPanel = null;
    let plantaAtualNoModal = null;
    let areaLojasContainer = null;

    function abrirModal(e) {
        console.log('Função abrirModal chamada com:', e);
        
        // Verificar se o modal já existe, se não existir, criar
        if (!document.getElementById('modal-planta')) {
            console.log('Criando novo modal');
            
            // Criar o modal no DOM
            modalOverlay = document.createElement('div');
            modalOverlay.id = 'modal-planta';
            modalOverlay.classList.add('modal-overlay');

            const modalContainer = document.createElement('div');
            modalContainer.classList.add('modal-container');
            
            // Container para o cabeçalho
            const modalHeader = document.createElement('div');
            modalHeader.classList.add('modal-header');
            
            // Título do modal
            const modalTitle = document.createElement('h3');
            modalHeader.appendChild(modalTitle);
            
            // Botão de fechar
            const fecharBtn = document.createElement('button');
            fecharBtn.classList.add('modal-fechar');
            fecharBtn.innerHTML = '&times;';
            fecharBtn.onclick = fecharModal;
            modalHeader.appendChild(fecharBtn);
            
            // Container principal do conteúdo
            const conteudoContainer = document.createElement('div');
            conteudoContainer.classList.add('modal-conteudo-container');
            
            // Container para a imagem
            const imagemContainer = document.createElement('div');
            imagemContainer.classList.add('imagem-container');
            
            // Imagem da planta
            const imgModal = document.createElement('img');
            imgModal.id = 'modal-imagem';
            imgModal.alt = 'Planta Ampliada';
            imgModal.addEventListener('click', handleCliqueImagemModal);
            imagemContainer.appendChild(imgModal);
            
            // Container para áreas das lojas
            areaLojasContainer = document.createElement('div');
            areaLojasContainer.id = 'areas-lojas';
            areaLojasContainer.style.position = 'absolute';
            areaLojasContainer.style.top = '0';
            areaLojasContainer.style.left = '0';
            areaLojasContainer.style.width = '100%';
            areaLojasContainer.style.height = '100%';
            areaLojasContainer.style.pointerEvents = 'none';
            imagemContainer.appendChild(areaLojasContainer);
            
            // Adicionar container de imagem ao conteúdo
            conteudoContainer.appendChild(imagemContainer);

            // Criar painel lateral para as lojas (apenas para o térreo)
            const painelLateral = document.createElement('div');
            painelLateral.classList.add('painel-lateral');
            painelLateral.id = 'painel-lateral';
            painelLateral.style.display = 'none'; // Inicialmente escondido

            // Título do painel
            const painelTitulo = document.createElement('h4');
            painelTitulo.textContent = 'Espaços Disponíveis';
            painelLateral.appendChild(painelTitulo);

            // Container para os botões das lojas
            const botoesContainer = document.createElement('div');
            botoesContainer.classList.add('botoes-lojas-container');
            painelLateral.appendChild(botoesContainer);
            
            // Adicionar painel lateral ao conteúdo
            conteudoContainer.appendChild(painelLateral);
            
            // Montar a estrutura
            modalContainer.appendChild(modalHeader);
            modalContainer.appendChild(conteudoContainer);
            modalOverlay.appendChild(modalContainer);
            
            // Fechar ao clicar fora
            modalOverlay.addEventListener('click', (event) => {
                if (event.target === modalOverlay) {
                    fecharModal();
                }
            });
            
            // Adicionar ao body
            document.body.appendChild(modalOverlay);
        }
        
        // Obter a planta que foi clicada
        const plantaElement = e instanceof HTMLElement ? e : e.target.closest('.planta');
        if (!plantaElement) {
            console.error('Elemento da planta não encontrado');
            return;
        }
        
        const plantaId = parseInt(plantaElement.dataset.plantaId);
        console.log('ID da planta:', plantaId);
        
        // Encontrar os dados da planta
        plantaAtualNoModal = dadosPlantas.find(p => p.id === plantaId);
        if (!plantaAtualNoModal) {
            console.error('Dados da planta não encontrados');
            return;
        }
        
        // Atualizar o título do modal
        const modalTitle = modalOverlay.querySelector('.modal-header h3');
        if (modalTitle) {
            modalTitle.textContent = plantaAtualNoModal.nome;
        }
        
        // Atualizar a imagem
        const imgModal = document.getElementById('modal-imagem');
        if (imgModal) {
            imgModal.src = plantaAtualNoModal.imagem;
            imgModal.alt = `Planta do ${plantaAtualNoModal.nome}`;
            imgModal.classList.remove('zoom');
            
            // Se for a planta do térreo ou segundo pavimento, configurar para destacar os espaços
            if (plantaAtualNoModal.id === 1 || plantaAtualNoModal.id === 2) {
                const painelLateral = document.getElementById('painel-lateral');
                if (painelLateral) {
                    // Mostrar o painel lateral para o pavimento
                    painelLateral.style.display = 'flex';
                    
                    // Preencher os botões dos espaços
                    const botoesContainer = painelLateral.querySelector('.botoes-lojas-container');
                    if (botoesContainer) {
                        botoesContainer.innerHTML = ''; // Limpar botões existentes
                        
                        // Nome do pavimento para o botão principal
                        let nomePavimento = plantaAtualNoModal.id === 1 ? 'Térreo' : 'Segundo Pavimento';
                        
                        // Adicionar botão do Pavimento no topo da lista
                        const btnPavimento = document.createElement('button');
                        btnPavimento.classList.add('btn-loja', 'terreo');
                        btnPavimento.textContent = nomePavimento;
                        btnPavimento.style.backgroundColor = 'var(--cor-principal-transparente)';
                        btnPavimento.style.color = 'var(--cor-principal)';
                        btnPavimento.style.fontWeight = 'bold';
                        btnPavimento.style.marginBottom = '10px';
                        btnPavimento.style.borderColor = 'var(--cor-principal)';
                        
                        // Adicionar evento de clique para voltar para o pavimento
                        btnPavimento.addEventListener('click', () => {
                            // Remover seleção dos outros botões
                            document.querySelectorAll('.btn-loja').forEach(btn => 
                                btn.classList.remove('selecionado'));
                            
                            // Adicionar seleção ao botão do Pavimento
                            btnPavimento.classList.add('selecionado');
                            
                            // Restaurar a planta do pavimento
                            const modalImagem = document.getElementById('modal-imagem');
                            if (modalImagem) {
                                modalImagem.src = plantaAtualNoModal.imagem;
                                modalImagem.alt = `Planta do ${plantaAtualNoModal.nome}`;
                                modalImagem.onerror = null;
                            }
                            
                            // Restaurar o título
                            const modalTitle = document.querySelector('.modal-header h3');
                            if (modalTitle) {
                                modalTitle.textContent = plantaAtualNoModal.nome;
                            }
                            
                            // Reinstalar destacadores de áreas
                            setTimeout(() => {
                                destacarAreasLojas();
                            }, 300);
                        });
                        
                        botoesContainer.appendChild(btnPavimento);
                        
                        // Agrupar lojas e garagens
                        const lojas = plantaAtualNoModal.lojas.filter(item => item.tipo === 'loja' || !item.tipo);
                        const garagens = plantaAtualNoModal.lojas.filter(item => item.tipo === 'garagem');
                        
                        // Adicionar cabeçalho para lojas se houver lojas
                        if (lojas.length > 0) {
                            const headerLojas = document.createElement('div');
                            headerLojas.classList.add('categoria-header');
                            headerLojas.textContent = 'Lojas';
                            headerLojas.style.width = '100%';
                            headerLojas.style.textAlign = 'left';
                            headerLojas.style.fontWeight = 'bold';
                            headerLojas.style.color = 'var(--cor-texto-secundario)';
                            headerLojas.style.margin = '10px 0 5px 0';
                            headerLojas.style.padding = '5px 0';
                            headerLojas.style.borderBottom = '1px solid #eee';
                            botoesContainer.appendChild(headerLojas);
                            
                            // Adicionar botões para cada loja
                            lojas.forEach(loja => {
                                const btnLoja = criarBotaoEspaco(loja);
                                botoesContainer.appendChild(btnLoja);
                            });
                        }
                        
                        // Adicionar cabeçalho para garagens se houver garagens
                        if (garagens.length > 0) {
                            const headerGaragens = document.createElement('div');
                            headerGaragens.classList.add('categoria-header');
                            headerGaragens.textContent = 'Garagens';
                            headerGaragens.style.width = '100%';
                            headerGaragens.style.textAlign = 'left';
                            headerGaragens.style.fontWeight = 'bold';
                            headerGaragens.style.color = 'var(--cor-texto-secundario)';
                            headerGaragens.style.margin = '15px 0 5px 0';
                            headerGaragens.style.padding = '5px 0';
                            headerGaragens.style.borderBottom = '1px solid #eee';
                            botoesContainer.appendChild(headerGaragens);
                            
                            // Adicionar botões para cada garagem
                            garagens.forEach(garagem => {
                                const btnGaragem = criarBotaoEspaco(garagem);
                                // Adicionar estilo diferente para garagens
                                btnGaragem.style.backgroundColor = 'rgba(100, 100, 100, 0.1)';
                                botoesContainer.appendChild(btnGaragem);
                            });
                        }
                    }
                }
            } else {
                // Esconder o painel lateral para outros pavimentos
                const painelLateral = document.getElementById('painel-lateral');
                if (painelLateral) {
                    painelLateral.style.display = 'none';
                }
            }
        }
        
        // Exibir o modal
        modalOverlay.classList.add('visivel');
        document.body.classList.add('modal-aberto');
    }

    function fecharModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('visivel');
            document.body.classList.remove('modal-aberto');
            plantaAtualNoModal = null;
            
            // Esconde o painel de informações
            if (infoPanel) {
                infoPanel.style.display = 'none';
            }

            // Remove instruções e áreas destacadas
            const instrucao = modalOverlay.querySelector('.instrucao-lojas');
            if (instrucao) {
                instrucao.remove();
            }
            if (areaLojasContainer) {
                areaLojasContainer.innerHTML = '';
            }
        }
    }

    // Função para destacar visualmente as áreas clicáveis das lojas
    function destacarAreasLojas() {
        // Adicionando uma verificação para bloquear totalmente a função e não mostrar as áreas verdes
        return; // Esta linha impede a execução do restante da função
        
        if (!plantaAtualNoModal || plantaAtualNoModal.id !== 1 || !areaLojasContainer) return;
        
        const imgModal = document.getElementById('modal-imagem');
        if (!imgModal.complete) return; // Se a imagem ainda não carregou, não prossegue
        
        // Limpa o container para garantir que não haja elementos antigos
        areaLojasContainer.innerHTML = '';
        
        // Calcular dimensões
        const naturalWidth = imgModal.naturalWidth;
        const naturalHeight = imgModal.naturalHeight;
        
        // Adiciona as áreas clicáveis e visíveis para interação
        plantaAtualNoModal.lojas.forEach((loja, index) => {
            const areaDestaque = document.createElement('div');
            areaDestaque.classList.add('area-loja', loja.status);
            areaDestaque.style.position = 'absolute';
            
            // Convertendo coordenadas absolutas para relativas
            const leftRelativo = (loja.coords.x1 / naturalWidth) * 100;
            const topRelativo = (loja.coords.y1 / naturalHeight) * 100;
            const widthRelativo = ((loja.coords.x2 - loja.coords.x1) / naturalWidth) * 100;
            const heightRelativo = ((loja.coords.y2 - loja.coords.y1) / naturalHeight) * 100;
            
            areaDestaque.style.left = `${leftRelativo}%`;
            areaDestaque.style.top = `${topRelativo}%`;
            areaDestaque.style.width = `${widthRelativo}%`;
            areaDestaque.style.height = `${heightRelativo}%`;
            
            // Torna as áreas visíveis com bordas coloridas
            areaDestaque.style.border = `2px solid ${loja.status === 'disponivel' ? 'var(--cor-disponivel)' : 'var(--cor-vendido)'}`;
            areaDestaque.style.backgroundColor = `${loja.status === 'disponivel' ? 'rgba(76, 175, 80, 0.15)' : 'rgba(244, 67, 54, 0.15)'}`; // Levemente mais sutil
            areaDestaque.style.borderRadius = '4px';
            areaDestaque.style.boxSizing = 'border-box';
            areaDestaque.style.pointerEvents = 'none'; // Permite cliques passarem para a imagem
            areaDestaque.style.zIndex = '1000';
            areaDestaque.style.transition = 'all 0.3s ease'; // Adiciona transição suave
            
            areaLojasContainer.appendChild(areaDestaque);
        });
    }

    // Função para lidar com cliques na imagem do modal
    function handleCliqueImagemModal(event) {
        // Se tiver a planta do térreo ou segundo pavimento e coordenadas de lojas, verifica se clicou em um espaço
        if (plantaAtualNoModal && (plantaAtualNoModal.id === 1 || plantaAtualNoModal.id === 2) && plantaAtualNoModal.lojas) {
            // Obter as coordenadas do clique relativas à imagem
            const rect = event.target.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;
            
            // Converter para coordenadas relativas (porcentagem)
            const relativeX = (clickX / rect.width) * 100;
            const relativeY = (clickY / rect.height) * 100;
            
            console.log(`Clique em coordenadas relativas: [${relativeX.toFixed(2)}%, ${relativeY.toFixed(2)}%]`);
            
            // Verificar se clicou em alguma loja
            let lojaClicada = null;
            plantaAtualNoModal.lojas.forEach(loja => {
                // Converter coordenadas da loja para porcentagem
                const naturalWidth = event.target.naturalWidth;
                const naturalHeight = event.target.naturalHeight;
                
                const x1Relativo = (loja.coords.x1 / naturalWidth) * 100;
                const y1Relativo = (loja.coords.y1 / naturalHeight) * 100;
                const x2Relativo = (loja.coords.x2 / naturalWidth) * 100;
                const y2Relativo = (loja.coords.y2 / naturalHeight) * 100;
                
                // Verificar se o clique está dentro da área da loja
                if (relativeX >= x1Relativo && relativeX <= x2Relativo && 
                    relativeY >= y1Relativo && relativeY <= y2Relativo) {
                    lojaClicada = loja;
                    console.log(`Loja detectada: ${loja.nome}`);
                }
            });
            
            if (lojaClicada) {
                console.log(`Loja clicada: ${lojaClicada.nome}`);
                
                // Abrir a planta individual da loja
                abrirPlantaLoja(lojaClicada);
                return;
            }
        }
        
        // Aplicar zoom na imagem (apenas se não clicou em loja)
        event.target.classList.toggle('zoom');
        
        // Se o painel de informações estiver visível, esconder ao clicar na imagem
        if (infoPanel && infoPanel.style.display === 'block') {
            infoPanel.style.display = 'none';
            
            // Restaura a aparência das áreas de lojas
            document.querySelectorAll('.area-loja').forEach(area => {
                area.style.opacity = '1';
                area.style.boxShadow = 'none';
                area.style.zIndex = '1000';
            });
            
            // Remove o outline do botão selecionado
            document.querySelectorAll('.btn-loja').forEach(btn => {
                btn.style.outline = 'none';
                btn.style.transform = 'translateY(0)';
            });
        }
    }
    
    // Função para mostrar informações da loja selecionada
    function mostrarInformacoesLoja(loja) {
        const infoContainer = document.querySelector('.info-loja-container');
        if (!infoContainer) return;
        
        // Limpar conteúdo anterior
        infoContainer.innerHTML = '';
        
        // Criar cabeçalho da info (Nome da loja e Status)
        const infoHeader = document.createElement('div');
        infoHeader.classList.add('info-loja-header');
        
        const infoTitulo = document.createElement('h4');
        infoTitulo.textContent = loja.nome;
        infoHeader.appendChild(infoTitulo);
        
        const statusTag = document.createElement('span');
        statusTag.classList.add('status-tag', loja.status);
        statusTag.textContent = loja.status === 'disponivel' ? 'Disponível' : 'Vendido';
        infoHeader.appendChild(statusTag);
        
        infoContainer.appendChild(infoHeader);
        
        // Criar conteúdo das informações - APENAS ÁREA
        const infoConteudo = document.createElement('div');
        infoConteudo.classList.add('info-loja-conteudo');
        
        // Área
        const areaInfo = document.createElement('p');
        areaInfo.innerHTML = `<strong>Área:</strong> ${loja.area}`;
        infoConteudo.appendChild(areaInfo);
        
        infoContainer.appendChild(infoConteudo);
        
        // Destacar a área da loja na imagem
        destacarLojaClicada(loja.id);
    }
    
    // Função para destacar a loja clicada na imagem
    function destacarLojaClicada(lojaId) {
        // Remover destaque de todas as áreas
        document.querySelectorAll('.area-loja').forEach(area => {
            area.style.opacity = '0.7';
            area.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            area.style.border = '2px solid var(--cor-principal)';
            area.style.boxShadow = 'none';
            area.style.zIndex = '1000';
        });
        
        // Destacar a área selecionada
        const areas = document.querySelectorAll('.area-loja');
        // Encontra a área pelo índice (lembrando que queryAll é zero-indexed, enquanto o ID começa em 1)
        const areaLoja = areas[lojaId - 1]; 
        
        if (areaLoja) {
            areaLoja.style.opacity = '1';
            areaLoja.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
            areaLoja.style.border = '3px solid var(--cor-principal)';
            areaLoja.style.boxShadow = '0 0 15px rgba(0, 130, 147, 0.7), inset 0 0 8px rgba(0, 130, 147, 0.3)';
            areaLoja.style.zIndex = '1001';
            
            // Animar pulsação da borda
            areaLoja.animate(
                [
                    { boxShadow: '0 0 8px rgba(0, 130, 147, 0.5), inset 0 0 5px rgba(0, 130, 147, 0.2)' },
                    { boxShadow: '0 0 15px rgba(0, 130, 147, 0.7), inset 0 0 8px rgba(0, 130, 147, 0.3)' },
                    { boxShadow: '0 0 8px rgba(0, 130, 147, 0.5), inset 0 0 5px rgba(0, 130, 147, 0.2)' }
                ],
                {
                    duration: 2000,
                    iterations: Infinity
                }
            );
        }
    }

    // Nova função para abrir a planta individual da loja
    function abrirPlantaLoja(loja) {
        // Mantém o overlay aberto mas muda conteúdo
        const modalTitle = document.querySelector('.modal-header h3');
        if (modalTitle) {
            modalTitle.textContent = loja.nome;
        }

        // Troca a imagem pela planta individual da loja
        const modalImagem = document.getElementById('modal-imagem');
        if (modalImagem) {
            // Salvar a imagem original para poder voltar
            const imagemOriginal = modalImagem.src;
            
            // Tentar carregar a imagem da loja
            modalImagem.src = loja.imagem;
            modalImagem.alt = `Planta da ${loja.nome}`;
            
            // Tratar erro de carregamento da imagem
            modalImagem.onerror = () => {
                // Criar div com mensagem de que a planta está em desenvolvimento
                const imagemContainer = document.querySelector('.imagem-container');
                
                // Limpar conteúdo
                if (imagemContainer) {
                    while (imagemContainer.firstChild) {
                        imagemContainer.removeChild(imagemContainer.firstChild);
                    }
                    
                    // Adicionar mensagem
                    const mensagemDiv = document.createElement('div');
                    mensagemDiv.classList.add('mensagem-desenvolvimento');
                    
                    const icone = document.createElement('div');
                    icone.classList.add('icone-construcao');
                    icone.innerHTML = '🏗️';
                    
                    const titulo = document.createElement('h4');
                    titulo.textContent = loja.nome;
                    
                    const texto = document.createElement('p');
                    texto.textContent = 'Planta em desenvolvimento';
                    
                    const info = document.createElement('div');
                    info.classList.add('info-loja-basica');
                    
                    const areaInfo = document.createElement('p');
                    areaInfo.innerHTML = `<strong>Área:</strong> ${loja.area}`;
                    
                    const descricaoInfo = document.createElement('p');
                    descricaoInfo.innerHTML = `<strong>Descrição:</strong> ${loja.descricao}`;
                    
                    info.appendChild(areaInfo);
                    info.appendChild(descricaoInfo);
                    
                    mensagemDiv.appendChild(icone);
                    mensagemDiv.appendChild(titulo);
                    mensagemDiv.appendChild(texto);
                    mensagemDiv.appendChild(info);
                    
                    imagemContainer.appendChild(mensagemDiv);
                }
            };
            
            // Esconder as áreas destacadas
            if (areaLojasContainer) {
                areaLojasContainer.innerHTML = '';
            }
        }
    }

    // Fecha o modal com a tecla Esc
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('visivel')) {
            fecharModal();
        }
    });
    // --- Fim Funcionalidade do Modal ---


    // --- Animação de Scroll (Intersection Observer) ---
    let observer = null;

    function observarPlantas() {
        const plantasParaObservar = plantasContainer.querySelectorAll('.planta:not(.visivel)');

        if (!observer) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            observer = new IntersectionObserver(handleIntersect, options);
        }

        // Observa cada planta visível que ainda não foi animada
        plantasParaObservar.forEach(planta => observer.observe(planta));
    }

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }
    // --- Fim Animação de Scroll ---


    // Exibe todas as plantas inicialmente
    exibirPlantas(dadosPlantas);
}); // Fim do DOMContentLoaded 