// Estrutura de dados dos produtos
const products = [
    {
        id: 1,
        name: 'Capa Protetora de Colchão Box Casal Queen King',
        price: 39.90,
        image: 'produto1.jpeg',
        url: 'https://s.shopee.com.br/8ztBifAapV',
        category: 'Casa',
        featured: true
    },
    {
        id: 2,
        name: 'Varal de Chão 3 Andares',
        price: 168.99,
        image: 'produto2.jpeg',
        url: 'https://s.shopee.com.br/7087L5gBJT',
        category: 'acessorios',
        featured: true
    },
    {
        id: 3,
        name: 'Kit 2 Prateleiras para Banheiro',
        price: 30,
        image: 'produto3.jpeg',
        url: 'https://s.shopee.com.br/qXTzrs1x8',
        category: 'smartwatch',
        featured: true
    },
    {
        id: 4,
        name: 'Caixa Saco Organizadora',
        price: 30,
        image: 'produto4.jpeg',
        url: 'https://s.shopee.com.br/2B2rf7lRIi?share_channel_code=1',
        category: 'audio',
        featured: true
    },
    {
        id: 5,
        name: 'Mesas de Cabeceira Retro',
        price: 49.90,
        image: 'produto5.jpeg',
        url: 'https://s.shopee.com.br/6AZ0QXUWk0',
        category: 'acessorios',
        featured: true
    },
    {
        id: 6,
        name: 'Kit 10 Placas PVC',
        price: 20,
        image: 'produto6.jpeg',
        url: 'https://s.shopee.com.br/7fNoDPi3Zd',
        category: 'ferramentas',
        featured: true
    },
    {
        id: 7,
        name: 'Manta Para Sofá',
        price: 29.99,
        image: 'produto7.jpeg',
        url: 'https://s.shopee.com.br/8AK6QWRP1n',
        category: 'seguranca',
        featured: true
    },
    {
        id: 8,
        name: 'Sapateira 4/5 Andares',
        price: 59.00,
        image: 'produto8.jpeg',
        url: 'https://s.shopee.com.br/6poiq7iXDt',
        category: 'casa',
        featured: true
    },
    {
        id: 9,
        name: 'Prateleira Organizadora',
        price: 89.99,
        image: 'produto9.jpeg',
        url: 'https://s.shopee.com.br/6VBsRZmaTu',
        category: 'eletrodomesticos',
        featured: true
    },
    {
        id: 10,
        name: 'Tapete de Banheiro Soft Macio',
        price: 35.00,
        image: 'produto10.jpeg',
        url: 'https://s.shopee.com.br/5Kzv3eplzt',
        category: 'tv',
        featured: true
    },
    {
        id: 11,
        name: 'Cesto de Roupa Suja ',
        price: 99.76,
        image: 'produto11.jpeg',
        url: 'https://s.shopee.com.br/AA5Aob0tH7?share_channel_code=1',
        category: 'informatica',
        featured: true
    },
    {
        id: 12,
        name: 'Tapete para Sala',
        price: 119.90,
        image: 'produto12.jpeg',
        url: 'https://s.shopee.com.br/2B2tHyTOYb?share_channel_code=1',
        category: 'informatica',
        featured: true
    },
    {
        id: 13,
        name: 'Cortina Blackout',
        price: 33.90,
        image: 'produto13.jpeg',
        url: 'https://s.shopee.com.br/8pZnEMrVmn?share_channel_code=1',
        category: 'drones',
        featured: true
    },
    {
        id: 14,
        name: 'Torneira de Prata Inox',
        price: 119.80,
        image: 'produto14.jpeg',
        url: 'https://s.shopee.com.br/1VnCXlZWLv?share_channel_code=1',
        category: 'games',
        featured: true
    },
    {
        id: 15,
        name: 'Jogo de Tapete para cozinha',
        price: 69.98,
        image: 'produto15.jpeg',
        url: 'https://s.shopee.com.br/30c3MCjyVx?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 16,
        name: 'Armário Espelheira',
        price: 249.99,
        image: 'produto16.jpeg',
        url: 'https://s.shopee.com.br/6AZ584WhxI?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 17,
        name: 'Espelho Redondo',
        price: 150.00,
        image: 'produto17.jpeg',
        url: 'https://s.shopee.com.br/3qBAM7B6ps?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 18,
        name: 'Kit Prateleira ind. LUX COMPLETO',
        price: 150,
        image: 'produto18.jpeg',
        url: 'https://s.shopee.com.br/9KW6uIF1U6?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 19,
        name: 'Rack para Sala Quarto',
        price: 299.00,
        image: 'produto19.jpeg',
        url: 'https://s.shopee.com.br/1LTpNfH3mk?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 20,
        name: 'Suporte de chão para Papel Higiênico',
        price: 61.39,
        image: 'produto20.jpeg',
        url: 'https://s.shopee.com.br/AKOe6IgIyd?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 21,
        name: 'Suporte para Escovas de Dente',
        price: 69.99,
        image: 'produto21.jpeg',
        url: 'https://s.shopee.com.br/3frkA748aS?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 22,
        name: 'Porta Chaves',
        price: 45.90,
        image: 'produto22.jpeg',
        url: 'https://s.shopee.com.br/3qBAMVEgN7?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 23,
        name: 'Porta Toalha Suporte para Banheiro',
        price: 198.00,
        image: 'produto23.jpeg',
        url: 'https://s.shopee.com.br/5VJOLdOFgK?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 24,
        name: 'Suporte Painel para Tv',
        price: 159.99,
        image: 'produto24.jpeg',
        url: 'https://s.shopee.com.br/4L7QxZQk5U?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 25,
        name: 'Penteadeira Suspensa com Espelho',
        price: 249.99,
        image: 'produto25.jpeg',
        url: 'https://s.shopee.com.br/4q3hYbhwRE?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 26,
        name: 'Poltrona de Veludo Decorativa',
        price: 239.90,
        image: 'produto26.jpeg',
        url: 'https://s.shopee.com.br/8KdZj7JrmY?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 27,
        name: 'Espelho Oval',
        price: 118.08,
        image: 'produto27.jpeg',
        url: 'https://s.shopee.com.br/2qIdB6tynj?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 28,
        name: 'Manta para Sofá',
        price: 149.99,
        image: 'produto28.jpeg',
        url: 'https://s.shopee.com.br/gEOXwqESg?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 29,
        name: 'Jogo de Cama Lençol de Casal Premium',
        price: 224.99,
        image: 'produto29.jpeg',
        url: 'https://s.shopee.com.br/8Kdpg6llAa?share_channel_code=1',
        category: '',
        featured: true
    },
    {
        id: 30,
        name: 'Caixa Organizadora Transparente 6 Divisórias',
        price: 58.99,
        image: 'produto30.jpeg',
        url: 'https://s.shopee.com.br/9zmOxE9LlP?share_channel_code=1',
        category: '',
        featured: true
    }
];

