var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home_page);

/* Employee routing */
router.get('/employer/list', indexController.employer_list);
router.get('/employer/:id', indexController.employer_detail);

/*candidate routing. */
router.get('/candidate/list', indexController.candidate_list);
router.get('/candidate/:id', indexController.candidate_detail);

/*job routing. */
router.get('/jobs/list', indexController.jobs_list);
router.get('/job/:id', indexController.job_detail);

router.get('/about-us',indexController.about);
router.get('/contact-us',indexController.contact);
router.get('/pricing',indexController.pricing);
router.get('/faq',indexController.faq);
router.get('/how-it-works',indexController.how_it_works);
router.get('/terms-and-conditions',indexController.terms_and_conditions);

router.get('/logout',indexController.logout);


module.exports = router;
