namespace symbol_use {

    const s1 = Symbol();
    const s2 = Symbol();
    
    console.log (s1===s2, s1.toString(), s2.toString());

    // Symbol wih a string parameter just makes the .toString function more useful by including the name. 
    const s3 = Symbol("Bob");
    const s4 = Symbol("Bob");

    console.log (s3===s4, s3.toString(), s4.toString());

    // Symbol.for searches the global symbol namespace
    const s5 = Symbol.for("Bob");
    const s6 = Symbol.for("Bob");

    // although typescript complains here, s5 is actaully === s6
    console.log (s5===s6, s5.toString(), s6.toString());
}