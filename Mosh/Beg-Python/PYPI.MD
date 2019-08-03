# Python Mastery

## : Beginner Grid-3

Python Package Index

### PYPI

website

### PIP (package manager)

```python
pip3 install requests
pip3 install --upgrade pip
pip3 list
# earlier version of requests
pip3 install requests==2.9.0
# with a wild card
pip3 install requests==2.9.*
# delete
pip3 uninstall requests
# latest of version 2.9
pip3 install requests~=2.9.0
# lastest version of 2.
pip2 install requests==2.*
```

Litle work with requests

```python
import requests

response = requests.get("https://google.com")
print(response)
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
<Response [200]>

[Done] exited with code=0 in 2.102 seconds
```

### Virtual ENvironments

create VENV env

```bash
python3 -m venv env
```

- The `env` folder will be created on our directory. We can put all our dependencies for our project.

- Activate the virtual environment

```bash
source env/bin/activate
```

this will put us into the virtual environment. we can continue with the process of install our needed packages

```bash
$ source env/bin/activate
(env) pip3 install requests==2.9.*
(env) deactivate
$ # will close the virtual env
```

Another powerful approch is to use pipenv.

### PIPENV

It's a dependencie manager for python projects (like npm).

```bash
pipenv install requests
```

will create

1. Pipfile
2. Pipefile.lock

WHERE IS the VENV?

```bash
pipenv --venv
# output
$ /Users/alexandrodisla/.local/share/virtualenvs/Beg-Python-9TVzLrIA
```

To Run the `anapp.py` it will not found requests package locally.

We must activate the virtual-environment for this project properly:

```python
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ pipenv shell
Launching subshell in virtual environment…
 . /Users/alexandrodisla/.local/share/virtualenvs/Beg-Python-9TVzLrIA/bin/activate
bash-3.2$  . /Users/alexandrodisla/.local/share/virtualenvs/Beg-Python-9TVzLrIA/bin/activate
(Beg-Python) bash-3.2$ python3 anapp.py
<Response [200]>
```

### Vscode with (pipenv) VENV

```bash
Alexandros-MacBook-Pro:Beg-Python alexandrodisla$ pipenv --venv
/Users/alexandrodisla/.local/share/virtualenvs/Beg-Python-9TVzLrIA
```

We change the settings of `code-runner.executorMap` in the `settings.json`

with modifications:

1. `/bin/python3`
2. add a the python interpreter

- change the `"python.pythonPath": "/Library/Frameworks/Python.framework/Versions/3.7/bin/python3"`

```json
{
  "python.pythonPath": "/Users/alexandrodisla/.local/share/virtualenvs/Beg-Python-9TVzLrIA",
  "code-runner.executorMap": {
    "javascript": "node",
    "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
    "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "objective-c": "cd $dir && gcc -framework Cocoa $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "php": "php",
    "python": "/Users/alexandrodisla/.local/share/virtualenvs/Beg-Python-9TVzLrIA/bin/python3",
    "perl": "perl",
    "perl6": "perl6",
    "ruby": "ruby",
    "go": "go run",
    "lua": "lua",
    "groovy": "groovy",
    "powershell": "powershell -ExecutionPolicy ByPass -File",
    "bat": "cmd /c",
    "shellscript": "bash",
    "fsharp": "fsi",
    "csharp": "scriptcs",
    "vbscript": "cscript //Nologo",
    "typescript": "ts-node",
    "coffeescript": "coffee",
    "scala": "scala",
    "swift": "swift",
    "julia": "julia",
    "crystal": "crystal",
    "ocaml": "ocaml",
    "r": "Rscript",
    "applescript": "osascript",
    "clojure": "lein exec",
    "haxe": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
    "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
    "racket": "racket",
    "ahk": "autohotkey",
    "autoit": "autoit3",
    "dart": "dart",
    "pascal": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
    "d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
    "haskell": "runhaskell",
    "nim": "nim compile --verbosity:0 --hints:off --run",
    "lisp": "sbcl --script",
    "kit": "kitc --run"
  }
}
```

