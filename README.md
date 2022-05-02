# wodasoft-assignment

1. JS/TS
Let’s say you have a project with thousands of LoC in JavaScript and you are suggested to do some refactoring and migrate to TypeScript. What benefits would you get?
What are your thoughts about TypeScript, what are your personal pros/cons? What do you think, what features are missing from the TypeScript?

Ans.  TypeScript is an open-source programming language developed by Microsoft that compiles to JavaScript. TypeScript is heavily based on JavaScript. In fact, TypeScript is a superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code. TypeScript doesn’t alter JavaScript, instead expanding it with new, valuable features.

Pros of TypeScript - 

1. Strict typing
Everything stays the way we define it. Need a variable to always be a number? It’ll always be a number, then.

2. Structural typing
Indispensable when you care about fully defining the actual structure you use. JavaScript allows for a lot of strange things to be done, so relying on a specific structure is a much safer solution.

3. Type annotations
A handy way of saying explicitly what type should be used.

4. Type inference
Implicit typing performed by TypeScript itself, so that your developers don’t need to provide types where the compiler can find them on its own.

Cons of TypeScript -

1. Overly complicated typing system
First of all, the typing system, while a great tool in many regards, can sometimes be a little too complicated to use properly. This isn’t strictly a disadvantage of TypeScript, though, but rather a downside that stems from it being fully interoperable with JavaScript, which itself leaves even more room for complications.

2. Required compilation
Another argument against TypeScript is that it requires compilation, while JavaScript doesn’t. But, let’s be honest, most of JavaScript applications these days require a build step. Whether it’s Gulp, Grunt, Webpack, Rollup, Babel, or Closure—a build step is a necessity and nothing really prevents you from expanding it.

3. False sense of security
In my opinion, the greatest disadvantage of TypeScript is that it can bring you a false sense of security. Yes, it’s a huge benefit that the language can check types for us and warn us when there’s something wrong with our code. However, relying on this too heavily comes with a significant risk: some developers tend to think that anything they write in TypeScript is 100% bulletproof. It’s not.

TypeScript performs type checks only during compilation. Afterwards, we’re dealing with pure JavaScript that doesn’t do that. This means we may still encounter some bugs that the compiler didn’t find, though admittedly there’s going to be far fewer of them than if we hadn’t used TypeScript.

Here are two ways to perform a migration from Javascript to TypeScript -

1. The hard way: everything in TypeScript at once
Simply rewriting all of your code to TypeScript may seem like the most obvious way to make the transition, but it’s also the most difficult and time-consuming (at least in the beginning).

As we already know, valid JavaScript code is also valid TypeScript code, so technically you’re not writing everything from scratch. Most of the time, you’ll be changing file extensions, running the compiler, and fixing all the typing errors you find. Also, you can configure the type-checking mechanism in different ways, so the more rigid you are about it, the more time it will take to fix everything.

It’s absolutely doable. However, this all-hands-on-deck approach is best suited for small projects and small teams. This isn’t work you can easily parallelize, and you have to put your development on hold for the duration of the process, so it won’t be possible for you to implement new features at the same time.

The advantage of going down this road is that it’s future-proof. Even though it takes longer to do it all at once, you will have everything written in TypeScript, so worrying about your old JavaScript code will be a thing of the past.

2. The soft way: only new things in TypeScript
Thanks to the interoperability of TypeScript with JavaScript, it’s possible to write TypeScript code alongside JavaScript code. TypeScript modules can be used in JavaScript and vice versa; the compiler will know what to do.

This is great, because it means you don’t actually need to move your whole project at once. All your team needs to do is spend a few hours configuring TypeScript in your project and move some basic code around—that’s it!

Afterwards, it’s up to your developers to make sure each new feature is written in TypeScript instead of JavaScript. Naturally, whenever there’s some old code to edit, you’ll be able to safely move it to TypeScript. It’s easier to fix errors in one file than hundreds or thousands of them.

This way works best for medium- and large-sized projects with a lot of people in the mix. It takes next to no time at first, and your developers can start reaping the benefits of TypeScript straight away.

The downside here is that you’ll still have legacy JavaScript code to deal with at a later date. Eventually, you’re going to have to move the rest of your code to TypeScript, and it’s going to take some time. Another possible side effect of this compartmentalization is that some segments of your TypeScript code may be badly typed, especially where your old code was used.

Features Missing - 

For me, the most annoying thing using TypeScript is that I still can’t define proper function interfaces and make sure the programmer will know exactly how to use them without some documentation. Indeed, this problem is not unique only for TypeScript, but it feels so close it’s frustrating.

The most fundamental issue is that TypeScript does not support throwing decelerations and as far as I know, there is no plan to add it anytime soon.

Another feature that I really want to have is static data validation.

I found myself writing a large chunks of interface protocols for my functions. Those protocols are great for compile time checks, but in many cases I also need to write specific validations for the user inputs according to those interfaces.

Last but not least, supporting type switch to quickly detect the type of the return value could be really useful. 


2. Collapsible table 

Code implemented using React Js


