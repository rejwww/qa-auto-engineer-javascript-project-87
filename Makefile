install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npm init @eslint/config@latest
	npm install --save-dev --save-exact prettier

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage --coverageDirectory=coverage --coverageReporters=lcov

