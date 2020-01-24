1. What problem does the context API help solve?

The context API helps address the problem of "prop drilling" - where you have to pass props through many layers of nested components to be able to use them further down a component tree. It allows us to import state directly into componenets where it's needed rather than passing it through layers of parent compoenents.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux, the "store" is the central state object that contains all the application's state. An "action" can be thought of as a message instructing Redux on how to update the state. The action has a "type", and often contains a "payload". The "reducer" is a function that takes in the state (from the store) and an action, and depending on the action's type, will modify the state accordingly, by convention using a switch statement.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is typically used in cases where the same state information might be needed throughout an application/within many different components. Some examples would be whether a user is logged in or a user's profile data, which might be rendered in different components across the application. By contrast, state that is isolated within a component is typically used for one-off situations where that state is only relevant within the scope of the component and doesn't need to be reused. The most common example of this is probably state related to input forms.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware for redux that allows redux to work w/ asynchronous operations (vanilla redux is inherently synchronous). It allows us to use "thunks" (functions that return other functions) in our action creators, which looks something like this:

const updateUser = user => dispatch => {
    //                     ^ this second function is the "thunk"
}

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Redux. I like that it promotes a functional programming approach which forces us to be careful about mutability of state. I think the redux flow is very logical and elegant. The only downside I can think of really is that it creates a fair bit of boilerplate overhead, but I think the tradeoff is well worth it, especially for more complex applications.