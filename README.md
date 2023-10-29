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
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "certificates": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Certificate"
        }
      },
      "contacts": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Contact"
        }
      },
      "educations": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Education"
        }
      },
      "experience": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Experience"
        }
      },
      "hobies": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Hobie"
        }
      },
      "languages": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Language"
        }
      },
      "name": {
        "type": "string"
      },
      "projects": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Project"
        }
      },
      "skills": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Skill"
        }
      },
      "summary": {
        "$ref": "#/definitions/Experience"
      }
    },
    "definitions": {
      "Certificate": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "level": {
            "type": "integer"
          },
          "orderIdx": {
            "type": "integer"
          }
        }
      },
      "Contact": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "class": {
            "type": "string"
          },
          "icon": {
            "type": "string"
          }
        }
      },
      "Education": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "level": {
            "type": "integer"
          },
          "orderIdx": {
            "type": "integer"
          }
        }
      },
      "Experience": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "date": {
            "type": "string"
          },
          "orderIdx": {
            "type": "integer"
          }
        }
      },
      "Hobie": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "level": {
            "type": "integer"
          },
          "orderIdx": {
            "type": "integer"
          }
        }
      },
      "Language": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "level": {
            "type": "integer"
          },
          "orderIdx": {
            "type": "integer"
          }
        }
      },
      "Project": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "date": {
            "type": "string"
          },
          "orderIdx": {
            "type": "integer"
          }
        }
      },
      "Skill": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "level": {
            "type": "integer"
          },
          "orderIdx": {
            "type": "integer"
          }
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
