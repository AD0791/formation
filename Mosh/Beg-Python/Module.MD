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
