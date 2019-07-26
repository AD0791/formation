# Python Mastery

## : Beginner Grid-3

### Exceptions

The error messages.

```Python
In [1]: age = int(input("age: "))
age: u
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-1-a7d47d7f2e12> in <module>()
----> 1 age = int(input("age: "))

ValueError: invalid literal for int() with base 10: 'u'
```

> Error type : ValueError

### Handeling Exceptions

The except clause will override the exception default message.

```python
In [2]: try:
   ...:     age = int(input("age: "))
   ...: except ValueError:
   ...:     print("You didn't enter a valid age")
   ...:
   ...:
age: i
You didn't enter a valid age

In [3]: try:
   ...:     age = int(input("age: "))
   ...: except ValueError:
   ...:     print("You didn't enter a valid age")
   ...:
   ...:
age:
You didn't enter a valid age

In [4]: try:
   ...:     age = int(input("age: "))
   ...: except ValueError:
   ...:     print("You didn't enter a valid age")
   ...:
   ...:
age: 10
```

The Program will not crash.

```python
In [5]: try:
   ...:     age = int(input("age: "))
   ...: except ValueError:
   ...:     print("You didn't enter a valid age")
   ...: print("program didn't crash")
   ...:
   ...:
age: p
You didn't enter a valid age
program didn't crash
```

THe else clause will display a message when **no exceptions where raise**.

```python
In [6]: try:
   ...:     age = int(input("age: "))
   ...: except ValueError:
   ...:     print("You didn't enter a valid age")
   ...: else:
   ...:     print("No exception where raise")
   ...: print("program didn't crash")
   ...:
   ...:
age: 28
No exception where raise
program didn't crash
```

WE can do more

```python
In [8]: try:
   ...:     age = int(input("age: "))
   ...: except ValueError as ex:
   ...:     print("You didn't enter a valid age")
   ...:     print(ex)
   ...:     print(type(ex))
   ...: else:
   ...:     print("No exception where raise")
   ...: print("program didn't crash")
   ...:
   ...:
age: w
You didn't enter a valid age
invalid literal for int() with base 10: 'w'
<class 'ValueError'>
program didn't crash
```

### Handeling Different Exceptions

```python
In [10]: try:
    ...:     age = int(input("age: "))
    ...:     xfactor  = 10 / age
    ...: except ValueError as ex:
    ...:     print("You didn't enter a valid age")
    ...:     print(ex)
    ...:     print(type(ex))
    ...: except ZeroDivisionError as div:
    ...:     print("The age must be greater then 0")
    ...:     print(div)
    ...:     print(type(div))
    ...: else:
    ...:     print("No exception where raise")
    ...: print("program didn't crash")
    ...:
    ...:
age: 0
The age must be greater then 0
division by zero
<class 'ZeroDivisionError'>
program didn't crash
```

A proper way to handle multiple exceptions.

```python
In [12]: try:
    ...:     age = int(input("age: "))
    ...:     xfactor  = 10 / age
    ...: except (ValueError, ZeroDivisionError)  as ex:
    ...:     print("You didn't enter a valid age")
    ...:     print(ex)
    ...:     print(type(ex))
    ...: else:
    ...:     print("No exception where raise")
    ...: print("program didn't crash")
    ...:
    ...:
age: o
You didn't enter a valid age
invalid literal for int() with base 10: 'o'
<class 'ValueError'>
program didn't crash

In [13]: try:
    ...:     age = int(input("age: "))
    ...:     xfactor  = 10 / age
    ...: except (ValueError, ZeroDivisionError)  as ex:
    ...:     print("You didn't enter a valid age")
    ...:     print(ex)
    ...:     print(type(ex))
    ...: else:
    ...:     print("No exception where raise")
    ...: print("program didn't crash")
    ...:
    ...:
age: 0
You didn't enter a valid age
division by zero
<class 'ZeroDivisionError'>
program didn't crash

In [14]: try:
    ...:     age = int(input("age: "))
    ...:     xfactor  = 10 / age
    ...: except (ValueError, ZeroDivisionError)  as ex:
    ...:     print("You didn't enter a valid age")
    ...:     print(ex)
    ...:     print(type(ex))
    ...: else:
    ...:     print("No exception where raise")
    ...: print("program didn't crash")
    ...:
    ...:
age: 28
No exception where raise
program didn't crash
```

### Clean UP

The finally clause is executed whether we have an exceptions or not. **It's a perfect place to release ressources. Which means close files, database connection and other internet connection**.

```python
In [16]: try:
    ...:     # we can open a file in this directory
    ...:     file = open("app.py")
    ...:     age = int(input("age: "))
    ...:     xfactor  = 10 / age
    ...: except (ValueError, ZeroDivisionError)  as ex:
    ...:     print("You didn't enter a valid age")
    ...:     print(ex)
    ...:     print(type(ex))
    ...: else:
    ...:     print("No exception where raise")
    ...: finally:
    ...:     #allows us to not repeat ourselves
    ...:     file.close()
    ...:     # we properly close the file
    ...: print("program didn't crash")
    ...:
    ...:
age: 0
You didn't enter a valid age
division by zero
<class 'ZeroDivisionError'>
program didn't crash
```

