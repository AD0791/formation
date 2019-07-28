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

```python
In [12]:     # ajouter tags
    ...:     def add_tags(self, tag):
    ...:         self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1
    ...:
    ...:     # read a tag like this instance["tag"].
    ...:     # __getitem__ seems to be on the documentation.
    ...:     # In [9]: cloud["python"]
    ...:     # Out[9]: 6
    ...:     # We can only read only
    ...:     def __getitem__(self, tag):
    ...:         return self.tags.get(tag.lower(), 0)
    ...:
    ...:     # we need to implement that behavior instance["tag"] = value/count
    ...:     # __setitem__ method need to be implemented
    ...:     def __setitem__(self, tag, count):
    ...:         self.tags[tag.lower()] = count
    ...:
    ...:

In [13]: cloud = TagCloud()

In [14]: cloud.add_tags("Python")

In [15]: cloud.add_tags("Python")

In [16]: cloud.add_tags("Python")

In [17]: cloud.add_tags("Python")

In [18]: cloud.add_tags("Python")

In [19]: cloud.add_tags("Python")

In [20]: cloud.add_tags("Python")

In [21]: cloud.add_tags("Javascript")

In [22]: cloud.add_tags("Javascript")

In [23]: cloud.add_tags("Javascript")

In [24]: cloud.add_tags("Javascript")

In [25]: cloud.add_tags("Javascript")

In [26]: cloud.tags
Out[26]: {'python': 7, 'javascript': 5}

In [27]: cloud["python"]
Out[27]: 7

In [28]: cloud["Javascript"]
Out[28]: 5

In [29]: cloud["Ruby"] = 6

In [30]: cloud.tags
Out[30]: {'python': 7, 'javascript': 5, 'ruby': 6}

In [31]: cloud["Javascript"] = 7

In [32]: cloud.tags
Out[32]: {'python': 7, 'javascript': 7, 'ruby': 6}

In [33]: cloud["Ruby"] = 7

In [34]: cloud.tags
Out[34]: {'python': 7, 'javascript': 7, 'ruby': 7}

In [35]: cloud.__getitem__("ruby")
Out[35]: 7

In [36]: cloud.__setitem__("R",3)

In [37]: cloud.tags
Out[37]: {'python': 7, 'javascript': 7, 'ruby': 7, 'r': 3}


In [3]: cloud.tags
   ...: cloud["python"]
   ...: cloud["Javascript"]
   ...: cloud["Ruby"] = 6
   ...: cloud.tags
   ...: cloud["Javascript"] = 7
   ...: cloud.tags
   ...: cloud["Ruby"] = 7
   ...: cloud.tags
   ...: cloud.__getitem__("ruby")
   ...: cloud.__setitem__("R", 3)
   ...: cloud.tags
   ...: len(cloud)

In [5]:
   ...: cloud["Ruby"] = 7
   ...:
   ...: cloud.tags
   ...:
   ...: cloud.__getitem__("ruby")
   ...:

In [7]:     # Out[9]: 6
   ...:     # We can only read only
   ...:     def __getitem__(self, tag):
   ...:         return self.tags.get(tag.lower(), 0)
   ...:
   ...:     # we need to implement that behavior instance["tag"] = value/count
   ...:     # __setitem__ method need to be implemented
   ...:     def __setitem__(self, tag, count):
   ...:         self.tags[tag.lower()] = count
   ...:
   ...:     # get the lenght of the instance
   ...:     def __len__(self):
   ...:         return len(self.tags)
   ...:
   ...:     # allow the instance to be iterable.
   ...:     def __iter__(self):
   ...:         return iter(self.tags)
   ...:

In [8]: cloud = TagCloud()

In [9]: cloud.add_tags("Python")
   ...: cloud.add_tags("Python")
   ...: cloud.add_tags("Python")
   ...: cloud.add_tags("Python")
   ...: cloud.add_tags("Python")
   ...: cloud.add_tags("Python")
   ...: cloud.add_tags("Python")
   ...: cloud.add_tags("Javascript")
   ...: cloud.add_tags("Javascript")
   ...: cloud.add_tags("Javascript")
   ...: cloud.add_tags("Javascript")
   ...: cloud.add_tags("Javascript")
   ...:
   ...:

In [10]: cloud.tags
Out[10]: {'python': 7, 'javascript': 5}

In [11]: cloud["python"]
Out[11]: 7

In [12]: cloud["Javascript"]
Out[12]: 5

In [13]: cloud["Ruby"] = 6

In [14]: cloud.tags
Out[14]: {'python': 7, 'javascript': 5, 'ruby': 6}

In [15]: cloud["Ruby"] = 7

In [16]: cloud.tags
Out[16]: {'python': 7, 'javascript': 5, 'ruby': 7}

In [17]: cloud.__getitem__("ruby")
Out[17]: 7

In [18]: cloud.__setitem__("R", 3)
    ...:

In [19]: cloud.tags
Out[19]: {'python': 7, 'javascript': 5, 'ruby': 7, 'r': 3}

In [20]: len(cloud)
Out[20]: 4

In [21]: # Iteration
    ...: for val in cloud:
    ...:     print(val, cloud.tags[val])
    ...:
python 7
javascript 5
ruby 7
r 3
```

