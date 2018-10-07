# Redux

A **pure function** has the following requirements:
- It must not mutate the current state directly.
- It must not use any data outside of its arguments.
A pure function returns the same value, given the same set of arguments.


A **reducer** requires:
- An Action, which defines what to do.
- The state, which stores all of the data in our application.
- The Reducer, which takes the state and the action and returns a new state.
A reducer takes the old state and an action and returns a new state.

The store has the responsibility of running the reducer and then keeping the new state.
In Redux, we generally have 1 store and 1 top-level reducer per application.


