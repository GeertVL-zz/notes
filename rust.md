# My Rust adventure

I love to learn new languages and did some trials on learning Rust. The curve is high and my previous attempts ended in giving up. 
What I have learned is that you need some goal (or at least me) to learn and be motivated to jump over all pittfalls and setbacks.
So one day I discovered if I take a book written for another language and attempt to translate it in the Go language I learned the language and its core library in days. 


## Books to practice on

- https://www.dropbox.com/s/vpe38hvihjf4bcu/pythonplayground_geekyprojectsforthecuriousprogrammer.pdf?dl=0
- file:///D:/Dropbox/Apps/Pragmatic%20Bookshelf/Build%20Awesome%20Command-Line%20Applications%20in%20Ruby%202/build-awesome-command-line-applications-in-ruby-2.p3_0.pdf


## Tools I used

- vscode 
- pandoc
- emacs for markdown (in my opinion the markdown-mode is the best)

### How to setup debugging in vscode for your Rust project

[Instructions to setup](https://gist.github.com/GeertVL/b493debafac3fed3b39596b541c1f28e)


## Declaration of variables

We can declare a new variable with the same name as a previous variable, and the new variable __shadows__ the previous variable.

```rust
let number if condition {
	5
} else {
	6
}
```

Three kinds of loops: loop, while, for

```bash
cargo doc --open
```
Command that will build documentation provided by all your dependencies locally and open it in the browser.


## Ownership

Stack stores values last in, first out. __Pushing onto the stack and popping off the stack.
Stack values have a known, fixed size. Stack is fast.

For data with size unknown to us at compile time or a size that might change = store on heap.
OS finds an empty spot somewhere in the heap, marks it as being in use, returns a pointer = allocating on the heap.
Accessing data on the heap is slower. 

### Ownership rules

1. Each value in Rust has a variable that's called its __owner__.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

In C++, pattern of deallocating resources at the end of an item's lifetime is called RAII (Resource Acquisition Is Initialization)
When two variables that pointing at the same value and they go both out of scope, they will both try to free the same memory. Known as __double free__ error (memory safety bug).

Having a reference to an object as a parameter instead of taking ownership of the value:
```rust
fn main() {
	let s1 = String::from("hello");
	let len = calculate_length(&s1);
	println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
	s.len();
}
```

> The ampersands are references. They allow you to refer to some value without taking ownership of it.
> The opposite of referencing by using & is dereferencing, which is accomplished with the dereference operator *.

``` 
let len = calculate_length(&s1);
```

The **&s1** syntax let us create a reference that refers to the value s1 but does not own it.

We call having references as function parameters __borrowing__.

References are also immutable. We create them mutable like this.

```
fn change(some_string: &mut String) {
	some_string.push_str(", world");
}
```

You can only have one mutable reference to a particular piece of data in a particular scope.

A data race is similar to a race condition and happens when these three behaviors occur:
1. Two or more pointers access the same data at the same time.
2. At least one of the pointers is being used to write to the data.
3. There's no mechanism being used to synchronize access to the data.

We also cannot have a mutable reference while we have an immutable one. Multiple immutable references are ok.

A dangling pointer is a pointer that references a location in memory that may have been given to someone else, by freeing some memory while preserving a pointer to that memory.

1. At any given time, you can have either but not both of:
   - One mutable reference.
   - Any number of immutable references.
2. References must always be valid.


## structs

### tuple struct 

```rust
struct Color(i32, i32, i32);
let black = Color(0, 0, 0);
```

### unit-like structs

Struct that does not have any field.

### methods

You can define functions within **impl** blocks that don't take **self** parameter. These are called __associated functions__. 

Each struct is allowed to have multiple **impl** blocks.


## collections

- A __vector__ allows us to store a variable number of values next to each other.
- A __hash map__ allows us to associate a value with a particular key.

```
let v: Vec<i32> = Vec::new();
let v = vec![1, 2, 3];

let third: &i32 = &v[2];
let third: 
```

## traits

traits are like C# interfaces

`Box<Error>` means the function will return a type that implements the **Error** trait, but we don't have to specify what particular type the return value will be.

## error handling

```
let mut f = File::open(config.filename)?;
```

Instead of **expect** we use **?**. It will return the error value from the current function for the caller to handle.


## Rules of module filesystems

- If a module named foo has no submodules, you should put the declarations for file in a file named foo.rs.
- If a module named foo does have submodules, you should put the declarations for foo in a file named foo/mod.rs.
