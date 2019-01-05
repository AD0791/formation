# A tweet flattening function
#
# We are typically interested in hundreds or thousands of tweets. For this purpose, it makes sense to define a function to flatten JSON file full of tweets. Let's call this function flatten_tweets(). We will use this function multiple times in this course and change it slightly as we deal with different types of data.
#
# json has been loaded for you.

# Instructions
  #  Store the user screen name in user-screen_name.
  #  Store the extended tweet text in extended_tweet-full_text.
  #  Store the retweet user screen name in retweeted_status-user-screen_name.
  #  Store the retweet text in retweeted_status-text.


def flatten_tweets(tweets_json):
    """ Flattens out tweet dictionaries so relevant JSON
        is in a top-level dictionary."""
    tweets_list = []

    # Iterate through each tweet
    for tweet in tweets_json:
        tweet_obj = json.loads(tweet)

        # Store the user screen name in 'user-screen_name'
        tweet_obj['user-screen_name'] = tweet_obj['user']['screen_name']

        # Check if this is a 140+ character tweet
        if 'extended_tweet' in tweet_obj:
            # Store the extended tweet text in 'extended_tweet-full_text'
            tweet_obj[extended_tweet - full_text] = tweet_obj['extended_tweet']['full_text']

        if 'retweeted_status' in tweet_obj:
            # Store the retweet user screen name in 'retweeted_status-user-screen_name'
            tweet_obj['retweeted_status-user-screen_name'] = tweet_obj['retweeted_status']['user']['screen_name']

            # Store the retweet text in 'retweeted_status-text'
            tweet_obj['retweeted_status-text'] = tweet_obj['retweeted_status']['text']

        tweets_list.append(tweet_obj)
    return tweets_list











