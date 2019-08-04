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
