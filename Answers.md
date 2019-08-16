1. What problem does the context API help solve?

  - No longer have to pass props down from component to component.
  - Instead, you can store data on a context object, and retrieve the data in the necessary components from the context object...no need to pass props through multiple components (specifically, you get to avoid the components that never use the props). YAY


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  - Actions - messenger. They contain the information you want to add to state. 
    - Message gets sent when user clicks button, loads the app, or other user interactions
  - Reducers - listen for actions. When it hears an action has been sent to the queue, it processes that action and updates state.
  - Store - holds the Redux state.
    - Can be accessed and modified.
    - ***Middleman between actions and reducers.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  - Application state - global
  - Component state - local
  - Meaning, application state can be accessed anywhere in the app by any component, as long as that component hooks onto it (aka store in Redux)
  - Component state lives within the specific component only. It can only be updated within this component and passed down to children via props.
  - Choosing application versus component state.
    - Choose application state aka Redux / store when state needs to be shared between multiple components and the components do not belong to the same tree hierarchy
    - Also, choose application state when number of props that need to be passed through multiple components increases drastically


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  - Allows for asynchronous actions. A way of doing delayed execution/evaluation by creating an intermediary function.
  - Now, action creators can make asynchronous API calls. Redux-thunk intercepts an action creator, look at what is returned, if the return is an action, it is forwarded to the reducer. BUT, if it is a function, aka thunk, then the function is invoked, meaning the thunk has access to dispatch a function. This allows for async work. Aka API call.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

  - Redux. It has so many cool features to it, even though my understanding of redux can be improved. Redux can allow for asynchronous actions, meaning complex logic can be executed at a later time (asynchronously) while other actions are being completed. The ability to hook up an action to our app, via connect & mapStateToProps, in any component makes access to that function easier. Access to props state is nicer!
