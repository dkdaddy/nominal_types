# nominal_types
How to simulate nominal types in TypeScript

Consider the code in [bug.ts](../blob/master/ts/bug.ts) 

Can you see the problem?

The type alias to string means UserName and ErrorCode and string are all interchangable.

How would we do this in java?

Consider the code in [classes.java](../blob/master/java/classes.java)

We can do a similar thing in C++ [classes.cpp](../blob/master/cpp/classes.cpp) and C# [classes.cs](../blob/master/cs/classes.cs) 

What if we try it in TypeScript? [classes.ts](../blob/master/ts/classes.ts)

No Error!

I can use Symbol and type intersections.

What are Type Intersections?

What are Symbols?

Using these techniques we have [symbol.ts](../blob/master/ts/symbol.ts)

We can make it simpler.

[noclasses.ts](../blob/master/ts/noclasses.ts)

As you can see this is almost identical to our original code but is type safe.


