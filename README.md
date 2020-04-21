# docker-cypress-bdd-runner-test

Run Gherkin tests on a website (in a BDD approach) based on Cypress.

## Getting Started

To use this demo, it's a one step process. Just run the container and the tests in the directory cypress/ in this repository will be executed.

### Prerequisites

The prerequisites is that Docker is installed.

### Installing

Simply create a Docker container of the image ```cypress-bdd-runner``` :
```
    docker run -v $(PWD)/report:/report -v $(PWD)/test_app:/app \
	-e REPORT_FILE=result.xml \
	-e CYPRESS_videosFolder=/report \
	-e CYPRESS_screenshotsFolder=/report \
	devopstestlab/cypress-bdd-runner run_cypress
```

Then the output is in the directory report :
- the result report in XML format is report/result.xml,
- the MP4 videos (for the proof of the result test) are in report/socialNetworks/.

## Built With

* [Cypress](https://github.com/cypress-io/cypress) - Cypress

## Authors

* **Bruno Delb** - *Initial work* - [BrunoDelb](https://github.com/BrunoDelb)
