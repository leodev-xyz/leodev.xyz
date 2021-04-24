
build: clean build-noclean
build-noclean: build-tailwind build-html
build-tailwind:
	TAILWIND_MODE=build node node_modules/postcss-cli/bin/postcss ./src/tailwind.css -o ./dist/static/css/tailwind.css
build-html:
	node index.js

clean:
	rm -rf dist
