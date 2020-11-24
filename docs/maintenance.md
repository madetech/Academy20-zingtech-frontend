# HMRC-HR: Maintenance considerations

As part of handover of HMRC-HR from Zing Tech to HMRC’s development team on 27 November 2020, we propose the following maintenance considerations. These are outlined by ISO 14764 software maintenance categories.

## Corrective

Reactive modification of a software product performed after delivery to correct discovered problems.

- _User feedback mechanism_. HMRC-HR does not include functionality for the user to easily give feedback on bugs or desired features. We recommend a link to a web form or chat bot is discreetly included on every page while HMRC-HR remains in Alpha and Beta phases.
- _Testing_. We recommend HMRC build on the test suites delivered in partnership with Zing Tech when developing new features and performing maintenance tasks to avoid as best as possible the introduction of new bugs.

## Adaptive

Modification of a software product performed after delivery to keep a software product usable in a changed or changing environment.

- _Containerise frontend_. Containerisation of the frontend using Docker may be considered to ensure compatibility with future production environments, though Node.js is likely to continue to receive widespread support in production in the medium term.
- _Frontend/backend interface_. The use of JSON via HTTP to communicate between frontend and backend is likely to retain widespread support. Possible future mediums in HMRC-HR’s backend framework, such as Websockets or GraphQL, are less mature and require a dependency on third-party, open source, packages.
- _Semantic versioning of dependencies_. Dependency management of HMRC-HR is described at the annex.

## Perfective

Modification of a software product after delivery to improve performance or maintainability

- _User feedback mechanism_. As for Corrective, we recommend an intuitive user feedback mechanism be built to allow users to express new requirements.

## Preventative

Modification of a software product after delivery to detect and correct latent faults in the software product before they become effective faults.

- _Architecture with scale_. Use of the three-tier architecture with the ASP.NET web API pattern is well-suited to the current requirement. Other architectures, however, may be better suited as requirements evolve. For example, a microservices or serverless architecture, whereby each business function of HMRC-HR is split into individual services with its own thin public interface, may better suit future features, such as interoperability with the forthcoming GOV.UK Accounts service. Such service-oriented architectures may also make collaboration between development teams easier as other business functions within HMRC and wider Government, such as employee appraisal, pensions, or payroll, are required to be integrated with HMRC-HR.

##
