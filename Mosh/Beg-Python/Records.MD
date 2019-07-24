# Python Mastery

## : Beginner Grid

### Primitives

#### The usecase of backslah

It's useful to escape the character that's right after.

```python
course = "Python is \" very beautiful"
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
Python is " very beautiful
```

#### String Interpolation

```python
course = "Python is very beautiful"
name = "multi-purpose programming Language."
print(f"{course} {name}")
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
Python is very beautiful multi-purpose programming Language.

[Done] exited with code=0 in 0.048 seconds
```

Of course Strings have build-in methods such as:

1. .upper()
2. .lower()
3. .title()
4. .strip()
   - .rstrip()
   - .lstrip()
5. .find()
6. .replace()

And we talk about indexing a strings with bracket notation and `:`.

#### Numbers

```python
integer = 1
float = 1.0
complex = 1+1j
```

#### input()

Input will always come as a string.

```python
x = input("x: ")
y = int(x)+ 1
print(f"{x} et {y}")
```

#### falsy

```python
false
'' or ""
None
0
```

### Conditional statement

`if <>: , elif <>: and else:`

### Ternary operator

> < >= <= ==

```python
temperature = 30
message = "It's good" if temperature < 30 else "not good"
print(message)
```

```bash
not good
```

AND OR NOT

### Chaining comparison operator

```python
age = 40
if age)>= 18 and age < 50:
    print("You are full of life
```

The mathematical way is supported in python

```python
age=40
if 18<=age<50:
    print("you are full of life")
```

### LOOPS

#### for-in

```python
age = [1, 2, 3, 4, 5, 6, 8, 9]
for number in range(len(age)):
    print("we get the index of the list")
    print(f"This is the index: {number}")
    print("Let's get the proper age using the index")
    print(f'The age is: {age[number]}')
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
we get the index of the list
This is the index: 0
Let's get the proper age using the index
The age is: 1
we get the index of the list
This is the index: 1
Let's get the proper age using the index
The age is: 2
we get the index of the list
This is the index: 2
Let's get the proper age using the index
The age is: 3
we get the index of the list
This is the index: 3
Let's get the proper age using the index
The age is: 4
we get the index of the list
This is the index: 4
Let's get the proper age using the index
The age is: 5
we get the index of the list
This is the index: 5
Let's get the proper age using the index
The age is: 6
we get the index of the list
This is the index: 6
Let's get the proper age using the index
The age is: 8
we get the index of the list
This is the index: 7
Let's get the proper age using the index
The age is: 9

[Done] exited with code=0 in 0.059 seconds
```

```python
age = [1, 2, 3, 4, 5, 6, 8, 9]
for ages in age:
    print("Loop over the elements directly")
    print(f'The age is: {ages}')
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
Loop over the elements directly
The age is: 1
Loop over the elements directly
The age is: 2
Loop over the elements directly
The age is: 3
Loop over the elements directly
The age is: 4
Loop over the elements directly
The age is: 5
Loop over the elements directly
The age is: 6
Loop over the elements directly
The age is: 8
Loop over the elements directly
The age is: 9

[Done] exited with code=0 in 0.056 seconds
```

#### For-else

```python
#import pdb
# pdb.run("test")
age = [1, 2, 3, 4, 5, 6, 8, 9]
needAge = 10
for ages in age:
    print(f'The current age is: {ages}')
    if ages == needAge:
        print(f"We find the desired age: {ages}")
        break
else:
    print(f"The needed age {needAge} is not there.")
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
The current age is: 1
The current age is: 2
The current age is: 3
The current age is: 4
The current age is: 5
The current age is: 6
The current age is: 8
The current age is: 9
The needed age 10 is not there.

[Done] exited with code=0 in 0.059 seconds
```

```python
age = [1, 2, 3, 4, 5, 6, 8, 9,10,11]
needAge = 10
for ages in age:
    print(f'The current age is: {ages}')
    if ages == needAge:
        print(f"We find the desired age: {ages}")
        break
else:
    print(f"The needed age {needAge} is not there.")
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
The current age is: 1
The current age is: 2
The current age is: 3
The current age is: 4
The current age is: 5
The current age is: 6
The current age is: 8
The current age is: 9
The current age is: 10
We find the desired age: 10

[Done] exited with code=0 in 0.057 seconds
```

#### Nested Loops

```python
age = [1, 2, 3, 4, 5, 6, 8, 9,10,11]
needAge = [12,23,45,56,6,77,89,89,98]
for ages in age:
    for nages in needAge:
            print(f"({ages}, {nages})")
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
(1, 12)
(1, 23)
(1, 45)
(1, 56)
(1, 6)
(1, 77)
(1, 89)
(1, 89)
(1, 98)
(2, 12)
(2, 23)
(2, 45)
(2, 56)
(2, 6)
(2, 77)
(2, 89)
(2, 89)
(2, 98)
(3, 12)
(3, 23)
(3, 45)
(3, 56)
(3, 6)
(3, 77)
(3, 89)
(3, 89)
(3, 98)
(4, 12)
(4, 23)
(4, 45)
(4, 56)
(4, 6)
(4, 77)
(4, 89)
(4, 89)
(4, 98)
(5, 12)
(5, 23)
(5, 45)
(5, 56)
(5, 6)
(5, 77)
(5, 89)
(5, 89)
(5, 98)
(6, 12)
(6, 23)
(6, 45)
(6, 56)
(6, 6)
(6, 77)
(6, 89)
(6, 89)
(6, 98)
(8, 12)
(8, 23)
(8, 45)
(8, 56)
(8, 6)
(8, 77)
(8, 89)
(8, 89)
(8, 98)
(9, 12)
(9, 23)
(9, 45)
(9, 56)
(9, 6)
(9, 77)
(9, 89)
(9, 89)
(9, 98)
(10, 12)
(10, 23)
(10, 45)
(10, 56)
(10, 6)
(10, 77)
(10, 89)
(10, 89)
(10, 98)
(11, 12)
(11, 23)
(11, 45)
(11, 56)
(11, 6)
(11, 77)
(11, 89)
(11, 89)
(11, 98)

[Done] exited with code=0 in 0.152 seconds
```

