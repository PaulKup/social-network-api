const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

router
  .route('/:userId')
  .post(createThought);

router
  .route('/:thoughtId/:userId')
  .delete(deleteThought);
  

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)

router
  .route('/:thoughtId/reactions')
    .post(addReaction);
  
router.route('/:thoughtId/:reactionId/reactions').delete(deleteReaction);

module.exports = router;