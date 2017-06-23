default: test

BIN=node_modules/.bin
MOCHA=$(BIN)/mocha

.PHONY: test

test:
	@$(MOCHA) --reporter spec --recursive --colors
