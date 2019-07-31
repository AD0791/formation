from ecommerce.shopping import sales  # for dir purposes
from collections import namedtuple
from ecommerce.shopping.sales import hello, classico
hello()

classico()

Point = namedtuple("Point", ["x", "y"])
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)
p3 = Point(x=1, y=2)

print(p1.x)

print(dir(sales))
print(sales.__name__)
print(sales.__package__)
print(sales.__file__)
