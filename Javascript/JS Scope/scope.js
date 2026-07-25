/*
The scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
If a variable or expression is not in the current scope, it will not be available for use. 
Scopes can also be layered in a hierarchy, 
so that child scopes have access to parent scopes, but not vice versa.
*/

/*
there are three types of Scope 
1) global scope: any variable defined in the root or global level can be 
accessed from inner scope, including function.

2) function scope: any variable  defined inside a function can only be used 
within that specific function. if you want to access it from outside, js throw an reference error.

3) block scope: Block scope means a variable declared with let or const is accessible only inside the block ({}) where it is declared.
Variables declared with var are not block scoped.
*/