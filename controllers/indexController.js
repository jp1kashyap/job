// Display home page.
exports.home_page = function(req, res){
	///development time user
	req.session.userid='5bd21fb53d8a321f5051fb26';
	req.session.username='jp1kashyap';
	req.session.role='candidate';
	req.session.email='jp1kashyap@gmail.com';
    res.render('index',{ 
        title:'SkillDosti Jobs',
        req:req               
    });
};

//display employee list page
exports.employer_list = function(req, res){
  res.render('employer_list',{
      'title':'Employers',
      req:req
             
    }); 
};

//display employee detail page
exports.employer_detail = function(req, res){
  res.render('employer_detail', {
      'title':'Employer',
      req:req
  });  
};

//display candidate list page
exports.candidate_list = function(req, res){
  res.render('candidate_list',{
      'title':'Candidates',
      req:req
  });  
};

//display candidate detail page
exports.candidate_detail = function(req, res){
  res.render('candidate_detail',{
      'title':'Candidate',
  req:req
  });  
};

//display jobs list page
exports.jobs_list = function(req, res){
  res.render('jobs_list',{
      'title':'Jobs',
      req:req
  });
};

//display job detail page
exports.job_detail = function(req, res){
  res.render('job_detail',{
      'title':'Job Detail',
      req:req
  });  
};

//Display about-us page
exports.about= function(req, res){
  res.render('about',{
      'title':'About Us',
      req:req
  });  
};
//Display contact-us page
exports.contact= function(req, res){
  res.render('contact',{
      'title':'Contact Us',
      req:req
  });  
};
//Display pricing page
exports.pricing= function(req, res){
  res.render('pricing',{
      'title':'Pricing',
      req:req
  });  
};
//Display faq page
exports.faq= function(req, res){
  res.render('faq',{
      'title':'FAQ',
      req:req
  });  
};
//Display How it works page
exports.how_it_works= function(req, res){
  res.render('how_it_works',{
      'title':'How it Works',
      req:req
  });  
};
//Display terms and conditions page
exports.terms_and_conditions= function(req, res){
  res.render('terms_and_conditions',{
      'title':'Terms & Conditions',
      req:req
  });  
};
//logout session
exports.logout=function(req,res){
    req.session.destroy();
    res.redirect('/');
};