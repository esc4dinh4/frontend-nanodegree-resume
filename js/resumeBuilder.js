var bio = {
    "name": "Carlos Silva",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my Resume",
    "contacts": {
        "mobile": "774-368-0053",
        "email": "esc4dinh4@hotmail.com",
        "github": "esc4dinh4",
        "twitter": "@esc4dinh4",
        "location": "Massachusetts, MA"
    },
    "skills": [
        "HTML ", " CSS", " JavaScript", " Jquery", "Phyton"
    ],
    "bioPic": "images/myprofilepic.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $('#header').prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $('#header').prepend(formattedName);



        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $('#topContacts').append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $('#topContacts').append(formattedTwitter);

        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $('#topContacts').append(formattedGitHub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $('#topContacts').append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBioPic);
    }
};
bio.display();

/* jshint forin: false */
/* globals $, HTMLschoolStart */

var work = {
    "jobs": [{
            "employer": "Argus Auto Repair",
            "title": "Auto Technician",
            "location": "Hyannis, MA",
            "dates": "2009-present",
            "description": "Lorem ipsum dolor sit aasdasd meas"
        },
        // "display":()
    ]
};

function displaywork() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}
displaywork();



$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


var projects = {
    "projects": [{
        "title": "Portofolio Sample",
        "dates": "2015",
        "description": "eget, pharetra efficitur mauris. Maecenas eget nisi a orci sollicitudin",
        "images": ["images/web4.jpg", "images/web2.jpg", "images/web3.jpg"],
        "url": "http://www.google.com"
    }]
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",
            projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",
            projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",
            projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);


        var formattedImage0 = HTMLprojectImage.replace("%data%",
            projects.projects[project].images[0]);
        $(".project-entry:last").append(formattedImage0);

        var formattedImage1 = HTMLprojectImage.replace("%data%",
            projects.projects[project].images[1]);
        $(".project-entry:last").append(formattedImage1);

        var formattedImage2 = HTMLprojectImage.replace("%data%",
            projects.projects[project].images[2]);
        $(".project-entry:last").append(formattedImage2);

    }
};

projects.display();



var education = {
    "schools": [{
        "name": "Cape Cod Community College",
        "location": "Hyannis, MA",
        "degree": "Associates of Business Management",
        "major": "Information Systems",
        "dates": "2014"

    }],
    "onlineCourses": [{
        "title": "Front End Web Development NanoDegree",
        "school": "Udacity",
        "dates": "2015-2016",
        "url": "http://www.udacity.com"
    }]
};

function displayEducation() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }
}
displayEducation();



function displayOnlineEducation() {
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedUrl);
    }

}

displayOnlineEducation();



if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
}


function displayFooterContacts() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#footerContacts').append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $('#footerContacts').append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $('#footerContacts').append(formattedTwitter);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $('#footerContacts').append(formattedGitHub);

}

displayFooterContacts();

function inName(name) {
    name = bio.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

//adding the Google map
$("#mapDiv").append(googleMap);
