##################   let's create the Slistener class

from tweepy.streaming import StreamListener
import time
class  Slistener(StreamListener):
    def __init__(self, api=None):
        self.output = open('tweets_%s.json'%time.strftime('%Y%m%d-%H%M%S'), 'W')
        self.api = api    # or API()


###############################################

# Collecting data on keywords
#
# Now that we've set up the authentication, we can begin to collect Twitter data. Recall that with the Streaming API, we will be collecting real-time Twitter data based on either a sample or filtered by a keyword.
#
# In our example, we will collect data on any tweet mentioning #rstats or #python in the tweet text, username, or user description with the filter endpoint.
#
# The SListener module has already been defined and imported for you.

# Instruction
   # Import Stream from tweepy.
   # Set keywords_to_track to a list containing #rstats and #python.
   # Pass the auth and listen objects to Stream.
   # Set the keyword argument track equals to keywords_to_track.

from tweepy import Stream

# Set up words to track
keywords_to_track = ['#rstats','#python']

# Instantiate the SListener object
listen = SListener(api)

# Instantiate the Stream object
stream = Stream(auth, listen)

# Begin collecting data
stream.filter(track = keywords_to_track)
