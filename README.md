# pkorg-session-keep-alive
A web extension to automatically keep the session on pkorg.ch active.

## Why?

When having the pkorg.ch website open in a tab without actively using it, the session times out after 1.5 hours.
Additionally, pkorg will show a big popup that the session will time out about 15 minutes before the actual timeout.

This is very annoying, especially when the website is just open in a tab and rarely used.

To fix this, this web extension sends a request to the `/ping` endpoint every 10 minutes which renews the session. 
Additionally it sets the localstorage field `idle.timeout` to prevent the session timeout popup from showing.
