
This portfolio is created using Gatsby.

## 🧐 Why Gatsby

I am an avid learner first and a web developer second. Having never worked with a static site generator before, Gatsby was an obvious choice. 

The plugin ecosystem is great and the developer experience is quite good. A static server side rendered portfolio also adds some brownie points for pleasing the picky search engine bots 🙄 

Also, I really wanted to experiment with the `mdx` support and yes, it works like a charm. 


## 💅 What about styling ?

Styling is done with emotion. 
  
- I prefer emotion over styled components because it gives you way more options. You can simply use the `emotion/css` package if you like to stick to the CSS roots and still get all the advantages of CSS in JS. No need of having a seperate `.module.<>css` or declaring styles as object 🤭. If you like attaching styles to your components - use `emotion/styled`.

- Emotion also provides an out-of-the-box way of extracting css to prevent _Flash of Unstyled Content_ on server side rendered content. 
  
  
## 🤸🏽‍♂️What else ?


- TypeScript. Yes, some JavaScript purist thinks its an unnecessary overhead but from my experience, TS really makes the code more reasonable and navigational.
 
- There's also a bit of ThreeJS added to spice things up.


## 🚀 Quick start


1.  **Clone the repo.**

    If you want to test it out locally then clone the repo first.
	
2.  **Setup**

    Move inside the directory 
	
	```
	cd <REPO_NAME_OF_YOUR_CHOICE> 
	```
	
	and start installing the npm dependencies.
	
	```
	yarn
	```
	
	or 
	
	```
	npm i
	```
	
2.  **Start Project**

    Once all dependencies are installed then just run
	
	```
	gatsby develop
	```
	
	or
	
	```
	yarn start
	```
	


3.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

 

