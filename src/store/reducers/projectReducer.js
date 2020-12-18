const initState = {
  projects: [
    { id: 1, title: "find", content: "firebase" },
    { id: 2, title: "hello", content: "firestore" },
    { id: 3, title: "goodbye", content: "firebase-app" },
  ],
};

 const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
