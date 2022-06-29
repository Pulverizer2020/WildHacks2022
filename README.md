# WildHacks2022 - The Gift Whisperer

The Gift Whisperer - a web app for creative gift recommendations!

Andrew Pulver - Julian Baldwin - Ryan Newkirk

# Payment via Square
Made for Square Onboarding Project. Treated the suggested items as our own products, and created a system to add items to a cart before checking them out using Square Orders API and Checkout API. 

# How to Run Website Locally

1. Download Required Software
   - Download the latest version of Node.js for your operating system: https://nodejs.org/en/download/
   - Download the latest version npm (Node Package Manager): https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
   - Download Python3: https://www.python.org/downloads/
   - Download Pip: https://pip.pypa.io/en/stable/installation/
2. Obtain OpenAI API key
   - Make a free account on OpenAI
   - Click on profile photo, and then "View API keys"
   - Copy API key and paste the following into Flask environment variable file named .env: OPENAI_API_KEY=YOUR_KEY_HERE
3. Install libraries
   - In root folder, run the following command: pip install -r requirements.txt
   - Navigate to /frontend/my-app/ folder, then run the following command: npm i
4. Server for Square API
   - In root folder, run the following command: npm run dev
   - This will run at localhost:3000
5. Start frontend and backend servers
   - In root folder, run the following command: python3 app.py
   - In a new terminal, navigate to /frontend/my-app/ folder and run the following command: npm start
   - Type "y" to confirm to run the app on another port instead
6. Open Website
   - In a web browser, navigate to the following url to view website: localhost:3001
