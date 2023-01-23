const asyncHandler = require('express-async-handler')

// Get goals
// GET /api/goals
// access Private

const getGoals = asyncHandler(async (req, res) => {
   
    res.status(200).json({message: 'Get Goals'})
})

// Set goal
// POST /api/goals
// access Private

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter text')
    }
    
    res.status(200).json({message: 'Set Goal'})
})

// Update goal
// GET /api/goals/:id
// access Private

const putGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// Delete goal
// GET /api/goals/:id
// access Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})



module.exports = {
    getGoals, 
    setGoal,
    putGoal,
    deleteGoal,
}