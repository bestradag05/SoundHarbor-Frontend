# SoundHarbor-Frontend

Welcome to the SoundHarbor frontend repository! Here you'll find the necessary steps to install and run the project in your local environment.

## Installation Steps

1. **Clone the project:**

   ```bash
   git clone https://github.com/bestradag05/SoundHarbor-Frontend

2. **Enter the project folder:**

   ```bash
   cd SoundHarbor-Frontend

3. **Install dependencies:**

   ```bash
   npm install

4. **Create app Spotify Web API:**

    
      Enter Spotify Web API and create a project where it will give you the credentials to use its API.
      For more information visit: https://developer.spotify.com/documentation/web-api

5. **Create .env file:**

     Spotify variables (You get this data when creating your app in spotify web api):  
            VITE_CLIENT_ID= # spotify ClientId   
            VITE_CLIENT_SECRET= # spotify ClienteSecret   
            VITE_REDIRECT_URI= # uri redirect   
            VITE_AUTH_ENDPOINT= # "https://accounts.spotify.com/authorize"
            VITE_RESPONSE_TYPE= # "code"
             
      Backend URL:  
            VITE_BACKEND_URL= # backend url

7. **Run the server in development mode:**

```bash
npm run dev
```
Ready! Now your SoundHarbor client is up and running in your local environment. If you have any questions or problems, feel free to open an issue in the repository. Enjoy developing with SoundHarbor!
