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
