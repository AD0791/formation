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
