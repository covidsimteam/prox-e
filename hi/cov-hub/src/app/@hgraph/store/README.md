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

## Transaction

Any exchange with any third party remote service is defined as a transaction. `SideEffect<T>` free transactions can be rolled back whereas `Pure<T>` transactions can always be rolled back. All transactions can be monitored by the `transaction.service` if the transaction service and/or annotation is used for a given transaction for a DB or event queue.

_________________________________________________

## Others

### Bucket

Service for couch buckets.

### Catchup

Service for catching up with remote couch buckets.

### CovHub

Models for all the services in this folder.

### Crypto

Context dependent required encryption provider.

### Overlay

Any additional context that can overlaid onto an exist component or known state can be accessed from this service.

### Sim

All controls and setups for a simulation can be accessed from this service.

### Test

All controls and setups for a test simulation can be accessed from this service.

### Work

All actions done by the CovHub services itself is defined as work whereas all actions from the users are defined as work inputs. All works and work inputs for those works are available for read via `work.service`.
