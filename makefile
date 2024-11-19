install:
	@pnpm i

# api
api-dev:
	@pnpm moon run api:dev

api-build:
	@pnpm moon run api:build

api-test:
	@pnpm moon run api:test

api-e2e:
	@pnpm moon run api:e2e
