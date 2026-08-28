# blog_project_learn_frontend
HTML/CSS → JavaScript → React → API integration

src/
├── components/
│   ├── Navbar.jsx
│   ├── PostCard.jsx
│   └── PostList.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Posts.jsx
│   └── CreatePost.jsx
│
├── services/
│   └── api.js
│
├── context/
│   └── AuthContext.jsx
├── App.jsx
└── main.jsx



                     App
                      │
             isAuthenticated
                /          \
              true         false
               │             │
               ▼             ▼
          Blog UI           Login
               │
       ┌───────┼────────┐
       ▼       ▼        ▼
     GET      POST     DELETE
       │       │        │
       └───────┼────────┘
               ▼
          services/api.js
               │
        ┌──────┴───────┐
        ▼              ▼
     JWT/Auth       HTTP/JSON
        │              │
        └──────┬───────┘
               ▼
             FastAPI



                         Browser
                            │
                          URL
                            │
                            ▼
                     React Router
                            │
              ┌─────────────┴─────────────┐
              │                           │
           /login                    Protected
              │                       Routes
              ▼                           │
           Login                  ┌───────┼───────┐
                                  ▼       ▼       ▼
                                Posts   Create   Delete
                                  │       │       │
                                  └───────┼───────┘
                                          ▼
                                    services/api.js
                                          │
                                          ▼
                                       FastAPI



┌─────────────────┐
│ React / Vite    │
│ localhost:5173  │
└────────┬────────┘
         │
         │ HTTP
         ▼
┌─────────────────┐
│ FastAPI         │
│ localhost:8000  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ PostgreSQL      │
└─────────────────┘