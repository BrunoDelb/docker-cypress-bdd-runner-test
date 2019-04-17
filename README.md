# docker-cypress-bdd-runner-test

docker run -v $(PWD)/report:/report -v $(PWD)/test_app:/app \
	-e REPORT_FILE=result.xml \
	-e CYPRESS_videosFolder=/report \
	-e CYPRESS_screenshotsFolder=/report \
	cypress-bdd-runner run_cypress
