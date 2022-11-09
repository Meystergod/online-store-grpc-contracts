.PHONY: proto
proto: clean format gen lint

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
