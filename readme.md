# Class Hub

serves learning materials for each course.

REST API

## Glossary
- typeScript: a superset of JavaScript that adds static typing and advanced language features.
- express: a we application framework for Node.js.
- ts-node: a typescript execution environment for Node.js.

## API Endpoints
### Authentication and Authorization
- Sign up a user
  - Endpoint: `POST /v1/signup` 
  - Payload:
    ```json
    {
      "name": "xxx",
      "email": "xxx",
      "password": "xxx",
      "passwordConfirm": "xxx"
    }
    ```

- Sign in a user
  - Endpoint: `POST /v1/signin`
  - Payload:
    ```json
    {
      "email": "xxx",
      "password": "xxx"
    }
    ```

### Courses Information
- Get all courses
  - Endpoint: `GET /v1/courses`
- Get a course details
  - Endpoint: `GET /v1/courses/:id`
- Get a chapter details
  - Endpoint: `GET /v1/courses/:id/chapters/:id`
- Get a unit details
  - Endpoint: `GET /v1/courses/:id/chapters/:id/units/:id`

### Full-Text Searching
- Search content for a specific course
  - Endpoint: `GET /v1/courses/:id/search`
  - Params: `keyword=xxx`

### Learning Progress
- Get a user's learning progress for a specific course 
  - Endpoint: `GET /v1/courses/:id/progress`
- Mark a unit as complete
  - Endpoint: `PATCH /v1/courses/:id/chapters/:id/units/:id`
  - Payload:
    ```json
    {
      "complete": true,
      "userId": 1
    }
    ```
