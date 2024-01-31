# Content Delivery Network

Content delivery network (CDN) was originally developed to speed up the delivery of static HTML content for users all around the world. Nowadays, a CDN should be used whenever HTTP traffic is served.

At a fundamental level, a CDN brings content closer to the user. This improves the performance of a web service as perceived by the user. It's well-documented that performance is critical to user engagement and retention. To bring a service closer to the users, CDN deploys servers at hundreds of locations all over the world. These server locations are called Point of Presence (PoPs). A server inside the PoP is now commonly called an edge server.

Having many PoPs all over the world ensures that every user can reach a fast-edge server close to them.

Different CDNs use different technologies to direct a user's request to the closest PoP. Two common ones are DNS-based routing and Anycast.

- With DNA-based routing, each PoP has its own IP address
  - When the user looks up the IP address for the CDN, DNS returns the IP address of the PoP closest to them
- With Anycast, all PoPs share the same IP address
  - When a request comes into the Anycast network for that IP address, the network sends the request to the PoP that's closest to the requester

Each edge server acts as a reverse proxy with a huge content cache. Static contents are cached on the edge server in this content cache. If a piece of content is in the cache, it could be quickly returned to the user. Since the edge server only asks for a copy of the static content from the origin server if it is not in its cache, this greatly reduces the load and vandwidth requirements of the origin server cluster.

A modern CDN could also transform static content into more optimised formats. For example, it could minify JavaScript bundles on the fly, or transform an image file from an old format to a modern one like WebP or AVIF.

The edge server also serves a very important role in the modern HTTP stack. All TLS connections terminate at the edge server. TLS handshakes are expensive. The commonly use TLS versions like TLS 1.2 take several network round trips to establish. By terminating the TLS connections at the edge, it significantly reduces the latency for the user to establish an encrypted TCP connection. This is one reason why many modern applications send even dynamic uncacheable HTTP content over the CDN.

Besides performance, a modern CDN brings two other major benefits:

- Security
  - All modern CDNs have huge network capacity at the edge
    - This is the key to providing effective DDoS protection against large-scale attacks - by having a network with a capacity much larger than the attackers
      - This is especially effective against a CDN built on an Anycast network
      - It allows the CDN to diffuse the attack traffic over a huge number of servers
- Availability
  - A CDN by its very nature is highly distributed
    - By having copies of contents available in many PoPs, a CDN can withstand many more hardware failures than the origin servers

## Resources

- [What Is A CDN? How Does It Work?](https://www.youtube.com/watch?v=RI9np1LWzqw)
