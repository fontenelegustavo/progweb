# Configuração do MongoDB Atlas

## Problema: IP não está na whitelist

Se você está recebendo o erro "Could not connect to any servers in your MongoDB Atlas cluster", siga estes passos:

### 1. Acessar o MongoDB Atlas
- Vá para [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
- Faça login na sua conta

### 2. Configurar Network Access
- No painel lateral, clique em "Network Access"
- Clique em "ADD IP ADDRESS"
- Escolha uma das opções:
  - **"Add Current IP Address"** - Para adicionar apenas seu IP atual
  - **"Allow Access from Anywhere"** - Digite `0.0.0.0/0` para permitir qualquer IP (apenas para desenvolvimento)

### 3. Confirmar a configuração
- Clique em "Confirm"
- Aguarde alguns minutos para a configuração fazer efeito

## Alternativa: MongoDB Local

Se preferir usar MongoDB local:

### Windows
1. Baixe MongoDB Community Server: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Instale seguindo o wizard
3. Inicie o serviço MongoDB
4. A aplicação tentará conectar automaticamente

### Docker
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

## Verificar Conexão

A aplicação tentará conectar na seguinte ordem:
1. MongoDB Atlas (com suas credenciais)
2. MongoDB Local (localhost:27017)
3. Modo desenvolvimento (sem persistência)

## String de Conexão Atual

```
mongodb+srv://gustavofontenele04:gustavo123@cluster0.sap9mtp.mongodb.net/notebook
```

**Importante:** Nunca compartilhe suas credenciais do banco de dados em produção. Use variáveis de ambiente.
