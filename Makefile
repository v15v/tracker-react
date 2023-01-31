.PHONY: test-no-watch
test-no-watch:
	npm run test -- --watchAll=false

.PHONY: build
build: test-no-watch
	docker build -t tracker-app\:dev -f Dockerfile .

.PHONY: test
test:
	npm run test

.PHONY: dev
dev:
	npm run start

.DEFAULT_GOAL := dev