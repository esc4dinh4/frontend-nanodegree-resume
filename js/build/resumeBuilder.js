function displaywork(){for(job in work.jobs){$("#workExperience").append(HTMLworkStart);var a=HTMLworkEmployer.replace("%data%",work.jobs[job].employer),b=HTMLworkTitle.replace("%data%",work.jobs[job].title),c=HTMLworkLocation.replace("%data%",work.jobs[job].location);$(".work-entry:last").append(c);var d=a+b;$(".work-entry:last").append(d);var e=HTMLworkDates.replace("%data%",work.jobs[job].dates);$(".work-entry:last").append(e);var f=HTMLworkDescription.replace("%data%",work.jobs[job].description);$(".work-entry:last").append(f)}}function displayEducation(){for(school in education.schools){$("#education").append(HTMLschoolStart);var a=HTMLschoolName.replace("%data%",education.schools[school].name),b=HTMLschoolDegree.replace("%data%",education.schools[school].degree);$(".education-entry:last").append(a+b);var c=HTMLschoolLocation.replace("%data%",education.schools[school].location);$(".education-entry:last").append(c);var d=HTMLschoolDates.replace("%data%",education.schools[school].dates);$(".education-entry:last").append(d);var e=HTMLschoolMajor.replace("%data%",education.schools[school].major);$(".education-entry:last").append(e)}}function displayOnlineEducation(){$("#education").append(HTMLonlineClasses);for(course in education.onlineCourses){$("#education").append(HTMLschoolStart);var a=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title),b=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);$(".education-entry:last").append(a+b);var c=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);$(".education-entry:last").append(c);var d=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);$(".education-entry:last").append(d)}}function displayFooterContacts(){var a=HTMLmobile.replace("%data%",bio.contacts.mobile);$("#footerContacts").append(a);var b=HTMLemail.replace("%data%",bio.contacts.email);$("#footerContacts").append(b);var c=HTMLtwitter.replace("%data%",bio.contacts.twitter);$("#footerContacts").append(c);var d=HTMLgithub.replace("%data%",bio.contacts.github);$("#footerContacts").append(d)}function inName(a){return a=bio.name.trim().split(" "),console.log(a),a[1]=a[1].toUpperCase(),a[0]=a[0].slice(0,1).toUpperCase()+a[0].slice(1).toLowerCase(),a[0]+" "+a[1]}var bio={name:"Carlos Silva",role:"Web Developer",welcomeMessage:"Welcome to my Resume",contacts:{mobile:"774-368-0053",email:"esc4dinh4@hotmail.com",github:"esc4dinh4",twitter:"@esc4dinh4",location:"Massachusetts, MA"},skills:["HTML "," CSS"," JavaScript"," Jquery","Phyton"],bioPic:"images/myprofilepic.jpg",display:function(){var a=HTMLheaderRole.replace("%data%",bio.role);$("#header").prepend(a);var b=HTMLheaderName.replace("%data%",bio.name);$("#header").prepend(b);var c=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);$("#header").append(c);var d=HTMLmobile.replace("%data%",bio.contacts.mobile);$("#topContacts").append(d);var e=HTMLemail.replace("%data%",bio.contacts.email);$("#topContacts").append(e);var f=HTMLtwitter.replace("%data%",bio.contacts.twitter);$("#topContacts").append(f);var g=HTMLgithub.replace("%data%",bio.contacts.github);$("#topContacts").append(g);var h=HTMLlocation.replace("%data%",bio.contacts.location);$("#topContacts").append(h);var i=HTMLbioPic.replace("%data%",bio.bioPic);$("#header").append(i)}};bio.display();var work={jobs:[{employer:"Argus Auto Repair",title:"Auto Technician",location:"Hyannis, MA",dates:"2009-present",description:"Lorem ipsum dolor sit aasdasd meas"}]};displaywork(),$(document).click(function(a){var b=a.pageX,c=a.pageY;logClicks(b,c)});var projects={projects:[{title:"Portofolio Sample",dates:"2015",description:"eget, pharetra efficitur mauris. Maecenas eget nisi a orci sollicitudin",images:["images/web4.jpg","images/web2.jpg","images/web3.jpg"],url:"http://www.google.com"}]};projects.display=function(){for(project in projects.projects){$("#projects").append(HTMLprojectStart);var a=HTMLprojectTitle.replace("%data%",projects.projects[project].title);$(".project-entry:last").append(a);var b=HTMLprojectDates.replace("%data%",projects.projects[project].dates);$(".project-entry:last").append(b);var c=HTMLprojectDescription.replace("%data%",projects.projects[project].description);$(".project-entry:last").append(c);var d=HTMLprojectImage.replace("%data%",projects.projects[project].images[0]);$(".project-entry:last").append(d);var d=HTMLprojectImage.replace("%data%",projects.projects[project].images[1]);$(".project-entry:last").append(d);var d=HTMLprojectImage.replace("%data%",projects.projects[project].images[2]);$(".project-entry:last").append(d)}},projects.display();var education={schools:[{name:"Cape Cod Community College",location:"Hyannis, MA",degree:"Associates of Business Management",major:"Information Systems",dates:"2014"}],onlineCourses:[{title:"Front End Web Development NanoDegree",school:"Udacity",dates:"2015-2016",url:"http://www.udacity.com"}]};if(displayEducation(),displayOnlineEducation(),bio.skills.length>0){$("#header").append(HTMLskillsStart);var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);$("#skills").append(formattedSkill),formattedSkill=HTMLskills.replace("%data%",bio.skills[1]),$("#skills").append(formattedSkill),formattedSkill=HTMLskills.replace("%data%",bio.skills[2]),$("#skills").append(formattedSkill),formattedSkill=HTMLskills.replace("%data%",bio.skills[3]),$("#skills").append(formattedSkill),formattedSkill=HTMLskills.replace("%data%",bio.skills[4]),$("#skills").append(formattedSkill)}displayFooterContacts(),$("#main").append(internationalizeButton),$("#mapDiv").append(googleMap);