// Função para formatar preço no formato brasileiro
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para criar o HTML de um produto
function createProductCard(product) {
    return `
        <article class="product-card" role="listitem" itemscope itemtype="https://schema.org/Product" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image-container">
                <img 
                    data-src="images/${product.image}" 
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                    alt="${product.name}" 
                    class="product-image" 
                    loading="lazy" 
                    width="300" 
                    height="300"
                    itemprop="image">
            </div>
            <div class="product-info">
                <h3 itemprop="name">${product.name}</h3>
                <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                    <span class="price" itemprop="price" content="${product.price}">${formatPrice(product.price)}</span>
                </div>   
                <a href="${product.url}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="affiliate-link" 
                   aria-label="Comprar ${product.name}">
                    Comprar Agora
                </a>
            </div>
        </article>
    `;
}

// Função para renderizar os produtos na página
function renderProducts(productsToRender, containerSelector = '.product-grid') {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    // Limpa o container
    container.innerHTML = '';
    
    // Renderiza cada produto com um atraso escalonado
    productsToRender.forEach((product, index) => {
        const productCard = createProductCard(product);
        container.insertAdjacentHTML('beforeend', productCard);
        
        // Adiciona um atraso escalonado para criar o efeito de onda
        const cards = document.querySelectorAll('.product-card');
        const lastCard = cards[cards.length - 1];
        lastCard.style.setProperty('--delay', index % 5); // Repete a cada 5 itens
    });
    
    // Configura o carregamento otimizado de imagens
    loadImages();
}

