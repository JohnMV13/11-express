'use strict';

import express from 'express';
const router = express.Router();
export default router;
import Note from '../models/notes';

router.get('/api/notes', (req, res) => {
  if (req.query.id) {
    return Note.findById(req.query.id)
      .then(note => {
        res.json(notes);
      });
  }
  Note.fetchAll()
    .then(notes => {
      res.json(notes);
    });
});

router.post('/api/notes', (req, res) => {
  if (!req.body || !req.body.title) {
    res.send(400);
    res.end();
    return;
  }

  var newNote = new Note(req.body);
  newNote.save()
    .then(saved => {
      res.json(saved);
    });
});

router.get('/api/notes/:id', (req, res) => {
  return Note.findById(req.params.id)
  .then(note => {
    res.json(note);
  });
});

router.delete('/api/notes/:id', (req, res) => {
  res.json({
  message: `ID ${req.params.id} was deleted`,
  });
});

router.get('/api/person', (req, res) => {
  if (req.query.id) {
    return Note.findById(req.query.id)
      .then(note => {
        res.json(notes);
      });
  }
  Note.fetchAll()
    .then(notes => {
      res.json(person);
    });
});

router.get('/api/person/:id', (req, res) => {
  return Note.findById(req.params.id)
  .then(note => {
    res.json(person);
  });
});

router.delete('/api/person/:id', (req, res) => {
  res.json({
    message: `Person ${req.params.id} was deleted. Sorry about the inconvenience`,
  });
});