#### The TagCloud class (+)

```python
class TagCloud:
    def __init__(self):
        self.tags = {}

    # ajouter tags
    def add_tags(self, tag):
        self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1

    # read a tag like this instance["tag"].
    # __getitem__ seems to be on the documentation.
    # In [9]: cloud["python"]
    # Out[9]: 6
    # We can only read only
    def __getitem__(self, tag):
        return self.tags.get(tag.lower(), 0)

    # we need to implement that behavior instance["tag"] = value/count
    # __setitem__ method need to be implemented
    def __setitem__(self, tag, count):
        self.tags[tag.lower()] = count

    # get the lenght of the instance
    def __len__(self):
        return len(self.tags)

    # allow the instance to be iterable.
    def __iter__(self):
        return iter(self.tags)


# Testing the class
cloud = TagCloud()

cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")

cloud.tags

cloud["python"]

cloud["Javascript"]

cloud["Ruby"] = 6

cloud.tags

cloud["Javascript"] = 7

cloud.tags

cloud["Ruby"] = 7

cloud.tags

cloud.__getitem__("ruby")

cloud.__setitem__("R", 3)

cloud.tags

len(cloud)

# Iteration
for val in cloud:
    print(val, cloud.tags[val])
```

### Private members

The class that we build has a huge flow: `cloud.tags["Python"]`

1. Public variable: `self.tags`
2. Private variable: `self.__tags`

Class after refactoring

```python
class TagCloud:
    def __init__(self):
        self.__tags = {}

    # ajouter __tags
    def add(self, tag):
        self.__tags[tag.lower()] = self.__tags.get(tag.lower(), 0) + 1

    # read a tag like this instance["tag"].
    # __getitem__ seems to be on the documentation.
    # In [9]: cloud["python"]
    # Out[9]: 6
    # We can only read only
    def __getitem__(self, tag):
        return self.__tags.get(tag.lower(), 0)

    # we need to implement that behavior instance["tag"] = value/count
    # __setitem__ method need to be implemented
    def __setitem__(self, tag, count):
        self.__tags[tag.lower()] = count

    # get the lenght of the instance
    def __len__(self):
        return len(self.__tags)

    # allow the instance to be iterable.
    def __iter__(self):
        return iter(self.__tags)
```

But we technically still can access the private member

```python
In [2]: cloud.tags
---------------------------------------------------------------------------
AttributeError                            Traceback (most recent call last)
<ipython-input-2-8af470852f82> in <module>()
----> 1 cloud.tags

AttributeError: 'TagCloud' object has no attribute 'tags'

In [3]: cloud.__tags
---------------------------------------------------------------------------
AttributeError                            Traceback (most recent call last)
<ipython-input-3-72230a52544b> in <module>()
----> 1 cloud.__tags

AttributeError: 'TagCloud' object has no attribute '__tags'

# Class still work perfectly
In [4]: cloud["python"]
Out[4]: 7

# the magic of __dict__ (built-in magic method)
In [6]: cloud.__dict__
Out[6]: {'_TagCloud__tags': {'python': 7, 'javascript': 5}}

# We see how to access the private member now
In [7]: cloud._TagCloud__tags
Out[7]: {'python': 7, 'javascript': 5}
```

#### TagCloud Class

