const router = require('express').Router();
const { createLead, getAllLeads, getLeadById, updateLead, deleteLead, getStats } = require('../controller/leadController');

router.get('/stats', getStats);
router.route('/').get(getAllLeads).post(createLead);
router.route('/:id').get(getLeadById).put(updateLead).delete(deleteLead);

module.exports = router;