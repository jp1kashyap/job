var User=require('../models/users');
var Employee= require('../models/employee');
var Employer= require('../models/employer');
var ObjectId = require('mongodb').ObjectId
// Display home page.
exports.register = function(req, res){
    var newUser=User({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        specialism:req.body.specialism,
        phone:req.body.phone,
        role:req.body.role,
        register_date:new Date()
    });
    newUser.save(function(err){
       if(err){
          var validation={};
            if (err.name == 'ValidationError') {
                for (var field in err.errors) {
                    validation[field]=err.errors[field].message; 
                }
            }
           res.send(validation);
       } else{
           var newEntry={
              userid:newUser._id,
              email:newUser.email,
              phone:newUser.phone,
              specialism:newUser.specialism,
              last_update:newUser.register_date
           };
           if(newUser.role=='candidate'){
               var newEployee=Employee(newEntry);
               newEployee.save();
           }else{
               var newEmployer=Employer(newEntry);
               newEployer.save();
           }
           res.send(true);
       }
    });
   
};

//login user
exports.login=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    User.findOne({'username':username,'password':password},'username email phone role',function(err,user){
       if(err) throw err;
        if(user){
            req.session.username=user.username;
            req.session.userid=user._id;
            req.session.role=user.role;
            req.session.email=user.email;
            res.send(true);
        }else{
            res.send({password:'Username or password is not matched!!'});
        }
    });
};

//profile page
exports.profile=function(req,res){
  if(req.session.role=='candidate'){
      Employee.findOne({userid:req.session.userid}).exec(function(err,profile){
         if (err) console.log(err);
        if(profile){
              res.render('candidate/profile',{
                 title:'Candidate Profile',
                 req:req,
                 profile:profile
              });
          }else{
              req.flash('No user found Please login');
              redirect('/');
          } 
      });
  }else if(req.session.role=='employer'){
      var o_id = new ObjectId(req.session.userid);
      Employer.findOne({userid:req.session.userid}).exec(function(err,profile){
         if (err) console.log(err);
          if(profile){
              res.render('employer/profile',{
                 title:'Employer Profile',
                 req:req,
                 profile:profile
              });
          }else{
              req.flash('No user found Please login');
              redirect('/');
          }
      });
  }else{
      req.flash('msg','No user found in session!!');
      res.redirect('/');
  }
};

//candidate profile post method
exports.candidateProfile=function (req, res){
	if(req.session.userid){
		var doc={};
		doc.full_name=req.body.full_name;
		doc.job_title=req.body.job_title;
		doc.job_type=req.body.job_type;
		doc.current_min_salary=req.body.current_min_salary;
		doc.current_max_salary=req.body.current_max_salary;
		doc.experience=req.body.experience;
		doc.age=req.body.age;
		doc.expected_min_salary=req.body.expected_min_salary;
		doc.expected_max_salary=req.body.expected_max_salary;
		doc.education_level=req.body.education_level;
		doc.languages=req.body.languages;
		doc.categories=Array.isArray(req.body.tags)?req.body.tags.join():req.body.tags;
		doc.description=req.body.description;
		doc.facebook=req.body.facebook;
		doc.twitter=req.body.twitter;
		doc.google=req.body.google;
		doc.linkedin=req.body.linkedin;
		doc.phone=req.body.phone;
		doc.country=req.body.country;
		doc.city=req.body.city;
		doc.address=req.body.address;
		doc.latitude=req.body.latitude;
		doc.longitude=req.body.longitude;
		Employee.update({userid:req.session.userid},{$set:doc},function(err,updateddoc){
			if(updateddoc.nModified>0){
				req.flash('msg','Profile has been updated!!');
			}else{
				req.flash('msg','Profile already updated!!');
			}
			
			res.redirect('/users/profile');
		});
	} else{
		req.flash('msg','Your session has been expired!!');
		res.redirect('/');
	}
};
