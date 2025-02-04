# Math Map for Matthayom

# Getting Started
You'll have to create MongoDB account first to run this locally.
## Installation
1. Clone the repo and navigate to the repo directory
```bash
git clone https://github.com/ppskpunpun/math-map-matthayom.git
cd math-map-matthayom
```
2. Install dependencies inside client and server folders
```bash
npm install
```
3. Create .env file inside server folder and specify required variables
```
# ex. ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.vzn12.mongodb.net/math_map_matthayom?retryWrites=true&w=majority&appName=Cluster0
ATLAS_URI=<your_mongodb_connection_string>
PORT=<connection_port>
TOKEN_KEY=<jwt_secret_key_around 32_letters_long>
```
4. Start the client and server locally (you have to run 2 servers)
```bash
npm run dev
```