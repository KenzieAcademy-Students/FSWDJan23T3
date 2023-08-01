## 1. Ticket Creation and Assignment
- Developers don't just have free reign to do what they please.
- Features/bug fixes are broken down into tasks.
- Each task is assigned to a ticket via some kind of project management software
  - Jira
  - Asana
  - Trello
  - Clickup
- Said ticket is assigned to a developer (that's you)
- Sometimes the ticket creation is brought on by the developer as well (that's you)

## 2. Creating a New Branch (first step of version control)
- Create a new branch dedicated to your assigned ticket.
  - This new branch should branch off of the active development branch; not any previous feature branch you may have just completed.
- Pull from the active development branch into the new branch.
- Each branch created should ONLY contain the additions needed for that singular ticket's task.
- Tasks assigned simultaneously should have source code with minimal overlap.

## 3. Develop and Test your Solution
- This is the meat and potatoes of a day in the life (and your career as a whole).
- Testing using some kind of testing framework (and ideally utilizing Test Driven Development) helps ensure that the later steps of version control work a bit more smoothly. 
  - Unit Tests
  - Integration Testing
  - End to End Testing
- Simulated databases
- (Simulated) API's

## 4. Create a Pull Request and Receive Code Review (next step of version control)
- Once your feature is developed and (to the best of your ability) tested, you'll create a pull request
  - The request is to **pull** the contents from your **feature branch** into the **active development branch**
  - The request is simply a *request*; the request needs to be approved
- A more senior developer/manager/somebody else assigned to review code will review your code
  - If there are changes that need to be made, you will be denied the pull request, and provided with feedback.
  - If your pull request is denied, it's back to step 3.
  - If your pull request looks good, the branch will be merged into its target.

## 5. Continuous Integration and Deployment
- Deployment, generally handled by DevOps Engineers (Developer Operations), is how the code that you write, and the resulting application, gets into the hands of users as a functional application.
  - For web applications, this involves hosting your app on a web server, thus connecting it to the internet.
  - For mobile applications, this involves getting the app uploaded to the app store
  - For other applications, this is just getting the app into its downloadable and executable form, and making it accessible to users.
- Continuous Integration is a set of processes that can more or less automate testing, version control, and server restarts for the deployed application.
  - When a new version of the app is expected to be released, the active development branch needs to be merged into the production branch.
  - As most servers these days are cloud hosted, that means somebody will need to pull the latest version onto the server.
  - But you don't want to just blindly update the server's app version and call it a day
  - By adding tests that need to pass before the update is complete, you can better ensure that the deployed production app stays up as much as possible. 

## 6. Production Monitoring
- As you've found, sometimes things just... break.
- Do whatever needs to be done to keep things running in these situations.
- Set up alerts to notify the on call team when a server crash happens
- Adding custom error handlers 
- Create new tickets for bug fixes