
```
        [HttpGet("Address")]
        public async Task<IEnumerable<Address>> GetAddresses()
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");
            var tokenClient = new TokenClient(disco.TokenEndpoint, "test.api.client", "secret");
            var tokenResponse = await tokenClient.RequestClientCredentialsAsync("test2.api");

            Console.WriteLine(tokenResponse.TokenType);
            var httpClient = new HttpClient();
            httpClient.SetBearerToken(tokenResponse.AccessToken);
            var content = await httpClient.GetStringAsync("http://localhost:5002/api/Address");

            return JsonConvert.DeserializeObject<List<Address>>(content);
        }
        
```
