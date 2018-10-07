# angular

## to research

- decorators
- socket.io and angular
- What is a meta reducer?
- Tryout the Angular Change Detection mechanism.



## motto

"Simple is best" if it is to complicated it needs to be rewritten, redesigned, reimplemented. 

"Use a mono-repo"

## Variables used in the template

```html5
<div class="field">
	<input name="title" #newTitle>
</div>
<div class="field">
	<input name="link" #newLink>
</div>
<button (click)="addArticle(newTitle, newLink)">Save</button>
```

In the input tags we used the # to assign those tags to a local variable. By adding the #newTitle and #newLink to the appropriate input elements we can pass them as variables into the addArticle() function.




## Routing guidelines

By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app folder.

```
ng g module app-routing --flat --module=app
```

### Guards or Navigation guards

We want to prevent users from accessing areas that they're not allowed to access, or, we might want to ask them for confirmation when leaving a certain area.


## Organize the project

Smart components: application-level components, container components, controller components.
Presentation components: pure components or dumb components.
Organization and readability are alone reasons to create a component even if it's only used in one place.

### Structure of view layer in store design

#### creation of the view model 

- each component that needs to produce a View Model of the data will subscribe to get new versions of the in-memory data.
- each component, will upon reception of the model data produce its own view model, last second at the level of the component itself. 
- this will ensure that all view models are always in sync with the centralized data model.
- The transformation from model to view model is done last second on the view root itself, and not on the server. 
- The transformation from view to view model is done via a function called a selector - the input of a selector in the model, and the output is the view model.

#### modifying the data

- the data can only be modified inside the centralized service by the Store itself.
- if a component wants to trigger modifications of the data, it sends a message to the centralized service, under the form of a command payload which is known as an Action object.
- The emitter of the action does not know which parts of the application will be affected by the action, there is no tight coupling  between the multiple View components involved.
- The action contains all the information necessary to trigger a sequence of operations that will result in modification of the Model data.
- A new version of the application Model state is produced by taking the previous state and the action and applying it a pure function called a Reducer.
- The Reducer function can be split into multiple smaller functions, each one modifying a part of the state.
- When the new state model is available, it gets broadcasted to all interested components, which will then transform it into their view model.
- The new state model is frozen before getting broadcasted so that the subscribers cannot modify it.

#### Whats inside the store

Contains model data, UI specific global state (current selected Id, current user data).

Something like ngrx/store for state management can really become powerful, because most components can adopt on OnPush strategy, and ngrx will dispatch new references when data changes. 

Store freeze is a meta reducer that prevents state from being mutated.

A Redux store is a combination of the Command and the Observable patterns. 
The store is an application wide singleton service, a big global application-level state.

An observable data service is an Angular injectable service that can be used to provide data to multiple parts of the application. The service that can be named a store can be injected in any place where data is needed.
The constructor gets injected with the HTTP backend service, and this is the only place in the application where the service is used. The remaih


When to use:

- When you have a piece of data that needs to be used in multiple places in your app. Passing it via props makes your components break the SRP.
- When there are multiple independent actors, that may mutate the same data.


## RxJS

You can think of a **Subject** as a "read/write" stream.
One consequence of streams is that, because messages are published immediately, a new subscriber risks missing the latest value of the stream. **BehaviourSubject** compensates for this.
BehaviourSubject has a special property in that it stores the last value.

**publishReplay** let us share a subscription between multiple subscribers and replay n number of values to future subscribers. 

Because **EventEmitters** are **Subjects** we can use all Rx goodness. For example we want to only emit when we have value.

``` @Output() add = new EventEmitters().filter(v => !!v);


## Libraries in Angular6

Always use a prefix when generating a library.

``` ng generate library example-ng6-lib --prefix=enl

Always use the --prod flag when building your library.

``` ng build --prod example-ng6-lib

The rule of visibility of components in libraries is as follow.

- Using export makes the element visible.
- Adding it to the entry file makes the class visible.

[Reference](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5)
[Angular package format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview)

Currently we need to build manually. However in the future the Angular CLI team is planning to add internal dependency support.

``` ng build --prod my-test-lib

Add a component to a library is done as follow

``` ng g component foo --project=my-test-lib

Library changes are not picked up by ng serve. Best thing to do is use nodemon to detect and built the changes. You can either set a separate process that builts the changed library and then the project. 

You can set everything in the config of nodemon. 

[Nodemon documentation](https://github.com/remy/nodemon#nodemon)


## Testing

For install Jest for Angular we can use the following package:

``` npm i --save-dev jest-preset-angular

## Visual Studio Code

How to debug:
- ng serve
- Go the debugger tab.
- Select config and choose chrome.
- Select "Launch chrome against localhost". Change the url to http://localhost:4200
- Select "Attach to Chrome"
- You first start "Launch chrome..." and then "Attach to Chrome"
- You can set now the breakpoints and do your debugging. Sometimes you simple need to refresh your browser if it does not break.


## Build scripting

[Reference](https://www.keithcirkel.co.uk/why-we-should-stop-using-grunt/)
[Reference2](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

[TODO] Bazel integration in our application.
[TODO] Example app how to work with a monorepo and different libraries in different Angular projects. Those different Angular projects need to be in git submodules. 
[TODO] Effects -> find out what do with ExhaustMap.
[TODO] Remote looking at Store actions.
