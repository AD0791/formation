# Python Mastery

## : Beginner Grid-3

Create Module to groupe Highly related objects

### Creating Modules

APP.PY

```python
from collections import namedtuple
from sales import hello, classico

hello()

classico()

Point = namedtuple("Point", ["x", "y"])
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)
p3 = Point(x=1, y=2)

```

SALES.PY

```python
def hello():
    print("from sales")


def classico():
    print("from sales")

```

IPYthon

```python
In [1]: hello()
   ...:
   ...: classico()
   ...:
   ...: Point = namedtuple("Point", ["x", "y"])
   ...: p1 = Point(x=1, y=2)
   ...: p2 = Point(x=1, y=2)
   ...: p3 = Point(x=1, y=2)
   ...:
   ...:
from sales
from sales
```

### Compiled Python Files

After we run our program:

1. The `app.py` import, the module, `sales.py`
2. A folder `__pycache__` was created with a comiled version of the imported module.

- `sales.cpython-37.pyc`

Why: In order to speed up module loading!!!

It: didn't catch `app.py` because it's the entry point of our program.

### Module Search Path

```python
import sys
print(sys.path)
```

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 sales.py
['/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python37.zip',
 '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/l
ib-dynload', '/Users/alexandrodisla/Library/Python/3.7/lib/python/site-packages', '/Library/Frameworks/Python.framework/Versions/3.7/l
ib/python3.7/site-packages']
```

### packages

A package is a container for 1 or more modules

- create a subdir
- put the dsired modules in it
- make sure to create a new file inside that subdir called: `__init__.py` (**it's empty** for now)

> python will consider this files a package

APP.py

```python
from collections import namedtuple
# the package is ecommerce
# module is sales
from ecommerce.sales import hello, classico
hello()

classico()

Point = namedtuple("Point", ["x", "y"])
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)
p3 = Point(x=1, y=2)

print(p1.x)
```

Ecommerce/Sales.py

```python
import sys


def hello():
    print("from sales")


def classico():
    print("from sales")


print(sys.path)
```

Ecommerce/Sales.py

```python
# __init__.py is empty (For now)
```

Another \***\*pycache\*\*** is created.

BASH

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
['/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python37.zip', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/lib-dynload', '/Users/alexandrodisla/Library/Python/3.7/lib/python/site-packages', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages']
from sales
from sales
1

[Done] exited with code=0 in 0.054 seconds
```

### Sub Packages

IF the packages becomes to large. Break it into subpackages

- it needs a `__init__.py`

we move or put thr modules.

Now in our APP.PY

```python
from collections import namedtuple
# the package is ecommerce
# module is sales
from ecommerce.shopping.sales import hello, classico
hello()

classico()

Point = namedtuple("Point", ["x", "y"])
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)
p3 = Point(x=1, y=2)

print(p1.x)
```

Still ouput the same. **shopping** is the sub-packages.

### Intra-packages references

We added a sub-package named customer and module contact. we can connect contact and sales.

```python
# contact
def contact_info():
    print("Customer A")

# sales
import sys
# absolute import
from ecommerce.customer import contact
# relative import
# from ..customrt import contact


def hello():
    print("from sales")


def classico():
    print("from sales")


print(sys.path)

contact.contact_info()

```

```bash
Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
['/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python37.zip', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/lib-dynload', '/Users/alexandrodisla/Library/Python/3.7/lib/python/site-packages', '/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages']
Customer A
from sales
from sales
1

[Done] exited with code=0 in 0.309 seconds
```

### Dir function

We can see the gut of our modules

`print(dir(sales))`

### Modules as Scripts

WE can write the initialization of our packages.

> Just a simple print in the `__init__.py` files

**The name of a module that start a program is `__main__`.**

```python
print("where you put it:", __name__)
```

`__name__` of the module (remember dir)
