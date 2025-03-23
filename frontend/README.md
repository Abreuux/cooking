# Necotium - Site Institucional

![Necotium Logo](public/images/logo.png)

## Visão Geral

O Necotium é um site institucional desenvolvido com React e Material UI, focado em apresentar soluções de inteligência de dados para gestão pública e empresarial. O projeto utiliza uma arquitetura moderna com React, Vite, Material UI e outras tecnologias para criar uma experiência de usuário fluida e responsiva.

## Tecnologias Utilizadas

- **Frontend**:
  - React 18
  - Vite (para build e desenvolvimento)
  - Material UI 5 (sistema de design)
  - React Router 6 (para navegação)
  - CSS Modules (para estilização específica de componentes)
  - Lazy Loading (para carregamento otimizado de componentes)

- **Backend**:
  - Flask (Python)
  - API RESTful para formulários de contato e demo

## Estrutura do Projeto

```
sitenecorium/
├── frontend/                # Código fonte do frontend
│   ├── public/              # Arquivos estáticos
│   │   ├── images/          # Imagens do site
│   │   ├── favicon.ico      # Favicon
│   │   ├── styles/          # Estilos CSS
│   │   ├── App.jsx          # Componente principal
│   │   ├── main.jsx         # Ponto de entrada
├── app.py                   # Aplicação Flask (backend)
```

## Páginas Principais

O site contém aproximadamente 30 páginas, incluindo:

1. **Páginas Principais**:
   - Home
   - Sobre Nós
   - Casos de Sucesso
   - Contato
   - Agendar Demo
   - Mapa do Site (Sitemap)

2. **Segmentos**:
   - Empresas
   - Governo
   - Soluções

3. **Soluções**:
   - Analytics Suite
   - Business Automation
   - Data Intelligence
   - Smart City
   - Public Intelligence
   - Gov Security

4. **Produtos**:
   - CityDataHub
   - CityPredict
   - DataInsights
   - PerformanceAnalytics
   - ProcessAutomation
   - SmartWorkflow
   - GovInsights
   - CityServices
   - SecureGov
   - DataProtect

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js (v16+)
- npm ou yarn
- Python 3.8+ (para o backend)
- Git

### Instalação e Execução

#### Frontend

```bash
# Navegar para a pasta do frontend
cd frontend

# Instalar dependências
npm install
# ou
yarn install

# Iniciar servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

**Nota para PowerShell**: Se estiver usando PowerShell no Windows, o operador `&&` não funciona. Use o seguinte comando para iniciar o servidor de desenvolvimento:

```powershell
cd frontend; npm run dev
```

Ou execute os comandos separadamente:

```powershell
cd frontend
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

#### Backend

```bash
# Instalar dependências Python
pip install -r requirements.txt

# Iniciar servidor Flask
python app.py
```

O servidor backend estará disponível em `http://localhost:5000`.

## Otimizações Implementadas

- **Lazy Loading**: Todas as páginas secundárias são carregadas sob demanda para melhorar o tempo de carregamento inicial.
- **Prefetching**: Componentes relacionados são pré-carregados com base na navegação do usuário.
- **Preload de Imagens**: Imagens críticas são pré-carregadas para evitar flashes durante a navegação.
- **Aceleração por Hardware**: Propriedades CSS como `will-change`, `transform: translateZ(0)` e `backface-visibility: hidden` são utilizadas para aproveitar a aceleração por GPU.
- **Memoização de Componentes**: `React.memo()` é utilizado para evitar renderizações desnecessárias.

## Convenções de Código

- **Componentes**: Utilize PascalCase para nomes de componentes (ex: `PageBanner.jsx`).
- **Estilos**: Utilize CSS Modules ou styled-components para estilos específicos de componentes.
- **Imagens**: Armazene imagens em `/public/images/` com nomes descritivos.
- **Rotas**: Mantenha a estrutura de rotas consistente com a hierarquia de pastas.

## Diretrizes para Desenvolvimento Contínuo

1. **Adição de Novas Páginas**:
   - Crie o componente da página em `src/pages/` ou na subpasta apropriada.
   - Adicione a importação lazy e a rota no arquivo `App.jsx`.
   - Atualize o componente `Sitemap.jsx` com a nova página.

2. **Modificação de Componentes Existentes**:
   - Mantenha a consistência visual com o design system.
   - Teste em diferentes tamanhos de tela para garantir responsividade.