```python
class TagCloud:
    def __init__(self):
        self.__tags = {}

    # ajouter __tags
    def add(self, tag):
        self.__tags[tag.lower()] = self.__tags.get(tag.lower(), 0) + 1

    # read a tag like this instance["tag"].
    # __getitem__ seems to be on the documentation.
    # In [9]: cloud["python"]
    # Out[9]: 6
    # We can only read only
    def __getitem__(self, tag):
        return self.__tags.get(tag.lower(), 0)

    # we need to implement that behavior instance["tag"] = value/count
    # __setitem__ method need to be implemented
    def __setitem__(self, tag, count):
        self.__tags[tag.lower()] = count

    # get the lenght of the instance
    def __len__(self):
        return len(self.__tags)

    # allow the instance to be iterable.
    def __iter__(self):
        return iter(self.__tags)


# Testing the class
cloud = TagCloud()

cloud.add("Python")
cloud.add("Python")
cloud.add("Python")
cloud.add("Python")
cloud.add("Python")
cloud.add("Python")
cloud.add("Python")

cloud.add("Javascript")
cloud.add("Javascript")
cloud.add("Javascript")
cloud.add("Javascript")
cloud.add("Javascript")
```

### Properties

Control over an attribute in a class.

```python
In [1]: class Product:
   ...:
   ...:     def __init__(self, price):
   ...:         self.price = price
   ...:
   ...:

In [2]: Product(-50)
Out[2]: <__main__.Product at 0x109fc63d0>

In [3]: Product(-50).price
Out[3]: -50
```

> But as a real example that doesn't make any sense.

A way to fixed it:

- make price private.
- use a custom getter and setter

```python
In [6]:     def __init__(self, price):
   ...:         # make it private
   ...:         self.set_price(price)
   ...:
   ...:     # getter
   ...:     def get_price(self):
   ...:         return self.__price
   ...:
   ...:     # setter
   ...:     def set_price(self, value):
   ...:         if value < 0:
   ...:             raise ValueError("can't be negative number")
   ...:         self.__price = value
   ...:
   ...:
   ...: Product(-50)
   ...:
   ...:
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-6-6465e0cfb18e> in <module>()
     16
     17
---> 18 Product(-50)

<ipython-input-6-6465e0cfb18e> in __init__(self, price)
      3     def __init__(self, price):
      4         # make it private
----> 5         self.set_price(price)
      6
      7     # getter

<ipython-input-6-6465e0cfb18e> in set_price(self, value)
     12     def set_price(self, value):
     13         if value < 0:
---> 14             raise ValueError("can't be negative number")
     15         self.__price = value
     16

ValueError: can't be negative number
```

> In Python we have a built-in `property` method that wrap up our getter and setter.

#### RAPPEL on PRivate

1. A private variable: `__price = value`
2. A private method: `def __price():`

we can use a decorator to create private method also:

Just as the `@classmethod` decorator (custom constructor)

By calling the `price = property(get_price, set_price)` explicit we sill can access the getter and setter. It makes the code noisy.

We need the to use a decorator to simplify our code and hide the custom getter and setter.

#### We set the custom getter and setter with decorator

```python
In [28]:         self.price = price
    ...:
    ...:     # getter
    ...:     @property
    ...:     def price(self):
    ...:         return self.__price
    ...:
    ...:     # setter
    ...:     @price.setter
    ...:     def price(self, value):
    ...:         if value < 0:

In [30]:         self.price = price
    ...:
    ...:     # getter
    ...:     @property
    ...:     def price(self):
    ...:         return self.__price
    ...:
    ...:     # setter
    ...:     @price.setter
    ...:     def price(self, value):
    ...:         if value < 0:
    ...:             raise ValueError("can't be negative number")
    ...:         self.__price = value
    ...:
    ...:
    ...: prix = Product(10)
    ...:
    ...:

In [31]: prix.price
Out[31]: 10

In [32]: prix.price = 30

In [33]: prix.price
Out[33]: 30

In [34]: prix.price  = -50
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-34-58daa5268f7c> in <module>()
----> 1 prix.price  = -50

<ipython-input-30-2234c80d5d43> in price(self, value)
     14     def price(self, value):
     15         if value < 0:
---> 16             raise ValueError("can't be negative number")
     17         self.__price = value
     18

ValueError: can't be negative number
```

#### Product class

```python
class Product:

    def __init__(self, price):
        # we can use price like a regular property now
        self.price = price

    # getter
    @property
    def price(self):
        return self.__price

    # setter
    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("can't be negative number")
        self.__price = value


prix = Product(10)
```

### Inheritance
