# Python Mastery

## : Beginner Grid-2

List, Tuples, Set, Dictionaries

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

[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/app.py"
[12, 25, 32, 43, 56, 76, 90]

[Done] exited with code=0 in 0.06 seconds
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

print(ltuples)
```

```bash
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