3. **Otimização de Performance**:
   - Utilize React.memo() para componentes que não mudam frequentemente.
   - Otimize imagens antes de adicioná-las ao projeto.
   - Mantenha o lazy loading para componentes grandes.

4. **Integração com Backend**:
   - As APIs de contato e demo estão em `/api/contact` e `/api/demo`.
   - Utilize fetch ou axios para fazer requisições.

## Problemas Conhecidos e Soluções

1. **Encoding**: Alguns arquivos podem apresentar problemas de encoding. Se necessário, recrie o arquivo com a codificação UTF-8.

2. **PowerShell**: O operador `&&` não funciona no PowerShell. Use `;` como separador de comandos ou execute os comandos separadamente.

3. **Imagens**: Se uma imagem não carregar, verifique se o caminho está correto e se a imagem existe em `/public/images/`.

## Recursos Adicionais

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Material UI](https://mui.com/getting-started/usage/)
- [Documentação do Vite](https://vitejs.dev/guide/)
- [Documentação do React Router](https://reactrouter.com/docs/en/v6)

## Licença

Este projeto é proprietário e confidencial. Todos os direitos reservados à Necotium.

---

Desenvolvido com ❤️ para Necotium

## Componentes Principais

### Navbar
O componente de navegação principal que inclui links para todas as seções principais do site, com suporte para navegação em dispositivos móveis e desktop.

### Footer
O rodapé do site contém links rápidos, informações de contato e links para redes sociais. Também inclui um link para o Mapa do Site (Sitemap) que permite aos usuários visualizar a estrutura completa do site.

### Banner
Componente de banner principal da página inicial, com suporte para múltiplos slides e transições suaves. Inclui otimizações como precarregamento de imagens e aceleração por hardware.

### PageBanner
Componente de banner utilizado nas páginas internas, com título, subtítulo e imagem de fundo. Inclui otimizações de carregamento e efeitos visuais.

## Funcionalidades Recentes

### Mapa do Site (Sitemap)
Foi adicionada uma página de Mapa do Site (Sitemap) que apresenta a estrutura completa do site de forma organizada e visualmente agradável. A página é acessível através de um link no rodapé e inclui links para todas as seções do site, organizadas por categorias.

## Estrutura de UI por Página

### Página Inicial (Home)
- **Banner Rotativo**: Componente de destaque com múltiplos slides e transições suaves
- **Cards de Soluções**: Grid de cards apresentando as principais soluções
- **Brand Carousel**: Carrossel de logos de parceiros/clientes com efeito de scroll infinito
- **Seções de Destaque**: Blocos de conteúdo destacando diferenciais com ícones e texto

### Páginas de Produtos
- **PageBanner**: Banner com título, subtítulo e imagem de fundo
- **Grid Informativo**: Layout de duas colunas com texto e imagem do produto
- **Feature Cards**: Grid de cards destacando as principais funcionalidades
- **Call-to-Action**: Botões para contato e demonstração

### Páginas de Soluções
- **PageBanner**: Banner personalizado para cada solução
- **Grid de Conteúdo**: Estrutura em grid para apresentação de informações
- **Accordions**: Componentes expansíveis para apresentar detalhes das soluções
- **Feature Icons**: Ícones temáticos representando cada funcionalidade

### Página de Empresas/Governo
- **PageBanner**: Banner contextual
- **Cards Segmentados**: Cards categorizados por tipo de solução
- **Grid Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Chips**: Etiquetas para categorização de conteúdo

### Página de Contato
- **Formulário de Contato**: Campos validados para envio de mensagens
- **Feedback Visual**: Snackbars para confirmação de envio
- **Informações de Contato**: Bloco com dados para contato direto
- **Mapa**: Localização geográfica (quando aplicável)

### Página de Demo
- **Formulário de Agendamento**: Campos para solicitação de demonstração
- **Calendário**: Seleção de data/hora para agendamento (quando aplicável)
- **Feedback de Confirmação**: Confirmação visual após envio
- **Opções de Produtos**: Seleção de produtos para demonstração

### Página de Sitemap
- **Grid Organizacional**: Estrutura em grid apresentando categorias de páginas
- **Links Agrupados**: Links organizados por seções do site
- **Elementos Visuais**: Indicadores visuais para melhorar a navegabilidade

## Padrões de UI Comuns

### Cards
Utilizados extensivamente no site para apresentar informações de forma concisa e visualmente atraente:
- **Produto/Solução Cards**: Com imagem, título, descrição e botão de ação
- **Feature Cards**: Com ícone, título e descrição curta
- **Testimonial Cards**: Com foto, nome, empresa e depoimento

### Grids Responsivos
Implementados com Material UI Grid para garantir layout consistente em diferentes dispositivos:
- **2-Column Grids**: Para seções de conteúdo com texto e imagem
- **3-Column Grids**: Para apresentação de features ou produtos relacionados
- **4-Column Grids**: Para showcases de funcionalidades ou benefícios

### Botões e CTAs
Estilizados de acordo com a importância da ação:
- **Primary Buttons**: Para ações principais (contained)
- **Secondary Buttons**: Para ações alternativas (outlined)
- **Text Links**: Para navegação contextual menos proeminente

### Elementos de Estado
Componentes que fornecem feedback ao usuário:
- **Loaders**: Indicadores de carregamento durante operações assíncronas
- **Snackbars**: Notificações de sucesso, erro ou informativas
- **Form Validation**: Feedback visual em campos de formulário

## Componentes Material UI Personalizados

O projeto utiliza extensivamente o Material UI com várias personalizações para adequação à identidade visual da Necotium:

### Tema Personalizado
- **Paleta de Cores**: Cores primárias (#2B3990), secundárias (#C4D600) e de destaque (#E6007E)
- **Tipografia**: Família de fontes Inter e Roboto com pesos e tamanhos customizados
- **Efeitos de Hover**: Animações suaves em cards e botões
- **Sombras**: Sistema de elevação personalizado para diferentes componentes

### Componentes Customizados
- **MuiButton**: Cantos arredondados (8px), sem text-transform, com padding e espessura de borda específicos
- **MuiCard**: Cantos mais arredondados (12px), sombras sutis e efeito de elevação ao passar o mouse
- **MuiAppBar**: Remoção de sombras padrão, substituídas por bordas sutis
- **MuiContainer**: Padding horizontal ajustado para melhor experiência em dispositivos móveis
- **MuiPaper**: Remoção de gradientes de fundo

### Animações e Transições
- **Fade-in**: Elementos que aparecem com animação suave ao entrar na viewport
- **Transform**: Efeitos de escala e translação para cards e elementos interativos
- **Transições**: Duração e timing functions personalizadas para diferentes interações

## Otimizações de UI

### Lazy Loading e Code Splitting
- **Componentes Lazy**: Páginas carregadas sob demanda para reduzir o tamanho inicial do bundle
- **LoadingFallback**: Componente com animação de fade-in para melhorar a experiência durante o carregamento
- **Prefetching**: Precarregamento inteligente de componentes com base na navegação atual

### Optimizações de Renderização
- **React.memo**: Aplicado em componentes com props estáveis para evitar re-renderizações desnecessárias
- **useCallback e useMemo**: Utilizados para memoização de funções e valores computados
- **Refs**: Referências diretas ao DOM para manipulações imperativas quando necessário

### Responsividade
- **Breakpoints**: Utilização de breakpoints consistentes para adaptação a diferentes tamanhos de tela
- **Unidades Relativas**: Uso de rem e % para dimensionamento relativo de elementos
- **Flex e Grid**: Layouts flexíveis para reorganização apropriada em diferentes dispositivos

## Detalhes de Implementação por Página

### Home
- **Banner Component**:
  - Implementado como classe CSS para transições hardware-accelerated
  - Sistema de slides com fade-in/out automático e controle manual
  - Precarregamento de imagens para transições suaves
  - Texto com animações de entrada com delay sequencial

- **Solutions Grid**:
  - Implementado com MUI Grid container e item
  - Cards com efeito de elevação no hover
  - Ícones temáticos com cores personalizadas
  - Transição suave para destacar o card atual

- **BrandCarousel**:
  - Animation baseada em CSS keyframes para scroll infinito
  - Efeito de pausa no hover
  - Detecção de interseção para carregar apenas quando visível
  - Manipulação otimizada de imagens (lazy loading)

### Produtos e Soluções
- **PageBanner Component**:
  - Imagem de fundo com overlay escuro para melhorar legibilidade
  - Título com destaque visual (underline colorido)
  - Animação de entrada para texto (fade-in + slide-up)
  - Precarregamento da imagem para evitar flash de conteúdo

- **Grids de Features**:
  - Cards com altura uniforme para alinhamento visual consistente
  - Uso de Paper com elevação sutil
  - Ícones com cores temáticas para melhor associação visual
  - Transform no hover para feedback interativo

### Contato e Demo
- **Formulários**:
  - Validação em tempo real com feedback visual
  - Estado de loading durante submissão
  - Feedback pós-submissão com Snackbars temáticos
  - Campos de entrada com design consistente e acessível

- **Calls-to-Action**:
  - Botões com hierarquia visual clara (primário vs secundário)
  - Cores contrastantes para destacar ações importantes
  - Feedback de hover com transformação sutil
  - Transições suaves entre estados

### Sitemap
- **Grid Organizacional**:
  - Estrutura de duas colunas em desktop, única em mobile
  - Cards com altura dinâmica baseada no conteúdo
  - Indicadores visuais para categorias (cores e ícones)
  - Links com feedback de hover (deslocamento e mudança de cor)

## Decisões de Design

### Consistência Visual
- **Sistema de Cores**: Uso consistente da paleta principal em todos os elementos interativos
- **Hierarquia Tipográfica**: Escala de tamanhos e pesos tipográficos mantida em todas as páginas
- **Espaçamento**: Sistema de espaçamento baseado em múltiplos de 8px (baseline grid)
- **Elevação**: Uso consistente de sombras para indicar interatividade e hierarquia

### Considerações de Performance
- **Carregamento de Imagens**: Estratégia otimizada com preload para imagens críticas
- **Animações**: Uso de propriedades otimizadas (transform, opacity) para melhor performance
- **Renderização Condicional**: Componentes carregados apenas quando necessários
- **Memoização**: Prevenção de recálculos desnecessários em componentes frequentemente renderizados

### Acessibilidade
- **Contraste de Cores**: Relações de contraste adequadas para texto e elementos interativos
- **Estrutura Semântica**: Uso apropriado de elementos HTML (headings, landmarks, etc)
- **Estados de Foco**: Indicadores visuais claros para navegação por teclado
- **Textos Alternativos**: Descrições para imagens e elementos visuais

## Detalhes Técnicos de Implementação

### Padrões de Componentes React

O projeto segue padrões modernos de desenvolvimento React:

- **Componentes Funcionais**: Todos os componentes são implementados como funções, aproveitando React Hooks
- **Hooks Customizados**: Lógicas complexas ou compartilhadas são extraídas em hooks personalizados
- **Composição de Componentes**: Preferência por composição em vez de herança para reutilização de código
- **Prop Drilling Mínimo**: Uso de Context API quando necessário para evitar prop drilling excessivo

### Organização de Código

A estrutura do projeto segue uma organização modular e escalável:

- **Pages vs Components**: Separação clara entre páginas completas e componentes reutilizáveis
- **Componentes por Domínio**: Agrupamento de componentes relacionados por funcionalidade
- **Estilização Consistente**: Combinação de estilos Material UI (sx prop) e CSS modular para estilos específicos
- **Estrutura de Pastas**: Organização que facilita a localização e manutenção do código

### Padrões de Estilização

Múltiplas estratégias de estilização são usadas dependendo do contexto:

- **Material UI sx prop**: Para customizações rápidas e acesso ao theme
- **Arquivos CSS Separados**: Para animações complexas e estilos globais
- **CSS Modular**: Para estilos específicos de componente com escopo isolado
- **Styled Components**: Para componentes com variações baseadas em props

### Gerenciamento de Estado

O estado da aplicação é gerenciado de forma eficiente:

- **Estado Local**: Uso de useState para estado específico de componente
- **Efeitos Colaterais**: useEffect com dependências bem definidas para operações síncronas
- **Requisições API**: Implementação de padrões de loading, error e success state
- **Formulários**: Gerenciamento de estado de formulário com validação em tempo real

### Otimizações de Renderização

Técnicas específicas para garantir performance:

- **useMemo e useCallback**: Utilizados quando há cálculos intensivos ou para evitar re-renderizações
- **React.memo**: Aplicado a componentes que recebem props estáveis
- **Code Splitting**: Importações dinâmicas para carregar código sob demanda
- **Virtualização**: Considerada para listas longas quando necessário

### Convenções de Código

Padrões consistentes em todo o código:

- **Nomenclatura**: Padrão camelCase para variáveis/funções e PascalCase para componentes
- **Comentários**: Documentação de código complexo e decisões de implementação importantes
- **Props Spreading**: Evitado na maioria dos casos, preferindo props explícitas
- **Tipos de Propriedades**: Documentação clara das props esperadas por cada componente

## Configuração Detalhada dos Componentes

Esta seção documenta em detalhes como os componentes principais estão configurados em todas as páginas do site.

### Componentes de Layout

#### Navbar
- **Configuração**: Componente funcional que utiliza `useState` para controlar o estado do menu móvel
- **Props**: Não recebe props externas
- **Estado**: 
  - `isMenuOpen` (boolean): Controla a visibilidade do menu móvel
  - `anchorEl` (object): Referência ao elemento âncora para o menu dropdown
- **Estilo**: 
  - AppBar com `position="sticky"` e `color="default"`
  - Transparência parcial com backdrop-filter para efeito de vidro
  - Transição suave na altura da barra (`minHeight: { xs: 56, md: 72 }`)
- **Responsividade**: 
  - Menu de hambúrguer em dispositivos móveis (xs, sm)
  - Menu completo em desktop (md para cima)
  - Logos de diferentes tamanhos para diferentes breakpoints

#### Footer
- **Configuração**: Componente funcional com data dinâmica do ano atual
- **Props**: Não recebe props externas
- **Estado**: Utiliza `new Date().getFullYear()` para o copyright
- **Estilo**:
  - Background escuro (`#1A1A2E`)
  - Grid de três colunas em desktop, empilhadas em mobile
  - Borda sutil no topo da seção de copyright
- **Componentes internos**:
  - Links rápidos utilizando `RouterLink` do React Router
  - Ícones de redes sociais com efeito hover
  - Logo com altura fixa de 40px

### Componentes de Destaque

#### Banner (Home)
- **Configuração**: Componente funcional com sistema de slides automatizados
- **Props**:
  - `banners` (array): Array de objetos contendo informações de cada slide
    - `title` (string): Título principal do slide
    - `subtitle` (string): Subtítulo descritivo
    - `image` (string): URL da imagem de fundo
    - `buttonText` (string): Texto do botão de ação
    - `buttonLink` (string): URL para navegação do botão
- **Estado**:
  - `currentBanner` (number): Índice do banner atualmente exibido
  - `intervalRef` (ref): Referência para controlar o intervalo de troca automática
  - `imagesLoaded` (ref): Objeto para rastrear quais imagens foram carregadas
- **Comportamento**:
  - Rotação automática de slides a cada 8 segundos
  - Navegação manual através dos indicadores
  - Precarregamento de imagens com prioridade para o primeiro slide
- **Otimizações**:
  - Hardware acceleration com `will-change: transform, opacity`
  - Atributos `loading="eager"` para o primeiro slide e `loading="lazy"` para os demais
  - `fetchpriority="high"` para o primeiro slide
  - Uso de `React.memo()` para prevenir renderizações desnecessárias

#### PageBanner (Páginas Internas)
- **Configuração**: Componente funcional com precarregamento de imagem
- **Props**:
  - `title` (string): Título principal exibido no banner
  - `subtitle` (string): Subtítulo ou descrição curta
  - `image` (string): URL da imagem de fundo
  - `buttonText` (string, opcional): Texto do botão (quando aplicável)
  - `buttonLink` (string, opcional): URL para navegação do botão
- **Estado/Refs**: 
  - `imageRef`: Referência para a imagem de fundo para manipulação de opacidade
- **Estilo**:
  - Overlay escuro com opacity 0.5 para melhorar legibilidade do texto
  - Altura responsiva (`{ xs: '40vh', sm: '50vh' }`)
  - Texto com sombra sutil para destacar sobre a imagem
  - Barra colorida abaixo do título usando `&::before` no CSS
- **Otimizações**:
  - Transição suave de opacidade (0.8 para 1) após carregamento da imagem
  - Atributos `loading="eager"` e `decoding="async"` para otimização de carregamento
  - Uso de `transform: translateZ(0)` e `backfaceVisibility: 'hidden'` para aceleração por hardware
  - Animação de fade-in para o título e subtítulo
  - Uso de `React.memo()` para prevenir renderizações desnecessárias

#### BrandCarousel
- **Configuração**: Componente para exibição de logos de parceiros com scroll infinito
- **Props**: Não recebe props externas
- **Estado**:
  - `isVisible` (boolean): Controla se o carrossel está visível na viewport
- **Refs**:
  - `carouselRef`: Referência para observar visibilidade usando IntersectionObserver
- **Comportamento**:
  - Animação de scroll contínuo usando CSS `@keyframes`
  - Pausa da animação ao passar o mouse (`:hover`)
  - Carrega e anima somente quando visível na viewport
- **Estilo**:
  - Logos em grayscale (100%) com transição para colorido no hover
  - Efeito de fade nas extremidades usando `::before` e `::after`
  - Opacidade reduzida (0.7) com aumento para 1 no hover
  - Efeito de escala (1.05) no hover dos logos

### Componentes de Conteúdo

#### Solutions (Grid de Soluções)
- **Configuração**: Componente de grid para exibição de soluções ou recursos
- **Props**:
  - `features` (array): Array of objects with information about the solutions
    - `icon` (string): Identifier of the icon to be displayed
    - `title` (string): Title of the solution
    - `description` (string): Short description
- **Mapeamento de Ícones**:
  - Objeto `iconMap` que relates identifiers with Material UI icon components
- **Estilo**:
  - Cards with height 100% for uniform alignment
  - Smooth transition and box-shadow on hover
  - Elevation of cards by 8px when hovered
  - Icons with fixed size of 40px and primary color

#### ProductCard / SolutionCard
- **Configuração**: Card component for displaying products or solutions
- **Props**:
  - `product`/`solution` (object): Object containing product/solution information
    - `title` (string): Name of the product/solution
    - `description` (string): Short description
    - `image` (string): URL of the product image
    - `path` (string): URL to the detailed page
- **Estilo**:
  - Elevation and scale effect on hover
  - Overlay gradient over image for better text readability
  - Action button positioned at the bottom of the card
  - Smooth transition between states (0.3s)
- **Responsividade**:
  - Adaptation of size and layout according to breakpoints (xs, sm, md, lg)

### Componentes de Formulário

#### ContactForm
- **Configuração**: Form component for contact submission to API
- **Props**: Não recebe props externas
- **Estado**:
  - `formData` (object): Form data (name, email, phone, message)
  - `errors` (object): Validation errors for each field
  - `isSubmitting` (boolean): Form submission state
  - `snackbar` (object): Control for visual feedback (open, message, severity)
- **Validação**:
  - Email with regex for valid format
  - Required fields checked before submission
  - Immediate visual feedback on fields with error
- **Submissão**:
  - POST request to `/api/contact` with JSON payload
  - State management for loading, success, and error
  - Feedback via Snackbar after attempted submission
- **Estilo**:
  - Consistent field spacing (16px)
  - Primary button for submission
  - Loading indicator (CircularProgress) during submission
  - Visual feedback for invalid fields (outlined in red)

#### DemoForm
- **Configuração**: Similar to ContactForm but with additional fields
- **Props**: Não recebe props externas
- **Estado**: 
  - Semelhante ao ContactForm
  - Adiciona `selectedProducts` (array) for product interest selection
- **Campos Adicionais**:
  - Product interest selector (Checkbox)
  - Company/Organization field
  - Job/Function field
- **Validação e Submissão**: 
  - Similar to ContactForm
  - Sends to endpoint `/api/demo`

### Componentes de Navegação e Interação

#### Accordion (Páginas de Soluções)
- **Configuração**: Expansible component for displaying detailed information
- **Props**:
  - `feature` (object): Information about the resource/functionality
    - `title` (string): Title displayed in the header
    - `description` (string): Detailed content displayed when expanded
- **Comportamento**:
  - Expansion/contraction when clicked on header
  - Arrow icon (ExpandMoreIcon) that rotates with expansion
- **Estilo**:
  - Slight and rounded border
  - Smooth transition when expanding/contracting
  - Consistent internal padding

#### Chips (Páginas de Segmentos)
- **Configuração**: Labels for content categorization
- **Props**:
  - `label` (string): Text displayed in the chip
  - `color` (string): Chip color (primary, secondary, success, etc.)
  - `variant` (string): Style variant (outlined, filled)
- **Estilo**:
  - Small size for use in headers of cards
  - Margins for separation when in group
  - Border-radius consistent with the design system

### Componentes de Página Específicos

#### Home - Destaques
- **Configuração**: Seções de destaque com ícones e texto
- **Layout**: Grid of 2-3 columns with cards for each highlight
- **Estilo**:
  - Large icons (60px) with primary or secondary color
  - H4 or H5 titles with primary color
  - Consistent vertical spacing between sections (64px)
  - Alternating background between sections (white/light gray)

#### Sitemap - Estrutura
- **Configuração**: Grid organizacional with categorized links
- **Props**: Não recebe props externas
- **Estado**: 
  - `siteStructure` (array): Array of objects defining the site structure
    - `title` (string): Title of the section
    - `links` (array): Array of objects {name, path} for each link
- **Estilo**:
  - Cards with highlighted title and underline color (secondary.main)
  - Links with visual indicator (`::before` with colored circle)
  - Slight hover effect on links (desplacement and color change)
  - Divider between title and link list

#### Product/Solution Detail - Banners and Cards
- **Configuração**: Detailed product/solution page
- **Layout**: Banner above followed by content grid
- **Sections**:
  - Information Grid (2 columns) with text and product image
  - Features Grid (4 columns in desktop, adaptable in mobile)
  - CTA Section with contact and demo buttons
- **Styling**:
  - Consistency with listing page
  - Feature cards with slight elevation effect on hover
  - Images with consistent border-radius and moderate shadow
  - Section titles with centered alignment and primary color

#### Empresas/Governo - Cards Segmented
- **Configuração**: Cards organized by market/solution segment
- **Props**: Specific to each type of card on the page
- **Layout**: Mixed grid with highlight for main cards
- **Styling**:
  - Colored chips for categorization
  - Larger cards for main solutions
  - Smaller cards for secondary/related solutions
  - Transitions and elevations consistent with the rest of the site

## Implementação Técnica Por Página

Esta seção detalha as implementações específicas dos componentes em cada página principal do site.

### Home

#### Implementação do Banner Principal
```javascript
// Componente 
const Banner = ({ banners }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const intervalRef = useRef(null);
  const imagesLoaded = useRef({});
  
  // Preload de imagens para otimização
  useEffect(() => {
    const preloadImage = (src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoaded.current[index] = true;
      };
      return img;
    };
    
    const imagePromises = banners.map((banner, index) => 
      preloadImage(banner.image, index)
    );
    
    return () => {
      imagePromises.forEach(img => {
        if (img) img.onload = null;
      });
    };
  }, [banners]);

  // Rotação automática de slides
  const nextSlide = useCallback(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(nextSlide, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);
```

#### Seções de Destaque
- Implementação baseada em Grids Material UI organizados em containers
- Layout responsivo com breakpoints para xs, sm, md, lg e xl
- Uso extensivo de Typography para manter hierarquia textual
- Cards com `elevation={2}` para sombra sutil consistente

#### Brand Carousel
- Implementação com CSS puro para animações fluidas
- Detecção de interseção para melhor performance:
```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      threshold: 0.1,
    }
  );

  if (carouselRef.current) {
    observer.observe(carouselRef.current);
  }

  return () => {
    if (carouselRef.current) {
      observer.unobserve(carouselRef.current);
    }
  };
}, []);
```

### Páginas de Produtos

#### Estrutura Comum
- Banner superior (`PageBanner`) configurado com título, subtítulo e imagem específica
- Grid de duas colunas para informações principais:
  - Coluna esquerda: Título, descrição e botões CTA
  - Coluna direita: Imagem representativa do produto/dashboard
- Grid de funcionalidades com 4 cards (adaptável para 1, 2 ou 3 colunas em breakpoints menores)

#### Otimizações
- Memoização de componentes para produtos com conteúdo estático
- Reutilização de componentes Card com propriedades específicas
- Implementação de consistência visual através de estilos compartilhados:
```javascript
const styles = {
  featureCard: {
    p: 3,
    height: '100%',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: 2,
    boxShadow: 3
  }
};
```

### Páginas de Soluções

#### Accordions Personalizados
- Implementação baseada no componente Accordion do Material UI
- Configurados para expansão controlada ou não controlada
- Estilização personalizada para maior consistência com o design do site:
```javascript
<Accordion 
  key={featureIndex}
  sx={{
    mb: 2,
    boxShadow: 'none',
    border: '1px solid rgba(0,0,0,0.08)',
    '&:before': {
      display: 'none',
    },
    borderRadius: 1,
    overflow: 'hidden'
  }}
>
  <AccordionSummary 
    expandIcon={<ExpandMoreIcon />}
    sx={{
      backgroundColor: 'rgba(0,0,0,0.02)',
      '& .MuiAccordionSummary-content': {
        my: 1
      }
    }}
  >
    <Typography variant="h6">{feature.title}</Typography>
  </AccordionSummary>
  <AccordionDetails sx={{ p: 3 }}>
    <Typography>{feature.description}</Typography>
  </AccordionDetails>
</Accordion>
```

#### Grid de Soluções
- Cards categorizados por tipo de solução
- Implementação com MUI Grid para layout responsivo
- Uso de composição de componentes para cards de diferente ênfase visual

### Página de Contato

#### Formulário com Validação
- Validação em tempo real com feedback visual instantâneo
- Estado gerenciado com useState e handlers específicos:
```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  
  // Validação em tempo real
  if (name === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email: !emailPattern.test(value) && value.length > 0
        ? 'Email inválido'
        : '',
    }));
  }
};
```

- Submissão assíncrona com gerenciamento de estados:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validação antes de enviar
  const requiredFields = ['name', 'email', 'message'];
  const newErrors = {};
  
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      newErrors[field] = 'Campo obrigatório';
    }
  });
  
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
  
  // Início da submissão
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (result.status === 'success') {
      // Feedback de sucesso
      setSnackbar({
        open: true,
        message: 'Mensagem enviada com sucesso!',
        severity: 'success',
      });
      // Reset do formulário
      setFormData(initialFormData);
    } else {
      // Feedback de erro
      setSnackbar({
        open: true,
        message: result.message || 'Ocorreu um erro ao enviar a mensagem.',
        severity: 'error',
      });
    }
  } catch (error) {
    // Feedback de erro de conexão
    setSnackbar({
      open: true,
      message: 'Erro de conexão. Tente novamente mais tarde.',
      severity: 'error',
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

#### Snackbar de Feedback
- Implementação de Snackbar do Material UI para feedback de sucesso/erro
- Configurado com autoHide (6 segundos) e possibilidade de fechamento manual

### Página de Demo

#### Formulário de Agendamento
- Similar ao ContactForm com campos específicos adicionais
- Implementação de seleção múltipla para produtos de interesse:
```javascript
<FormControl component="fieldset" sx={{ mt: 2 }}>
  <FormLabel component="legend">Produtos de interesse</FormLabel>
  <FormGroup>
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} key={product.id}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedProducts.includes(product.id)}
                onChange={handleProductSelect}
                name={product.id}
              />
            }
            label={product.name}
          />
        </Grid>
      ))}
    </Grid>
  </FormGroup>
</FormControl>
```

### Página Sitemap

#### Estrutura de Grid Organizacional
- Implementação com Grid container e Grid items para organização clara
- Uso de Paper para agrupamento visual de links relacionados
- Estilização detalhada para melhorar a experiência do usuário:
```javascript
<Grid container spacing={4}>
  {siteStructure.map((section, index) => (
    <Grid item xs={12} md={6} key={index}>
      <Paper 
        elevation={2} 
        sx={{ 
          p: 3, 
          height: '100%',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 4
          }
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          color="primary"
          sx={{
            position: 'relative',
            pb: 1,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 60,
              height: 3,
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 1
            }
          }}
        >
          {section.title}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {section.links.map((link, linkIndex) => (
            <Link
              component={RouterLink}
              to={link.path}
              key={linkIndex}
              sx={{
                color: 'text.primary',
                textDecoration: 'none',
                py: 0.5,
                transition: 'all 0.2s',
                '&:hover': {
                  color: 'primary.main',
                  pl: 1
                },
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: 'secondary.main',
                  mr: 1.5
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </Box>
      </Paper>
    </Grid>
  ))}
</Grid>
```

## Considerações sobre Desenvolvimento Futuro

### Expansão de Componentes
- Novos componentes devem seguir o padrão de documentação e implementação existente
- Manter a consistência visual e de comportamento em todo o site
- Reutilizar estilos e lógicas existentes sempre que possível

### Otimizações Adicionais
- Considerar implementação de virtualização para listas longas (especialmente no Sitemap)
- Avaliar o uso de CSS-in-JS para componentes com estilização complexa
- Implementar lazy loading para imagens secundárias em todas as páginas

## Documentação Técnica Adicional

Para detalhes mais aprofundados sobre a implementação técnica dos componentes, consulte o arquivo [IMPLEMENTACAO-TECNICA.md](./IMPLEMENTACAO-TECNICA.md) que contém:

- Exemplos de código detalhados dos principais componentes
- Explicações de implementação para cada página
- Padrões de código e otimizações utilizadas
- Considerações para manutenção e desenvolvimento futuro

Este documento foi criado para oferecer uma visão mais detalhada dos aspectos técnicos sem sobrecarregar o README principal.
