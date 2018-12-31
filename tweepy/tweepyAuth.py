# Setting up tweepy authentication
#
# In the video, we saw how tweepy can be used to collect Twitter data with the Streaming API. tweepy requires a Twitter API key to authenticate with Twitter.
#
# In this exercise, you will load several objects from tweepy and set up the authentication for the package.
#
# The API keys access_token, access_token_secret, consumer_key, and consumer_secret have already been defined for you.

# Instructions
#
# import OAuthHandler and API from the tweepy module.
# Pass consumer_key and consumer_secret to OAuthHandler.
# Set the access tokens with access_token and access_token_secret.
# Pass the auth object to the API.

from tweepy import OAuthHandler
from tweepy import API

# Consumer key authentication
auth = OAuthHandler(consumer_key, consumer_secret)

# Access key authentication
auth.set_access_token(access_token, access_token_secret)

# Set up the API with the authentication handler
api = API(auth)