### The with Statement

The with statement is use to release automatic ressources. In this case we don't the finally clause.

> If an obect has `.__enter__` and `.__exit__`, (Context Management), we can use the with statement properly.

A file has the COntext management

```python
In [18]: try:
    ...:     # we can open a file in this directory
    ...:     with  open("app.py") as file:
    ...:         print("File was open")
    ...:     age = int(input("age: "))
    ...:     xfactor  = 10 / age
    ...: except (ValueError, ZeroDivisionError)  as ex:
    ...:     print("You didn't enter a valid age")
    ...:     print(ex)
    ...:     print(type(ex))
    ...: else:
    ...:     print("No exception where raise")
    ...: print("program didn't crash")
    ...:
    ...:
File was open
age: 10
No exception where raise
program didn't crash
```

`with open("app.py") as file, open(another.txt) as txt:` We can open or add multiple ressources.

### Raise an Exception

```python
In [21]: def calculate(num):
    ...:     if num <= 0:
    ...:         raise ValueError("Number can't be 0 or less")
    ...:     return 10 / num
    ...:
    ...: calculate(0)
    ...:
    ...:
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-21-0d1a2c40ba60> in <module>()
      4     return 10 / num
      5
----> 6 calculate(0)

<ipython-input-21-0d1a2c40ba60> in calculate(num)
      1 def calculate(num):
      2     if num <= 0:
----> 3         raise ValueError("Number can't be 0 or less")
      4     return 10 / num
      5

ValueError: Number can't be 0 or less
```

We can catch the error.

```python
In [23]: def calculate(num):
    ...:     if num <= 0:
    ...:         raise ValueError("Number can't be 0 or less")
    ...:     return 10 / num
    ...:
    ...:
    ...: try:
    ...:     calculate(-1)
    ...: except ValueError as e:
    ...:     print(e)
    ...: else:
    ...:     print("No error")
    ...:
Number can't be 0 or less

In [24]: def calculate(num):
    ...:     if num <= 0:
    ...:         raise ValueError("Number can't be 0 or less")
    ...:     return 10 / num
    ...:
    ...:
    ...: try:
    ...:     calculate(1)
    ...: except ValueError as e:
    ...:     print(e)
    ...: else:
    ...:     print("No error")
    ...:
No error
```

### Cost of Raisings

`from timeit import timeit` allows you to calculate the execution times of a python code.

```python
from timeit import timeit
code1 = """
def calculate(num):
    if num <= 0:
        raise ValueError("Number can't be 0 or less")
    return 10 / num


try:
    calculate(-1)
except ValueError as e:
    print(e)
else:
    print("No error")
"""

print("first code=", timeit(code1, number=10000))
```

```bash
first code= 2.5747960899999995
```

The `pass` doesn't print anything.

```python
from timeit import timeit
code1 = """
def calculate(num):
    if num <= 0:
        raise ValueError("Number can't be 0 or less")
    return 10 / num


try:
    calculate(-1)
except ValueError as e:
    #print(e)
    pass
else:
    #print("No error")
    pass
"""

print("first code=", timeit(code1, number=10000))
```

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 app.py
first code= 0.006526881000000002
```

`None`: means absence of a value.

```python
from timeit import timeit
code1 = """
def calculate(num):
    if num <= 0:
        raise ValueError("Number can't be 0 or less")
    return 10 / num


try:
    calculate(-1)
except ValueError as e:
    #print(e)
    pass
else:
    #print("No error")
    pass
"""

print("First code=", timeit(code1, number=10000))

code2 = """
def calculate(num):
    if num <= 0:
        #raise ValueError("Number can't be 0 or less")
        return None
    return 10 / num


try:
    calculate(-1)
except ValueError as e:
    #print(e)
    pass
else:
    #print("No error")
    pass
"""

print("Second code=", timeit(code2, number=10000))
```

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 app.py
First code= 0.008425797999999998
Second code= 0.002646031
```

A 3rd Test

```python
from timeit import timeit
code1 = """
def calculate(num):
    if num <= 0:
        raise ValueError("Number can't be 0 or less")
    return 10 / num


try:
    calculate(-1)
except ValueError as e:
    #print(e)
    pass
else:
    #print("No error")
    pass
"""

print("First code=", timeit(code1, number=10000))

code2 = """
def calculate(num):
    if num <= 0:
        #raise ValueError("Number can't be 0 or less")
        return None
    return 10 / num


try:
    calculate(-1)
except ValueError as e:
    #print(e)
    pass
else:
    #print("No error")
    pass
"""

print("Second code=", timeit(code2, number=10000))

code3 = """
def calculate(num):
    if num <= 0:
        return None
    return 10 / num



x = calculate(-1)
if x == None:
    pass
"""

print("Third code=", timeit(code3, number=10000))
```

```bash
First code= 0.007797992999999996
Second code= 0.003105726000000003
Third code= 0.0031480250000000057
```
