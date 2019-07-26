# Python Mastery

## : Beginner Grid-3

Class: is a blueprint for creating new objects.
Object: is an instance of class.

### Creating a Class

```python
In [1]: class Point:
   ...:     # class method
   ...:     def hello():
   ...:         print("Hello Class")
   ...:     # instance method
   ...:
   ...:     def bonjour(self, name="Disla"):
   ...:         print(f"Bonjour {name}")
   ...:
   ...:

# class method
In [2]: Point.hello()
Hello Class

# from the class we can't access the instance
In [3]: Point.bonjour()
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-3-d946005d4e1e> in <module>()
----> 1 Point.bonjour()

TypeError: bonjour() missing 1 required positional argument: 'self'

# Create an Instance
In [4]: point = Point()

# can't access class method
In [5]: point.hello()
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-5-834611a3fdf3> in <module>()
----> 1 point.hello()

TypeError: hello() takes 0 positional arguments but 1 was given

# can access instance method
In [6]: point.bonjour()
Bonjour Disla

In [7]: point.bonjour("class")
Bonjour class

In [8]: type(point)
Out[8]: __main__.Point

In [10]: isinstance(point, Point)
Out[10]: True
```

### Constructors

- To supply data directly to the class (the instance).

RAPPEL

```python
In [1]: def hello(*x,**y):
   ...:     print(x)
   ...:     print(y)
   ...:

In [2]: hello("hello", 1, "larissa",3, x="react", y="django")
('hello', 1, 'larissa', 3)
{'x': 'react', 'y': 'django'}
```

```python
class Point:
    # class variable
    v = 10
    # constructor

    def __init__(self, x, y):
        self.x = x
        self.y = y

    # class method
    def hello():
        print("Hello Class")
        print(v)

    # instance method
    def bonjour(self, name="Disla"):
        print(f"Bonjour {name}")

    def draw(self):
        print(f"Point: {self.x}, {self.y}")
```

```python
In [7]: p = Point(3,4)

In [8]: p.v
Out[8]: 10

In [9]: p.bonjour
Out[9]: <bound method Point.bonjour of <__main__.Point object at 0x10a717690>>

In [10]: p.bonjour()
Bonjour Disla

In [11]: p.draw()
Point: 3, 4

In [12]: Point.v
Out[12]: 10

In [13]: Point.hello()
Hello Class
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-13-5f94674eb442> in <module>()
----> 1 Point.hello()

<ipython-input-6-501f35c6098e> in hello()
     11     def hello():
     12         print("Hello Class")
---> 13         print(v)
     14
     15     # instance method

NameError: name 'v' is not defined
```

### Class attributes and Instance attributes

We can define an instance variables after instantiation because python (Just as javascript) is dynamique.

```python
In [1]:     def __init__(self, x, y):
   ...:         self.x = x
   ...:         self.y = y
   ...:
   ...:     # class method
   ...:     def hello():
   ...:         print("Hello Class")
   ...:         print(self.v)
   ...:
   ...:     # instance method
   ...:     def bonjour(self, name="Disla"):
   ...:         print(f"Bonjour {name}")
   ...:
   ...:     def draw(self):
   ...:         print(f"Point: {self.x}, {self.y}")
   ...:         print(self.v)
   ...:
   ...:

In [2]: p = Point(0,0)

In [3]: p.v
Out[3]: 10

In [4]: p.x
Out[4]: 0

In [5]: p.y
Out[5]: 0

In [6]: p.draw()
Point: 0, 0
10

In [7]: Point.hello()
Hello Class
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-7-5f94674eb442> in <module>()
----> 1 Point.hello()

<ipython-input-1-8a673a68c037> in hello()
     11     def hello():
     12         print("Hello Class")
---> 13         print(self.v)
     14
     15     # instance method

NameError: name 'self' is not defined
```

#### Custom COnstructor

- `@classmethod` decorator
- `cls` to point the class level **Constructor**

```python
class Point:
    # class variable
    v = 10

    # constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # class method Constructor
    @classmethod
    def one(cls):
        return cls(1, 1)
    # class method

    def hello():
        print("Hello Class")

    # instance method
    def bonjour(self, name="Disla"):
        print(f"Bonjour {name}")

    def draw(self):
        print(f"Point: {self.x}, {self.y}")
        # access class variable
        print(self.v)
```

