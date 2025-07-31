const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET - Listar todas as notas
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.render('notes/index', { notes });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao carregar notas' });
  }
});

// GET - Formulário para nova nota
router.get('/new', (req, res) => {
  const success = req.query.success;
  const continuing = req.query.continue;
  
  let successMessage = null;
  if (success && continuing) {
    successMessage = 'Nota salva com sucesso! Você pode criar uma nova nota.';
  }
  
  res.render('notes/new', { successMessage });
});

// POST - Criar nova nota
router.post('/', async (req, res) => {
  try {
    const { title, content, category, saveAndNew } = req.body;
    
    // Validação mais robusta
    if (!title || !title.trim()) {
      return res.status(400).render('notes/new', { 
        error: 'Título é obrigatório e não pode estar vazio',
        title,
        content,
        category
      });
    }

    if (!content || !content.trim()) {
      return res.status(400).render('notes/new', { 
        error: 'Conteúdo é obrigatório e não pode estar vazio',
        title,
        content,
        category
      });
    }

    // Validar tamanho
    if (title.trim().length > 100) {
      return res.status(400).render('notes/new', { 
        error: 'Título não pode ter mais de 100 caracteres',
        title,
        content,
        category
      });
    }

    // Criar nova nota
    const note = new Note({
      title: title.trim(),
      content: content.trim(),
      category: category || 'Geral'
    });

    // Salvar no banco de dados
    const savedNote = await note.save();
    console.log(`✅ Nova nota criada: ID ${savedNote._id}, Título: "${savedNote.title}"`);

    // Se saveAndNew foi marcado, redirecionar para nova nota
    if (saveAndNew) {
      res.redirect('/notes/new?success=1&continue=1');
    } else {
      res.redirect(`/notes/${savedNote._id}?success=1`);
    }
    
  } catch (error) {
    console.error('❌ Erro ao salvar nota:', error);
    
    // Verificar se é erro de validação do Mongoose
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).render('notes/new', { 
        error: `Erro de validação: ${validationErrors.join(', ')}`,
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
      });
    }
    
    // Erro de conexão com banco
    if (error.name === 'MongoNetworkError' || error.name === 'MongooseServerSelectionError') {
      return res.status(500).render('notes/new', { 
        error: 'Erro de conexão com o banco de dados. Verifique sua conexão e tente novamente.',
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
      });
    }
    
    // Outros erros
    res.status(500).render('notes/new', { 
      error: 'Erro interno do servidor. Tente novamente em alguns minutos.',
      title: req.body.title,
      content: req.body.content,
      category: req.body.category
    });
  }
});

// GET - Visualizar nota específica
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).render('error', { message: 'Nota não encontrada' });
    }
    
    const success = req.query.success;
    res.render('notes/show', { note, success });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao carregar nota' });
  }
});

// GET - Formulário para editar nota
router.get('/:id/edit', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).render('error', { message: 'Nota não encontrada' });
    }
    res.render('notes/edit', { note });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao carregar nota para edição' });
  }
});

// PUT - Atualizar nota
router.put('/:id', async (req, res) => {
  try {
    const { title, content, category } = req.body;
    
    if (!title || !content) {
      const note = await Note.findById(req.params.id);
      return res.status(400).render('notes/edit', { 
        error: 'Título e conteúdo são obrigatórios',
        note: {
          ...note.toObject(),
          title,
          content,
          category
        }
      });
    }

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        category: category || 'Geral',
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!note) {
      return res.status(404).render('error', { message: 'Nota não encontrada' });
    }

    res.redirect(`/notes/${note._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao atualizar nota' });
  }
});

// DELETE - Deletar nota
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).render('error', { message: 'Nota não encontrada' });
    }
    res.redirect('/notes');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao deletar nota' });
  }
});

module.exports = router;
