# nominal_types
How to simulate nominal types in TypeScript

Consider the code in [bug.ts](./ts/bug.ts) 

Can you see the problem?

The type alias to string means UserName and ErrorCode and string are all interchangable.

How would we do this in java?

Consider the code in [classes.java](./java/classes.java)

We can do a similar thing in C++ [classes.cpp](./cpp/classes.cpp) and C# [classes.cs](./cs/classes.cs) 

What if we try it in TypeScript? [classes.ts](./ts/classes.ts)

No Error!

I can use Symbol and type intersections.

What are Type Intersections? [type_intersection.ts](./ts/type_intersection.ts)

What are Symbols? [symbol_use.ts](./ts/symbol_use.ts)

Using these techniques we have [symbol.ts](./ts/symbol.ts)

We can make it simpler.

[noclasses.ts](./ts/noclasses.ts)

As you can see this is almost identical to our original code but is type safe.


