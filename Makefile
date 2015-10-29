SHELL := /bin/bash

test:
	@babel -d lib src
	@nodeunit

.PHONY: test
