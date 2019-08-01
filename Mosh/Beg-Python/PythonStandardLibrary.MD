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
