# Python Mastery

## : Beginner Grid-3

Python Popular Package:

- excell
- pdf
- sending text
- Automate browser
- Web Scraping

And More.

### API

Application Programming Interface

### Yelp API

I create an app called:

1. PyYelp

```api
My App
Client ID
GaVh83c3mxFPwEuwTpN0BQ

API Key
FSMppr03uGCP0MVRGrwgbK9Y87ejgh1rykEsyvJ2Opa9QU5pPlokmomiQHRMUHniFnNeNL4wU0qpgsEpvHIdChg8Dp0PWM9-MJhVKC17lmiQMgnApSFneAqZ9PRFXXYx
```

### Request to work with yelp api

#### Searching for businesses

- A Useful ERROR

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "description": "Please specify a location or a latitude and longitude"
  }
}
```

We go over the yelp api. we found the highest rated barbers in new york city.

```python
# No VENV
import requests
import helper

# ENdPoint: Business/search
# for authentification of the api key
# follow the guides!!!!!
url = "https://api.yelp.com/v3/businesses/search"
headers = {
    "Authorization": "Bearer " + helper.api_key
}
# "term" to pinpoint a kind of businesses
params = {
    "term": "Barber",
    "location": "NYC"
}
response = requests.get(url, headers=headers, params=params)
# step 1
# useful to see the response
# print(response.text)
# for each mistakes follow the guide of the endpoint

# use the json method
# given the state of the respons
# we can pinpoint a key
businesses = response.json()["businesses"]
# print(businesses)

# we do a simple iteraton to get the name of the barbers
# for business in businesses:
#    print(business["name"])
# list comprehension
names = [business["name"]
         for business in businesses if business['rating'] > 4.5]
print(names)

```

```python
api_key = "xxxxxxx"
```

```bash
Running] python3 "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Beg-Python/PyYelp_projects/yapp.py"
['12 Pell', 'Next Level Barber Shop', 'Clever Barber', 'The Barber Shop', 'HK Best Barbers', 'Miracles Barber Shop', 'Fellow Barber']

[Done] exited with code=0 in 2.242 seconds
```

### Hide the API key

- put the key in a separate files
- hide this file from git:

we add the helper file inside the `.gitignore` files.

Now helper.py will be ignored

### Sending Text Messages

Twilio create a package that is essentialy a
wrapper around their api

Let's get the Wrapper:

```bash
pip3 install twilio
```

```python
from twilio.rest import Client
import setup
# Your new Phone Number is +16097784730


client = Client(setup.account_sid, setup.auth_token)

call = client.messages.create(
    body="StephyJ, c'est Alex si tu recois ce message, tinkiet pas lol. Son devwa map fe map tester yon programme mwen ecri.",
    from_="+16097784730",
    to="+50941483700"
)

print(call.sid)
```

```python
account_sid = "xxxxxxx"
auth_token = "xxxxxxxxxx"
```

We encounter some permission issue but the script work

### Webscraping

```bash
pip3 install beautifulsoup4
pip3 install requests
```

Scrape the first page of the `Stackoverflow/questions` website.

```python
import requests
from bs4 import BeautifulSoup

response = requests.get("https://stackoverflow.com/questions")

soup = BeautifulSoup(response.text, "html.parser")

question_summary = soup.select(".question-summary")
# print(question_summary[0].attrs)
# print(question_summary[0].select(".question-hyperlink"))
# print(question_summary[0].select_one(".question-hyperlink"))
# print(question_summary[0].select_one(".question-hyperlink").getText())

# Iterate Over each questions to get the title of each
for question in question_summary:
    print(question.select_one(".question-hyperlink").getText())
    print(question.select_one(".votes").getText())
    #print(question.select_one(".status unanswered").getText())
    print(question.select_one(".views").getText())
```

```bash
pattern using recusrion in swift

0
votes


    3 views

Y Axis not showing in D3 line chart

0
votes


    3 views

How to use ng-flexmonster with Angular Universal?

0
votes


    3 views

