from collections import namedtuple
from sales import hello, classico

hello()

classico()

Point = namedtuple("Point", ["x", "y"])
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)
p3 = Point(x=1, y=2)
