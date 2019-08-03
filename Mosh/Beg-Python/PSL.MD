# Python Mastery

## : Beginner Grid-3

Python standard Libray

### Paths

Create a path object

```python
In [1]: from pathlib import Path
   ...:

In [2]: Path(r"LElex\microsoft\path")
Out[2]: PosixPath('LElex\\microsoft\\path')

In [3]: Path("LElex\microsoft\path")
Out[3]: PosixPath('LElex\\microsoft\\path')

In [5]: Path("/usr/bpt/Didis")
Out[5]: PosixPath('/usr/bpt/Didis')

In [6]: Path()
Out[6]: PosixPath('.')

In [7]: Path("ecommerce/__init__.py")
Out[7]: PosixPath('ecommerce/__init__.py')

In [8]: Path() / Path("ecommerce/__init__.py")
Out[8]: PosixPath('ecommerce/__init__.py')

In [9]: Path('./') / Path("ecommerce/__init__.py")
Out[9]: PosixPath('ecommerce/__init__.py')

In [10]: Path('./') / "ecommerce" / "__init__.py"
Out[10]: PosixPath('ecommerce/__init__.py')

In [11]: Path('/repo/formation/mosh/Beg-Python/') / "ecommerce" / "__init__.py"
Out[11]: PosixPath('/repo/formation/mosh/Beg-Python/ecommerce/__init__.py')

In [12]: Path.home()
Out[12]: PosixPath('/Users/alexandrodisla')

In [13]: path = Path('/repo/formation/mosh/Beg-Python/') / "ecommerce" / "__init__.py"

In [14]: path.name
Out[14]: '__init__.py'

In [15]: path.stem
Out[15]: '__init__'

In [17]: path.exists()
Out[17]: False

In [18]: path.is_file()
Out[18]: False

In [19]: path.is_dir()
Out[19]: False

In [20]: path.suffix
Out[20]: '.py'

In [21]: path.parent
Out[21]: PosixPath('/repo/formation/mosh/Beg-Python/ecommerce')

In [22]: path2 = path.with_name("File.txt")

In [23]: path2
Out[23]: PosixPath('/repo/formation/mosh/Beg-Python/ecommerce/File.txt')

In [24]: path.absolute()
Out[24]: PosixPath('/repo/formation/mosh/Beg-Python/ecommerce/__init__.py')

In [25]: path2.absolute()
Out[25]: PosixPath('/repo/formation/mosh/Beg-Python/ecommerce/File.txt')

In [26]: path3  = path.with_suffix(".R")

In [27]: path3
Out[27]: PosixPath('/repo/formation/mosh/Beg-Python/ecommerce/__init__.R')
```

### Working with directories

```python
In [1]: from pathlib import Path
   ...:
   ...: path = Path("ecommerce")
   ...:
   ...: # path.exists()
   ...: # path.mkdir()
   ...: # path.rmdir()
   ...: # path.rename()
   ...:
   ...:

In [2]: path.iterdir()
Out[2]: <generator object Path.iterdir at 0x10c3d3b50>

In [4]: pg = [p for p in path.iterdir()]

In [5]: pg
Out[5]:
[PosixPath('ecommerce/shopping'),
 PosixPath('ecommerce/__init__.py'),
 PosixPath('ecommerce/__pycache__'),
 PosixPath('ecommerce/customer')]

In [6]: # filtering is possible

In [7]: pgf = [p for p in path.iterdir()if p.is_dir()]

In [8]: pgf
Out[8]:
[PosixPath('ecommerce/shopping'),
 PosixPath('ecommerce/__pycache__'),
 PosixPath('ecommerce/customer')]

In [9]: path.glob("*.py")
Out[9]: <generator object Path.glob at 0x10c720f50>

In [10]: pfiles = [p for p in path.glob('*.py')]

In [11]: pfiles
Out[11]: [PosixPath('ecommerce/__init__.py')]

In [12]: # recursively search

In [13]: rpfiles = [p for p in path.glob('**/*.py')]

In [15]: rpfiles
Out[15]:
[PosixPath('ecommerce/__init__.py'),
 PosixPath('ecommerce/shopping/sales.py'),
 PosixPath('ecommerce/shopping/__init__.py'),
 PosixPath('ecommerce/customer/__init__.py'),
 PosixPath('ecommerce/customer/contact.py')]

In [16]: recursivepfiles = [p for p in path.rglob('*.py')]

In [17]: recursivepfiles
Out[17]:
[PosixPath('ecommerce/__init__.py'),
 PosixPath('ecommerce/shopping/sales.py'),
 PosixPath('ecommerce/shopping/__init__.py'),
 PosixPath('ecommerce/customer/__init__.py'),
 PosixPath('ecommerce/customer/contact.py')]
```