```bash
In [2]: Point.hello()
Hello Class

In [3]: Point.v
Out[3]: 10

In [4]: Point.one()
Out[4]: <__main__.Point at 0x108366710>

In [5]: Point.one().x
Out[5]: 1

In [6]: Point.one().y
Out[6]: 1

In [7]:  p1= Point.one()

In [8]: p1.x
Out[8]: 1

In [9]: p1.y
Out[9]: 1

In [10]: p1.v
Out[10]: 10

In [11]: p1.bonjour()
Bonjour Disla

In [12]: p1.draw()
Point: 1, 1
10

In [13]: p1.hello()
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-13-979b40308212> in <module>()
----> 1 p1.hello()

TypeError: hello() takes 0 positional arguments but 1 was given

In [14]: p1.one()
Out[14]: <__main__.Point at 0x108390310>

# we can still have access to the custom constructor
In [15]: p2=p1.one()

In [16]: p2.x
Out[16]: 1

In [17]: p2.y
Out[17]: 1

In [18]: p2.draw()
Point: 1, 1
10

In [19]: p2.hello()
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-19-78c8c085c87e> in <module>()
----> 1 p2.hello()

TypeError: hello() takes 0 positional arguments but 1 was given
```

### Magic Methods

```python
In [1]:     @classmethod
   ...:     def one(cls):
   ...:         return cls(1, 1)
   ...:     # class method
   ...:
   ...:     def hello():
   ...:         print("Hello Class")
   ...:
   ...:     # instance method
   ...:     def bonjour(self, name="Disla"):
   ...:         print(f"Bonjour {name}")
   ...:
   ...:     def draw(self):
   ...:         print(f"Point: {self.x}, {self.y}")
   ...:         # access class variable
   ...:         print(self.v)
   ...:
   ...:

In [2]: Point.__str__
Out[2]: <slot wrapper '__str__' of 'object' objects>

In [3]: Point
Out[3]: __main__.Point

In [4]: Point(0,1)
Out[4]: <__main__.Point at 0x1056f8250>

In [23]: Point(1,1).__str__()
Out[23]: '<__main__.Point object at 0x1056ccbd0>' at 0x10561e1d0>
```

#### Override the `__str__`

```python
class Point:
    # class variable
    v = 10

    # constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # class method constructor
    @classmethod
    def one(cls):
        return cls(1, 1)
    # class method

    def hello():
        print("Hello Class")

    # instance method
    def bonjour(self, name="Disla"):
        print(f"Bonjour {name}")

    def draw(self):
        print(f"Point: {self.x}, {self.y}")
        # access class variable
        print(self.v)

    # use of magic method
    # to better represent the class
    def __str__(self):
        return f"Instance variable:[({self.x}, {self.y})]-- Class variable:{self.v}"
```

```python
In [18]: Point.__str__
Out[18]: <function __main__.Point.__str__(self)>

In [19]: Point(1,1).__str__
Out[19]: <bound method Point.__str__ of <__main__.Point object at 0x1056a8f90>>

In [20]: Point(1,1).__str__()
Out[20]: 'Instance variable:[(1, 1)]-- Class variable:10'
```

### Comparing objects

`__eq__` it's not automatically implemented.

```python

In [1]:     def hello():
   ...:         print("Hello Class")
   ...:
   ...:     # instance method
   ...:     def bonjour(self, name="Disla"):
   ...:         print(f"Bonjour {name}")
   ...:
   ...:     def draw(self):
   ...:         print(f"Point: {self.x}, {self.y}")
   ...:         # access class variable
   ...:         print(self.v)
   ...:
   ...:     # use of magic method
   ...:     # to better represent the class
   ...:     def __str__(self):
   ...:         return f"Instance variable:[({self.x}, {self.y})]-- Class variable:{self.v}"
   ...:
   ...:

In [2]: Point(1,1).__eq__(Point(1,1))
Out[2]: NotImplemented
```

We need to implement the `__eq__` magic method.

#### `__eq__`

```python
class Point:
    # class variable
    v = 10

    # constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # class method constructor
    @classmethod
    def one(cls):
        return cls(1, 1)
    # class method

    def hello():
        print("Hello Class")

    # instance method
    def bonjour(self, name="Disla"):
        print(f"Bonjour {name}")

    def draw(self):
        print(f"Point: {self.x}, {self.y}")
        # access class variable
        print(self.v)

    # use of magic method

    # to better represent the class
    def __str__(self):
        return f"Instance variable:[({self.x}, {self.y})]-- Class variable:{self.v}"

    # implementing the __eq__ for comparison purposes
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
```

