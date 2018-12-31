# Loading and accessing tweets
#
# In the video, we loaded a tweet we collected using tweepy into Python. Tweets arrive from the Streaming API in JSON format and need to be converted into a Python data structure.
#
# In this exercise, we'll load a single tweet into Python and print out some fields.
#
# The tweet JSON has been loaded for you and is stored in tweet_json.

# Load JSON
import json

# Convert from JSON to Python object
tweet = json.loads(tweet_json)

# Print tweet text
print(tweet["text"])

# Print tweet id
print(tweet["id"])

# Accessing user data
#
# Much of the data which we want to know about the Twitter data is stored in child JSON objects. We will access several parts of the user's information with the user child JSON object.
#
# The tweet from the previous exercise has been loaded for you.

# Print user handle
print(tweet["user"]["screen_name"])

# Print user follower count
print(tweet["user"]["followers_count"])

# Print user location
print(tweet["user"]["location"])

# Print user description
print(tweet["user"]["description"])

# Accessing retweet data
#
# Now we're going to work with a tweet JSON that contains a retweet. A retweet has the same structure as a regular tweet, except that it has another tweet stored in retweeted_status.
#
# The new tweet has been loaded as rt.

# Print the text of the tweet
print(rt["text"])

# Print the text of tweet which has been retweeted
print(rt["retweeted_status"]["text"])

# Print the user handle of the tweet
print(rt["user"]["screen_name"])

# Print the user handle of the tweet which has been retweeted
print(rt["retweeted_status"]["user"]["screen_name"])