### Working with Files

```python
In [1]: from pathlib import Path
   ...:
   ...: path = Path("ecommerce/__init__.py")
   ...:
   ...: # path.exists()
   ...: # path.mkdir()
   ...: # path.rmdir()
   ...: # path.rename()
   ...: # path.unlink()
   ...:
   ...:

In [2]: path.stat()
Out[2]: os.stat_result(st_mode=33188, st_ino=12896421691, st_dev=16777220, st_nlink=1, st_uid=501, st_gid=20, st_size=24, st_atime=1564603994, st_mtime=1564571674, st_ctime=1564571674)

In [3]: # make readaable human time

In [4]: from time import ctime

In [6]: ctime (path.stat().st_ctime)
Out[6]: 'Wed Jul 31 07:14:34 2019'

In [7]: path.read_bytes()
Out[7]: b'print("Ecommerce Init")\n'

In [8]: path.read_text()
Out[8]: 'print("Ecommerce Init")\n'

# went to the path and write this on the files
In [9]: path.write_text("More")
Out[9]: 4

In [20]: path.write_text(f"print(\"hello\")")
Out[20]: 14

# copy  files
In [21]: import shutil

In [22]: shutil.copy(path, Path("__init__.py"))
Out[22]: PosixPath('__init__.py')

```

#### Class

```python
from pathlib import Path
from time import ctime
import shutil

path = Path("ecommerce/**init**.py")

# path.exists()

# path.mkdir()

# path.rmdir()

# path.rename()

# path.unlink()

# path.read_bytes()

# path.read_text()
```

### Working with Zip Files

#### Class Create a zipfile where the anapp.py is:

```python
from pathlib import Path
#from time import ctime
#import shutil
from zipfile import ZipFile

path = Path("ecommerce")

""" same as below
# open
zip = ZipFile("file.zip", "w")

for p in path.rglob("*.*"):
    zip.write(path)
# close
zip.close()
"""

# create a zip file with the sub-directory ecommerce:
with ZipFile("file.zip", "w") as zip:
    for p in path.rglob("*.*"):
        zip.write(p)

# output a certain and do the extraction
with ZipFile("file.zip") as zip:
    print(zip.namelist())
    info = zip.getinfo("ecommerce/__init__.py")
    print(info.file_size)
    print(info.compress_size)
    # extract the zip file inside:  actual directory
    zip.extractall("extract")
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
['ecommerce/__init__.py', 'ecommerce/shopping/sales.py', 'ecommerce/shopping/__init__.py', 'ecommerce/shopping/__pycache__/sales.cpython-37.pyc', 'ecommerce/shopping/__pycache__/__init__.cpython-37.pyc', 'ecommerce/__pycache__/sales.cpython-37.pyc', 'ecommerce/__pycache__/__init__.cpython-37.pyc', 'ecommerce/customer/__init__.py', 'ecommerce/customer/contact.py', 'ecommerce/customer/__pycache__/contact.cpython-37.pyc', 'ecommerce/customer/__pycache__/__init__.cpython-37.pyc']
14
14

[Done] exited with code=0 in 0.098 seconds
# the extraction was done
```

### Working with csv files

We can create a csv files. (just like a zip file)

```python
import csv

# Let's ceate a csv files

"""
#Old Approch
file = open("data.csv", "w")
writer = csv.writer(file)
    writer.writerow(["salle", "examen", "resultat"])
    writer.writerow(["Oracle", "Math", 50])
    writer.writerow(["Opak", "Physique", 60])
    writer.writerow(["Opiumus", "French", 90])
file.close()
"""

"""
with open("data.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(["salle", "examen", "resultat"])
    writer.writerow(["Oracle", "Math", 50])
    writer.writerow(["Opak", "Physique", 60])
    writer.writerow(["Opiumus", "French", 90])
"""

# Let's inside that file

with open("data.csv") as file:
    reader = csv.reader(file)
    # print(list(reader))
    for p in reader:
        print(reader)
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
[['salle', 'examen', 'resultat'], ['Oracle', 'Math', '50'], ['Opak', 'Physique', '60'], ['Opiumus', 'French', '90']]

[Done] exited with code=0 in 0.069 seconds

[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
<_csv.reader object at 0x10cd371d0>
<_csv.reader object at 0x10cd371d0>
<_csv.reader object at 0x10cd371d0>
<_csv.reader object at 0x10cd371d0>

[Done] exited with code=0 in 0.065 seconds
```

### Working with JSON files

