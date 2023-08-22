const express = require('express');
const { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } = require('../controllers/UserController')
const {authenticated} = require("../middlewares-1/authenticated.middleware")

const router = express.Router()

router.get('/:id',authenticated, getUser);
router.get('/', authenticated,getAllUsers)
router.put('/:id',authenticated, updateUser)
router.delete('/:id',authenticated, deleteUser)
router.put('/:id/follow',authenticated, followUser)
router.put('/:id/unfollow',authenticated, unfollowUser)

module.exports = router;