```python
In [2]: Point(1,2) == Point(1,2)
Out[2]: True

In [3]: Point(1,2) == Point(1,3)
Out[3]: False

In [4]: Point(1,2).__eq__(Point(1,2))
Out[4]: True

In [5]: Point(1,2)
```

#### `__get__`

```python
In [2]: Point(90,23) > Point(9,65)
Out[2]: False

In [3]: Point(90,23) > Point(90,65)
Out[3]: False

In [4]: Point(90,123) > Point(90,65)
Out[4]: False

In [5]: Point(91,123) > Point(90,65)
Out[5]: True

In [6]: Point(91,123).__gt__(Point(90,65))
Out[6]: True
```

> when you implement the greater than operator. python will know the lesser than.

### Performing Arithmetic operation

for example : `__add__`

```python
class Point:
    # class variable
    v = 10

    # constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # class method constructor
    @classmethod
    def one(cls):
        return cls(1, 1)
    # class method

    def hello():
        print("Hello Class")

    # instance method
    def bonjour(self, name="Disla"):
        print(f"Bonjour {name}")

    def draw(self):
        print(f"Point: {self.x}, {self.y}")
        # access class variable
        print(self.v)

    # use of magic method

    # to better represent the class
    def __str__(self):
        return f"Instance variable:[({self.x}, {self.y})]-- Class variable:{self.v}"

    # implementing the __eq__ for comparison purposes
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    # implementing the __gt__ for comparison purposes
    def __gt__(self, other):
        return self.x > other.x and self.y > other.y

    # implementing the __gt__ for comparison purposes
    def __add__(self, other):
        return self.x + other.x and self.y + other.y
```

```python

In [9]: Point(10,12) + Point(10,12)
Out[9]: 24

In [10]: Point(10,12).__add__( Point(10,12))
Out[10]: 24
```

> But the proper way to create another object from that mathematical operation is :

```python
class Point:
    # class variable
    v = 10

    # constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # class method constructor
    @classmethod
    def one(cls):
        return cls(1, 1)
    # class method

    def hello():
        print("Hello Class")

    # instance method
    def bonjour(self, name="Disla"):
        print(f"Bonjour {name}")

    def draw(self):
        print(f"Point: {self.x}, {self.y}")
        # access class variable
        print(self.v)

    # use of magic method

    # to better represent the class
    def __str__(self):
        return f"Instance variable:[({self.x}, {self.y})]-- Class variable:{self.v}"

    # implementing the __eq__ for comparison purposes
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    # implementing the __gt__ for comparison purposes
    def __gt__(self, other):
        return self.x > other.x and self.y > other.y

    # implementing __add__ (addition) for math operation
    def __add__(self, other):
        # return self.x + other.x and self.y + other.y
        return Point(self.x+other.x, self.y+other.y)
```

```python
In [13]: Point(10,12) + Point(10,12)
Out[13]: <__main__.Point at 0x10bd80b50>

In [14]: Point(10,12).__add__( Point(10,12))
Out[14]: <__main__.Point at 0x10be39990>

In [15]: Point(10,12).__add__( Point(10,12)).__str__()
Out[15]: 'Instance variable:[(20, 24)]-- Class variable:10'
```

#### THE CLASS POINT:

```python
class Point:
    # class variable
    v = 10

    # constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # class method constructor
    @classmethod
    def one(cls):
        return cls(1, 1)
    # class method

    def hello():
        print("Hello Class")

    # instance method
    def bonjour(self, name="Disla"):
        print(f"Bonjour {name}")

    def draw(self):
        print(f"Point: {self.x}, {self.y}")
        # access class variable
        print(self.v)

    # use of magic method

    # to better represent the class
    def __str__(self):
        return f"Instance variable:[({self.x}, {self.y})]-- Class variable:{self.v}"

    # implementing the __eq__ for comparison purposes
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    # implementing the __gt__ for comparison purposes
    def __gt__(self, other):
        return self.x > other.x and self.y > other.y

    # implementing __add__ (addition) for math operation
    def __add__(self, other):
        # return self.x + other.x and self.y + other.y
        return Point(self.x+other.x, self.y+other.y)
```

### Making CUstom Containers
