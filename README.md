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
   If You do not have a started server you need to generate `profile.json` file from `schema` at `Profile` component as shown

```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Person Name"
    },
    "contacts": {
      "type": "array",
      "description": "An array of contact information",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "description": "Posible typies: emial, phone, location, linkedin"
          },
          "class": {
            "type": "string",
            "description": "For selected typies: contact-email, contact-phone, contact-location, contact-linkedin"
          },
          "icon": {
            "type": "string",
            "description": "For selected typies: pi pi-envelope mr-2, pi pi-mobile mr-2, pi pi-home mr-2, pi pi-linkedin mr-2"
          }
        },
        "required": [ "name", "type", "class", "icon" ]
      }
    },
    "skills": {
      "type": "array",
      "description": "An array of skills",
      "items": {
        "$ref": "#/definitions/item"
      }
    },
    "educations": {
      "type": "array",
      "description": "An array of educations",
      "items": {
        "$ref": "#/definitions/item"
      }
    },
    "certificates": {
      "type": "array",
      "description": "An array of certificates",
      "items": {
        "$ref": "#/definitions/item"
      }
    },
    "languages": {
      "type": "array",
      "description": "An array of languages",
      "items": {
        "$ref": "#/definitions/item"
      }
    },
    "hobies": {
      "type": "array",
      "description": "An array of hobies",
      "items": {
        "$ref": "#/definitions/item"
      }
    },
    "projects": {
      "$ref": "#/definitions/project"
    },
    "experience": {
      "$ref": "#/definitions/project"
    },
    "summary": {
      "$ref": "#/definitions/project"
    }
  },
  "required": [ "name", "contacts" ],
  "definitions": {
    "item": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "link": {
          "type": "string",
          "format": "uri"
        },
        "type": { "type": "string" },
        "level": {
          "type": "integer",
          "minimum": 1,
          "maximum": 5
        },
        "orderIdx": { "type": "integer" }
      },
      "required": [ "name", "level", "orderIdx" ]
    },
    "project": {
      "type": "array",
      "description": "An array of projects or experiences or summary",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "link": {
            "type": "string",
            "format": "uri"
          },
          "content": { "type": "string" },
          "date": { "type": "string" },
          "orderIdx": { "type": "integer" }
        },
        "required": [ "name", "content", "orderIdx" ]
      }
    }
  }
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
