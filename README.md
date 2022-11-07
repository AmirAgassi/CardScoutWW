# CreditCardScoutWW
 Get instant, detailed credit card details from any bank worldwide, including card issuing bank, types, brands, countries, and approximate geolocations.

# Features
- Search by a card BIN to get the brand, type (credit/debit/prepaid), category, issuing bank, country, and bank phone/email information.
- Detailed results including latitude and longitude of the approximate geolocation where the card is issued.
- API access for easy integration with your existing systems.

# Live Example

Try looking up a credit card BIN using my live API here:

http://3.19.71.179:1337/bin/431800

Don't know where to look?

![Alt text](https://i.imgur.com/UIZskGq.png "Optional title")


# Example

GET http://localhost:8080/bin/431800

```json
{
  "bin": "431800",
  "brand": "VISA",
  "type": "CREDIT",
  "category": "CLASSIC",
  "issuer": "CHASE BANK USA, N.A.",
  "alpha_2": "US",
  "alpha_3": "USA",
  "country": "United States",
  "latitude": "37.0902",
  "longitude": "-95.7129",
  "bank_phone": "1-877-242-7372",
  "bank_url": "www.chase.com"
}
```
