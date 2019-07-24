# Python Mastery: Beginner Grid

## Primitives types

### The usecase of backslah

It's useful to escape the character that's right after.

```python
course = "Python is \" very beautiful"
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
Python is " very beautiful
```

### String Interpolation

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

### Numbers

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

### falsy

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
