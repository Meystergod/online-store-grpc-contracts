.PHONY: proto
proto: clean format gen lint mod

.PHONY: gen
gen:
	$(GOPATH)/bin/buf generate

.PHONY: lint
lint:
	$(GOPATH)/bin/buf lint

.PHONY: format
format:
	$(GOPATH)/bin/buf format

.PHONY: clean
clean:
	@rm -rf ./gen || true

.PHONY: mod
mod:
	cd gen/go/common && go mod init github.com/Meystergod/online-store-grpc-contracts/gen/go/common && go mod tidy && \
	cd ../online_store && go mod init github.com/Meystergod/online-store-grpc-contracts/gen/go/online_store && go mod tidy && \
	cd ../../..

.PHONY: git
git:
	git add . && git commit -m "updated" && git push && git commit origin --tags
