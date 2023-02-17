# To-Do App

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

---

### Project Description

Frontend Web Application which consumes a backend API to create a simple yet powerful tasks management system. Built using React in combination with Chakra UI library component, handling user sessions with JWT.

On this application you can:

- Register by creating an account.
- Login using your credentials.
- Create tasks by adding their title.
- Mark your tasks as completed.
- Update the tasks that are not marked as completed yet.
- Delete the tasks that have been marked as completed.

---

### Installation

Verify if you have [Yarn](https://yarnpkg.com/getting-started/install) installed on your machine by running:

```
yarn --version
```

Once the repository is downloaded, place into the project folder and run the following command to install all the necessary dependencies:

```
yarn
```

Now, you will have to create an `.env` file at the root of the project, and inside create a `VITE_API_URL` variable and point it to the Backend port:

```
VITE_API_URL=http://localhost:5001
```

Finally, use the following command to run the project:

```
yarn dev
```

**In order for the application to work completely as intended, the backend server needs to be up and running. You can download the backend code from this [GitHub Repository](https://github.com/salvadorperezm/todo-api) and follow the installation instructions.**

---

### Screenshots

![Login page](https://drive.google.com/uc?id=1HBytkxUul7eCX5YCN8hoAUVXI1glA-hu)
![Maing page](https://drive.google.com/uc?id=1S97VhPDENwjpZkSe6mYkwPuaK1OMbKVQ)
![Deleting task](https://drive.google.com/uc?id=1O2zjbalQtCjxa6Se8xz8pYyhs_o7zzTX)
