A very important command is missing from this article, and without it the article has errors in the code. Only the content of input.css is specified, but the base.html has a path to output.css, which is never created. Add this command to the article to rectify that please. 
npx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch