# 2025Info_Department_Project01
## Phase 1 - Frontend Design
### Spec
A title says "todos", "TO-DOs", or anything telling people that this is a to-do list.
A text input. Having a placeholder is good for visual but not forced.
By pressing "Enter" (or clicking some button you designed), the text in the input box is submitted and an entry is created.
For each entry, there are two status: "Undone (default)" and "Done", there should be a button for each entry for switching the entry status.
There should be also a deletion button for each entry.
There are 3 buttons at the bottom to determine what entries to show:
"All": show all entries.
"Active": only show Undone entries.
"Completed": only show Done entries.
There's also a "left counter", counting the number of Undone entries.
Finally, there should be a "Clear completed" button which deletes all Done entries.
Proper .css should be designed so the web looks nice and clean.
### Architecture
├──index.html
├──scripts/
│  └──index.js
├──styles/
│  └──main.css
└──images/
   └──(images you used)
Submission
No mandatory submission for this phase.
You can do this project on your local folder without using git.

## Phase 2 - Backend Design
Spec
Design a backend server using Express.js so that your frontend webpage can retrieve and interact TO-DO list data with the server.
Your design should follow RESTful API format.
Connect your backend server with a MongoDB database so that the above-mentioned TO-DO list data is stored properly and won't loss when the server is down.
You can design your own schema, as long as it function properly.
Do some modification to the frontend codes in Phase 1, so that your webpage can connect to your backend server.
### Architecture:
├──frontend/
│  └──(files in Phase 1)
└──backend/
   ├──models/
   │  └──todo.js
   ├──routes/
   │  └──api.js
   ├──index.js
   ├──package.json
   ├──.env
   └──...
Submission
No mandatory submission for this phase.
You can do this project on your local folder without using git.
However, if you are using git, remember to set .gitignore file properly so that you won't upload .env file with your MONGO_URL.

## Phase 3 - React.js Framework
Spec
Redesign your frontend code using React.
To start with new sample project, use
npm create vite my-app
Or, you can just copy from projects you've seen so far.
### Architecture:
├──frontend/
│  ├── README.md
│  ├── eslint.config.js
│  ├── index.html
│  ├── node_modules
│  ├── package.json
│  ├── pnpm-lock.yaml
│  ├── public
│  ├── src
│  └── vite.config.js
└──backend/
   └──(files in Phase 2)