```python
age = [1, [2, 3], [5, 6], 9, [10, 11, 12, 13, 14, 15, 16]]
for ages in age:
    if isinstance(ages, list):
        print(f"{ages}")
        for elements in ages:
            print(elements)
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
[2, 3]
2
3
[5, 6]
5
6
[10, 11, 12, 13, 14, 15, 16]
10
11
12
13
14
15
16

[Done] exited with code=0 in 0.06 seconds
```

#### iterable

I've been iterate over list above.

you can iterate over:

- list
- strings
- dictionary
- range

#### While loops

```python
command = ''
while command != 'quit':
    command = input('>>> ')
    print(command)
```

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 app.py
>>> Sarita
Sarita
>>> Sarah-lynn Joseph
Sarah-lynn Joseph
>>> quit
quit
```

#### Avoid Infinite loops

```python
while True:
    command = input('>>> ')
    print(command)
    if command.lower() == "quit":
        break
```

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 app.py
>>> Infinite loop
Infinite loop
>>> we will break out eventually
we will break out eventually
>>> QUIT
QUIT
```

### Functions

```python
def abiga(name, age):
    print(f"{name}, age: {age}")


abiga("soledad", 25)
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
soledad, age: 25

[Done] exited with code=0 in 0.1 seconds
```

#### The Return Function Work On Ipython

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ ipython
Python 3.7.4 (v3.7.4:e09359112e, Jul  8 2019, 14:54:52)
Type 'copyright', 'credits' or 'license' for more information
IPython 6.5.0 -- An enhanced Interactive Python. Type '?' for help.

In [1]:
   ...: def abiga(name, age):
   ...:    # print(f"{name}, age: {age}")
   ...:     return(f"{name}, age: {age}")
   ...:
   ...:
   ...: abiga("soledad", 25)
   ...:
   ...:
Out[1]: 'soledad, age: 25'
```

#### Defaulft Arguments

```bash
In [2]:
   ...: def abiga(name, age=18):
   ...:    # print(f"{name}, age: {age}")
   ...:     return(f"{name}, age: {age}")
   ...:
   ...:
   ...: abiga("soledad")
   ...:
   ...:
Out[2]: 'soledad, age: 18'
```

#### Multiple Arguments

```python
def abiga(name, *age):
    print(f"{name}, age: {age}")
    return(f"{name}, age: {age}")


abiga("soledad", 12, 34, 45, 56, 67, 67, 78, "ok")
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
soledad, age: (12, 34, 45, 56, 67, 67, 78, 'ok')

[Done] exited with code=0 in 0.066 seconds
```

```bash
In [6]: def abiga(name, *money):
   ...:     total = 1
   ...:     for moneys in money:
   ...:         total *= moneys
   ...:
   ...:     print(f'{name} has {total}$')
   ...:     return(total)
   ...:
   ...:
   ...: abiga("soledad", 12, 34, 45, 56, 67, 67, 78)
   ...:
   ...:
soledad has 360001998720$
Out[6]: 360001998720
```

> xargs, represent like `*number`, create a **tuple** such as `(12, 34, 45, 56, 67, 67, 78, 'ok')`.

#### Multiple Keyword arguments

```python
def details(name, **skills):
    print(name, skills)
    return skills


details("baker Mayfield", team="Brown", Position="Qb")
```

```bash
In [7]: def details(name, **skills):
   ...:     print(name, skills)
   ...:     return skills
   ...:
   ...:
   ...: details("baker Mayfield", team="Brown", Position="Qb")
   ...:
   ...:
baker Mayfield {'team': 'Brown', 'Position': 'Qb'}
Out[7]: {'team': 'Brown', 'Position': 'Qb'}
```

> xxargs, represent like `**skills`, create a **dictionary** with the keywords and there value.

#### Scope

we know that

```bash
In [12]: #import pdb
    ...: globe = "Message"
    ...:
    ...:
    ...: def greet():
    ...:     # local variable
    ...:     unechose = "local"
    ...:     # we can access the variable outside this function
    ...:     global globe
    ...:    # pdb.run("glob")
    ...:     globe = "New"
    ...:     print(globe)
    ...:     print(unechose)
    ...:
    ...:
    ...: greet()
    ...:
    ...:
New
local
```

#### fizzbuzz

```bash
In [8]: def fizz_buzz(input):
   ...:     if input % 3 == 0 and input % 5==0 :
   ...:         return "FizzBuzz"
   ...:     if input % 3 == 0:
   ...:         return "Fizz"
   ...:     if input % 5 == 0:
   ...:         return "Buzz"
   ...:
   ...:
   ...: fizz_buzz(3)
   ...:
   ...:
Out[8]: 'Fizz'

In [9]: def fizz_buzz(input):
   ...:     if input % 3 == 0 and input % 5==0 :
   ...:         return "FizzBuzz"
   ...:     if input % 3 == 0:
   ...:         return "Fizz"
   ...:     if input % 5 == 0:
   ...:         return "Buzz"
   ...:
   ...:
   ...: fizz_buzz(15)
   ...:
   ...:
Out[9]: 'FizzBuzz'
```