### The Pipefile

EXplain

```Pipefile
[[source]]
name = "pypi"
url = "https://pypi.org/simple"
verify_ssl = true

[dev-packages]

[packages]
requests = "*"

[requires]
python_version = "3.7"
```

```Pipefile.lock
{
    "_meta": {
        "hash": {
            "sha256": "bb57e0d7853b45999e47c163c46b95bc2fde31c527d8d7b5b5539dc979444a6d"
        },
        "pipfile-spec": 6,
        "requires": {
            "python_version": "3.7"
        },
        "sources": [
            {
                "name": "pypi",
                "url": "https://pypi.org/simple",
                "verify_ssl": true
            }
        ]
    },
    "default": {
        "certifi": {
            "hashes": [
                "sha256:046832c04d4e752f37383b628bc601a7ea7211496b4638f6514d0e5b9acc4939",
                "sha256:945e3ba63a0b9f577b1395204e13c3a231f9bc0223888be653286534e5873695"
            ],
            "version": "==2019.6.16"
        },
        "chardet": {
            "hashes": [
                "sha256:84ab92ed1c4d4f16916e05906b6b75a6c0fb5db821cc65e70cbd64a3e2a5eaae",
                "sha256:fc323ffcaeaed0e0a02bf4d117757b98aed530d9ed4531e3e15460124c106691"
            ],
            "version": "==3.0.4"
        },
        "idna": {
            "hashes": [
                "sha256:c357b3f628cf53ae2c4c05627ecc484553142ca23264e593d327bcde5e9c3407",
                "sha256:ea8b7f6188e6fa117537c3df7da9fc686d485087abf6ac197f9c46432f7e4a3c"
            ],
            "version": "==2.8"
        },
        "requests": {
            "hashes": [
                "sha256:11e007a8a2aa0323f5a921e9e6a2d7e4e67d9877e85773fba9ba6419025cbeb4",
                "sha256:9cf5292fcd0f598c671cfc1e0d7d1a7f13bb8085e9a590f48c010551dc6c4b31"
            ],
            "index": "pypi",
            "version": "==2.22.0"
        },
        "urllib3": {
            "hashes": [
                "sha256:b246607a25ac80bedac05c6f282e3cdaf3afb65420fd024ac94435cabe6e18d1",
                "sha256:dbe59173209418ae49d485b87d1681aefa36252ee85884c31346debd19463232"
            ],
            "version": "==1.25.3"
        }
    },
    "develop": {}
}
```

En gros: **We can use the Pipefile like a gemfile**

```bash
# just do pipenv install
pipenv install
# it will look the Pipefile
# generate the vritual env and the Pipefile.lock
```

Sinon: **use the Pipefile.lock**

```bash
pipenv install --ignore-pipefile
```

### Managing dependencies

```bash
pipenv graph
# show the install package with the dependencies
```

If we uninstall a package like this `pipenv uninstall requests`. The dependencies are still installed.

```bash
pipenv update --outdated
# will show the latest
pipenv update requests
# will update request
```

### Publish a Package

> create an account with hotmail.com on pypi.

setup.py is the core

WE ARE GOING TO BUILD `adPDF` package!!!!

```bash
python3 setup.py sdist bdist_wheel
```

Upload the package to pypi.org

```bash
twine upload dist/*
```

```bash
pip3 install adpdf
```

```python
from adpdf import pdf2image, pdf2text
# MY PACKAGE WORK

print(pdf2image.convert())
print(pdf2text.convert())
```

```bash
[Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/anapp.py"
Image is done
None
PDF2TEXT
None

[Done] exited with code=0 in 0.085 seconds
```

### Docstring

`""" """` to comment properly

### Pydoc3

```bash
pydoc3 math
```

Open it on the webBrowser

```python
pydoc3 -p 3000
```
