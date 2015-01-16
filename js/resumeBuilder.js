//create bio object
var bio = {
    "name": "Wisnu Mulya",
    "role": "Frontend Developer",
    "contacts": {
        "mobile": "555-5555",
        "email": "wisnu@wisnumulya.com",
        "github": "WisnuMulya",
        "twitter": "@WisnuMulya",
        "blog": "blog.wisnumulya.com",
        "location": "Jakarta"
    }, //end of contacts
    "welcomeMessage":"Hi! Welcome to my resume page.",
    "skills": [
        "Web Development", "Startup Development", "Data Analysis", "Inbound Marketing", "Online Course Development"
    ], //end of skills
    "biopic": "http://www.gravatar.com/avatar/c076638bbeb514e5d4f6d2fa04bb8d23?s=200",
    "display": function() {
        //formatted bio properties
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

        //formatted bio contacts properties
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        //attach bio properties to header
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        //attach bio contacts to header
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedBlog);
        $("#topContacts").append(formattedLocation);

        //attach bio contacts to footerContacts
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedBlog);
        $("#footerContacts").append(formattedLocation);

        //append skills to header
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            //loop skills array
            for (skill in bio.skills) {
                //formatted skill
                var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);

                //append skill to skills section
                $("#skills").append(formattedSkill);
            }
        } //end of if
    } // end of display method
}; //end of bio

//create work object
var work = {
    "jobs": [
        {
            "employer": "Zenius Education",
            "title": "ZeniusEnglish Manager",
            "location": "Jakarta, Indonesia",
            "dates": "June 2012 - Current",
            "description": "Starting up a new business unit for the company and mainly responsible in managing daily operational routines, orienting on customer development or lean startup process, engaging on inbound marketing, doing front-end web development, and making materials for online teaching."
        }
    ] //end of jobs array
}; //end of work

//create projects object
var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "This is a dummy text just to fill in this fake sample project. This is a text that is not the usual lorem ipsum text which I really get bored into and therefore hang with me just a little while because this text needs to be long to fill in as a placeholder for this sample project description.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif",
                "images/197x148.gif",
                "images/197x148.gif"
            ] //end of images
        }
    ] //end of projects array
}; //end of projects

//create education object
var education = {
    "schools": [
        {
            "name": "Institut Teknologi Bandung",
            "location": "Bandung, Indonesia",
            "degree": "None",
            "majors": ["Electrical Engineering", "Computer Science"],
            "dates": "2010 - 2011"
        },
        {
            "name": "Universitas Indonesia",
            "location": "Jakarta, Indonesia",
            "degree": "None",
            "majors": ["Medicine"],
            "dates": "2011 - 2013"
        },
        {
            "name": "University of London",
            "location": "London, UK",
            "degree": "BSC",
            "majors": ["Mathematics", "Economics"],
            "dates": "2012 - Current"
        }
    ], //end of schools array
    "onlineCourses": [
        {
            "title": "How to Build a Startup: The Lean Launchpad",
            "school": "Udacity",
            "dates": "January, 2014",
            "url": "https://www.udacity.com/course/ep245"
        },
        {
            "title": "Leading Strategic Innovation in Organizations",
            "school": "Coursera",
            "dates": "April, 2013",
            "url": "https://www.coursera.org/course/innovation"
        },
        {
            "title": "Think Again: How to Reason and Argue",
            "school": "Coursera",
            "dates": "February, 2013",
            "url": "https://www.coursera.org/course/thinkagain"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "December, 2014",
            "url": "https://www.udacity.com/course/ud304"
        }
    ] //end of onlineCourses array
}; //end of education

//display methods executed
bio.display();