```python
import json
from pathlib import Path

movie = [{"id": 1, "great": "bonjour"}, {"id": 2, "great": "Lelex"}]
data = json.dumps(movie)
print(data)

# write json files
# Path("movie.json").write_text(data)

readata = Path("movie.json").read_text()
newmovies = json.loads(readata)
print("A proper reading:", newmovies)


# it's an list so we can't

print(newmovies[0]["great"], newmovies[1]["great"])
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
[{"id": 1, "great": "bonjour"}, {"id": 2, "great": "Lelex"}]
A proper reading: [{'id': 1, 'great': 'bonjour'}, {'id': 2, 'great': 'Lelex'}]
bonjour Lelex

[Done] exited with code=0 in 0.071 seconds
```

### Working qith a SQLITE3 database

Pass the json to the SQLITE3 database.

#### API to write from json file

```python
import sqlite3
import json
from pathlib import Path

##movie = [{"id": 1, "great": "bonjour"}, {"id": 2, "great": "Lelex"}]
#data = json.dumps(movie)
# print(data)

# write json files
# Path("movie.json").write_text(data)

data = Path("movie.json").read_text()
movies = json.loads(data)
# we have the json file
print("A proper reading:", movies)
# it's an list so we can't
print(movies[0]["great"], movies[1]["great"])


# establish the connection to sqlite3;
# AN API
with sqlite3.connect("db.sqlite3") as conn:
    # create the tables
    createTable = """ CREATE TABLE Movies(
        id INTEGER NOT NULL PRIMARY KEY,
        great TEXT
    );"""
    conn.execute(createTable)
    # iterate over the json for the values
    command = "INSERT INTO Movies VALUES(?,?)"
    for movie in movies:
        conn.execute(command, tuple(movie.values()))
    conn.commit()

```

The database was created with taht API

#### CREATE API to read data from DATABASE

```python
import sqlite3
import json
from pathlib import Path

data = Path("movie.json").read_text()
movies = json.loads(data)
# we have the json file
print("A proper reading:", movies)
# it's an list so we can't
print(movies[0]["great"], movies[1]["great"])


# establish the connection to sqlite3;
# AN API
# with sqlite3.connect("db.sqlite3") as conn:
# create the tables
#   createTable = """ CREATE TABLE Movies(
#  id INTEGER NOT NULL PRIMARY KEY,
# great TEXT
# )
# """
#    conn.execute(createTable)
# iterate over the json for the values
#    command = "INSERT INTO Movies VALUES(?,?)"
#    for movie in movies:
#        conn.execute(command, tuple(movie.values()))
#    conn.commit()


# Read data from databse
with sqlite3.connect("db.sqlite3") as conn:
    command = "SELECT * FROM Movies"
    cursor = conn.execute(command)
    # for row in cursor:
    #    print(row)
    movies = cursor.fetchall()
    print("pull from database:", movies)
    # conn.commit()
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
A proper reading: [{'id': 1, 'great': 'bonjour'}, {'id': 2, 'great': 'Lelex'}]
bonjour Lelex
pull from database: [(1, 'bonjour'), (2, 'Lelex')]

[Done] exited with code=0 in 0.08 seconds
```

### Working with Timestamps

```python
import time

print("Not Human Readable Time", time.time())

# A way to calculate the execution time of a function


def send_email():
    for i in range(10000):
        pass


start = time.time()
send_email()
end = time.time()

duration = end - start
print(duration)

```

### DATETIME

```python
from datetime import datetime
from time import time

dt = datetime(2019, 2, 3)
print(dt)
dat = datetime.now()
print(dat)
data = datetime.strptime("1991/07/10", "%Y/%m/%d")
print(data)
td = datetime.fromtimestamp(time())
print(td)
print(dt.year)
print(dt.month)
print(dt.timestamp())
print(dt.strftime("%Y/%m"))
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
2019-02-03 00:00:00
2019-08-02 22:54:49.116442
1991-07-10 00:00:00
2019-08-02 22:54:49.125999
2019
2
1549170000.0
2019/02

[Done] exited with code=0 in 0.071 seconds
```

### Time Deltas (duration)

```python
from datetime import datetime, timedelta

dt = datetime(2019, 2, 3)
print(dt)
dat = datetime.now()
print(dat)
duration = dat - dt
print(duration)
print(duration.days)
print(duration.seconds)
print(duration.total_seconds())
print("use of timedelta")
dt2 = datetime(2019, 2, 3) + timedelta(days=1)
print(dt2)
dat2 = datetime.now()
print(dat2)
duration2 = dat2 - dt2
print(duration2)
print(duration2.days)
print(duration2.seconds)
print(duration2.total_seconds())
```

```bash
Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
2019-02-03 00:00:00
2019-08-03 08:22:13.176187
181 days, 8:22:13.176187
181
30133
15668533.176187
use of timedelta
2019-02-04 00:00:00
2019-08-03 08:22:13.176242
180 days, 8:22:13.176242
180
30133
15582133.176242

[Done] exited with code=0 in 0.069 seconds
```

