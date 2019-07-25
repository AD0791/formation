# Python Mastery

## : Beginner Grid-2

List `[]`, Tuples `()`, Set `{}`, Dictionaries `{key:value}`, Array `from array import array \n array("typecode", [elements])`

### List

```python
matrix = [[1,2],[34,45]]
zeros = [0]*5
splitStrings = list("Hello World!")
combined = zeros + splitStrings
list(range(100))
len(list(range(100)))
```

#### Accessing elements

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ ipython
Python 3.7.4 (v3.7.4:e09359112e, Jul  8 2019, 14:54:52)
Type 'copyright', 'credits' or 'license' for more information
IPython 6.5.0 -- An enhanced Interactive Python. Type '?' for help.

In [1]: letters  = ["hello"] + [0]*2 + [2]*4 + [5]*5 + [6]*4

In [2]: letters
Out[2]: ['hello', 0, 0, 2, 2, 2, 2, 5, 5, 5, 5, 5, 6, 6, 6, 6]

In [3]: letters[:]
Out[3]: ['hello', 0, 0, 2, 2, 2, 2, 5, 5, 5, 5, 5, 6, 6, 6, 6]

In [4]: letters[::1]
Out[4]: ['hello', 0, 0, 2, 2, 2, 2, 5, 5, 5, 5, 5, 6, 6, 6, 6]

In [5]: letters[::2]
Out[5]: ['hello', 0, 2, 2, 5, 5, 6, 6]

In [6]: letters[::3]
Out[6]: ['hello', 2, 2, 5, 6, 6]

In [7]: letters[::4]
Out[7]: ['hello', 2, 5, 6]

In [8]: letters[::5
   ...: ]
Out[8]: ['hello', 2, 5, 6]

In [9]: letters[::6]
Out[9]: ['hello', 2, 6]

In [10]: letters[::7]
Out[10]: ['hello', 5, 6]

In [11]: letters[::8]
Out[11]: ['hello', 5]

In [12]: letters[::9]
Out[12]: ['hello', 5]

In [13]: letters[::10]
Out[13]: ['hello', 5]

In [14]: letters[::11]
Out[14]: ['hello', 5]

In [15]: letters[::12]
Out[15]: ['hello', 6]

In [16]: letters[::13]
Out[16]: ['hello', 6]

In [17]: letters[::14]
Out[17]: ['hello', 6]

In [18]: letters[::15]
Out[18]: ['hello', 6]

In [19]: letters[::16]
Out[19]: ['hello']

In [20]: letters[::17]
Out[20]: ['hello']

In [21]: letters[::18]
Out[21]: ['hello']
```

`::number` with `number>0` is a step

```bash
In [1]: n = list(range(20))

In [2]: n
Out[2]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

