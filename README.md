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