How to declare a 2D vector parameter which will accept any size?

0
votes


    8 views

how to update values in tic tac toe board

0
votes


    5 views

How to work with gradle Jitpack offline or from local Git instead of Github?

0
votes


    4 views

how to send multiple msg at same time without failing mobile sim service?

-1
votes


    5 views

How to add ad mob native ads in android recycler view

0
votes


    3 views

Json to CSV, with dynamic and complex json

0
votes


    8 views

Shift bits of an integer only if the number of bits in its binary represents is greater then given value

0
votes


    10 views

How to efficiently plot a spectogram by reusing bitmaps

0
votes


    4 views

Android: How to reuse code throughout multiple aar library files

0
votes


    4 views

How to handle preference changes on Android?

1
vote


    4 views

rename mutiple files in windows folder

0
votes


    3 views

How to pass an image in a Halide::Runtime::Buffer in Halide aot compilation?

0
votes


    2 views

Search results - convert webslement list into string and return true if some string is avalible in that list

0
votes


    3 views

Stylistically indenting vendor prefixes in editor

0
votes


    2 views

Why PHP register_shutdown_function returns no output on Chrome?

0
votes


    8 views

No sound problem for BLFS-8.3 with PulseAudio12.2

0
votes


    2 views

Show conda environment info at the beginning of terminal prompt

0
votes


    4 views

Android Q. DocumentFile.delete method

0
votes


    3 views

How to loop through data in Map with Java

0
votes


    15 views

RuntimeError: A pipeline has not yet been optimized. Please call fit() first.Problem with TPOT Automated Machine Learning in Python

0
votes


    7 views

AWS SNS not registering successfully executed action from AWS Cloudwatch

0
votes


    6 views

How to apply multiple animations for one geometry at the same time

0
votes


    6 views

android: Make action according to FCM notification's data

0
votes


    6 views

How to use stringbuilder to get a csv of selected row in jtable

0
votes


    4 views

I deleted the Anaconda, but it remains in the Start menu

0
votes


    6 views

Matching variable strings

0
votes


    8 views

Separating classes out of a .csv file

0
votes


    4 views

Kivy TabbedPanel. How to call switch_to from another class?

0
votes


    5 views

Same XML, Different Behaviour

1
vote


    5 views

Why INDEXEs aren't taken into in the first case but work in the other?

1
vote


    8 views

Why do two objects share an attribute here? [duplicate]

0
votes


    12 views

How to add new row data from api using html colspan

0
votes


    4 views

Android automatically grant SYSTEM_ALERT_WINDOW and BIND_NOTIFICATION_LISTENER_SERVICE for debug build

0
votes


    4 views

Hibernate delete @OneToMany child directly form child object

0
votes


    11 views

Prepare file path using

0
votes


    5 views

how can i call a function that takes 4 arguments from html file

-1
votes


    14 views

R: Generate sine wave with variable frequency

0
votes


    9 views

Extracting information by scrapping products

0
votes


    9 views

How to fix “TypeError: fit_transform() takes 2 positional arguments but 3 were given”

-1
votes


    6 views

Java switch use case

2
votes


    19 views

Query to search for similar Strings in AndroidRoom

0
votes


    5 views

How to pass changing state prop to component?

0
votes


    12 views

Vue-Form-Generator schema is not reactive to computed properties

0
votes


    13 views

A simple menu function

0
votes


    13 views

Only with CSS, looping 30 images one after another for infinite time creating a burning fire effect

0
votes


    15 views

I need to get the imei number of my android device programmatically even when its connected to a cdma network

1
vote


    8 views

How can I fix problem with my game engine in lwjgl

0
votes


    4 views
```

### Browser Automation

Selenium for browser automation

```python
pip3 install selenium
```

You must get the drivers on the `pypi/selenium`.

```
Drivers

