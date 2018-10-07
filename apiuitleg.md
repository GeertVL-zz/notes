# API documentatie

## todo en notities

- In de common van de supporting lib staan de dto's.
- Op confluence staat een verklarende woordenlijst.
- IIS en Console zijn hosting projecten. Om op te starten als developer gebruik je natuurlijk het console project.
- Person kan worden gelockt. Eens bekijken hoe ze dat doen.
- Repeatable read = wanneer je iets leest blijft die stabiel.
- Managers is de business laag
- dto is naar de frontend
- model is wat tussen de business laag naar de repository laag sturen.
- manager is verantwoordelijk voor bepaalde repositories. Andere managers mogen deze repos niet rechtstreeks aanspreken en moeten via de verantwoordelijke manager gaan.
  - Controle mechanisme inbouwen die zorgt dat een andere manager niet de repos van uw manager gebruikt.
- 


== AbbvNewPhoenixIdentityProvider 


Castle.Windsor --> kijk naar de github repo. en de unit testen bekijken.
nHibernate Linq -> verder uitzoeken. nhibernate reference manual. en de unit testen bekijken.
slow cheetah

asp.net web api poster --> volledige uitleg van de web api

Confluence security --> verder uitschrijven.


## IdentityServer4


**Identity Resources** are data like UserID, name or email address of a user. An identity resource has a unique name. These claims will then be included in the identity token for the user. The client will use the scope parameter to request access to an identity resource. 
You can define custom identity resources. Create a new IdentityResource class, give it a name and optionally a display name and description and define which user claims should be included in the identity token when its resource gets requested. 

To allow clients to request access tokens for APIs, you need to define API resources. 



## Castle Windsor


An **Ioc container** uses the principle to manage classes. The management consists of  creation, destruction, lifetime, configuration, and dependencies. The principle is a way to allow developers to extend the framework or create applications using it. 
This way classes do not need to obtain and configure the classes they depend on. This dramatically reduces coupling in a system and, as a consequence, simplifies reuse and testability.


**Service** is an abstract contract describing some cohesive unit of functionality.

```
public interface ICoffeeShop 
{
	Future<Coffee> GetCoffee(CoffeeRequest request); // Q : What is the Future<> type.
}
```

A **component** provides a service.

```
public class Starbucks: ICoffeeShop
{
	public Future<Coffee> GetCoffee(CoffeeRequest request)
	{
		// some implementation
	}
}
```

Your component declares what dependencies it requires usually via constructor arguments or settable properties.


**Lifestyle** controls in what scope instances are reused, and when to release them (that is do all the necessary clean up steps and then let it go for the GC to destroy).

Standard lifestyles:
- **Singleton**: only produces a single instance that is bound to the container. The sole instance will be released when the container it's registered with is disposed. Default lifestyle. Singleton components are thread safe. 
- **Transient** (tr.: vergankelijk): Transient components are not bound to any tangible (tr.: tastbaar) scope. Each time an instance of a transient component is needed, container will produce a new one, never reusing them. Transient instances are released when the object using them is released. Remember to **Release** what you explicitly **Resolve**. 
- **Scoped**: Whenever an instance is needed inside the scope `(using (Container.BeginScope()) {}` the same will be used) and lifetime (end of using block releases the instance).
- **Bound**: Binding is done on implementation type. The binding doesn't look at services exposed by the container, but the actual implementation type of the component, and checks if it is assignable to the specified type. When choosing bound lifestyle it assumes that repository will always be resolved as a dependency of some view model. 
- **PerThread**: Instance of a component will be shared in scope of a single thread of execution. It will be created the first time the component is requested on given thread. Instance will be released when the container they're registered with is disposed. Use only when you are in control of the thread.
- **Pooled**: A pool of instances will be created and then one of them will be returned when requested. 


**Lifestyle manager** has a relatively simple role. If it has a component instance it can reuse, it gets it and returns the instance immediately back to the handler. If not it asks it component activator to create one of it. 

**Component activator** is responsible for creating the instance of the component. Activators have various ways of achieving that. 

Windsor uses **dependency resolver** to resolve your component's dependencies. 
Order of resolving is like this:
- **Creation context** tries to resolve the dependency first by name, then by type using dependencies provided inline.
- When no inline argument can satisfy the dependency the resolver asks **handler** if it can satisfy it. Handler tries to resolve the dependency first by name, then by type.
- If not resolved the resolver will ask each of its **sub resolvers**.
- When none of the above is able to resolve the dependency container will try to do it himseld. 

Bootstrapper is the place where you create and configure your container.
