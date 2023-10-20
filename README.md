# React-Cv-Template

This repository contains a CV (Curriculum Vitae) template project built using React for the front-end and some background server (in our case we used asp.net) for the server-side.
The project is designed to show people own CVs. Whether you're a job seeker, a student, or a professional, this CV template can be a useful tool to showcase your skills and experiences.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Template:** choose a special designe for CV template.
- **PDF Save:** Save your CV to a PDF format for easy sharing and printing.
- **Responsive Design:** The application is responsive and works well on different devices (i think).

## Requirements

To run this project, you will need the following software:

- Node.js & npm (Node Package Manager) or yarn (Yet Another Resource Negotiator) for the React front-end.
- have started some server (in our case we use asp.net) for the server-side or there is an option.

## Installation

1. **From the Repository**

   download zip file or clone it

2. **Server start back-end**

   have needed endpoints for cv and image

## Usage

1. **The Front-End**

   After starting, application will run locally at [http://localhost:3000](http://localhost:3000).

2. **Start the Server**
   If You do not have a started server you need to import the `profile.json` file at `Profile` component as shown all objects are equel like experience.

```
{
    "name":"Person",
    "contracts":[{}],
    "skills":[{}],
    "educations":[{}],
    "certificates":[{}],
    "languages":[{}],
    "hobies":[{}],
    "projects":[{}],
    "experience":[{
        "name": "",
        "link": "",
        "content": "",
        "date": "",
        "orderIdx": 1
    }]
}
```

```bash
2.1) import profile from "../../common/profile.json"
...
2.2) useEffect(() => {
  setProfile(JSON.parse(profile));
  setImage('hasStoredImage')
  setLoading(false);
}, []);
...
2.3) and for profile image add 'your' own at folder
/public/images/your-profile-cv-image.jpg

...
2.4) change also:
...
    <Image
        src={
          image == ""
            ? "/images/avatar.png"
            : "/public/images/your-profile-cv-image.jpg"
        }
        alt="profile-image"
      />
```

3. **Access the Application**

   Open your web browser and go to
    [http://localhost:3000/profile/cv-template/{cv-id}](http://localhost:3000/profile/cv-template/cv-id) to access the CV template application.

4. **Deployment to Git Pages**

    I use this tutorial:
     [GitHub](https://github.com/gitname/react-gh-pages)

     also shown
     [From Create react app](https://create-react-app.dev/docs/deployment/#github-pages)

    
    for routing:
    replace `BrowserRouter` with `HashRouter`

5. License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

###### Happy Cvs
---
