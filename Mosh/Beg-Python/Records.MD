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

### Numbers

```python
interger = 1
float = 1.0
complex = 1+1j
```

#### input()

```python
x = input("x: ")
y = int(x)+ 1
print(f"{x} et {y}")
```

### falsy

```python
''
None
0
```
