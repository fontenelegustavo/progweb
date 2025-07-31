const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título é obrigatório'],
    trim: true,
    maxlength: [100, 'Título não pode ter mais de 100 caracteres'],
    minlength: [1, 'Título não pode estar vazio']
  },
  content: {
    type: String,
    required: [true, 'Conteúdo é obrigatório'],
    minlength: [1, 'Conteúdo não pode estar vazio']
  },
  category: {
    type: String,
    default: 'Geral',
    enum: {
      values: ['Geral', 'Trabalho', 'Pessoal', 'Estudos', 'Ideias', 'Importante'],
      message: 'Categoria deve ser uma das opções válidas'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware para atualizar updatedAt antes de salvar
noteSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Método para obter resumo do conteúdo
noteSchema.methods.getContentPreview = function(maxLength = 100) {
  if (this.content.length <= maxLength) {
    return this.content;
  }
  return this.content.substring(0, maxLength) + '...';
};

// Método para obter ícone da categoria
noteSchema.methods.getCategoryIcon = function() {
  const icons = {
    'Geral': '📝',
    'Trabalho': '💼',
    'Pessoal': '👤',
    'Estudos': '📚',
    'Ideias': '💡',
    'Importante': '⭐'
  };
  return icons[this.category] || '📝';
};

module.exports = mongoose.model('Note', noteSchema);
