# ngrok-ipaas-example

Example of a Remote API for integration with iPaaS solutions

## How to launch this app

1. Clone this repo `https://github.com/ngrok/ngrok-ipaas-example.git`

2. Install and launch app:
    npm install
    npm run app

## How to use this sample with ngrok

1. [Download and Install ngrok](https://ngrok.com/download). 

2. [Sign Up for a free ngrok account](https://ngrok.com/signup) and get an access token

3. Add the access token to your ngrok client: `ngrok --authtoken=<your_access_token>`

4. Launch ngrok pointing to enable remote access to your sample api: `ngrok http 3000`

5. Optionally, add basic authentication to restrict access (replacing `userId` and `password` with strong credentials of your choice): `ngrok http 3000 --auth=userId:password`

