# 1. Identify the "Why"
We wish to speak knowledgably on the topic of Next.js for a potential job opportunity.

# 2. List Assumptions and Prior Knowledge
Similar to Vite/Create-React-App, Next.js can be used to bootstrap a new React App. But it sets itself apart from Vite/CRA in that in can come with built-in API support.

# 3. Ask Questions
- What *is* Next.js?
- What is it used for?
- How does Next.js differ from other bootstrapping platforms such as Vite?
- Is Next.js something that builds on top of React? Or does it replace React entirely?
- Is Next.js an addition to, or a replacement for, something like Express.js?
- What is the architecture of a Next.js application?
- What are the strengths/weaknesses of Next.js?
- How would I create a basic web page and/or API endpoint using Next.js

# 4. Find Resources
- [Documentation](https://nextjs.org/docs)
- [What is Next.js (by Next.js)](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)
- [Next.js Tutorial](https://www.youtube.com/watch?v=A63UxsQsEbU)
- [Complete Beginner's guide to Next.js](https://welearncode.com/beginners-guide-nextjs/)
- [Create React App vs Next.js](https://blog.logrocket.com/create-react-app-vs-next-js-performance-differences/)
- https://www.freecodecamp.org/news/next-vs-react/
- https://www.geeksforgeeks.org/nextjs-vs-reactjs-which-one-to-choose/#
- [React js vs Next js](https://www.youtube.com/watch?v=FrLtFFdONtw)
- https://www.linkedin.com/pulse/choosing-between-express-nextjs-guide-backend-md-shohanur-rahman#:~:text=Express%20is%20a%20minimalistic%20and,for%20complex%20React%2Dbased%20applications.
- https://www.reddit.com/r/node/comments/zc9st4/for_api_server_expressjs_vs_nextjs/
- https://www.reddit.com/r/node/comments/xzdc4l/newbie_to_node_should_i_focus_more_on_express_or/
- https://thetombomb.com/posts/nextjs-app-architecture
- https://medium.com/@camila.luna081/pros-and-cons-of-nextjs-do-you-really-need-nextjs-this-will-help-you-decide-7bea7bdbf92a
- https://pagepro.co/blog/pros-and-cons-of-nextjs/

# 5. Answer Questions
- What *is* Next.js?
  - It is a React metaframework, taking the capabilities of React, and enhancing them by adding additional structure and features.
- What is it used for?
  - Next.js is used to improve some of React's existing features, as well as solving some of React's "common problems." These improvements impact both developer and user experiences.
- How does Next.js differ from other bootstrapping platforms such as Vite?
  - Next.js supports server-side rendering in addition to client-side rendering, while Vite/CRA only support client-side rendering. 
  - Because Next.js supports server-side rendering, an App made with Next.js will perform better (with regards to SEO) than Vite/CRA.
- Is Next.js something that builds on top of React? Or does it replace React entirely?
  - Next.js is a React meta-framework, meaning it's a React application that is created, but Next.js adds additional structures, features, optimizations, etc.
- Is Next.js an addition to, or a replacement for, something like Express.js?
  - Next.js is essentially something that would replace an Express application. Next.js is a full stack comprehensive framework (one technology that covers both front and back end), whereas Express is strictly a back-end technology. 
- What is the architecture of a Next.js application?
  - Due to its server-based nature, Next.js applications are somewhat of a combination of the client and server-side code from a traditional React-based full stack app.
- Strengths/Pros:
  - Server-side Rendering and Static Site Generation perform better in terms of Search Engine Optimization, 
  - SSR and SSG also reduces the amount of JavaScript that needs to run on the user's browser
  - Integrates common features directly into React rather than having to add them on your own (i.e. data fetching, routing, etc.)
  - Overall faster/smoother UX
  - Creates an optimized combination of server side and client side rendering as needed
- Weakness/Cons:
  - As with most frameworks, the more layers of the framework, the more limitations you face as the developer implementing the solutions in that framework. 
  - Higher "commitment level" as you are effectively required to build a server for what is ultimately a client-side application. 
  - Next.js in a sense ignores "separation of concerns"*
  - Due to its heavy reliance on server-side functionalities, hosting costs are more expensive.

# 6. Summarize and Share
Next.js is not strictly a replacement for Vite/CRA and/or Express in every possible situation. It excels in scenarios where your application might benefit from strictly static/server-side rendered pages, or needing a combination of static, server-side, and client-side rendered pages. While it does effectively replace Express in use, Express has many customizable options that Next.js does not, as Next.js is not terribly well supported with regards to plugins. The opinionated nature of frameworks like Next.js provides limitations in addition to the benefits of the added structure and features. It's certainly not a "one size fits all" technology, but the combination of server-side and client-side into a single app can definitely improve both the user and developer experience. Users benefit from faster page loads (as they are pre-rendered), and developers benefit from everything being in one place, so they don't have to bounce back and forth between different apps when developing in a full stack scenario. 