Selenium requires a driver to interface with the chosen browser.
Firefox, for example, requires geckodriver, which needs to be installed before
the below examples can be run. Make sure it’s in your PATH, e. g., place it in
/usr/bin or /usr/local/bin. Failure to observe this step will give you an error
selenium.common.exceptions.WebDriverException: Message: ‘geckodriver’ executable
needs to be in PATH. Other supported browsers will have their own drivers
available. Links to some of the more popular browser drivers follow. Chrome:
https://sites.google.com/a/chromium.org/chromedriver/downloads Edge:
https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/ Firefox:
https://github.com/mozilla/geckodriver/releases Safari:
https://webkit.org/blog/6900/webdriver-support-in-safari-10/
```

Copy chromedrive to another dir

```bash
Alexandros-MacBook-Pro:~ alexandrodisla$ cp chromedriver /usr/local/bin
```

You must make sure that your chrome driver is compatible with your browser.

On the Selenium documentation Read the **waits** and the **page object**

```python
from selenium import webdriver
import sentext

# open github
chrome = webdriver.Chrome()
chrome.get("https://github.com")

signin_link = chrome.find_element_by_link_text("Sign in")
# click the link
signin_link.click()

# find the input_fields
# tape in
Username_field = chrome.find_element_by_id("login_field")
Username_field.send_keys(sentext.username)
password_field = chrome.find_element_by_id("password")
password_field.send_keys(sentext.password)
password_field.submit()

# The assert statement to verify something in python (DSL?)
# a globale Search
assert "AD0791" in chrome.page_source

# make it more specific
profile_link = chrome.find_element_by_class_name("user-profile-link")
link_label = profile_link.get_attribute("innerHTML")
assert "AD0791" in link_label

# close the browser
chrome.quit()

```

```python
username = "xxxx"
password= "xxxx"
```

> It work without errors.

### PDF

```python
pip3 install PyPDF2
```

```python
import PyPDF2

# rb = read binary
# num page, rotate and creating new pdf:
"""
with open("NameCons.pdf", "rb") as file:
    reader = PyPDF2.PdfFileReader(file)
    print("num of page", reader.numPages)
    page = reader.getPage(0)
    page.rotateClockwise(90)
    writer = PyPDF2.PdfFileWriter()
    writer.addPage(page)
    # create pdf
    # write binary
    with open("rotate.pdf", "wb") as output:
        writer.write(output)
"""

# combining pdf:
merger = PyPDF2.PdfFileMerger()
files_name = ["rotate.pdf", "NameCons.pdf"]
for file in files_name:
    merger.append(file)
merger.write("combined.pdf")
```

### Excell

```bash
pip3 install openpyxl
```

```python
import openpyxl

# wb = openxl.workbook()
wb = openpyxl.load_workbook("transactions.xlsx")
# print(wb.sheetnames)

sheet = wb["Sheet1"]
"""
cell = sheet["a1"]
print(cell.row)
print(cell.column)
print(cell.coordinate)
"""

"""
cell = sheet.cell(row=1, column=1)

print(cell.row)
print(cell.column)
print(cell.coordinate)


print(sheet.max_row)
print(sheet.max_column)
"""


# iterate of rwo and columns. first row is 1
for row in range(1, sheet.max_row+1):
    for col in range(1, sheet.max_column+1):
        all = sheet.cell(row, col)
        print(all.value)


# sheet["a"]
# sheet["a:c""]
# sheet["a1:c4""]
# sheet["1:4""]

sheet.append([1,2,3])

wb.save("ok.xlsx")
```

### Command Query Separation Principle

Command is different than Query. Therefore they must be set or implement appart in our programme.

The query must change the state of the system.

### Numpy

Use documentation from data science courses

```python
import numpy as np

# matrix en autre
array = np.array([[1, 2, 3], [3, 4, 5]])
print(array)
print(array[0, 0])
print(array > 3)
print(array[array > 3])

# Differnece between pure python and numpy
# pure
inch = [1, 2, 3]
cm = [inch*2.54 for inch in inch]
print(cm)

# numpy
dinch = np.array([1, 2, 3])
dcm = dinch*2.54
print(dcm)

```
