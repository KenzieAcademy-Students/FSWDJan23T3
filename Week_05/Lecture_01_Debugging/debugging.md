# Debugging

What are the 9 indispensable rules for finding even the most elusive software and hardware problems?

# 1. Understand the System
If you don't know how the parts *do* work, how can you know why the parts *don't* work. So we need to learn the system.
- Reading documentation
- Diagram the components of the system
- Ask for help understanding the system

# 2. Make it Fail
You can't fix that which is not broken.
Reasons why it's important to make it fail:
- So you can look at the failure to see what's happening (variables, system state, etc.)
- So you can focus on the cause, because knowing under what conditions it will fail helps you focus on probable causes.
- So you can tell when you fixed it. If, for example, submitting "bananas" as a username caused the error, you can tell things work by submitting "bananas" as a username. If the original error does not happen, you've effectively fixed the problem.

# 3. Quit Thinking and Look
Don't make changes based on hunches. 
What input data is causing the system to fail.
Look at the error messages in:
- Browser console
- Server console
- Server logs
- Database logs

# 4. Divide and Conquer
Test modules separately to narrow down the cause of the problem
Is the problem front end, back end, or server?
Writes unit tests
Add console logs EVERYWHERE
If everything was working recently, check out the `git bisect` command. 

# 5. Only change one thing at a time.
If you change multiple things at once and the problem is solved, which thing solved the problem? If it was only one of the things that solved the problem, you may have just introduced 2 new bugs by changing the other 2 things. 
If you make a change and it doesn't fix the problem, remove the change. This is much easier if you only change one thing at time. 

# 6. Keep an Audit Trail
As you are trying to reproduce and/or fix a bug, keep a log of the steps you're taking.
Keeping a log of your fixes can potentially help the next developer solve a similar bug.

# 7. Check the Plug
Examine your basic assumptions. 
Make sure you're in the right file/folder/the server you're running is the right project.

# 8. Get fresh eyes
Fresh eyes are not going to make the same assumptions that you might. These fresh eyes can belong to somebody else, or even yourself after stepping away for a bit. The fresh eyes can belong to somebody who simply has more expertise in a specific field. 

# 9. If you didn't fix it, you didn't fix it.
"It fixed itself" is always a lie. Try to break things once you've fixed them.
Take the fix out and test again. If without the fix, the feature works, you didn't fix it. If without the fix, the feature doesn't work, but it does work with the fix, then you probably fixed it. 