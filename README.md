# Sanketuvach-mobile

## Set up for Server (Flask)
1. Find this line of code in main.py and add the absolute path for `server/models/model.h5`:
```bash
recognizerAlpha = AlphabetsRecognizer(model_path='/home/avinash/Documents/Sanketuvach-mobile/server/models/model.h5')
```
2. Install dependencies
```bash
cd server
pip install -r requirements.txt
```
3. Run the flask server
```bash
python3 main.py
```

## Setup and run client (react-native mobile app):
1. Go to client directory:
```bash
cd client
```
2. Install dependencies:
```bash
npm install
```
3. Run the expo app:
```bash
npx expo start
```

## How to Contribute
1. Fork the repo
2. Clone the repo
```bash
git clone https://github.com/[yourusername]/Sanketuvach-mobile
```
3. Make changes and push in your forked repo
```bash
git add .
git commit -m "Your Commit Message"
git push
```
4. Make a pull request from github