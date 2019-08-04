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
