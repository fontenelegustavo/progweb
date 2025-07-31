const express = require('express');
const connectDB = require('./config/database');

// Teste de conexão simples
async function testApp() {
  console.log('🧪 Testando aplicação...\n');
  
  try {
    // Testar conexão com banco
    console.log('1. Testando conexão com banco de dados...');
    await connectDB();
    console.log('✅ Conexão com banco OK\n');
    
    // Testar modelo
    console.log('2. Testando modelo Note...');
    const Note = require('./models/Note');
    console.log('✅ Modelo Note carregado OK\n');
    
    // Criar nota de teste (apenas se não houver nenhuma)
    console.log('3. Verificando se há notas no banco...');
    const noteCount = await Note.countDocuments();
    console.log(`📊 Notas encontradas: ${noteCount}\n`);
    
    if (noteCount === 0) {
      console.log('4. Criando nota de exemplo...');
      const testNote = new Note({
        title: 'Bem-vindo ao Bloco de Notas! 🎉',
        content: `Esta é uma nota de exemplo criada automaticamente.

Você pode:
- ✅ Criar novas notas
- ✅ Editar notas existentes  
- ✅ Organizar por categorias
- ✅ Visualizar todas suas notas
- ✅ Deletar notas

Para começar, clique em "Nova Nota" e comece a organizar suas ideias!

Data de criação: ${new Date().toLocaleString('pt-BR')}`,
        category: 'Geral'
      });
      
      await testNote.save();
      console.log('✅ Nota de exemplo criada com sucesso!\n');
    }
    
    console.log('🎉 Aplicação pronta para uso!');
    console.log('🌐 Acesse: http://localhost:3000');
    console.log('📝 Para criar uma nova nota: http://localhost:3000/notes/new');
    
  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
    console.log('\n📋 Verifique:');
    console.log('- Conexão com internet');
    console.log('- Configuração do MongoDB Atlas');
    console.log('- MongoDB local instalado e rodando');
  }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  testApp().then(() => {
    console.log('\n✨ Teste concluído!');
    process.exit(0);
  }).catch(err => {
    console.error('❌ Erro fatal:', err);
    process.exit(1);
  });
}

module.exports = testApp;