In [3]: n[::-1]
Out[3]: [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

In [4]: n[::-2]
Out[4]: [19, 17, 15, 13, 11, 9, 7, 5, 3, 1]

In [5]: n[::2]
Out[5]: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

In [6]: n[::3]
Out[6]: [0, 3, 6, 9, 12, 15, 18]

In [7]: n[1::3]
Out[7]: [1, 4, 7, 10, 13, 16, 19]

In [8]: n[::3]
Out[8]: [0, 3, 6, 9, 12, 15, 18]

In [9]: n[::-3]
Out[9]: [19, 16, 13, 10, 7, 4, 1]

```

#### Unpacking

```python
#possibility 1
numbers = [1,2,3]
first = numbers[0]
second = numbers[1]
third = numbers[2]

# possibility 2
first, second, third = numbers
```

```bash
In [13]: num = [1,2,3]

In [14]: un, *deux = num

In [15]: un
Out[15]: 1

In [16]: deux
Out[16]: [2, 3]
```

#### looping over list properly

we can get index and value with a build-in fonction named `enumerate`.

```python
n = ["letter", 12, 33]
for i in enumerate(n):
    print(i)
    print(i[0], i[1])
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
(0, 'letter')
0 letter
(1, 12)
1 12
(2, 33)
2 33

[Done] exited with code=0 in 0.077 seconds
```

#### Adding and Removing items

- add at the end `append`
- add at a specific position `insert`

* remove element at the end `pop`
* remove an element with all his occurence `remove`
* `del letters[1:2]` remove these slice element
* `letters.clear` remove all elements.

#### find

`.index` find index of element

```python
In [18]: letters = [1,2,34,5,"sarita"]

In [19]: letters.count('sarita')
Out[19]: 1

In [20]: if "sarita" in letters:
    ...:     print(letters.index("sarita"))
    ...:
4
```

#### Sorting List

- `list.sort()`
- `list.sort(reverse=True)`

```python
numbers = [12, 32, 43, 25, 56, 76, 90]
print(sorted(numbers, reverse=True))

numbers = [12, 32, 43, 25, 56, 76, 90]
print(sorted(numbers))
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
[90, 76, 56, 43, 32, 25, 12]

[Done] exited with code=0 in 0.082 seconds
#########################################################################################################################################################
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
[12, 25, 32, 43, 56, 76, 90]

[Done] exited with code=0 in 0.069 seconds
```

```python
numbers = [12, 32, 43, 25, 56, 76, 90]
numbers.sort()
print(numbers)
numbers.sort(reverse=True)
print(numbers)
```

```bash
Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
[12, 25, 32, 43, 56, 76, 90]
[Done] exited with code=0 in 0.069 seconds

In [1]: numbers = [12, 32, 43, 25, 56, 76, 90]
In [2]: numbers.sort(reverse=True)
In [3]: numbers
Out[3]: [90, 76, 56, 43, 32, 25, 12]
```

#### Lambda

```python
#import pdb

ltuples = [
    ('jason', 9),
    ('Verstapen', 2),
    ('Lecler', 3)
]


ltuples.sort(key=lambda item: item[1])
```

```python
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
[('Verstapen', 2), ('Lecler', 3), ('jason', 9)]
```

#### map

```bash
In [1]: #import pdb
   ...:
   ...: lt = [
   ...:     ('jason', 9),
   ...:     ('Verstapen', 2),
   ...:     ('Lecler', 3)
   ...: ]
   ...:

In [2]: eml = []

In [3]: for item in lt:
   ...:     eml.append(item[1])
   ...:

In [4]: eml
Out[4]: [9, 2, 3]

In [5]: x = map(lambda item: item[1], lt)

In [6]: x
Out[6]: <map at 0x10418ac50>

In [7]: list(x)
Out[7]: [9, 2, 3]
```

#### Filter

```python

In [1]: f = [
   ...:     ('Bottas', 9),
   ...:     ('Verstapen', 2),
   ...:     ('Lecler', 3)
   ...: ]
   ...:


In 2: x = filter(lambda item: item[1] < 9, f )

In [3]: x
Out[3]: <filter at 0x104ef3250>

In [4]: list(x)
Out[4]: [('Verstapen', 2), ('Lecler', 3)]
```

#### list comprehension

List comprehension for filtering and mapping data.

```python
f = [
    ('Bottas', 9),
    ('Verstapen', 2),
    ('Lecler', 3)
]
# instead of : prices = list(map(lambda item:item[1],f))
In [6]: prices = [item[1] for item in f]

In [7]: prices
Out[7]: [9, 2, 3]

# instead of : new = list(filter(lambda item: item[1] <9,f))
In [8]: new = [item for item in f if item[1] < 9 ]

In [9]: new
Out[9]: [('Verstapen', 2), ('Lecler', 3)]

```

#### Zip function

```python
In [10]: list1 = [1,2,3]

In [11]: list2 = [4,5,6]

In [12]: list(zip("abc",list1,list2))
Out[12]: [('a', 1, 4), ('b', 2, 5), ('c', 3, 6)]

In [13]: list(zip("abcd",list1,list2))
Out[13]: [('a', 1, 4), ('b', 2, 5), ('c', 3, 6)]

In [14]: list2 = [4,5,6,7]

In [15]: list(zip("abcd",list1,list2))
Out[15]: [('a', 1, 4), ('b', 2, 5), ('c', 3, 6)]

In [16]: list1 = [1,2,3,7]

In [17]: list(zip("abcd",list1,list2))
Out[17]: [('a', 1, 4), ('b', 2, 5), ('c', 3, 6), ('d', 7, 7)]
```

### Stacks (list)

LIFO : Last In First Out

It's about notion of browsing seesion, we use a list object and built-in methods to make every thing work.

### Queues (list)

FIFO: First In First Out

```python
In [9]: from collections import deque
   ...:
   ...: queue = deque([])
   ...:
   ...: queue.append(1)
   ...: queue.append(2)
   ...: queue.append(3)
   ...: queue.append(4)
   ...: queue.append(5)
   ...: queue.appendleft(0)
   ...:
   ...:

In [10]: queue
Out[10]: deque([0, 1, 2, 3, 4, 5])

In [11]: queue.pop()
Out[11]: 5

In [12]: queue
Out[12]: deque([0, 1, 2, 3, 4])

In [13]: queue.popleft()
Out[13]: 0

In [14]: queue
Out[14]: deque([1, 2, 3, 4])
```

### Tuples

It's an immutable set of collections.

```python
In [8]: point = ("tuple", 1)

In [9]: piont = "tuple",2

In [10]: point
Out[10]: ('tuple', 1)

In [11]: piont
Out[11]: ('tuple', 2)

In [12]: point + piont
Out[12]: ('tuple', 1, 'tuple', 2)

In [13]: point * 2
Out[13]: ('tuple', 1, 'tuple', 1)

In [14]: piont * 3
Out[14]: ('tuple', 2, 'tuple', 2, 'tuple', 2)

In [15]: newTuple = tuple([2,3,4,5,6,7])

In [16]: newTuple
Out[16]: (2, 3, 4, 5, 6, 7)

In [17]: list(newTuple)
Out[17]: [2, 3, 4, 5, 6, 7]

In [18]: newTuple[:-1]
Out[18]: (2, 3, 4, 5, 6)

In [19]: newTuple[::-1]
Out[19]: (7, 6, 5, 4, 3, 2)

In [20]: newTuple[-1]
Out[20]: 7

In [21]: newTuple[::2]
Out[21]: (2, 4, 6)

In [22]: x,*y,z = newTuple

In [23]: x
Out[23]: 2

In [24]: y
Out[24]: [3, 4, 5, 6]

In [25]: z
Out[25]: 7

In [26]: newTuple
Out[26]: (2, 3, 4, 5, 6, 7)
```

### Variables swapping

```python
In [27]: x =10
In [28]: y =11
In [29]: x, y = y, x # unpacking a tuple
In [30]: x
Out[30]: 11
In [31]: y
Out[31]: 10
```

### Array

Arrays are more efficient than list.

> the list methods are applicable

```python
In [39]: from array import array
    ...:
    ...: numbers = array("i", [1, 2, 3, 4])
    ...: numbers
    ...:
    ...:
Out[39]: array('i', [1, 2, 3, 4])

In [40]: numbers.count(2)
Out[40]: 1

In [41]: numbers.append(5)

In [42]: numbers
Out[42]: array('i', [1, 2, 3, 4, 5])

In [43]: numbers[0] = 1.0
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-43-05061351cdfc> in <module>()
----> 1 numbers[0] = 1.0

TypeError: integer argument expected, got float

In [44]: numbers[0] = "1"
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-44-636ac73ce675> in <module>()
----> 1 numbers[0] = "1"

TypeError: an integer is required (got type str)
```

### Set

We can't access element using an index

```python
In [46]: numbers = [1,2,3,4,4,5,5,6,6,6,6,7,7,7,8]

In [47]: setnum = set(numbers)

In [48]: setnum
Out[48]: {1, 2, 3, 4, 5, 6, 7, 8}

In [49]: numbers
Out[49]: [1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8]

In [50]: setnum.add(9)

In [51]: setnum
Out[51]: {1, 2, 3, 4, 5, 6, 7, 8, 9}

In [52]: setnum.add(9)

In [53]: setnum
Out[53]: {1, 2, 3, 4, 5, 6, 7, 8, 9}

In [54]: len(setnum)
Out[54]: 9

In [55]: setnum.remove(9)

In [56]: setnum
Out[56]: {1, 2, 3, 4, 5, 6, 7, 8}

In [57]: second = {1,3,5,6,8}

In [58]: union = setnum | second

In [59]: union
Out[59]: {1, 2, 3, 4, 5, 6, 7, 8}

In [60]: second = {1,3,5,6,8,10}

In [61]: union = setnum | second

In [62]: union
Out[62]: {1, 2, 3, 4, 5, 6, 7, 8, 10}

In [63]: intersection = setnum & second

In [64]: intersection
Out[64]: {1, 3, 5, 6, 8}

In [65]: difference = setnum - second

In [66]: difference
Out[66]: {2, 4, 7}

In [67]: symDifference = setnum ^ second

In [68]: symDifference
Out[68]: {2, 4, 7, 10}

In [69]: setnum[0]
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-69-8a213487cc2f> in <module>()
----> 1 setnum[0]

TypeError: 'set' object is not subscriptable
```

### Dictionaries

Key-value paires

```python
In [71]: dictio = {"o": 90, "s": 85}

In [72]: dictio
Out[72]: {'o': 90, 's': 85}

In [73]: newDic = dict(x=100,y=200,z=400)

In [74]: newDic
Out[74]: {'x': 100, 'y': 200, 'z': 400}

In [76]: dictio["o"]
Out[76]: 90

In [77]: dictio["n"] = 450

In [78]: dictio
Out[78]: {'o': 90, 's': 85, 'n': 450}

In [80]: dictio.items()
Out[80]: dict_items([('o', 90), ('s', 85), ('n', 450)])

In [82]: for x in dictio.items():
    ...:    print( x[0])
    ...:
    ...:
o
s
n

In [83]: for x in dictio.items():
    ...:    print( x[1])
    ...:
    ...:
90
85
450

In [84]: for x in dictio.items():
    ...:    print( x)
    ...:
    ...:
('o', 90)
('s', 85)
('n', 450)

In [85]: for key, value  in dictio.items():
    ...:    print( key, value)
    ...:
    ...:
o 90
s 85
n 450
```

### Dict comprehensions (Dict)

```python

In [87]: values = []

In [88]: for x in range(10):
    ...:     values.append(x*2)
    ...:

In [89]: values
Out[89]: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

In [90]: newval = [x*2 for x in range(10)]

In [91]: newval
Out[91]: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

In [92]: newset = {x*2 for x in range(10)}

In [93]: newset
Out[93]: {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}

In [94]: gen  = (x*2 for x in range(10))

In [95]: gen
Out[95]: <generator object <genexpr> at 0x102d38e50>

In [96]: newtuple[1]
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-96-532ce7c74eb2> in <module>()
----> 1 newtuple[1]

TypeError: 'generator' object is not subscriptable

In [97]: newdict = {x: x*2 for x in range(10)}

In [98]: newdict
Out[98]: {0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12, 7: 14, 8: 16, 9: 18}
```

### GEnerator expressions

For memory efficiency

```python
In [105]: gen  = (x*2 for x in range(10))
     ...:

In [106]: for x in gen:
     ...:     print(x)
     ...:
0
2
4
6
8
10
12
14
16
18
```

```python
In [1]: In [105]: gen  = (x*2 for x in range(1000))

In [2]: gen
Out[2]: <generator object <genexpr> at 0x10d93cb50>

In [3]: In [105]: ly  = [x*2 for x in range(1000)]

In [4]: import sys from getsizeof
  File "<ipython-input-4-78a7fbbc15b1>", line 1
    import sys from getsizeof
                  ^
SyntaxError: invalid syntax


In [5]: from sys import getsizeof

In [6]: getsizeof(gen)
Out[6]: 128

In [7]: getsizeof(ly)
Out[7]: 9032
```

### Unpacking Operators

IN this case the `*variable` syntax can be use as an unpacking operators. Just like a spread function in javascript.

```python
In [9]: numbers = [10,90,3,45]

In [12]: [1, *numbers]
Out[12]: [1, 10, 90, 3, 45]

In [14]: print(*numbers)
10 90 3 45

In [15]: values = [*range(5), *"hello"]

In [16]: values
Out[16]: [0, 1, 2, 3, 4, 'h', 'e', 'l', 'l', 'o']
```

```python
In [5]: x = dict(a=23,b="joshua", c= 240)

In [6]: x
Out[6]: {'a': 23, 'b': 'joshua', 'c': 240}

In [7]: ruiz = [23,"ruiz,250]
  File "<ipython-input-7-13293e2ee44b>", line 1
    ruiz = [23,"ruiz,250]
                         ^
SyntaxError: EOL while scanning string literal


In [8]: ruiz = [23,"ruiz",250]

In [9]: fight = ["mgm", *ruiz, "oponent2", **x]
  File "<ipython-input-9-65a2f8d13171>", line 1
    fight = ["mgm", *ruiz, "oponent2", **x]
                                        ^
SyntaxError: invalid syntax


In [10]: fight = ["mgm", *ruiz, "oponent2"]

In [11]: fight
Out[11]: ['mgm', 23, 'ruiz', 250, 'oponent2']

In [12]: joshua = {**x}

In [13]: joshua
Out[13]: {'a': 23, 'b': 'joshua', 'c': 240}

In [14]: joshua = [**x]
  File "<ipython-input-14-a4bf594b470c>", line 1
    joshua = [**x]
               ^
SyntaxError: invalid syntax


In [15]: r2 = {*ruiz}

In [16]: r2
Out[16]: {23, 250, 'ruiz'}
```

### TEST

Unsorted

```python
In [11]: from pprint import pprint
    ...: sentence = "This is a common interview question"
    ...:
    ...:
    ...: def word_count(word):
    ...:     char = {}
    ...:     for mo in sentence:
    ...:         if mo in char:
    ...:             char[mo] += 1
    ...:         else:
    ...:             char[mo] = 1
    ...:     pprint(char)
    ...:     return char
    ...:
    ...:
    ...: word_count(sentence)
    ...:
    ...:
{' ': 5,
 'T': 1,
 'a': 1,
 'c': 1,
 'e': 3,
 'h': 1,
 'i': 5,
 'm': 2,
 'n': 3,
 'o': 3,
 'q': 1,
 'r': 1,
 's': 3,
 't': 2,
 'u': 1,
 'v': 1,
 'w': 1}
Out[11]:
{'T': 1,
 'h': 1,
 'i': 5,
 's': 3,
 ' ': 5,
 'a': 1,
 'c': 1,
 'o': 3,
 'm': 2,
 'n': 3,
 't': 2,
 'e': 3,
 'r': 1,
 'v': 1,
 'w': 1,
 'q': 1,
 'u': 1}
```

Sorted asc

```python

In [13]: sorted(word_count(sentence).items(),key=lambda kv: kv[1])
{' ': 5,
 'T': 1,
 'a': 1,
 'c': 1,
 'e': 3,
 'h': 1,
 'i': 5,
 'm': 2,
 'n': 3,
 'o': 3,
 'q': 1,
 'r': 1,
 's': 3,
 't': 2,
 'u': 1,
 'v': 1,
 'w': 1}
Out[13]:
[('T', 1),
 ('h', 1),
 ('a', 1),
 ('c', 1),
 ('r', 1),
 ('v', 1),
 ('w', 1),
 ('q', 1),
 ('u', 1),
 ('m', 2),
 ('t', 2),
 ('s', 3),
 ('o', 3),
 ('n', 3),
 ('e', 3),
 ('i', 5),
 (' ', 5)]
```

Sorted dsc

```python
In [14]: sorted(word_count(sentence).items(),key=lambda kv: kv[1], reverse = True)
{' ': 5,
 'T': 1,
 'a': 1,
 'c': 1,
 'e': 3,
 'h': 1,
 'i': 5,
 'm': 2,
 'n': 3,
 'o': 3,
 'q': 1,
 'r': 1,
 's': 3,
 't': 2,
 'u': 1,
 'v': 1,
 'w': 1}
Out[14]:
[('i', 5),
 (' ', 5),
 ('s', 3),
 ('o', 3),
 ('n', 3),
 ('e', 3),
 ('m', 2),
 ('t', 2),
 ('T', 1),
 ('h', 1),
 ('a', 1),
 ('c', 1),
 ('r', 1),
 ('v', 1),
 ('w', 1),
 ('q', 1),
 ('u', 1)]
```

resultat

```python
Isentence = "This is a common interview question"
   ...:
   ...:
   ...: def word_count(word):
   ...:     char = {}
   ...:     for mo in sentence:
   ...:         if mo in char:
   ...:             char[mo] += 1
   ...:         else:
   ...:             char[mo] = 1
   ...:    # pprint(char)
   ...:     return char
   ...:
   ...:
   ...: sorted(word_count(sentence).items(),
   ...:        key=lambda kv: kv[1], reverse=True)[0]
   ...:
   ...:
Out[3]: ('i', 5)
```
