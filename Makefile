.PHONY: build-test
build-test:
	yarn nuxt build
	yarn nuxt start

.PHONY: push
push:
	git push
	git push heroku main
