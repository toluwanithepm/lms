// routes/lessons.js
const express = require('express');
const router = express.Router();

// GET /lessons
router.get('/', (req, res) => {
  // Fetch and render lessons from the database
  const lessons = [
    { id: 1, title: 'Lesson 1', videoUrl: 'lesson1.mp4' },
    { id: 2, title: 'Lesson 2', videoUrl: 'lesson2.mp4' },
    { id: 3, title: 'Lesson 3', videoUrl: 'lesson3.mp4' }
    // Add more lessons as needed
  ];
  res.render('lessons/index', { lessons });
});

// GET /lessons/:id
router.get('/:id', (req, res) => {
  const lessonId = req.params.id;
  // Fetch the lesson from the database based on the lessonId
  const lesson = { id: lessonId, title: 'Lesson', videoUrl: 'lesson.mp4' };
  res.render('lessons/show', { lesson });
});

module.exports = router;
