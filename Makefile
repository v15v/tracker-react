#.PHONY: build
#build:
#	go build -v ./cmd/directusfront
#
#.PHONY: builddebug
#build-debug:
#	go build -v -gcflags="all=-N -l" ./cmd/directusfront
#
#.PHONY: test
#test:
#	go test -v -race -timeout 30s ./...
#
#.PHONY: builddocker
#builddocker:
#	CGO_ENABLED=0 GOOS=linux go build -v -a -installsuffix cgo -o directusfront ./cmd/directusfront
#
#.PHONY: webpackbuild
#webpackbuild:
#	npm run build
#
#.PHONY: builddockerdev
#builddockerdev: webpackbuild
#	docker build -t directusfront\:dev -f Dockerfile-dev .
#
#.PHONY: startdockerdev
#startdockerdev: builddockerdev
#	docker run --rm -it -p 8888\:8090 --name=directusfront directusfront\:dev

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