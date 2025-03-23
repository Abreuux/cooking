# Necotium Website

Este é o repositório do website da Necotium, uma aplicação web construída com React no frontend e Flask no backend.

## 🚀 Deploy

O deploy da aplicação é automatizado usando GitHub Actions e Firebase Hosting. Cada push para a branch `master` dispara automaticamente um novo deploy.

### Processo de CI/CD

O workflow de deploy está configurado em `.github/workflows/firebase-deploy.yml` e consiste nas seguintes etapas:

1. **Checkout do Código**
   - Utiliza `actions/checkout@v3` para obter o código mais recente

2. **Setup do Node.js**
   - Configura Node.js 18
   - Utiliza cache do npm para otimizar instalações

3. **Instalação de Dependências**
   - Instala dependências do projeto raiz
   - Instala dependências do frontend
   - Instala dependências específicas para Linux (Rollup)
   - Instala dependências das Firebase Functions

4. **Build do Frontend**
   - Executa o build da aplicação React
   - Verifica o conteúdo do diretório de build

5. **Deploy para Firebase**
   - Utiliza a ação oficial do Firebase (`FirebaseExtended/action-hosting-deploy@v0`)
   - Faz deploy para o canal de produção

### Configuração Necessária

Para que o deploy funcione, você precisa configurar os seguintes secrets no GitHub:

1. `GITHUB_TOKEN` (automático)
   - Token para acesso ao repositório
   - Criado automaticamente pelo GitHub

2. `FIREBASE_SERVICE_ACCOUNT`
   - Credenciais do serviço do Firebase
   - Deve ser configurado nas settings do repositório

### Estrutura do Projeto

```
.
├── frontend/           # Aplicação React
├── functions/          # Firebase Functions
├── .github/           
│   └── workflows/     # Configurações do GitHub Actions
├── firebase.json      # Configuração do Firebase
└── .firebaserc        # Configuração do projeto Firebase
```

### Como fazer Deploy

O deploy acontece automaticamente quando:
1. Um push é feito para a branch `master`
2. Um pull request é aberto para a branch `master`

Para fazer deploy manualmente:
1. Faça suas alterações
2. Commit as mudanças:
   ```bash
   git add .
   git commit -m "sua mensagem"
   git push origin master
   ```
3. O GitHub Actions iniciará o processo automaticamente
4. Acompanhe o progresso na aba "Actions" do GitHub

### Troubleshooting

Se o deploy falhar, verifique:
1. Se todos os secrets estão configurados corretamente
2. Se o build do frontend está gerando os arquivos corretamente
3. Se as dependências estão instaladas e atualizadas
4. Os logs detalhados na aba Actions do GitHub

## 🛠️ Desenvolvimento Local

Para rodar o projeto localmente:

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   cd frontend && npm install
   cd ../functions && npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   # Frontend
   cd frontend && npm start

   # Backend
   python app.py
   ```

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE). 