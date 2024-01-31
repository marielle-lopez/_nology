# Domain Name System

Domain name system (DNS) is a giant contact list for the Internet that maps main names with IP addresses.

To understand how the DNS works, let's look at what happens when request a website on the Internet. When you type in a website URL like `https://www.google.com.au`, it travels through the Internet and reaches your Internet service provider (ISP), and then to the DNS resolver.

The DNS resolver queries the root server with the domain you searched for (`https://www.google.com.au`). The root server says it doesn't know what the IP address is for the domain you searched for. But, it does know that it needs to go to the `.au` top-level domain name server, which might know that the address is. So, the DNS resolver then goes to the `.au` TLD name server. The TLD name server says that it doesn't know the address for `google.com.au`, but it does know that the authorative name server will know the IP address. The DNS resolver then goes to the authorative name server and finds the IP address for `https://www.google.com.au`. The DNA resolver sends this IP address to your computer through the Internet. The computer then sends a request to the web server for the given IP address, and the web server responds with the web page.

Above, we see that the DNS resolver makes multiple queries to different name servers, finally gets the IP address associated with the given website URL, and sends it back to the user.

Browsers cache DNS records for website URLS a user has requested. ISPs also cache DNA records. This is to prevent going through the process of multiple querying between the DNA resolver and the name servers.

## Resources

- [What is DNS? | How a DNS Server (Domain Name System) works | DNS Explained](https://www.youtube.com/watch?v=g6R9gRWIIK8)
