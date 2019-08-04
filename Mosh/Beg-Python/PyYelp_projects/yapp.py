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
