# Angular Enterprise

- Functional programming
- Monorepo
- Schematics
- TSLint as a working tool and a watchdog. Extendable.
- Container organization
- Libraries
  - Versioning
- Redux
  - We want to program without side-effects. "Stolen" from functional programming. 
  - Ofcourse we cannot do no actions without side-effects. Sounds a little bit contradictory with the previous rule but what I mean that the actual application does not have any knowledge of these side effects. 
    - database
    - navigate (although we have a router effects library that takes care of that).
    - files
    - logging
- Building with Bazel
- Datadog 
- Rollbar
