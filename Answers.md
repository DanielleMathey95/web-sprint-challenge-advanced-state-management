1. What problem does the context API help solve?

Context API solves the problem of props drilling. It allows you to have state that can be seen globally to the entire application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Plain javascript objects that have a type field, telling what kind of action to perform and all other fields contain data.
Reducer: Pure functions that take the current state and action and return the new state.
Store: The store is the object that holds the state of the app. The store is known as a single source of truth because the only way you can change your data in the UI is to dispatch an action which will change state in the reducer, thus updating the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, component state is local. When state doesnt need to be shared use Component State. If you are making fetch requests you should use Application State.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that lets you call action createors and return a function instead of an action object. It's used for communicating asynchronously with an external API to retrieve or save data. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API is easier, but I prefer Redux, I think the curriculum went more in depth with it. I think the only thing that is more difficult about Redux is remembering all the things you need to install beforehand. 
