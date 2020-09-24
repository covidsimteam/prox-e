# Observable Store Services

This repo uses Dan Wahlin's minimal in size, maximal in awesomeness `ObservableStore`. Here are some key services that this store exposes.

## Invariants

All settings and preferences, and configs, that must remain invariant for the given user session for all sessions, are available via push for all subscibers through the `invariants.service`.


## Ledger

All application history changes and application's contextual changes are available via push for all subscibers through the `ledger.service`.

## History

All application history changes and a log of all historically significant works are available via push for all subscibers through the `history.service`.


## Historical Work

A log of all historically significant works are available via push for all subscibers through the `history-work.service`. Historically significat works are defined as those marked as essential works in our specification.


## Herder

A herder is akin to a `ZooKeeper` because it redirects streams to different relevant topic sources based on the topics being currently herded by the `herder.service`.


## Database

The history service uses the `database.service` to persist history updates. This history service's persist method is used by the Ledger to send the history persist command.