// Configura o carregamento otimizado de imagens
function loadImages() {
    // Verifica se o navegador suporta IntersectionObserver
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores que não suportam IntersectionObserver
        const lazyImages = document.querySelectorAll('img[data-src]');
        const lazyLoad = function() {
            lazyImages.forEach(img => {
                if (img.getBoundingClientRect().top <= window.innerHeight && 
                    img.getBoundingClientRect().bottom >= 0 && 
                    getComputedStyle(img).display !== 'none') {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
            });
        };

        // Carrega imagens visíveis no carregamento
        lazyLoad();

        // Carrega imagens durante a rolagem
        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationchange', lazyLoad);
    }
}

// Configura os links de afiliado
function setupAffiliateLinks() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    let isNavigating = false;
    
    // Função para lidar com o clique no link
    function handleAffiliateClick(e) {
        if (isNavigating) return;
        
        const link = this;
        isNavigating = true;
        
        // Mostra o indicador de carregamento
        if (loadingIndicator) {
            loadingIndicator.classList.add('visible');
        }
        
        // Feedback visual imediato
        link.style.opacity = '0.8';
        link.style.transform = 'scale(0.98)';
        
        // Previne o comportamento padrão
        e.preventDefault();
        const href = link.href;
        
        // Abre a nova janela imediatamente para evitar bloqueios de popup
        const newWindow = window.open('about:blank', '_blank');
        
        // Se não conseguiu abrir nova janela, redireciona na mesma
        if (!newWindow) {
            window.location.href = href;
            return;
        }
        
        // Tenta carregar a página de destino
        fetch(href, { 
            mode: 'no-cors',
            cache: 'no-store' // Evita cache para garantir a contagem correta de cliques
        })
        .finally(() => {
            // Redireciona para a URL real
            try {
                newWindow.location.href = href;
            } catch (e) {
                // Se falhar, tenta abrir na mesma janela
                window.location.href = href;
            }
            
            // Esconde o indicador de carregamento
            if (loadingIndicator) {
                loadingIndicator.classList.remove('visible');
            }
            
            // Remove o feedback visual após a animação
            setTimeout(() => {
                link.style.opacity = '';
                link.style.transform = '';
                isNavigating = false;
            }, 200);
        });
    }
    
    // Adiciona o evento de clique a todos os links de afiliado
    document.addEventListener('click', function(e) {
        // Verifica se o clique foi em um link de afiliado ou em um de seus filhos
        const affiliateLink = e.target.closest('.affiliate-link');
        if (affiliateLink) {
            e.preventDefault();
            handleAffiliateClick.call(affiliateLink, e);
        }
    }, true); // Usa captura para garantir que o evento seja capturado
}

// Função para rolagem suave até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Configura o botão Voltar ao Topo
function setupBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Mostra/esconde o botão baseado na posição de rolagem
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    // Adiciona o evento de clique
    backToTopButton.addEventListener('click', scrollToTop);
    
    // Adiciona o evento de rolagem
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // Verifica a posição inicial
    toggleBackToTopButton();
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Renderiza os produtos na página
    renderProducts(products);
    
    // Inicializa os links de afiliado
    setupAffiliateLinks();
    
    // Configura o botão Voltar ao Topo
    setupBackToTopButton();
});
