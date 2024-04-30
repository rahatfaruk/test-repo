### Vercel:
Steps (Local root folder): 
  - create ".env" file and define environment variable 
  - modify index.js (backend) to host into vercel (cors links, comment: connect() & ping())
  - init vercel: `npx vercel`
  - create vercel config file (vercel.json) [config guide](https://vercel.com/guides/using-express-with-vercel) 
    ```js
      {
        "version": 2,
        "builds": [
          {
            "src": "./index.js",
            "use": "@vercel/node"
          }
        ],
        "rewrites": [
          {
            "source": "/(.*)",
            "destination": "/"
          }
        ]
      }
    ```
  - deploy local folder into vercel:  npx vercel --prod

#### vercel.com setup (after deploying local folder):
  - set environment variable into vercel.com (settings > environment variables)
  - disable vercel authentication on vercel.com (settings > Deployment Protection)

## Firebase deploy frontend (Local root folder): 
  - see all firebase projects list with ids (copy your desired id): npx firebase projects:list
  - init firebase: npx firebase init --project {project-id} 
  - get production (dist) folder: npm run build
  - host your site: firebase deploy --only hosting
  
## What to submit (edit and paste these 4 lines) :
B9 A10 Type-02 Requirements

frontend repository: 

backend repository: 

live site link: 