install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npm init @eslint/config@latest
	npm install --save-dev --save-exact prettier
