## This repository is a part of a research project that contains components for a Prediction System.

- **model-ui**: A React application that serves as the user interface.
- **server-api**: A Flask application that handles the backend logic and API requests.

## Clone the Repository

To get started, clone the repository using the following command:

```bash
git clone https://github.com/AbidHasanRafi/Prediction-System.git
```

Navigate to the cloned directory:

```bash
cd Prediction-System
```

## Model UI Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Navigate to the `model-ui` folder:

   ```bash
   cd model-ui
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the React application:

   ```bash
   npm run dev
   ```

The React app should now be running on [http://localhost:5173/](http://localhost:5173/).

## Server API Setup

### Prerequisites

Make sure you have the following installed:

- [Python](https://www.python.org/downloads/) (v3.7 or later)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)

### Installation

1. Navigate to the `server-api` folder:

   ```bash
   cd ../server-api
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   ```

   Activate the virtual environment:

   - On Windows:

     ```bash
     venv\Scripts\activate.bat
     ```

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask application:

   ```bash
   python app.py
   ```

The Flask API should now be running on [http://localhost:5000](http://localhost:5000).

## Usage

You can access the React app at [http://localhost:5173](http://localhost:5173) and interact with the Flask API at [http://localhost:5000](http://localhost:5000).