### Generate Random Values

```python
import random
import string

print(random.random())
print(random.randint(1, 100))
print(random.choice([1, 2, 3, 43, 54, 456, 57, 67]))
print(random.choices([1, 2, 3, 43, 54, 456, 57, 67], k=4))
print("password generation")
print(random.choices("sadijcodnvefvneovknevi", k=4))
print("".join(random.choices("sadijcodnvefvneovknevi", k=4)))
print("better way to do it")
print(random.choices(string.ascii_letters+string.digits, k=4))
print("".join(random.choices(string.ascii_letters+string.digits, k=4)))
print("change order of number in list")
numbers = [12, 1, 3, 234, 43, 545, 4, 656, 5]
random.shuffle(numbers)
print(numbers)
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
0.7635077522052182
5
67
[43, 2, 67, 54]
password generation
['d', 'e', 'n', 'd']
oodv
better way to do it
['P', 'U', '8', 'e']
2vPc
change order of number in list
[545, 3, 656, 5, 4, 43, 234, 1, 12]

[Done] exited with code=0 in 0.073 seconds

```

### Open the web browser

```python
import webbrowser

print("deployment is complete")
print("open a new tab")
webbrowser.open_new_tab("https://learn.co/")
```

Webbrowser work it open a new tab on our default webbrowser.

### Sending Emails

> Must Enable: **Lesssecureapp on gmail.**

```python
ffrom email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from pathlib import Path
import smtplib

message = MIMEMultipart()
message["from"] = "alexdisla1991@gmail.com"
message["to"] = "larissa.ed17@gmail.com"
message["subject"] = "Une photo pour expliquer"
# send text
message.attach(MIMEText("Ok This the last one. "))
# send image
message.attach(MIMEImage(Path("py.png").read_bytes()))

#smtp = smtplib.SMTP(host="smtp.gmail.com", port=587)
# smtp.ehlo()
# smtp.starttls()
#smtp.login("alexdisla1991@gmail.com", "ChantaleJ91")
# smtp.send_message(message)
# print("sent...")
# smtp.close()

with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.login("alexdisla1991@gmail.com", "ChantaleJ91")
    smtp.send_message(message)
    print("sent...")

```

It work beautifully

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
sent...
```

### Templates

A better to send our content email.

```html
<html lang="en">
  <head> </head>

  <body>
    <h1>$grateful</h1>
    Hi <strong>$name</strong>, this is the power of python!!!.
  </body>
</html>
```

```python
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from pathlib import Path
from string import Template
import smtplib

template = Template(Path("template.html").read_text())

message = MIMEMultipart()
message["from"] = "alexdisla1991@gmail.com"
message["to"] = "alexandrodisla13@gmail.com"
message["subject"] = "Une photo pour expliquer"
# send text dynamically
body = template.substitute(
    {"name": "Alex"}, grateful="I am very grateful to be able to learn")
message.attach(MIMEText(body, "html"))
# send image
message.attach(MIMEImage(Path("py.png").read_bytes()))

#smtp = smtplib.SMTP(host="smtp.gmail.com", port=587)
# smtp.ehlo()
# smtp.starttls()
#smtp.login("alexdisla1991@gmail.com", "ChantaleJ91")
# smtp.send_message(message)
# print("sent...")
# smtp.close()

with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.login("alexdisla1991@gmail.com", "ChantaleJ91")
    smtp.send_message(message)
    print("sent...")
```

### Command-line argument

```python
import sys

print(sys.argv)

if len(sys.argv) == 1:
    print("Usage: python3 anapp.py <pass>")
else:
    password = sys.argv[1]
    print("password", password)
```

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 anapp.py o
['anapp.py', 'o']
password o
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 anapp.py
['anapp.py']
Usage: python3 anapp.py <pass>
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ python3 anapp.py -slippery
['anapp.py', '-slippery']
password -slippery
```

### Running External Programs

```python
import subprocess

# subprocess.call()
# subprocess.check_all()
# subprocess.check_output()
# subprocess.Popen()
# the run is better

try:
    completed = subprocess.run(["python3", "other.py"],
                               capture_output=True, text=True, check=True)
    # print(completed)
    # print(type(completed))
    print(completed.args)
    print(completed.stderr)
    print(completed.returncode)
    # if the output is captured
    print(completed.stdout)

# besides check = True
# good preactice to check errors
# if completed.returncode != 0:
#    print(completed.stderr)
except subprocess.CalledProcessError as ex:
    print(ex)
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
['python3', 'other.py']

0
Python is beautiful and powerful!


[Done] exited with code=0 in 0.111 seconds
```
