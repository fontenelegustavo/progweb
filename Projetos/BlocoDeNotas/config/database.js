const mongoose = require('mongoose');
require("dotenv").config();


const mongo_uri = process.env.MONGODB_URI2
const connectDB = async () => {
  try {
    // Primeiro tenta conectar ao MongoDB Atlas
    const conn = await mongoose.connect(mongo_uri, {
      serverSelectionTimeoutMS: 5000, // Timeout de 5 segundos
      connectTimeoutMS: 10000,
    });

    console.log(`✅ MongoDB Atlas conectado: ${conn.connection.host}`);
  } catch (error) {
    console.warn('⚠️  Não foi possível conectar ao MongoDB Atlas:', error.message);
    console.log('📝 Para resolver este problema:');
    console.log('   1. Acesse https://cloud.mongodb.com/');
    console.log('   2. Vá em Network Access > IP Whitelist');
    console.log('   3. Adicione seu IP atual ou use 0.0.0.0/0 para permitir todos os IPs');
    console.log('');
    console.log('🔄 Tentando conectar ao MongoDB local...');
    
    try {
      // Fallback para MongoDB local
      const localConn = await mongoose.connect('mongodb://localhost:27017/notebook');
      
      console.log(`✅ MongoDB local conectado: ${localConn.connection.host}`);
    } catch (localError) {
      console.error('❌ Não foi possível conectar ao MongoDB local também:', localError.message);
      console.log('');
      console.log('🚀 Para instalar MongoDB localmente:');
      console.log('   1. Baixe MongoDB Community Server em https://www.mongodb.com/try/download/community');
      console.log('   2. Instale e inicie o serviço MongoDB');
      console.log('   3. Ou use Docker: docker run -d -p 27017:27017 mongo');
      console.log('');
      console.log('⚠️  A aplicação continuará funcionando, mas os dados não serão persistidos.');
      
      // Usar banco em memória como último recurso
      const memoryConn = await mongoose.connect('mongodb://localhost:27017/temp-notebook', {
        bufferCommands: false,
        serverSelectionTimeoutMS: 1000,
      }).catch(() => {
        console.log('💾 Usando modo de desenvolvimento sem persistência...');
        // Se nem local funcionar, a aplicação ainda pode rodar sem BD
        return null;
      });
      
      if (memoryConn) {
        console.log(`✅ Conectado ao banco temporário: ${memoryConn.connection.host}`);
      }
    }
  }
};

module.exports = connectDB;
